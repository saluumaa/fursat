"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Eye, Edit, Trash2 } from "lucide-react"
import Link from "next/link"

const mockJobs = [
    {
        id: "1",
        title: "Full-Stack Developer for SaaS Platform",
        status: "OPEN",
        budget: 5000,
        proposals: 8,
        createdAt: "2024-01-15",
    },
    {
        id: "2",
        title: "UI/UX Designer for Mobile App",
        status: "IN_PROGRESS",
        budget: 3000,
        proposals: 12,
        createdAt: "2024-01-10",
    },
    {
        id: "3",
        title: "Content Writer for Tech Blog",
        status: "COMPLETED",
        budget: 800,
        proposals: 25,
        createdAt: "2024-01-05",
    },
]

export default function MyJobsPage() {
    return (
        <div className="flex-1 space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">My Jobs</h2>
                    <p className="text-muted-foreground">Manage your posted jobs</p>
                </div>
                <Button asChild>
                    <Link href="/dashboard/client/jobs/new">
                        <Plus className="mr-2 h-4 w-4" />
                        Post New Job
                    </Link>
                </Button>
            </div>

            <div className="grid gap-4">
                {mockJobs.map((job) => (
                    <Card key={job.id}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0">
                            <div>
                                <CardTitle className="text-lg">{job.title}</CardTitle>
                                <CardDescription>
                                    Posted on {job.createdAt} • ${job.budget} budget
                                </CardDescription>
                            </div>
                            <Badge
                                variant={
                                    job.status === "OPEN"
                                        ? "default"
                                        : job.status === "IN_PROGRESS"
                                            ? "secondary"
                                            : "outline"
                                }
                            >
                                {job.status.replace("_", " ")}
                            </Badge>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-muted-foreground">
                                    {job.proposals} proposals received
                                </p>
                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm" asChild>
                                        <Link href={`/dashboard/client/jobs/${job.id}/proposals`}>
                                            <Eye className="mr-2 h-4 w-4" />
                                            View Proposals
                                        </Link>
                                    </Button>
                                    <Button variant="outline" size="sm">
                                        <Edit className="mr-2 h-4 w-4" />
                                        Edit
                                    </Button>
                                    <Button variant="destructive" size="sm">
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
