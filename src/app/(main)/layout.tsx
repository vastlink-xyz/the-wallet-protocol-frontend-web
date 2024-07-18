import { Header } from "@/components/Header"
import { House, Coins, NotebookText } from "lucide-react"
import Link from "next/link"

export default function MainLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col flex-grow">
      <Header />

      <div className="flex-grow flex">
        {/* sidebar */}
        <ul className="w-[200px] text-sm border-r p-6">
          <li>
            <Link href={'/home'} className="flex items-center my-4">
              <House className="mr-2" size={18} strokeWidth={3} />
              Home
            </Link>
          </li>
          <li>
            <Link href={'/transactions'} className="flex items-center my-4 text-gray-500">
              <NotebookText className="mr-2" size={18} color='gray' />
              Transactions
            </Link>
          </li>
          <li>
            <Link href={'/tokens'} className="flex items-center my-4 text-gray-500">
              <Coins className="mr-2" size={18} color="gray" />
              Tokens
            </Link>
          </li>
        </ul>

        <div className="flex-grow p-6">
          {children}
        </div>
      </div>
    </section>
  )
}