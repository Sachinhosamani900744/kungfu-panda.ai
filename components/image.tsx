"use client";



import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  // Replace with your actual image paths and member data
  {
    name: "Aravinda Y L",
    avatar: "1648304716399.jpg",
    title: "1MJ20IS013",
    description: "Team member",
  },
  {
    name: "Nikhil S B",
    avatar: "WhatsApp Image 2024-04-30 at 11.39.57 PM.jpeg",
    title: "1MJ20IS060",
    description: "Team member",
  },
  {
    name: "Sachin V H",
    avatar: "sachin pp pic .jpeg",
    title: "1MJ20IS082",
    description: "Team member",
  },
  {
    name: "Sagar S H",
    avatar: "1MJ20IS085_SAGAR.S.HEGDE.. (1).jpg",
    title: "1MJ20IS085",
    description: "Team member",
  },
];

export const LandingContents = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Project Team Members
      </h2>
      <br></br><br></br>
      {/* Added image section */}
      <div className="flex justify-center space-x-10 gap-10 mb-10">
        {teamMembers.map((member, index) => (
          <img
            key={index}
            src={member.avatar}
            alt={member.name}
            className="w-40 h-40 rounded-full object-cover" // Adjust size and styles as needed
          />
        ))}
      </div>
      <br></br>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {teamMembers.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
