import Footer from "@/components/main/Footer";
import HeroSection, { Cards } from "@/components/main/HeroSection";
import { CardThreeDimension } from "@/components/ui/CardThreeDimension";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation"



export default async function Home() {
  const session = await getServerSession(authOptions)
  if(session?.user){
    redirect('/dashboard')
  }

  return (
    <div className="w-full " >
      <div>
        <HeroSection />
        
        <div className="flex flex-col lg:flex-row justify-center">

          <div className="p-10 opacity-75">
            <CardThreeDimension title='Mobile Version' des='Delivering a Rich User Experience with a Minimalistic Interface' imageUrl='/mobile.jpeg'/>
          </div>

          <div className="p-10 opacity-75  ">
            <CardThreeDimension title='Desktop Version' des='Delivering a Rich User Experience with a Minimalistic Interface' imageUrl='/desktop.png'/>
          </div>

        </div>
        <div>
          <Cards />
        </div>
        <div className="mt-20">
          <Footer />
        </div>

      </div>
    </div>
  );    
}
