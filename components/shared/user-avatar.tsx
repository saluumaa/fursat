import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UserAvatarProps {
    src?: string
    name: string
    className?: string
}

export function UserAvatar({ src, name, className }: UserAvatarProps) {
    const initials = name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)

    return (
        <Avatar className={className}>
            <AvatarImage src={src} alt={name} />
            <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
    )
}
