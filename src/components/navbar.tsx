import { Bell, Menu, MessageCircle } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { useAppContext } from '@/hooks/store'
import { cn } from '@/lib/utils'
import { ModeToggle } from './mode-toggle'
import { SidebarSheet } from './sidebar'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

const navManuStyles = (active?: boolean) =>
  cn(
    navigationMenuTriggerStyle(),
    'relative after:absolute after:bottom-0 after:duration-500 hover:after:w-[80%] after:border-b-2 after:border-primary',
    active ? 'after:w-[80%]' : 'after:w-0',
  )

export default function Navbar() {
  return (
    <div className="sticky top-0 z-10 border-b bg-background">
      <div className="container flex max-w-7xl items-center justify-between gap-3 px-5 py-2">
        <Link to="/" className="text-2xl font-medium">
          Dewa<span className="font-bold text-primary">POS</span>
        </Link>
        <div className="flex items-center gap-5">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavLink to={`/app`}>
                  {({ isActive }) => <span className={navManuStyles(isActive)}>Dashboard</span>}
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink to={`/login`}>
                  {({ isActive }) => <span className={navManuStyles(isActive)}>Login</span>}
                </NavLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}

export function AppNavbar() {
  const { sidebar, setSidebar } = useAppContext()

  return (
    <div className="sticky top-0 z-10 border-b bg-background">
      <div className="flex items-center justify-between gap-3 px-3 py-2 md:pr-5">
        <div className="flex items-center gap-2">
          <SidebarSheet className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SidebarSheet>
          <Button variant="ghost" size="icon" className="hidden md:flex" onClick={() => setSidebar(!sidebar)}>
            <Menu className="h-6 w-6" />
          </Button>
          <Link to="/app" className={cn('text-2xl font-medium', sidebar && 'md:hidden')}>
            Dewa<span className="font-bold text-primary">POS</span>
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuItem className="justify-center text-center text-sm">
                    Message not available
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Bell className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuItem className="justify-center text-center text-sm">
                    Notification not available
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <ModeToggle />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="md:hidden">Notification</DropdownMenuItem>
              <DropdownMenuItem className="md:hidden">Message</DropdownMenuItem>
              <DropdownMenuSeparator className="md:hidden" />
              <DropdownMenuItem>
                <Link to={`/`}>Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}
