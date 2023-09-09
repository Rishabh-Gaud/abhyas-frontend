// 'use client';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import WrapperFile from '@/app/WrapperFile'
// import { ToastContainer } from 'react-toastify';
// import { RecoilRoot } from "recoil";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Uchhal',
  description: 'Platform that wings to you to fly',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <RecoilRoot>
    <WrapperFile>
      <html lang="en">
        <body className={inter.className}>
          {/* <ToastContainer /> */}
          {children}
          </body>
      </html></WrapperFile>
    //  </RecoilRoot>
  )
}
