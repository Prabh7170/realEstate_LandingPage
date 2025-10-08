export default function TestimonialCard({ name, text }) {
  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-md max-w-sm mx-auto">
      <p className="italic mb-4">“{text}”</p>
      <h3 className="font-bold text-blue-600">{name}</h3>
    </div>
  );
}
