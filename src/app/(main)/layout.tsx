'use client'

import axios from 'axios'
import { useEffect } from "react"
import { auth, log } from "@/lib/utils"

import { Header } from "@/components/Header"
import { SideBar } from "@/components/SideBar"
import { ThemeProvider } from "@/providers/ThemeProvider"
import { useTheme } from 'next-themes'

export default function MainLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const { setTheme } = useTheme()

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const purchasedProducts = await getPurchasedProducts()
    const themeProduct = purchasedProducts.find((p: any) => p.integrationPoints.includes('theme') && p.status === 'active')
    if (themeProduct) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  const getPurchasedProducts = async () => {
    const {
      authenticatedHeader,
      desUsername,
    } = auth.all()
    const res = await axios.get(`${process.env.NEXT_PUBLIC_WALLET_PROTOCAL_API_BASEURL}/user/purchasedProducts`, {
      headers: {
        "Content-Type": "application/json",
        "X-Encrypted-Key": `${authenticatedHeader["X-Encrypted-Key" as keyof typeof authenticatedHeader]}`,
        "X-Scope-Id": `${authenticatedHeader["X-Scope-Id" as keyof typeof authenticatedHeader]}`,
        "X-Encrypted-User": `${authenticatedHeader["X-Encrypted-User" as keyof typeof authenticatedHeader]}`,
        "X-Encrypted-Session": `${authenticatedHeader["X-Encrypted-Session" as keyof typeof authenticatedHeader]}`,
        "X-Passport-Username": `${desUsername.username}`,
      },
    })
    return res.data
  }

  return (
    <section className="flex flex-col flex-grow bg-background">
      <Header />

      <div className="md:flex-grow md:flex">
        <SideBar />

        <div className="flex-grow p-6 md:border-l border-border">
          {children}
        </div>
      </div>
    </section>
  )
}
