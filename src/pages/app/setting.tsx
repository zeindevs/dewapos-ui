
import { Link, useLocation } from "react-router-dom"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { AppLayout } from '@/components/layout'
import { ScrollArea } from "@/components/ui/scroll-area"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
  }[]
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const { pathname } = useLocation()

  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname === item.href
              ? "bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline",
            "justify-start"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/app/setting",
  },
  {
    title: "Account",
    href: "/app/setting/account",
  },
  {
    title: "Notifications",
    href: "/app/setting/notifications",
  },
  {
    title: "Display",
    href: "/app/setting/display",
  },
]

export default function Setting() {
  return <AppLayout className="p-5 space-y-6">
    <div className="space-y-0.5">
      <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
      <p className="text-muted-foreground">
        Manage your account settings and set e-mail preferences.
      </p>
    </div>
    <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
      <aside className="lg:w-1/5">
        <SidebarNav items={sidebarNavItems} />
      </aside>
      <div className="flex-1 lg:max-w-2xl"></div>
    </div>
  </AppLayout>
}
