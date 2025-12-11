"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Briefcase, FileText, MessageSquare, Settings, LogOut, Search } from "lucide-react"
import { toast } from "sonner"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    role: "client" | "freelancer"
}

export function Sidebar({ className, role }: SidebarProps) {
    const pathname = usePathname()
    const router = useRouter()

    const routes = role === "client"
        ? [
            { href: "/dashboard/client", label: "Dashboard", icon: LayoutDashboard },
            { href: "/dashboard/client/jobs", label: "My Jobs", icon: Briefcase },
            { href: "/dashboard/client/proposals", label: "Proposals", icon: FileText },
            { href: "/dashboard/messages", label: "Messages", icon: MessageSquare },
            { href: "/dashboard/settings", label: "Settings", icon: Settings },
        ]
        : [
            { href: "/dashboard/freelancer", label: "Dashboard", icon: LayoutDashboard },
            { href: "/jobs", label: "Find Work", icon: Search },
            { href: "/dashboard/freelancer/proposals", label: "My Proposals", icon: FileText },
            { href: "/dashboard/messages", label: "Messages", icon: MessageSquare },
            { href: "/dashboard/settings", label: "Settings", icon: Settings },
        ]

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn")
        localStorage.removeItem("userName")
        localStorage.removeItem("userRole")
        toast.success("Logged out successfully")
        router.push("/")
    }

    return (
        <div className={cn("pb-12 h-screen border-r bg-muted/40", className)}>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <Link href="/">
                        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                            CreativeHub
                        </h2>
                    </Link>
                    <div className="space-y-1">
                        {routes.map((route) => (
                            <Button
                                key={route.href}
                                variant={pathname === route.href ? "secondary" : "ghost"}
                                className="w-full justify-start"
                                asChild
                            >
                                <Link href={route.href}>
                                    <route.icon className="mr-2 h-4 w-4" />
                                    {route.label}
                                </Link>
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="absolute bottom-4 left-0 w-full px-3">
                <Button
                    variant="ghost"
                    className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
                    onClick={handleLogout}
                >
                    <LogOut className="mr-2 h-4 w-4" />
                    Log Out
                </Button>
            </div>
        </div>
    )
}
