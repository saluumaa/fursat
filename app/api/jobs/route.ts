import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

const jobSchema = z.object({
    title: z.string().min(10),
    description: z.string().min(50),
    budget: z.number().min(1),
    skills: z.array(z.string()),
})

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const validatedData = jobSchema.parse(body)

        // TODO: Get actual user ID from session
        const mockClientId = "mock-client-id"

        const job = await prisma.job.create({
            data: {
                title: validatedData.title,
                description: validatedData.description,
                budget: validatedData.budget,
                clientId: mockClientId,
            },
        })

        return NextResponse.json(job, { status: 201 })
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: "Invalid input", details: error.issues },
                { status: 400 }
            )
        }
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        )
    }
}

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url)
        const status = searchParams.get("status")

        const jobs = await prisma.job.findMany({
            where: status ? { status: status as any } : {},
            include: {
                client: {
                    select: {
                        name: true,
                        image: true,
                    },
                },
                _count: {
                    select: {
                        proposals: true,
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        })

        return NextResponse.json(jobs)
    } catch (error) {
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        )
    }
}
