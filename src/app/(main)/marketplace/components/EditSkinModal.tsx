'use client'

import axios from 'axios'
import { FormEvent, useEffect, useState } from "react"
import { auth, cn, customSkinStorage, generateForegroundColor, hexToHsl, log, makeAuthenticatedApiRequest, ThemeColors, themeElements, updateTheme } from "@/lib/utils"
import { HexColorPicker } from "react-colorful"

import { Button } from "@/components/ui/button"
import { LogoLoading } from '@/components/LogoLoading'
import { Input } from '@/components/ui/input'
import { CloudinaryUpload } from '@/components/CloudinaryUpload'
import { Modal } from '@/components/Modal'
import { Divide, Upload, X } from 'lucide-react'
import { toast } from 'react-toastify'
import { useUserSkin } from '@/providers/UserSkinProvider'

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

  const { setCurrentTheme } = useUserSkin()

  useEffect(() => {
    if (isOpen) {
      init()
    }
  }, [isOpen])

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
    log('saved theme colors', saveThemeColors)
    setColorTheme(saveThemeColors)
  }, [themeColors])

  const init = async () => {
    const {
      authenticatedHeader,
      desUsername,
    } = auth.all()
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_WALLET_PROTOCAL_API_BASEURL}/marketplace/product/customskin`, {
        headers: {
          "Content-Type": "application/json",
          "X-Encrypted-Key": `${authenticatedHeader["X-Encrypted-Key" as keyof typeof authenticatedHeader]}`,
          "X-Scope-Id": `${authenticatedHeader["X-Scope-Id" as keyof typeof authenticatedHeader]}`,
          "X-Encrypted-User": `${authenticatedHeader["X-Encrypted-User" as keyof typeof authenticatedHeader]}`,
          "X-Encrypted-Session": `${authenticatedHeader["X-Encrypted-Session" as keyof typeof authenticatedHeader]}`,
          "X-Passport-Username": `${desUsername.username}`,
        },
      })
      log('res is', res.data)
      if (res.data) {
        setName(res.data.name)
        setLogo(res.data.logo)
        setColorTheme(res.data.name)
      }
    } catch(err) {
      const message = (err as any).response.data
      if (message) {
        // toast.error(message)
      }
    }
  }

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
      updateTheme(colorTheme)
      setCurrentTheme('custom')
      customSkinStorage.setData('true')
      onClose(false)
      window.location.reload()
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

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => handleClose(false)}
    >
      <form>
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
          {
            isOpen && (
              <CloudinaryUpload
                onSuccess={(url) => {
                  if (url) {
                    setLogo(url)
                  }
                }}
                initialImage={logo}
              />
            )
          }
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
