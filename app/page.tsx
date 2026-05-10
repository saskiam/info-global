import Image from "next/image";
import Navbar from "@/components/Navbar";
import { getNews } from "@/services/news.service";
// import NewsCarousel from "@/app/components/newsCarousel"; TODO IMPORTAR CAROUSEL
// import NewsCards from "./components/newsCards"; TODO IMPORTAR CARDS

export default async function Home() {
  const news = await getNews();


  return (
     <div className="bg-white">
      <Navbar/>
      <main className="flex flex-1 w-full min-h-screen  flex-col items-center justify-between py-5 px-16 bg-white  sm:items-start">
   
       <section className="w-full flex-1 mt-10 sm:mt-0 flex flex-col items-center justify-center sm:items-start " >
        {/* <NewsCarousel /> */}
       </section>
      <section className="w-full flex-1 mt-12 sm:mt-0 flex flex-col items-center justify-center sm:items-start" >
        {/* <NewsCards /> */}
       </section>

      </main>
    
      </div>
    
  );
}
