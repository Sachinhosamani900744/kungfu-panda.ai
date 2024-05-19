import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";
import Replicate from "replicate";

/*import { checkSubscription } from "@/lib/subscription";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";*/
const replicate = new Replicate(
    { auth:process.env.REPLICATE_API_TOKEN!

    }
)

export async function POST(
  req: Request
) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }


    if (!prompt) {
      return new NextResponse("prompt is required", { status: 400 });
    }

    /*const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) {
      return new NextResponse("Free trial has expired. Please upgrade to pro.", { status: 403 });
    }

    const response = await replicate.run(
        "riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05",
        {
          input: {
            prompt_a: prompt
          }
        }
    );

    /*if (!isPro) {
      await incrementApiLimit();
    }*/

    const input = {
      text: "I still have the lease on the Michael Scott Paper Company, so occasionally I will sneak down here for a little coffee and dancing. I actually dance all the time. Tiptoeing around corporate, it is a ballet. When I am breaking all the rules, I'm breakdancing. And espresso. Hey, first guest. You are going to have some tequila, my friend.\n\nI thought there was a party in here. This is the party. This is room 308. Party central. So what can I do you for? All right. Yeah! I'm loving the vibe down here. Ashley! David! One more time! You invited someone? Oh yeah, was I not allowed to do that? I've been here eight years and I've never... Rude. With me!\n\nCafe Disco is dead, but I can still hear the music in my head. I hear it too, boss. It's better than I imagined.\n\nBoss, this is the hang for my windshield, but it belongs in here. Hey! Thank you, Creed. You really got this place. No problem. I'll just have no idea who's driving behind me now.\n\nMichael. Am I the first to arrive? People have been filtering in and out. Can I get a drink? What? Can I get a drink?\n\nIs Josh busy? Michael, I get it. No, I totally get it. He made a better paper airplane. Stanford does better in sales. I get it. We had some fun. We had some laughs. I didn't transfer because of you. You're a good boss. You're a great boss. Not better than Josh. Michael, it's not about\n\nI transferred because of Pam. Oh, my God. You don't even know. She's single now. No, I heard something about that. It's just I kind of put it all on the line. Twice, actually. And she said no. Twice. I'm sorry, man. I'm sorry.\n\nHey, you know what? I will talk to her. Nope, that's okay. Yeah. That's alright. I will. I'll talk to her. You should at least talk to Roy. I mean, he knows exactly how you're feeling. Yeah. Okay. Maybe. Are we early? Hey! No, you know, people have been filtering it out.\n\nHey. Evan, this is Jim. How are you? Hey. Ernie Rissman, Michael. Hey, Ernie. How you doing? You guys work together? No, we used to. Yeah. Now we're friends. Best friends. Surprise! Everybody!\n\nWow, who opened the morgue for this thing? I was just driving by, I thought I'd drop in. There's some wine, I would love a glass if you're gonna open it. Hello temp, take my jacket. Oh, come on, that guy? He is a good guy, not a terrorist. Karaoke, I love it. I am a karaoke fiend. I called dibs, I got next, I got next up.\n\nCome on, let's get this party started. Ha! Okay, where's that wine? Okay, this is a duet, so you need somebody else? Pam, you wanna come up and sing this one? You need somebody else? Takers, please.\n\nBaby, when I met you, there was peace unknown. Kelly? I tried to get you with a fine tooth comb. I was soft inside. There was something going on. This part goes to the girl.\n\nYou do something to me that I can't explain. Hold me closer and I feel the pain every beat of my heart. We got something going on. Tender love is blind.\n\nIt requires a dedication. All this love we feel needs no conversation. Divided together, uh-huh. Making love with each other, uh-huh. We're making love! Now would you do me the pleasure of hitting the lights, sir? Ha, ha, ha. Ha, ha, ha, ha, ha. Whoa. What are all those stains?\n\nBlood, urine, or semen? Oh, God, I hope it's urine. You call that a robot? Try being more robotic, okay? Like this. Lame. What else you got, Andy? How about a little bit of this? Oh, yeah! That's what else you got! Yeah, what else you got? Did someone change my name to Baskin-Robbins?\n\nI should probably stop by. It would mean a lot to him. Hey! Hey! Hey, it's Jarrod! Adam! Can you believe this? It's really happening! Wanna dance, wife? Ordinarily, I would say no, but you need to move to reduce lactic acid buildup. Also, this song is fantastic. Mind if I, uh, steal my wife?\n\nYou can't steal what is legally your property. Are those staples? This dance competition is not over. What dance competition? I was just dancing casually with my friends, y'all. Yeah, right. We used to have a good time. It's fun to stay at the YMCA. It's fun to stay at the YMCA.\n\nYou guys are the best for coming. You don't have to stay if you don't want to. I understand. We're going to stay. Really? At least for one more dance. No, not me. Not me. Get out of here. Cafe Disco. Hey, come on, man. Not even the wine. This is so cheesy. Yes. I like cheesy. Me too.\n\nI think maybe I want a wedding. Wedding. Me too. Really? Yeah. Would you like to dance? No.\n\nUh..."
  };
  
  const response = await replicate.run("awerks/neon-tts:139606fe1536f85a9f07d87982400b8140c9a9673733d47913af96738894128f", { input });
  console.log(response)
  
  
  


    return NextResponse.json(response);
  } catch (error) {
    console.log('[SPEECH_ERROR]', error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};