import { Banknote, BarChart, Box, LayoutDashboard, Percent, Settings, ShoppingCart, Truck, Users } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'

import { useAppContext } from '@/hooks/store'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { ScrollArea } from './ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

const menus = [
  {
    title: 'General',
    items: [
      {
        title: 'Dashboard',
        path: '/app',
        icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
      },
      {
        title: 'POS',
        path: '/app/pos',
        icon: <ShoppingCart className="mr-2 h-4 w-4" />,
      },
    ],
  },
  {
    title: 'Store',
    items: [
      {
        title: 'Transaction',
        path: '/app/transaction',
        icon: <Truck className="mr-2 h-4 w-4" />,
      },
      {
        title: 'Product',
        path: '/app/product',
        icon: <Box className="mr-2 h-4 w-4" />,
      },
      {
        title: 'Payment',
        path: '/app/payment',
        icon: <Banknote className="mr-2 h-4 w-4" />,
      },
      {
        title: 'Offer',
        path: '/app/offer',
        icon: <Percent className="mr-2 h-4 w-4" />,
      },
    ],
  },
  {
    title: 'Other',
    items: [
      {
        title: 'Customer',
        path: '/app/customer',
        icon: <Users className="mr-2 h-4 w-4" />,
      },
      {
        title: 'Report',
        path: '/app/report',
        icon: <BarChart className="mr-2 h-4 w-4" />,
      },
      {
        title: 'Setting',
        path: '/app/setting',
        icon: <Settings className="mr-2 h-4 w-4" />,
      },
    ],
  },
]

export default function Sidebar({ show }: { show?: boolean }) {
  const { pathname } = useLocation()
  const { sidebar } = useAppContext()

  return (
    <div
      className={cn(
        'relative min-w-56 flex-col border-r ',
        show ? 'flex h-screen' : sidebar ? 'hidden md:flex' : 'hidden',
      )}
    >
      <div className="absolute top-0 flex items-center justify-between px-5 py-3">
        <Link to="/app" className="text-2xl font-medium">
          Dewa<span className="font-bold text-primary">POS</span>
        </Link>
      </div>
      <div className="py-8"></div>
      <ScrollArea className="h-screen">
        <div className="flex flex-1 flex-col gap-2 p-3">
          {menus.map((menu, i) => (
            <div key={i} className='flex flex-col gap-2'>
              <p className="text-xs font-medium text-muted-foreground">{menu.title}</p>
              {menu.items.map((item, key) => (
                <NavLink key={key} to={item.path}>
                  {({ isActive }) => (
                    <Button
                      variant={isActive && pathname === item.path ? 'default' : 'ghost'}
                      className="w-full justify-start text-left"
                    >
                      {item.icon} {item.title}
                    </Button>
                  )}
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

export function SidebarSheet({ children, className }: React.PropsWithChildren & { className?: string }) {
  return (
    <div className={className}>
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent side="left" className="flex w-56 flex-col border-none p-0">
          <Sidebar show={true} />
        </SheetContent>
      </Sheet>
    </div>
  )
}
