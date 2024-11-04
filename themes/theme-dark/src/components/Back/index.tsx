import { cn } from "@/lib/utils"
import { useNavigate } from "react-router-dom";

export function Back({ className }: { className?: string }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }

  return <div className={cn([
    'flex items-center text-black text-base font-normal leading-tight',
    'cursor-pointer',
    className,
  ])} onClick={handleBack}>
    ← Back
  </div>
}
