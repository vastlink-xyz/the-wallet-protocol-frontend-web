import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IProduct } from "@/pages/marketplace/types";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function Success({ product }: { product: IProduct | null }) {
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
      navigate('/marketplace');
    }
  }, [countdown, navigate]);

  return <>
    <div className="mt-[48px] mb-[27px] text-center text-black text-[28px] font-bold leading-[36.96px]">
      {product?.name} added successfully
    </div>

    <div className="h-4 flex justify-center items-center">
      <p className="text-center">
        <span className="text-[#979797] text-sm font-medium font-['Roboto'] leading-none">You can find the purchased product under the "Added" tab in the Marketplace. You will be directed to Marketplace in</span>
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
        onClick={() => navigate('/marketplace')}
      >
        Back to Marketplace
      </Button>
    </div>
  </>;
}
