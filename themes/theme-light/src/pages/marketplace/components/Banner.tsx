export function Banner() {
    return (
        <div className="w-full relative rounded-[20px] overflow-hidden">
            <img 
                className="w-full h-full object-contain" 
                src="/imgs/banners/marketplace_banner_1.jpg" 
                alt="banner" 
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex-col justify-start items-center gap-5 inline-flex">
                <div className="justify-start items-center gap-2.5 inline-flex">
                    <div className="w-[9.50px] h-[9.50px] bg-white rounded-full" />
                    <div className="w-[9.50px] h-[9.50px] bg-white/50 rounded-full" />
                    <div className="w-[9.50px] h-[9.50px] bg-white/50 rounded-full" />
                </div>
                <div className="justify-center items-center gap-2.5 inline-flex">
                    <div className="h-9 px-4 py-2.5 bg-[#333333] rounded-[100px] justify-center items-center gap-2 flex">
                        <div className="text-center text-[#f2f2f2] text-sm font-medium font-['Roboto'] leading-none">Recommended bundle</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
