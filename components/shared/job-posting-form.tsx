"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"

const jobSchema = z.object({
    title: z.string().min(10, "Title must be at least 10 characters"),
    description: z.string().min(50, "Description must be at least 50 characters"),
    budget: z.number().min(1, "Budget must be greater than 0"),
    skills: z.string().min(1, "At least one skill is required"),
})

type JobFormValues = z.infer<typeof jobSchema>

export function JobPostingForm() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<JobFormValues>({
        resolver: zodResolver(jobSchema),
    })

    const onSubmit = async (data: JobFormValues) => {
        setIsLoading(true)
        try {
            const response = await fetch("/api/jobs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...data,
                    skills: data.skills.split(",").map(s => s.trim()),
                }),
            })

            if (!response.ok) throw new Error("Failed to create job")

            toast.success("Job posted successfully!")
            router.push("/dashboard/client")
            router.refresh()
        } catch (error) {
            toast.error("Failed to post job. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Card className="max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>Post a New Job</CardTitle>
                <CardDescription>
                    Fill out the details below to post a job and start receiving proposals.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="title">Job Title</Label>
                        <Input
                            id="title"
                            placeholder="e.g., Senior React Developer"
                            {...register("title")}
                        />
                        {errors.title && (
                            <p className="text-sm text-red-500">{errors.title.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            placeholder="Describe the project, requirements, and expectations..."
                            rows={6}
                            {...register("description")}
                        />
                        {errors.description && (
                            <p className="text-sm text-red-500">{errors.description.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="budget">Budget ($)</Label>
                        <Input
                            id="budget"
                            type="number"
                            placeholder="5000"
                            {...register("budget", { valueAsNumber: true })}
                        />
                        {errors.budget && (
                            <p className="text-sm text-red-500">{errors.budget.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="skills">Required Skills (comma-separated)</Label>
                        <Input
                            id="skills"
                            placeholder="React, TypeScript, Node.js"
                            {...register("skills")}
                        />
                        {errors.skills && (
                            <p className="text-sm text-red-500">{errors.skills.message}</p>
                        )}
                    </div>

                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Posting..." : "Post Job"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
