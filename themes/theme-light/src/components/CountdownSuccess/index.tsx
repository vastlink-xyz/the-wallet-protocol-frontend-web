import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function CountdownSuccess({
  title,
  buttonText,
  redirectUrl,
  description,
}: {
  title: string;
  buttonText: string;
  redirectUrl: string;
  description: string;
}) {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      navigate(redirectUrl);
    }
  }, [countdown, navigate]);

  return <>
    <div className="mt-[48px] mb-[27px] text-center text-black text-[28px] font-bold leading-[36.96px]">
      {title}
    </div>

    <div className="h-4 flex justify-center items-center">
      <p className="text-center">
        <span className="text-[#979797] text-sm font-medium font-['Roboto'] leading-none">{description}</span>
        <span className="text-black text-sm font-medium font-['Roboto'] leading-none"> {countdown} s </span>
      </p>
    </div>

    <div className={cn([
      'tablet:w-[548px] w-[334px]',
      'tablet:px-4 px-0',
      'mt-[56px] mx-auto',
      'flex flex-col items-center'
    ])}>
      <img src="/imgs/icons/success_added.png" alt="success" />
      <Button
        className="w-full mt-[46px]"
        onClick={() => navigate(redirectUrl)}
      >
        {buttonText}
      </Button>
    </div>
  </>;
}
