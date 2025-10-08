import { FaHome } from "react-icons/fa";
import Shuffle from './Shuffle';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-white shadow-md fixed top-0 w-full z-50">
      <div className="flex items-center gap-2 text-2xl font-bold text-blue-600">
        <FaHome /> 

<Shuffle
  text="DreamSpace"
  shuffleDirection="right"
  duration={0.35}
  animationMode="evenodd"
  shuffleTimes={1}
  ease="power3.out"
  stagger={0.03}
  threshold={0.1}
  triggerOnce={true}
  triggerOnHover={true}
  respectReducedMotion={true}
/>
        
      </div>
      <ul className="hidden md:flex gap-8 text-gray-700">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">Properties</li>
        <li className="hover:text-blue-600 cursor-pointer">Agents</li>
        <li className="hover:text-blue-600 cursor-pointer">Contact</li>
      </ul>
      <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700">
        Get Started
      </button>
    </nav>
  );
}
