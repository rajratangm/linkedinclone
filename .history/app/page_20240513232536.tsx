import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-20">
      <div className="max-w-6xl mx-auto flex justify-between gap-8">
        <Sidebar/>
        <Feed/>
        <News/>

      </div>
    </div>
  );
}
