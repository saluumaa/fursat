"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Check, X, MessageSquare } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"

const mockProposals = [
    {
        id: "1",
        jobTitle: "Full-Stack Developer for SaaS Platform",
        freelancer: {
            name: "Sarah Johnson",
            avatar: "",
            rating: 4.9,
        },
        price: 4500,
        coverLetter: "I have 5+ years of experience building SaaS platforms using Next.js and Node.js...",
        status: "PENDING",
        submittedAt: "2024-01-16",
    },
    {
        id: "2",
        jobTitle: "Full-Stack Developer for SaaS Platform",
        freelancer: {
            name: "Mike Chen",
            avatar: "",
            rating: 4.7,
        },
        price: 5200,
        coverLetter: "Expert full-stack developer with expertise in React, TypeScript, and PostgreSQL...",
        status: "PENDING",
        submittedAt: "2024-01-15",
    },
    {
        id: "3",
        jobTitle: "UI/UX Designer for Mobile App",
        freelancer: {
            name: "Emily Davis",
            avatar: "",
            rating: 5.0,
        },
        price: 2800,
        coverLetter: "Award-winning designer with a passion for creating beautiful mobile experiences...",
        status: "ACCEPTED",
        submittedAt: "2024-01-12",
    },
]

export default function ProposalsPage() {
    const handleAccept = (id: string) => {
        toast.success("Proposal accepted! You can now message the freelancer.")
    }

    const handleReject = (id: string) => {
        toast.info("Proposal rejected")
    }

    return (
        <div className="flex-1 space-y-6">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Proposals</h2>
                <p className="text-muted-foreground">Review proposals from freelancers</p>
            </div>

            <div className="grid gap-4">
                {mockProposals.map((proposal) => (
                    <Card key={proposal.id}>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <Avatar className="h-12 w-12">
                                        <AvatarImage src={proposal.freelancer.avatar} />
                                        <AvatarFallback>
                                            {proposal.freelancer.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <CardTitle className="text-lg">{proposal.freelancer.name}</CardTitle>
                                        <CardDescription>
                                            ⭐ {proposal.freelancer.rating} rating
                                        </CardDescription>
                                    </div>
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
                                <p className="text-sm font-medium text-muted-foreground">For: {proposal.jobTitle}</p>
                                <p className="text-lg font-bold text-primary">${proposal.price}</p>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                                {proposal.coverLetter}
                            </p>
                            <div className="flex items-center justify-between pt-2">
                                <span className="text-xs text-muted-foreground">
                                    Submitted {proposal.submittedAt}
                                </span>
                                {proposal.status === "PENDING" ? (
                                    <div className="flex gap-2">
                                        <Button size="sm" onClick={() => handleAccept(proposal.id)}>
                                            <Check className="mr-2 h-4 w-4" />
                                            Accept
                                        </Button>
                                        <Button variant="outline" size="sm" onClick={() => handleReject(proposal.id)}>
                                            <X className="mr-2 h-4 w-4" />
                                            Reject
                                        </Button>
                                    </div>
                                ) : (
                                    <Button variant="outline" size="sm" asChild>
                                        <Link href="/dashboard/messages">
                                            <MessageSquare className="mr-2 h-4 w-4" />
                                            Message
                                        </Link>
                                    </Button>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
