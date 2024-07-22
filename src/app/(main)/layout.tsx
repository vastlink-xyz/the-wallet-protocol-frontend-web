import { Header } from "@/components/Header"
import { SideBar } from "@/components/SideBar"

export default function MainLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col flex-grow">
      <Header />

      <div className="md:flex-grow md:flex">
        <SideBar />

        <div className="flex-grow p-6 md:border-l">
          {children}
        </div>
      </div>
    </section>
  )
}