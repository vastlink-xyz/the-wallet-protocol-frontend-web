'use client'

import axios from 'axios'
import { FormEvent, useEffect, useState } from "react"
import { auth, cn, generateForegroundColor, hexToHsl, log, makeAuthenticatedApiRequest, ThemeColors, themeElements, updateTheme } from "@/lib/utils"
import { HexColorPicker } from "react-colorful"

import { Button } from "@/components/ui/button"
import { LogoLoading } from '@/components/LogoLoading'
import { Input } from '@/components/ui/input'
import { CloudinaryUpload } from '@/components/CloudinaryUpload'
import { Modal } from '@/components/Modal'
import { Divide, Upload, X } from 'lucide-react'
import { toast } from 'react-toastify'

export function EditSkinModal({
  isOpen,
  product,
  onClose,
  balance,
}: {
  isOpen: boolean;
  product: any;
  onClose: (isSave: boolean) => void;
  balance: string;
}) {
  const [name, setName] = useState('')
  const [logo, setLogo] = useState('')
  const [colorTheme, setColorTheme] = useState<ThemeColors>({})
  const [themeColors, setThemeColors] = useState<Record<string, string>>({})
  const [activeColorPicker, setActiveColorPicker] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const colors = Object.entries(themeColors)
    const foregroundColors = colors.map(([name, value]) => [
      `${name}-foreground`,
      generateForegroundColor(value),
    ])
    const themeColorList = [
      ...colors,
      ...foregroundColors,
    ]
    const saveThemeColors: ThemeColors = {}
    themeColorList.forEach(([name, value]) => {
      // saveThemeColors[name] = hexToHsl(value);
      saveThemeColors[name] = value
    });
    log('themecolorlist', saveThemeColors)
    setColorTheme(saveThemeColors)
  }, [themeColors])

  const handleSave = async (event: FormEvent) => {
    event.preventDefault()
    const saveData = {
      name,
      logo,
      colorTheme,
    }
    setLoading(true)
    try {
      await makeAuthenticatedApiRequest({
        path: 'marketplace/product/customskin/save',
        data: saveData,
      })
      toast.success('Save successfully.')
    } catch(err) {
      log('err', err)
    } finally {
      setLoading(false)
    }
  }

  const handleClose = (isSave: boolean) => {
    onClose(isSave)
  }

  const handleColorChange = (element: string, color: string) => {
    setThemeColors(prev => ({ ...prev, [element]: color }))
  }

  const test = () => {
    log('haha', colorTheme)
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => handleClose(false)}
    >
      <button onClick={() => test()}>test</button>

      <form onSubmit={(e) => handleSave(e)}>
        <div className="mb-8">
          <label htmlFor="name" className="block mb-2 font-medium text-lg">Name</label>
          <Input
            value={name}
            onChange={e => setName(e.target.value)}
            id="name"
            required
          />
        </div>

        <div className="mb-10">
          <label htmlFor="name" className="block mb-2 font-medium text-lg">Logo</label>
          <CloudinaryUpload
            onSuccess={(url) => {
              if (url) {
                setLogo(url)
              }
            }}
            initialImage={logo}
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-medium text-lg">Theme Colors</label>
          {themeElements.map((element) => (
            <div key={element} className="flex items-center text-sm mt-2 relative">
              <label htmlFor={`color-${element}`} className="w-24">{element}</label>
              <div
                className="w-8 h-8 cursor-pointer border border-gray-300"
                style={{ backgroundColor: themeColors[element] || '#ffffff' }}
                onClick={() => setActiveColorPicker(element)}
              />
              <Input
                type="text"
                value={themeColors[element] || ''}
                onChange={(e) => handleColorChange(element, e.target.value)}
                className="ml-2 w-24"
                placeholder={`#RRGGBB`}
              />
              {activeColorPicker === element && (
                <div className="absolute z-10 bottom-10">
                  <div className='relative'>
                    <HexColorPicker
                      color={themeColors[element] || '#ffffff'}
                      onChange={(color) => handleColorChange(element, color)}
                    />
                    <div
                      className="text-sm absolute -right-6 top-0 cursor-pointer"
                      onClick={() => setActiveColorPicker(null)}
                    >
                      <X />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <Button
          className={cn('w-full')}
          disabled={!name || !logo || Object.keys(colorTheme).length <= 0 || loading}
          onClick={(e) => handleSave(e)}
        >
          {loading ? (
            <div className="">
              <LogoLoading />
            </div>
          ) : (
            <span>Save</span>
          )}
        </Button>
      </form>
    </Modal>
  )
}
