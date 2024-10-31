import HeroSection from "@/components/main/HeroSection";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation"



export default async function Home() {
  const session = await getServerSession(authOptions)
  if(session?.user){
    redirect('/dashboard')
  }

  return (
    <div className="w-screen">
      <HeroSection />
    </div>
  );    
}
