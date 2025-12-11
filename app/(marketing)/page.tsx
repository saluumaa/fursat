import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Rocket, Shield, Zap, Users, TrendingUp, Award } from "lucide-react"

export default function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-background -z-10" />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center gap-6 text-center max-w-4xl mx-auto">
                        <Badge variant="outline" className="px-4 py-2 text-sm border-primary/30 bg-primary/10">
                            🚀 The Future of Freelancing
                        </Badge>
                        <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                            Connect with Top Talent.
                            <br />
                            Build Your Vision.
                        </h1>
                        <p className="max-w-2xl leading-relaxed text-muted-foreground text-lg sm:text-xl">
                            CreativeHub connects elite designers, developers, and writers with forward-thinking companies. Post a job or find your next project today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <Button size="lg" className="h-12 px-8 text-base" asChild>
                                <Link href="/auth/signup">Get Started Free</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
                                <Link href="/jobs">Browse Jobs</Link>
                            </Button>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                                <span>No fees for 30 days</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                                <span>Secure payments</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                                <span>24/7 Support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 border-y bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
                        <div>
                            <div className="text-4xl font-bold text-primary">10K+</div>
                            <div className="text-sm text-muted-foreground mt-1">Active Freelancers</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-primary">5K+</div>
                            <div className="text-sm text-muted-foreground mt-1">Projects Completed</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-primary">98%</div>
                            <div className="text-sm text-muted-foreground mt-1">Client Satisfaction</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-primary">$2M+</div>
                            <div className="text-sm text-muted-foreground mt-1">Paid to Freelancers</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center space-y-4 text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                            Why Choose CreativeHub?
                        </h2>
                        <p className="leading-normal text-muted-foreground text-lg">
                            We provide the tools and security you need to focus on what matters most: exceptional work.
                        </p>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                        <FeatureCard
                            icon={<Shield className="h-10 w-10 text-primary" />}
                            title="Secure Payments"
                            description="Escrow protection ensures you get paid for your work and get what you pay for."
                        />
                        <FeatureCard
                            icon={<Zap className="h-10 w-10 text-primary" />}
                            title="Fast Matching"
                            description="Our AI-driven matching connects you with the right opportunities instantly."
                        />
                        <FeatureCard
                            icon={<Rocket className="h-10 w-10 text-primary" />}
                            title="Growth Tools"
                            description="Portfolio building, analytics, and resources to help you scale your career."
                        />
                        <FeatureCard
                            icon={<Users className="h-10 w-10 text-primary" />}
                            title="Global Network"
                            description="Connect with talented professionals and clients from around the world."
                        />
                        <FeatureCard
                            icon={<TrendingUp className="h-10 w-10 text-primary" />}
                            title="Career Growth"
                            description="Access training resources and mentorship to advance your freelance career."
                        />
                        <FeatureCard
                            icon={<Award className="h-10 w-10 text-primary" />}
                            title="Quality Assurance"
                            description="Vetted professionals and verified reviews ensure top-quality work."
                        />
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 md:py-32 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center space-y-4 text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                            How It Works
                        </h2>
                        <p className="leading-normal text-muted-foreground text-lg">
                            Get started in three simple steps
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                                1
                            </div>
                            <h3 className="text-xl font-semibold">Create Your Profile</h3>
                            <p className="text-muted-foreground">
                                Sign up and showcase your skills, experience, and portfolio to potential clients.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                                2
                            </div>
                            <h3 className="text-xl font-semibold">Find Perfect Matches</h3>
                            <p className="text-muted-foreground">
                                Browse jobs or post projects. Our smart matching helps you find the right fit.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                                3
                            </div>
                            <h3 className="text-xl font-semibold">Work & Get Paid</h3>
                            <p className="text-muted-foreground">
                                Collaborate seamlessly and receive secure payments through our platform.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center space-y-6">
                        <h2 className="font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                            Ready to Get Started?
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Join thousands of freelancers and clients building amazing projects together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                            <Button size="lg" className="h-12 px-8 text-base" asChild>
                                <Link href="/auth/signup">Create Free Account</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
                                <Link href="/jobs">Browse Jobs</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t py-12 md:py-16 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
                        <div>
                            <h3 className="font-semibold mb-4 text-foreground">Product</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li><Link href="/jobs" className="hover:text-foreground transition-colors">Find Work</Link></li>
                                <li><Link href="/auth/signup" className="hover:text-foreground transition-colors">Hire Talent</Link></li>
                                <li><Link href="/dashboard/client" className="hover:text-foreground transition-colors">Dashboard</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li><Link href="/" className="hover:text-foreground transition-colors">About</Link></li>
                                <li><Link href="/" className="hover:text-foreground transition-colors">Blog</Link></li>
                                <li><Link href="/" className="hover:text-foreground transition-colors">Careers</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4 text-foreground">Resources</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li><Link href="/" className="hover:text-foreground transition-colors">Help Center</Link></li>
                                <li><Link href="/" className="hover:text-foreground transition-colors">Community</Link></li>
                                <li><Link href="/" className="hover:text-foreground transition-colors">Guides</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li><Link href="/" className="hover:text-foreground transition-colors">Privacy</Link></li>
                                <li><Link href="/" className="hover:text-foreground transition-colors">Terms</Link></li>
                                <li><Link href="/" className="hover:text-foreground transition-colors">Security</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 max-w-5xl mx-auto">
                        <p className="text-sm text-muted-foreground">© 2024 CreativeHub. All rights reserved.</p>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                            <Link href="/" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                            <Link href="/" className="hover:text-foreground transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <Card className="relative overflow-hidden border-none shadow-sm hover:shadow-md transition-all bg-card text-center">
            <CardHeader className="flex flex-col items-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                    {icon}
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
            </CardContent>
        </Card>
    )
}
