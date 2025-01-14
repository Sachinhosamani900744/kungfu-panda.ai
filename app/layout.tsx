import type { Metadata } from "next"
import { Inter } from "next/font/google"
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { CrispProvider } from "@/components/crisp-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI Insight Hub",
  description: "AI Saas Plateform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <CrispProvider/>
      <body className={inter.className}>{children}</body>
    </html></ClerkProvider>
  )
}
