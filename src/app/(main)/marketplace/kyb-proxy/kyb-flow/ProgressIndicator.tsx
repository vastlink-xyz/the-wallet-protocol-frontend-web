import React from 'react';
import { cn } from "@/lib/utils";

interface ProgressIndicatorProps {
  steps: string[];
  currentStep: number;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ steps, currentStep }) => {
  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-col items-center flex-1">
            <div className="relative w-full">
              {/* 连接线 */}
              {index > 0 && (
                <div 
                  className={cn(
                    "absolute top-1/2 right-1/2 h-0.5 w-[calc(100%-0.75rem)] -translate-x-[0.375rem] -translate-y-1/2",
                    index <= currentStep ? "bg-primary" : "bg-primary/20"
                  )}
                />
              )}
              {/* 步骤点 */}
              <div 
                className={cn(
                  "w-3 h-3 rounded-full relative mx-auto",
                  index < currentStep
                    ? "bg-primary"
                    : index === currentStep
                    ? "bg-background border-2 border-primary"
                    : "bg-primary/20"
                )}
              />
            </div>
            {/* 步骤文字 */}
            <span 
              className={cn(
                "mt-2 text-xs font-medium text-center",
                index <= currentStep ? "text-primary" : "text-primary/40"
              )}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
