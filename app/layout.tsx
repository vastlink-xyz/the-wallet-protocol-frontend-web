import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { setRouter } from '@/lib/api';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  setRouter(router);

  return (
    <html lang="en">
      <body>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}