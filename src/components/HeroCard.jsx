export default function HeroCard({ title, subtitle, btnText, bgImg }) {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center bg-cover bg-center text-white text-center px-4"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">{title}</h1>
      <p className="text-lg mb-6 drop-shadow-md max-w-2xl">{subtitle}</p>
      <button className="bg-blue-600 px-6 py-3 rounded-md text-white text-lg hover:bg-blue-700">
        {btnText}
      </button>
    </section>
  );
}
