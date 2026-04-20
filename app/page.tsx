import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Results from "@/components/Results";
import Endorsement from "@/components/Endorsement";
import Mechanism from "@/components/Mechanism";
import OrderForm from "@/components/OrderForm";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Benefits />
        <Results />
        <Endorsement />
        <Mechanism />
        <OrderForm />
      </main>
    </>
  );
}
