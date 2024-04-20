import React from 'react'
import { ScrollRestoration } from 'react-router-dom'

import { Toaster } from './ui/toaster'

import Footer from './footer'
import Navbar from './navbar'

export default function Layout({ children, className = '' }: React.PropsWithChildren & { className?: string }) {
  return (
    <div className={className}>
      <Navbar />
      {children}
      <Footer />
      <Toaster />
      <ScrollRestoration />
    </div>
  )
}
