import Hero from "@/components/Hero/Hero";
import Properties from "@/components/Properties/Properties";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/FAQ/FAQ";

const HomePage = () => {
    return (
        <main>
            <Hero />
            <Services />
            <Properties />
            <Testimonials />
            <FAQ />
        </main>
    );
};

export default HomePage;