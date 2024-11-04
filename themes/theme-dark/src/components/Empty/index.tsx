export function Empty({ 
  text,
  imgSrc = "/imgs/icons/empty.png",
  className
}: { 
  text?: string;
  imgSrc?: string;
  className?: string;
}) {
  return <div className={`flex flex-col items-center justify-center ${className || ''}`}>
    <img className="w-[186px]" src={imgSrc} alt="empty" />
    {text && <div className="tablet:w-[509px] w-[346px] text-center text-[#979797] text-sm font-medium font-['Roboto'] leading-none mt-8">{text}</div>}
  </div>
}
