import { Link, NavLink } from 'react-router-dom'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { ModeToggle } from './mode-toggle'
import { cn } from '@/lib/utils'

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
                <NavLink to={`/login`}>{({ isActive }) => <span className={navManuStyles(isActive)}>Login</span>}</NavLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}
