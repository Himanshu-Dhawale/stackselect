import Header from "../components/Header";
import Hero from "../components/Hero";
import SocialProof from "../components/SocialProof";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import OnboardingPage from "./onboarding/page";
import Recommendations from "./recommendations/page";

// We won't use the module css, we use globals and inline structure
// import styles from "./page.module.css"; 

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <main>
        {/* <Hero />
        <SocialProof />
        <HowItWorks />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ /> */}
        {/* <Button className="bg-blue-500 mt-4 ml-10">Click Me</Button> */}
        {/* <OnboardingPage/> */}
        <Recommendations/>
      </main>
      {/* <Footer /> */}
    </>
  );
}
