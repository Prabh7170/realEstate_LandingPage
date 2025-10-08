import Navbar from "./components/Navbar";
import HeroCard from "./components/HeroCard";
import Properties from "./components/Properties";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroCard
        title="Find Your Dream Home Today"
        subtitle="Explore premium properties across top locations with DreamSpace Realty."
        btnText="Explore Properties"
        bgImg="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1600&q=80"
      />
      <Properties />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
