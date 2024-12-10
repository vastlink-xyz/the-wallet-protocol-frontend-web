import { useEffect, useState } from "react"
import { useTranslation } from 'react-i18next'
import { cn, languageStorage } from "@/lib/utils"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { createPortal } from 'react-dom';

export function LanguageSwitch({
  onLanguageChange
}: {
  onLanguageChange?: () => void;
}) {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const savedLng = languageStorage.getData()
    if (savedLng) {
      i18n.changeLanguage(savedLng)
    }
  }, [i18n])

  const handleChange = (lng: string) => {
    i18n.changeLanguage(lng)
    languageStorage.setData(lng)
    setIsOpen(false)
    onLanguageChange?.()
  }

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-['Roboto']">

      {/* background */}
      <div className="fixed inset-0 bg-[#1f2533]/40"></div>

      {/* desktop modal */}
      <div className={cn(
        'hidden tablet:block',
        "relative z-50 w-[600px]",
      )}>
        <div className="bg-background text-primary rounded-[6px] w-full">
          <header className="flex justify-between items-center px-5 py-[14px] border-b border-[#EBEBEB]">
            <p className="text-black text-lg font-medium font-['Roboto'] leading-normal">Choose your language</p>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#929292] hover:text-[#929292]/80"
            >
              <X />
            </button>
          </header>

          <div className="p-6 border-b border-[#EBEBEB] flex justify-center gap-[82px]">
            <div
              onClick={() => handleChange('en')}
              className={cn(
                "text-sm font-normal leading-snug cursor-pointer py-1 flex items-center gap-1",
                i18n.language === 'en' ? "text-brand-foreground" : "text-black/90"
              )}
            >
              English
              {i18n.language === 'en' && <img src="/imgs/icons/checked.svg" alt="" />}
            </div>
            <div
              onClick={() => handleChange('zh')}
              className={cn(
                "text-sm font-normal leading-snug cursor-pointer py-1 flex items-center gap-1",
                i18n.language === 'zh' ? "text-brand-foreground" : "text-black/90"
              )}
            >
              简体中文
              {i18n.language === 'zh' && <img src="/imgs/icons/checked.svg" alt="" />}
            </div>
          </div>

          <footer className="flex justify-end items-center gap-2 px-5 py-[30px]">

          </footer>
        </div>
      </div>

      {/* mobile modal */}
      <div className={cn(
        'block tablet:hidden',
        "relative z-50 w-[280px]",
      )}>
        <div className="bg-background text-primary rounded-[6px] w-full">
          <div className="px-6 py-7 border-b border-[#EBEBEB]">
            <p className="text-black text-lg font-bold font-['Roboto'] leading-normal mb-2">Choose your language</p>
            {/* language list */}
            <div className="flex flex-col gap-4">
              <div
                onClick={() => handleChange('en')}
                className={cn(
                  "text-sm font-normal leading-snug cursor-pointer py-1 flex items-center gap-1",
                  i18n.language === 'en' ? "text-brand-foreground" : "text-black/90"
                )}
              >
                English
                {i18n.language === 'en' && <img src="/imgs/icons/checked.svg" alt="" />}
              </div>
              <div
                onClick={() => handleChange('zh')}
                className={cn(
                  "text-sm font-normal leading-snug cursor-pointer py-1 flex items-center gap-1",
                  i18n.language === 'zh' ? "text-brand-foreground" : "text-black/90"
                )}
              >
                简体中文
                {i18n.language === 'zh' && <img src="/imgs/icons/checked.svg" alt="" />}
              </div>
            </div>
          </div>

          <footer className="">
            <Button
              variant="ghost"
              className={cn(
                "w-full text-[15px] rounded-none",
                "hover:bg-black/5"
              )}
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
          </footer>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Trigger buttons */}
      <div className="relative">
        {/* desktop */}
        <img
          className={cn(
            'w-[24px] h-[24px] cursor-pointer',
            'hidden tablet:flex'
          )}
          src="/imgs/icons/language.svg"
          onClick={() => setIsOpen(true)}
        />

        {/* mobile */}
        <div 
          className="flex tablet:hidden cursor-pointer" 
          onClick={() => setIsOpen(true)}
        >
          Language
        </div>
      </div>

      {/* Modal Portal */}
      {isOpen && createPortal(
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center font-['Roboto']"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          {/* Rest of your modal content */}
          {modalContent}
        </div>,
        document.body  // mount to body to avoid layout shift
      )}
    </>
  )
}
