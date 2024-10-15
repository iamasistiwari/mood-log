import Calendar from "@/components/sub/Calendar";
import HeroSection from "@/components/main/HeroSection";
import Rate from "@/components/sub/Rate";



export default function Home() {
  return (
    <div className="w-screen">
      {/* <HeroSection /> */}
      <Rate />
      <Calendar />
    </div>
  );    
}
