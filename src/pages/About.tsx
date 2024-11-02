import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
    bio: "Visionary leader with 15+ years in tech",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
    bio: "Engineering expert & system architect",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop",
    bio: "Award-winning designer & UX specialist",
  },
];

export function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <Badge className="mb-4" variant="secondary">
          About Us
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Our Mission & Team
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          We're on a mission to revolutionize web development by making it more accessible,
          efficient, and enjoyable for developers worldwide.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle>Our Story</CardTitle>
            <CardDescription>How it all began</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Founded in 2023, our platform emerged from a simple idea: make web development
              more intuitive and powerful. What started as a small project has grown into
              a comprehensive solution used by developers worldwide.
            </p>
            <p className="text-sm text-muted-foreground">
              Today, we're proud to serve thousands of developers, helping them build
              better web applications faster than ever before.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Our Values</CardTitle>
            <CardDescription>What drives us forward</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="outline">Innovation</Badge>
              <Badge variant="outline">Quality</Badge>
              <Badge variant="outline">Community</Badge>
              <Badge variant="outline">Transparency</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              We believe in pushing the boundaries of what's possible while maintaining
              the highest standards of quality and fostering a supportive community.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold text-center mb-8">Meet Our Team</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {team.map((member) => (
          <Card key={member.name}>
            <CardHeader className="text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name[0]}</AvatarFallback>
              </Avatar>
              <CardTitle>{member.name}</CardTitle>
              <CardDescription>{member.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                {member.bio}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}