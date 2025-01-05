import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination } from "@/components/Pagination";
import { useEffect, useState } from "react";
import { cn, handleError, log } from "@/lib/utils";
import { DEFAULT_PAGE_SIZE, usePagination } from "@/components/Pagination/usePagination";
import api from "@/lib/api";
import { IRewardRequest } from "../types";
import { toast } from "react-toastify";

export function RewardHistory() {
  const {
    pagination,
    handlePageChange,
    updateTotal,
    updatePageSize,
  } = usePagination();
  const [rewards, setRewards] = useState<IRewardRequest[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchRewards({
      page: pagination.current,
      pageSize: pagination.pageSize,
    });
  }, []);

  const fetchRewards = async ({
    page,
    pageSize,
  }: {
    page: number;
    pageSize: number;
  }) => {
    try {
      setLoading(true);
      const res = await api.get('/reward/reward-list', {
        params: {
          status: 'FULFILLED',
          page,
          pageSize,
        }
      });
      log('res', res)
      setRewards(res.data.items);
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
    fetchRewards({
      page,
      pageSize: pagination.pageSize,
    });
  }

  return (
    <div>
      <h2 className="text-xl font-bold mt-12 mb-2">Reward History</h2>
      <Table className={cn(
        loading && "opacity-50",
      )}>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>Name</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead>Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rewards.map((reward) => (
            <TableRow key={reward._id} className="hover:bg-transparent">
              <TableCell>{reward.displayName}</TableCell>
              <TableCell className="text-right text-green-500">+ {reward.amount} VAST</TableCell>
              <TableCell>{new Date(reward.createdAt).toLocaleString()}</TableCell>
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