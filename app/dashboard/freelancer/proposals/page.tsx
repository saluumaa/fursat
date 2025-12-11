"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, ExternalLink } from "lucide-react"
import Link from "next/link"

const mockProposals = [
    {
        id: "1",
        jobTitle: "Full-Stack Developer for SaaS Platform",
        company: "TechCorp Inc.",
        price: 4500,
        coverLetter: "I have 5+ years of experience building SaaS platforms using Next.js and Node.js...",
        status: "PENDING",
        submittedAt: "2024-01-16",
    },
    {
        id: "2",
        jobTitle: "UI/UX Designer for Mobile App",
        company: "StartupXYZ",
        price: 2800,
        coverLetter: "I'm passionate about creating beautiful mobile experiences...",
        status: "ACCEPTED",
        submittedAt: "2024-01-12",
    },
    {
        id: "3",
        jobTitle: "Content Writer for Tech Blog",
        company: "BlogMedia",
        price: 600,
        coverLetter: "With years of technical writing experience...",
        status: "REJECTED",
        submittedAt: "2024-01-10",
    },
]

export default function MyProposalsPage() {
    return (
        <div className="flex-1 space-y-6">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">My Proposals</h2>
                <p className="text-muted-foreground">Track your submitted proposals</p>
            </div>

            <div className="grid gap-4">
                {mockProposals.map((proposal) => (
                    <Card key={proposal.id}>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="text-lg">{proposal.jobTitle}</CardTitle>
                                    <CardDescription>{proposal.company}</CardDescription>
                                </div>
                                <Badge
                                    variant={
                                        proposal.status === "PENDING"
                                            ? "secondary"
                                            : proposal.status === "ACCEPTED"
                                                ? "default"
                                                : "destructive"
                                    }
                                >
                                    {proposal.status}
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <p className="text-lg font-bold text-primary">Your bid: ${proposal.price}</p>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                                {proposal.coverLetter}
                            </p>
                            <div className="flex items-center justify-between pt-2">
                                <span className="text-xs text-muted-foreground">
                                    Submitted {proposal.submittedAt}
                                </span>
                                <div className="flex gap-2">
                                    {proposal.status === "ACCEPTED" && (
                                        <Button size="sm" asChild>
                                            <Link href="/dashboard/messages">
                                                <MessageSquare className="mr-2 h-4 w-4" />
                                                Message Client
                                            </Link>
                                        </Button>
                                    )}
                                    <Button variant="outline" size="sm" asChild>
                                        <Link href={`/jobs/${proposal.id}`}>
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            View Job
                                        </Link>
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
