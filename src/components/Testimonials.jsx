import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Amit Sharma",
    text: "DreamSpace helped me find my perfect home in just a week!",
  },
  {
    name: "Priya Mehta",
    text: "The best real estate service I’ve ever used. Highly recommended!",
  },
  {
    name: "Ravi Patel",
    text: "Professional agents and excellent property options.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">What Our Clients Say</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center px-6">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} name={t.name} text={t.text} />
        ))}
      </div>
    </section>
  );
}
