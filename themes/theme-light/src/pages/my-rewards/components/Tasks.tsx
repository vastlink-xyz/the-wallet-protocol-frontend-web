import api from "@/lib/api";
import { log } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RewardActionType } from "../types";
import { taskActions } from "../taskActions";

interface Task {
  id: RewardActionType;
  displayName: string;
  reward: number;
  description: string;
  isCompleted: boolean;
}

export function Tasks() {
  const [dailyTasks, setDailyTasks] = useState<Task[]>([])
  const [oneTimeTasks, setOneTimeTasks] = useState<Task[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const res = await api.get('/reward/user-completed-tasks')
    setDailyTasks(res.data.dailyTasks)
    setOneTimeTasks(res.data.oneTimeTasks)
  }

  const handleAction = (action: RewardActionType) => {
    const taskAction = taskActions[action]
    if (!taskAction) return
    if (taskAction.path) {
      navigate(taskAction.path)
    } else {
      taskAction.handler?.()
    }
  }

  const TaskCard = ({ task }: { task: Task }) => (
    <div className="bg-gray-100 rounded-lg p-4 mb-4">
      <div className="flex gap-4">
        <div className="flex-1">
          <span className="font-medium text-gray-900 mb-2">{task.displayName}</span>
          <p className="text-sm text-gray-600 mb-2">{task.description}</p>
        </div>
        <div className="flex justify-between items-center gap-2">
          <span className="text-green-500 font-medium">+{task.reward} VAST</span>
          {task.isCompleted ? (
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
              <CheckIcon className="w-5 h-5 text-green-500" />
            </div>
          ) : (
            <button
              onClick={() => handleAction(task.id)}
              className="px-4 py-1 rounded-full bg-blue-100 text-blue-500 text-sm font-medium hover:bg-blue-200"
            >
              GO
            </button>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <div>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Daily Tasks</h2>
        <div>
          {dailyTasks.map((task, index) => (
            <TaskCard key={index} task={task} />
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">One-time Tasks</h2>
        <div>
          {oneTimeTasks.map((task, index) => (
            <TaskCard key={index} task={task} />
          ))}
        </div>
      </div>
    </div>
  )
}
