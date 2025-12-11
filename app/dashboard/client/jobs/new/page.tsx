import { JobPostingForm } from "@/components/shared/job-posting-form"

export default function NewJobPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Post a Job</h1>
                <p className="text-muted-foreground">
                    Create a new job posting to find the perfect freelancer for your project.
                </p>
            </div>
            <JobPostingForm />
        </div>
    )
}
