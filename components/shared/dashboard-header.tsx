"use client"

import { AlignJustify } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Sidebar } from "./sidebar"
import { ThemeToggle } from "@/components/theme-toggle"
import { UserAvatar } from "./user-avatar"
// import { UserNav } from "./user-nav" // Placeholder

interface DashboardHeaderProps {
    role: "client" | "freelancer"
}

export function DashboardHeader({ role }: DashboardHeaderProps) {
    return (
        <div className="flex items-center justify-between px-4 py-3 border-b md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon">
                        <AlignJustify className="h-4 w-4" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 w-64">
                    <Sidebar role={role} className="border-none w-full" />
                </SheetContent>
            </Sheet>

            <div className="flex items-center gap-2">
                <ThemeToggle />
                <UserAvatar name="Test User" className="h-8 w-8" />
            </div>
        </div>
    )
}
