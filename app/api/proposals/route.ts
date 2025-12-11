import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

const proposalSchema = z.object({
    jobId: z.string(),
    coverLetter: z.string().min(50),
    price: z.number().min(1),
})

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const validatedData = proposalSchema.parse(body)

        // TODO: Get actual user ID from session
        const mockFreelancerId = "mock-freelancer-id"

        const proposal = await prisma.proposal.create({
            data: {
                jobId: validatedData.jobId,
                coverLetter: validatedData.coverLetter,
                price: validatedData.price,
                freelancerId: mockFreelancerId,
            },
        })

        return NextResponse.json(proposal, { status: 201 })
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
        const jobId = searchParams.get("jobId")
        const freelancerId = searchParams.get("freelancerId")

        const proposals = await prisma.proposal.findMany({
            where: {
                ...(jobId && { jobId }),
                ...(freelancerId && { freelancerId }),
            },
            include: {
                job: {
                    select: {
                        title: true,
                        budget: true,
                    },
                },
                freelancer: {
                    select: {
                        name: true,
                        image: true,
                        skills: true,
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        })

        return NextResponse.json(proposals)
    } catch (error) {
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        )
    }
}
