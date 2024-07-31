import { useState, ChangeEvent, FormEvent } from "react";
import { FaSearch } from "react-icons/fa";

interface HeroProps {
  userInput: (input: string) => void;
  setRadius: (radius: number) => void;
}

const Hero: React.FC<HeroProps> = ({ userInput, setRadius }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [currentRadius, setCurrentRadius] = useState<number>(10); // Default radius in km

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userInput(inputValue);
  };

  const handleRadiusChange = (e: ChangeEvent<HTMLInputElement>) => {
    const radiusInKm = Number(e.target.value);
    setCurrentRadius(radiusInKm);
    setRadius(radiusInKm * 1000); // Convert km to meters
  };

  return (
    <div className="flex justify-center items-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center gap-4 border border-gray-200">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Search for places..."
            value={inputValue}
            onChange={handleInputChange}
            className="flex-grow p-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow duration-300 ease-in-out shadow-md hover:shadow-lg"
          />
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-4">
              <label className="text-gray-700 font-semibold">Radius (km):</label>
              <input
                type="range"
                min="1"
                max="100"
                value={currentRadius}
                onChange={handleRadiusChange}
                className="w-full sm:w-32 appearance-none bg-gray-300 rounded-lg h-2.5 cursor-pointer accent-teal-500 hover:opacity-80"
              />
              <span className="text-gray-700 font-semibold">{currentRadius} km</span>
            </div>
            <button
              type="submit"
              className="bg-teal-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-700 flex items-center justify-center transition-transform transform hover:scale-105"
            >
              <FaSearch size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
