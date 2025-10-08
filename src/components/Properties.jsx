import TiltedCard from "./TiltedCard";
import { motion } from "framer-motion";

const properties = [
  {
    id: 1,
    title: "Luxury Villa in Delhi",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    price: "₹2.5 Cr",
  },
  {
    id: 2,
    title: "Modern Apartment in Noida",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "₹1.2 Cr",
  },
  {
    id: 3,
    title: "Beach House in Goa",
    img: "https://media.istockphoto.com/id/1171461000/photo/modern-two-story-home-in-miami-with-yard-and-swimming-pool.jpg?s=1024x1024&w=is&k=20&c=za4kN-Bh8xYA7iWoswXLEVgTAF0P0sdjyW1r0XyRSi4=",
    price: "₹3.1 Cr",
  },
  {
    id: 4,
    title: "Penthouse in Mumbai",
    img: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80",
    price: "₹4.2 Cr",
  },
  {
    id: 5,
    title: "Countryside Cottage in Himachal",
    img: "https://images.unsplash.com/photo-1676884994386-9dcc83786138?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "₹90 Lakh",
  },
  {
    id: 6,
    title: "Lakeview Villa in Srinagar",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    price: "₹3.8 Cr",
  },
  {
    id: 7,
    title: "Urban Studio in Bangalore",
    img: "https://images.unsplash.com/photo-1720609349380-2055da955df3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFVyYmFuJTIwU3R1ZGlvJTIwaW4lMjBCYW5nYWxvcmV8ZW58MHx8MHx8fDA%3D",
    price: "₹75 Lakh",
  },
  {
    id: 8,
    title: "Luxury Apartment in Pune",
    img: "https://images.unsplash.com/photo-1667419791571-f6ba1ad83a3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8THV4dXJ5JTIwQXBhcnRtZW50JTIwaW4lMjBQdW5lfGVufDB8fDB8fHww",
    price: "₹1.5 Cr",
  },
  {
    id: 9,
    title: "Seaside Bungalow in Kerala",
    img: "https://images.unsplash.com/photo-1738174840448-052b24dea2a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFNlYXNpZGUlMjBCdW5nYWxvdyUyMGluJTIwS2VyYWxhfGVufDB8fDB8fHww",
    price: "₹2.9 Cr",
  },
];

export default function Properties() {
  return (
    <section className="py-20 px-6 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Featured Properties
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {properties.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: p.id * 0.1 }}
            className="flex flex-col items-center"
          >
            {/* Tilted interactive image */}
            <TiltedCard
              imageSrc={p.img}
              altText={p.title}
              containerHeight="300px"
              containerWidth="100%"
              imageHeight="300px"
              imageWidth="100%"
              rotateAmplitude={8}
              scaleOnHover={1.05}
              showMobileWarning={false}
              displayOverlayContent={false} // no overlay
            />

            {/* Property info below the card */}
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{p.title}</h3>
              <p className="text-gray-600 font-bold mt-1">{p.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
