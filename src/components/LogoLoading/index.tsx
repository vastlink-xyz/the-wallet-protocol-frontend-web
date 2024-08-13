'use client'

import { useThemeLogoPath } from "@/hooks/useThemeLogoPath";
import { auth, cn } from "@/lib/utils";
import { useUserSkin } from "@/providers/UserSkinProvider";

export function LogoLoading({ size = 32, className, type = 'spin' }: {
  size?: number;
  className?: string;
  type?: 'breathe' | 'spin';
}) {
  const { logoPath } = useThemeLogoPath()
  const { customLogo, customName } = useUserSkin()

  const renderSpin = () => (
    <div className={cn(
      'text-brand-foreground',
      className,
    )}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="xMidYMid" 
        width={size} 
        height={size} 
        className="shape-rendering-auto block"
      >
        <g>
          <circle 
            strokeLinecap="round" 
            fill="none" 
            strokeDasharray="50.26548245743669 50.26548245743669" 
            stroke="currentColor" 
            strokeWidth="8" 
            r="32" 
            cy="50" 
            cx="50"
          >
            <animateTransform 
              values="0 50 50;360 50 50" 
              keyTimes="0;1" 
              dur="1s" 
              repeatCount="indefinite" 
              type="rotate" 
              attributeName="transform"
            />
          </circle>
        </g>
      </svg>
    </div>
  )

  const renderLogo = () => {
    const {
      desUsername,
    } = auth.all()
    const letter = desUsername.username.length > 0 ? desUsername.username[0] : ''

    return (
      <div className="flex items-center justify-center">
        {
          (customName && !customLogo) ? (
            <div
              className={cn(
                'bg-primary text-primary-foreground rounded-full flex items-center justify-center',
                'animate-[breathe_2s_cubic-bezier(0.4,0,0.6,1)_infinite]',
                `w-[${size}px] h-[${size}px]`,
              )}
            >
              <div className={cn(
                'flex items-center justify-center',
              )}>
                {letter}
              </div>
            </div>
          ) : (
            <img
              src={ customLogo ? customLogo : logoPath}
              alt="Loading"
              className={cn(
                'animate-[breathe_2s_cubic-bezier(0.4,0,0.6,1)_infinite]',
              )}
              width={size}
              height={size}
            />
          )
        }
        <style jsx>{`
          @keyframes breathe {
            0%, 100% {
              opacity: 0.2;
              transform: scale(0.9);
            }
            20% {
              opacity: 1;
              transform: scale(1.1);
            }
            30% {
              opacity: 0.9;
              transform: scale(1.05);
            }
            50% {
              opacity: 0.5;
              transform: scale(0.95);
            }
            70% {
              opacity: 0.8;
              transform: scale(1.03);
            }
          }
        `}</style>

      </div>
    );
  }
  

  return type === 'breathe' ? renderLogo() : renderSpin()
}
