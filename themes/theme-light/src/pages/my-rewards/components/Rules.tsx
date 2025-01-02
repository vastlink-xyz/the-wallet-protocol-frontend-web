interface Task {
  title: string;
  reward: number;
  description: string;
}

const dailyTasks: Task[] = [
  {
    title: "Daily Login",
    reward: 50,
    description: "Triggered on your first login of the day"
  },
  {
    title: "Daily AI Engagement",
    reward: 100,
    description: "Triggered on your first AI interaction of the day"
  }
];

const oneTimeTasks: Task[] = [
  {
    title: "First AI Touch",
    reward: 300,
    description: "Triggered when user interacts with AI features for the first time"
  },
];

export function Rules() {
  const TaskCard = ({ task }: { task: Task }) => (
    <div className="border rounded-lg p-4">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{task.title}</span>
        <span className="text-green-500">+{task.reward} VAST</span>
      </div>
      <p className="text-sm text-gray-600">{task.description}</p>
    </div>
  );

  return (
    <div className="space-y-6 mt-6">
      {/* Daily Tasks */}
      <div>
        <h2 className="text-lg font-bold mb-3">Daily Tasks</h2>
        <div className="space-y-4">
          {dailyTasks.map((task, index) => (
            <TaskCard key={index} task={task} />
          ))}
        </div>
      </div>

      {/* One-time Tasks */}
      <div>
        <h2 className="text-lg font-bold mb-3">One-time Tasks</h2>
        <div className="space-y-4">
          {oneTimeTasks.map((task, index) => (
            <TaskCard key={index} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
}
