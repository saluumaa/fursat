import { JobCard } from "@/components/shared/job-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

// Mock data for demonstration
const mockJobs = [
    {
        id: "1",
        title: "Build a Modern SaaS Dashboard",
        description: "Looking for an experienced React developer to build a comprehensive dashboard for our SaaS product. Must have experience with Next.js, TypeScript, and Tailwind CSS.",
        budget: 5000,
        postedAt: "2 hours ago",
        skills: ["React", "Next.js", "TypeScript", "Tailwind"],
    },
    {
        id: "2",
        title: "Mobile App UI/UX Design",
        description: "Need a talented designer to create modern, user-friendly interfaces for our mobile application. Experience with Figma required.",
        budget: 3000,
        postedAt: "5 hours ago",
        skills: ["Figma", "UI/UX", "Mobile Design"],
    },
    {
        id: "3",
        title: "Content Writer for Tech Blog",
        description: "Seeking an experienced technical writer to create engaging blog posts about web development, cloud computing, and DevOps topics.",
        budget: 1500,
        postedAt: "1 day ago",
        skills: ["Technical Writing", "SEO", "Web Development"],
    },
]

export default function JobsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Find Work</h1>
                <p className="text-muted-foreground">
                    Browse available jobs and submit proposals to projects that match your skills.
                </p>
            </div>

            <div className="flex items-center space-x-2">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        placeholder="Search jobs..."
                        className="pl-10"
                    />
                </div>
                <Button variant="outline">Filter</Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {mockJobs.map((job) => (
                    <JobCard key={job.id} {...job} />
                ))}
            </div>
        </div>
    )
}
