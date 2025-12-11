"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

export default function SignUpPage() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [role, setRole] = useState<"CLIENT" | "FREELANCER">("CLIENT")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate registration - in production, this would call NextAuth
        await new Promise((resolve) => setTimeout(resolve, 1000))

        toast.success("Account created successfully!")

        // Store role in localStorage for demo purposes
        localStorage.setItem("userRole", role)
        localStorage.setItem("isLoggedIn", "true")
        localStorage.setItem("userName", (e.target as HTMLFormElement).fullName.value)

        // Redirect based on role
        if (role === "CLIENT") {
            router.push("/dashboard/client")
        } else {
            router.push("/dashboard/freelancer")
        }

        setIsLoading(false)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-purple-500/5 p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold">Create Account</CardTitle>
                    <CardDescription>Join CreativeHub today</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="fullName">Full Name</Label>
                            <Input id="fullName" name="fullName" placeholder="John Doe" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" name="password" type="password" placeholder="••••••••" required />
                        </div>
                        <div className="space-y-2">
                            <Label>I want to</Label>
                            <div className="grid grid-cols-2 gap-4">
                                <Button
                                    type="button"
                                    variant={role === "CLIENT" ? "default" : "outline"}
                                    className="w-full"
                                    onClick={() => setRole("CLIENT")}
                                >
                                    Hire Talent
                                </Button>
                                <Button
                                    type="button"
                                    variant={role === "FREELANCER" ? "default" : "outline"}
                                    className="w-full"
                                    onClick={() => setRole("FREELANCER")}
                                >
                                    Find Work
                                </Button>
                            </div>
                        </div>
                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? "Creating account..." : "Sign Up"}
                        </Button>
                    </form>
                    <div className="mt-6 text-center text-sm">
                        Already have an account?{" "}
                        <Link href="/auth/signin" className="text-primary hover:underline">
                            Sign In
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
