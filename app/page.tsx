import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import WorkGrid from "./components/WorkGrid";
import ContactForm from "./components/ContactForm";
import Testimonials from "./components/Testimonials";
import Clients from "./components/Clients";

export default function Home() {
  return (
    <main className="[&>section]:pb-16 [&>section:not(:first-child)]:pt-12">
      <Hero />
      <Services />
      <About />
      <WorkGrid />
      <Clients />
      <Testimonials />
      <ContactForm />
    </main>
  );
}
