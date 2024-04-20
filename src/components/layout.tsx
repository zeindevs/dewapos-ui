import React from 'react'
import { ScrollRestoration } from 'react-router-dom'

import AppProvider from '@/hooks/store'
import { cn } from '@/lib/utils'
import Footer from './footer'
import Navbar, { AppNavbar } from './navbar'
import Sidebar from './sidebar'
import { ScrollArea } from './ui/scroll-area'
import { Toaster } from './ui/toaster'

export default function Layout({ children, className = '' }: React.PropsWithChildren & { className?: string }) {
  return (
    <ScrollArea className={cn('h-screen', className)}>
      <Navbar />
      {children}
      <Footer />
      <Toaster />
      <ScrollRestoration />
    </ScrollArea>
  )
}

export function AppLayout({ children, className = '' }: React.PropsWithChildren & { className?: string }) {
  return (
    <AppProvider>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <ScrollArea className="h-screen flex-1">
          <AppNavbar />
          <div className={className}>{children}</div>
        </ScrollArea>
        <Toaster />
        <ScrollRestoration />
      </div>
    </AppProvider>
  )
}
