import { Header } from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Phonlapat | Personal Port',
  description: 'Rocket is a Junior Back-end Dev with 1 years of experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-200 text-gray-950
      relative h-[5000px] pt-28 sm:pt-36`}>{/* Background Color */}
          <div className='bg-[#e2fbe6] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>{/* right green circle */}
          <div className='bg-[#dbd7fd] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]
          md:left[-33rem] lg:left-[-28rem] xl:left=[-15rem] 2xl:left-[-5rem]'></div>{/* left blue circle */}

         <Header/>
        {children}
        </body>
    </html>
  );
}
