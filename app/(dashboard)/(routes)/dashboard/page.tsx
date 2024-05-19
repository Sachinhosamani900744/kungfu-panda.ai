"use client";

import { ArrowRight,
  MessagesSquare,
  Music,
  ImageIcon,
  VideoIcon,
  Code,
  Speech,
} from "lucide-react";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

 
const tools = [
  {
    labels:"Conversation",
    icon:MessagesSquare,
    color:"text-violet-500",
    bgcolor:"bg-violet-500/10",
    href:"/conversation"
  },
  {
    labels:"Code Generation",
    icon:Code,
    color:"text-green-500",
    bgcolor:"bg-green-500/10",
    href:"/code"
  },
  {
    labels:"Image Generation",
    icon:ImageIcon,
    color:"text-pink-500",
    bgcolor:"bg-pink-500/10",
    href:"/image"
  },
  {
    labels:"Music Generation",
    icon:Music,
    color:"text-emarald-500",
    bgcolor:"bg-emerald-500/10",
    href:"/music"
  },
  {
    labels:"Video Generation",
    icon:VideoIcon,
    color:"text-orange-500",
    bgcolor:"bg-orange-800/10",
    href:"/video"
  },
  
  
  
]
  const DashboardPage = ()=>{
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card onClick={() => router.push(tool.href)} key={tool.href} className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgcolor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">
                {tool.labels}
              </div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
}
export default DashboardPage