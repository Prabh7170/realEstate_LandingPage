export default function Card({ img, title, price, btnText }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={img} alt={title} className="h-60 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-blue-600 font-bold mt-2">{price}</p>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          {btnText}
        </button>
      </div>
    </div>
  );
}
