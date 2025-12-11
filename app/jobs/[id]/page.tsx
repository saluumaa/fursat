"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserAvatar } from "@/components/shared/user-avatar"
import { MapPin, Clock, DollarSign, Briefcase } from "lucide-react"
import { toast } from "sonner"

// Mock job data
const mockJob = {
    id: "1",
    title: "Build a Modern SaaS Dashboard",
    description: `We're looking for an experienced React developer to build a comprehensive dashboard for our SaaS product. 
  
  **Requirements:**
  - 5+ years of experience with React and Next.js
  - Strong TypeScript skills
  - Experience with Tailwind CSS and modern UI libraries
  - Understanding of responsive design principles
  - Ability to work independently and meet deadlines
  
  **Deliverables:**
  - Fully functional dashboard with authentication
  - Responsive design for mobile and desktop
  - Clean, maintainable code
  - Documentation
  
  **Timeline:** 4-6 weeks`,
    budget: 5000,
    postedAt: "2 hours ago",
    skills: ["React", "Next.js", "TypeScript", "Tailwind"],
    client: {
        name: "Tech Startup Inc.",
        image: "",
    },
    proposalsCount: 8,
}

export default function JobDetailPage({ params }: { params: { id: string } }) {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [coverLetter, setCoverLetter] = useState("")
    const [proposedPrice, setProposedPrice] = useState("")

    const handleSubmitProposal = async () => {
        if (!coverLetter || !proposedPrice) {
            toast.error("Please fill in all fields")
            return
        }

        setIsSubmitting(true)
        try {
            const response = await fetch("/api/proposals", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    jobId: params.id,
                    coverLetter,
                    price: parseFloat(proposedPrice),
                }),
            })

            if (!response.ok) throw new Error("Failed to submit proposal")

            toast.success("Proposal submitted successfully!")
            router.push("/dashboard/freelancer/proposals")
        } catch (error) {
            toast.error("Failed to submit proposal. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="max-w-5xl mx-auto space-y-6">
            <Card>
                <CardHeader>
                    <div className="flex items-start justify-between">
                        <div className="space-y-2">
                            <CardTitle className="text-3xl">{mockJob.title}</CardTitle>
                            <CardDescription className="flex items-center gap-4 text-base">
                                <span className="flex items-center">
                                    <Clock className="mr-1 w-4 h-4" /> Posted {mockJob.postedAt}
                                </span>
                                <span className="flex items-center">
                                    <MapPin className="mr-1 w-4 h-4" /> Remote
                                </span>
                                <span className="flex items-center">
                                    <Briefcase className="mr-1 w-4 h-4" /> {mockJob.proposalsCount} proposals
                                </span>
                            </CardDescription>
                        </div>
                        <Badge variant="secondary" className="text-lg font-mono px-4 py-2">
                            ${mockJob.budget.toLocaleString()}
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <h3 className="font-semibold mb-2">Job Description</h3>
                        <div className="prose prose-sm max-w-none whitespace-pre-line text-muted-foreground">
                            {mockJob.description}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2">Required Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {mockJob.skills.map((skill) => (
                                <Badge key={skill} variant="outline">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t">
                        <UserAvatar name={mockJob.client.name} className="h-10 w-10" />
                        <div>
                            <p className="font-medium">{mockJob.client.name}</p>
                            <p className="text-sm text-muted-foreground">Client</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Submit a Proposal</CardTitle>
                    <CardDescription>
                        Explain why you're the best fit for this project
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="coverLetter">Cover Letter</Label>
                        <Textarea
                            id="coverLetter"
                            placeholder="Introduce yourself and explain your relevant experience..."
                            rows={8}
                            value={coverLetter}
                            onChange={(e) => setCoverLetter(e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="price">Your Proposed Price ($)</Label>
                        <Input
                            id="price"
                            type="number"
                            placeholder="4500"
                            value={proposedPrice}
                            onChange={(e) => setProposedPrice(e.target.value)}
                        />
                    </div>

                    <Button
                        onClick={handleSubmitProposal}
                        disabled={isSubmitting}
                        className="w-full"
                    >
                        {isSubmitting ? "Submitting..." : "Submit Proposal"}
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}
