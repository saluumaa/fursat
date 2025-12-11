import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, DollarSign } from "lucide-react"
import Link from "next/link"

interface JobCardProps {
    title: string
    description: string
    budget: number
    postedAt: string
    skills: string[]
    id: string
}

export function JobCard({ title, description, budget, postedAt, skills, id }: JobCardProps) {
    return (
        <Card className="flex flex-col justify-between hover:shadow-md transition-shadow">
            <CardHeader>
                <div className="flex justify-between items-start">
                    <CardTitle className="line-clamp-1 text-xl">{title}</CardTitle>
                    <Badge variant="secondary" className="font-mono">
                        ${budget.toLocaleString()}
                    </Badge>
                </div>
                <CardDescription className="flex items-center space-x-2 mt-1">
                    <span className="flex items-center"><Clock className="mr-1 w-3 h-3" /> {postedAt}</span>
                    <span className="flex items-center"><MapPin className="mr-1 w-3 h-3" /> Remote</span>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="line-clamp-3 text-sm text-muted-foreground mb-4">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {skills.map(skill => (
                        <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full" asChild>
                    <Link href={`/jobs/${id}`}>View Details</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
