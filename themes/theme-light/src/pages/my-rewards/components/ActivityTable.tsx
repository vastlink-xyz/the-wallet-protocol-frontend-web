import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination } from "@/components/Pagination";
import { useEffect, useState } from "react";
import { cn, handleError, log } from "@/lib/utils";
import { DEFAULT_PAGE_SIZE, usePagination } from "@/components/Pagination/usePagination";
import api from "@/lib/api";
import { IUserActivity } from "../types";
import { toast } from "react-toastify";

export function ActivityTable() {
  const {
    pagination,
    handlePageChange,
    updateTotal,
    updatePageSize,
  } = usePagination();
  const [activities, setActivities] = useState<IUserActivity[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchActivities({
      page: pagination.current,
      pageSize: pagination.pageSize,
    });
  }, []);

  const fetchActivities = async ({
    page,
    pageSize,
  }: {
    page: number;
    pageSize: number;
  }) => {
    try {
      setLoading(true);
      const res = await api.get('/reward/activity-list', {
        params: {
          page,
          pageSize,
        }
      });
      setActivities(res.data.items);
      updateTotal(res.data.total);
    } catch (err) {
      const errorInfo = handleError(err);
      toast.error(errorInfo.message);
    } finally {
      setLoading(false);
    }
  }

  const onPageChange = (page: number) => {
    handlePageChange(page);
    fetchActivities({
      page,
      pageSize: pagination.pageSize,
    });
  }

  return (
    <div>
      <Table className={cn(loading && "opacity-50")}>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {activities.map((activity) => (
            <TableRow key={activity._id} className="hover:bg-transparent">
              <TableCell>{activity.activityType}</TableCell>
              <TableCell>{activity.status}</TableCell>
              <TableCell>{new Date(activity.createdAt).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className='mt-[80px] text-center'>
          <Pagination
            {...pagination}
            onChange={onPageChange}
          />
        </div>
    </div>
  );
}