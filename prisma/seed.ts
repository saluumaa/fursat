import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('🌱 Starting database seed...')

    // Create sample users
    const client1 = await prisma.user.upsert({
        where: { email: 'client@example.com' },
        update: {},
        create: {
            email: 'client@example.com',
            name: 'Tech Startup Inc.',
            role: 'CLIENT',
            bio: 'A fast-growing tech startup looking for talented developers and designers.',
        },
    })

    const freelancer1 = await prisma.user.upsert({
        where: { email: 'freelancer@example.com' },
        update: {},
        create: {
            email: 'freelancer@example.com',
            name: 'Jane Developer',
            role: 'FREELANCER',
            bio: 'Full-stack developer with 5+ years of experience in React and Node.js',
            skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
        },
    })

    const freelancer2 = await prisma.user.upsert({
        where: { email: 'designer@example.com' },
        update: {},
        create: {
            email: 'designer@example.com',
            name: 'John Designer',
            role: 'FREELANCER',
            bio: 'UI/UX designer passionate about creating beautiful, user-friendly interfaces',
            skills: ['Figma', 'UI/UX', 'Prototyping', 'Design Systems'],
        },
    })

    console.log('✅ Created users')

    // Create sample jobs
    const job1 = await prisma.job.create({
        data: {
            title: 'Build a Modern SaaS Dashboard',
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
            status: 'OPEN',
            clientId: client1.id,
        },
    })

    const job2 = await prisma.job.create({
        data: {
            title: 'Mobile App UI/UX Design',
            description: `Need a talented designer to create modern, user-friendly interfaces for our mobile application.

**Requirements:**
- Experience with Figma
- Portfolio of mobile app designs
- Understanding of iOS and Android design guidelines
- Ability to create interactive prototypes

**Deliverables:**
- Complete UI design for 15+ screens
- Interactive prototype
- Design system and component library
- Handoff documentation for developers`,
            budget: 3000,
            status: 'OPEN',
            clientId: client1.id,
        },
    })

    const job3 = await prisma.job.create({
        data: {
            title: 'Content Writer for Tech Blog',
            description: `Seeking an experienced technical writer to create engaging blog posts about web development, cloud computing, and DevOps topics.

**Requirements:**
- Strong writing skills
- Technical background in software development
- SEO knowledge
- Ability to explain complex topics simply

**Deliverables:**
- 4 blog posts per month (1500-2000 words each)
- SEO optimization
- Original research and examples
- Revisions as needed`,
            budget: 1500,
            status: 'OPEN',
            clientId: client1.id,
        },
    })

    console.log('✅ Created jobs')

    // Create sample proposals
    const proposal1 = await prisma.proposal.create({
        data: {
            jobId: job1.id,
            freelancerId: freelancer1.id,
            coverLetter: `Hi! I'm Jane, a full-stack developer with over 5 years of experience building modern web applications.

I've reviewed your project requirements and I'm confident I can deliver exactly what you need. I've built similar SaaS dashboards for 3 other clients in the past year, all using Next.js, TypeScript, and Tailwind CSS.

My approach:
1. Week 1-2: Set up project structure, authentication, and core layout
2. Week 3-4: Build main dashboard features and data visualization
3. Week 5: Responsive design and mobile optimization
4. Week 6: Testing, documentation, and final polish

I'm available to start immediately and can dedicate 40 hours per week to this project. I'm also happy to provide references from previous clients.

Looking forward to working with you!`,
            price: 4500,
            status: 'PENDING',
        },
    })

    const proposal2 = await prisma.proposal.create({
        data: {
            jobId: job2.id,
            freelancerId: freelancer2.id,
            coverLetter: `Hello! I'm John, a UI/UX designer specializing in mobile app design.

I've designed over 20 mobile applications across iOS and Android platforms. My designs focus on user-centered principles while maintaining modern aesthetics.

For your project, I would:
- Conduct user research to understand your target audience
- Create wireframes and user flows
- Design high-fidelity mockups in Figma
- Build an interactive prototype for testing
- Deliver a complete design system

I can complete this project in 3-4 weeks. My portfolio includes similar projects that I'd be happy to share.

Let's create something amazing together!`,
            price: 2800,
            status: 'PENDING',
        },
    })

    console.log('✅ Created proposals')

    // Create sample portfolio items
    await prisma.portfolioItem.create({
        data: {
            userId: freelancer1.id,
            title: 'E-commerce Platform',
            description: 'Built a full-stack e-commerce platform with Next.js and Stripe integration',
            imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
            link: 'https://example.com',
        },
    })

    await prisma.portfolioItem.create({
        data: {
            userId: freelancer2.id,
            title: 'Fitness App Design',
            description: 'Complete UI/UX design for a fitness tracking mobile application',
            imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800',
            link: 'https://example.com',
        },
    })

    console.log('✅ Created portfolio items')

    console.log('🎉 Database seeded successfully!')
}

main()
    .catch((e) => {
        console.error('❌ Error seeding database:', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
