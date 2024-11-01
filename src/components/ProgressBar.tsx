import { cn } from "@/lib/utils";

interface ProgressBarProps {
  isLoading?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ isLoading }) => {
  return (
    <div 
      className={cn(
        "fixed top-0 left-0 h-1 bg-primary transition-all duration-300",
        isLoading ? "w-full" : "w-0"
      )}
      style={{
        zIndex: 9999,
      }}
    />
  );
};

