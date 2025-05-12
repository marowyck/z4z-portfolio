import About from '@/components/about/About';
import Header from "@/components/header/Header";
import '../../public/style/globals.css'
import Technologies from '@/components/technologies/Technologies';
import Project from '@/components/project/Project';
import Experiences from '@/components/experiences/Experiences';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/footer/footer';


export default function Home() {
  return (
    <div>
      <Header/>
      <About/>
      <Technologies />
      <Project />
      <Experiences />
      <Contact />
      <Footer />
    </div>
  );
}
