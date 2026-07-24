import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Features from "./component/Features";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100">

    <Navbar />

      <Hero />

      <Features />

    </main>
  );
}