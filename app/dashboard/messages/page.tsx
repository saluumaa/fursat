"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send } from "lucide-react"

const mockConversations = [
    {
        id: "1",
        user: { name: "Sarah Johnson", avatar: "", online: true },
        lastMessage: "Thanks for accepting my proposal!",
        unread: 2,
        time: "2 min ago",
    },
    {
        id: "2",
        user: { name: "Mike Chen", avatar: "", online: false },
        lastMessage: "I'll send the first draft by Friday",
        unread: 0,
        time: "1 hour ago",
    },
    {
        id: "3",
        user: { name: "Emily Davis", avatar: "", online: true },
        lastMessage: "The designs are ready for review",
        unread: 1,
        time: "3 hours ago",
    },
]

const mockMessages = [
    { id: "1", sender: "them", text: "Hi! Thanks for accepting my proposal.", time: "10:30 AM" },
    { id: "2", sender: "me", text: "You're welcome! Looking forward to working with you.", time: "10:32 AM" },
    { id: "3", sender: "them", text: "I've reviewed the requirements and have a few questions.", time: "10:35 AM" },
    { id: "4", sender: "them", text: "Can we schedule a call to discuss the project scope?", time: "10:36 AM" },
    { id: "5", sender: "me", text: "Sure! How about tomorrow at 2 PM?", time: "10:40 AM" },
    { id: "6", sender: "them", text: "Perfect! I'll send you a calendar invite.", time: "10:42 AM" },
]

export default function MessagesPage() {
    const [selectedConvo, setSelectedConvo] = useState(mockConversations[0])
    const [newMessage, setNewMessage] = useState("")

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            // In production, this would send to the API
            setNewMessage("")
        }
    }

    return (
        <div className="flex-1 space-y-6">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Messages</h2>
                <p className="text-muted-foreground">Chat with freelancers and clients</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 h-[600px]">
                {/* Conversation List */}
                <Card className="md:col-span-1">
                    <CardHeader>
                        <CardTitle className="text-lg">Conversations</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <ScrollArea className="h-[500px]">
                            {mockConversations.map((convo) => (
                                <div
                                    key={convo.id}
                                    className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-muted/50 transition-colors ${selectedConvo.id === convo.id ? "bg-muted" : ""
                                        }`}
                                    onClick={() => setSelectedConvo(convo)}
                                >
                                    <div className="relative">
                                        <Avatar>
                                            <AvatarImage src={convo.user.avatar} />
                                            <AvatarFallback>
                                                {convo.user.name
                                                    .split(" ")
                                                    .map((n) => n[0])
                                                    .join("")}
                                            </AvatarFallback>
                                        </Avatar>
                                        {convo.user.online && (
                                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between">
                                            <p className="font-medium truncate">{convo.user.name}</p>
                                            <span className="text-xs text-muted-foreground">{convo.time}</span>
                                        </div>
                                        <p className="text-sm text-muted-foreground truncate">{convo.lastMessage}</p>
                                    </div>
                                    {convo.unread > 0 && (
                                        <span className="flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-primary rounded-full">
                                            {convo.unread}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </ScrollArea>
                    </CardContent>
                </Card>

                {/* Chat Area */}
                <Card className="md:col-span-2 flex flex-col">
                    <CardHeader className="border-b">
                        <div className="flex items-center gap-3">
                            <Avatar>
                                <AvatarImage src={selectedConvo.user.avatar} />
                                <AvatarFallback>
                                    {selectedConvo.user.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle className="text-lg">{selectedConvo.user.name}</CardTitle>
                                <p className="text-sm text-muted-foreground">
                                    {selectedConvo.user.online ? "Online" : "Offline"}
                                </p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-1 p-4 overflow-hidden">
                        <ScrollArea className="h-[400px] pr-4">
                            <div className="space-y-4">
                                {mockMessages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
                                    >
                                        <div
                                            className={`max-w-[70%] rounded-lg px-4 py-2 ${msg.sender === "me"
                                                    ? "bg-primary text-primary-foreground"
                                                    : "bg-muted"
                                                }`}
                                        >
                                            <p className="text-sm">{msg.text}</p>
                                            <p
                                                className={`text-xs mt-1 ${msg.sender === "me" ? "text-primary-foreground/70" : "text-muted-foreground"
                                                    }`}
                                            >
                                                {msg.time}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </CardContent>
                    <div className="p-4 border-t">
                        <div className="flex gap-2">
                            <Input
                                placeholder="Type a message..."
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                            />
                            <Button onClick={handleSendMessage}>
                                <Send className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}
