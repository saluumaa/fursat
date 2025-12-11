"use client"

import { Sidebar } from "@/components/shared/sidebar"
import { DashboardHeader } from "@/components/shared/dashboard-header"
import { usePathname } from "next/navigation"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    // Simple check for role based on URL for now. 
    // In real app, this should come from Auth Session
    const role = pathname.includes("client") ? "client" : "freelancer"

    return (
        <div className="flex min-h-screen flex-col md:flex-row">
            <div className="hidden md:block w-64 flex-shrink-0">
                <Sidebar role={role} className="fixed w-64" />
            </div>
            <div className="flex flex-col flex-1 md:ml-0">
                <DashboardHeader role={role} />
                <main className="flex-1 p-8 pt-6">
                    {children}
                </main>
            </div>
        </div>
    )
}
