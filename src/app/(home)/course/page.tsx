import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"

export default function Course() {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      <Card className="rounded-md overflow-hidden">
        <AspectRatio ratio={16 / 9}>
          <Image
            src="/module-thumb.png"
            alt="Module Thumbnail"
            fill
            className="object-cover rounded-md"
          />
        </AspectRatio>
        <CardHeader className="relative">
          <CardTitle>Module 1</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Start Learning</Button>
        </CardFooter>
      </Card>
      <Card className="rounded-md overflow-hidden">
        <AspectRatio ratio={16 / 9}>
          <Image
            src="/module-thumb.png"
            alt="Module Thumbnail"
            fill
            className="object-cover rounded-md"
          />
        </AspectRatio>
        <CardHeader className="relative">
          <CardTitle>Module 2</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Start Learning</Button>
        </CardFooter>
      </Card>
      <Card className="rounded-md overflow-hidden">
        <AspectRatio ratio={16 / 9}>
          <Image
            src="/module-thumb.png"
            alt="Module Thumbnail"
            fill
            className="object-cover rounded-md"
          />
        </AspectRatio>
        <CardHeader className="relative">
          <CardTitle>Module 3</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Start Learning</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
