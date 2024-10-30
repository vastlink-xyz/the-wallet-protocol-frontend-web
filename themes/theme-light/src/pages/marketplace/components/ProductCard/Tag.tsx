

export type TagVariant = 'featured' | 'free';

export interface TagProps {
  variant: TagVariant;
}

export function Tag({ variant }: TagProps) {
  const variants = {
    featured: {
      bgColor: 'bg-[#ffebc1]',
      text: 'Featured',
      width: 'w-[51px]',
      textAlign: 'text-right',
      showIcon: true
    },
    free: {
      bgColor: 'bg-[#73d742]',
      text: 'Free',
      width: 'w-[25px]',
      textAlign: 'text-center',
      showIcon: false
    }
  };

  const { bgColor, text, width, textAlign, showIcon } = variants[variant];

  return (
    <div className={`absolute right-0 top-0 -translate-y-[50%] ${bgColor} h-[40px] px-[20px] rounded-l-[20px]`}>
      <div className='w-full h-[20px]'></div>
      <div className='flex justify-center items-center h-[22px]'>
        {showIcon && <img className='w-[12px]' src="/imgs/icons/fire.svg" alt="fire" />}
        <div className={`${width} ${textAlign} text-black text-xs font-medium leading-none`}>{text}</div>
      </div>
    </div>
  );
}
