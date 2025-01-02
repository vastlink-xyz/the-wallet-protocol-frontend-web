import { cn } from "@/lib/utils"
import { useNavigate } from "react-router-dom";

export function Back({
  className,
  onClick
}: {
  className?: string,
  onClick?: () => void
}) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onClick) {
      onClick()
    } else {
      navigate(-1);
    }
  }

  return <div className={cn([
    'flex items-center text-black text-base font-normal leading-tight',
    'cursor-pointer',
    className,
  ])} onClick={handleBack}>
    ← Back
  </div>
}
