import { FC } from "react";
import { FaHotel, FaHospital, FaCoffee, FaUtensils, FaFilm, FaSchool } from "react-icons/fa";

interface CategoryGridProps {
  findNearbyPlaces: (category: string) => void;
}

const CategoryGrid: FC<CategoryGridProps> = ({ findNearbyPlaces }) => {
  const categories = [
    { name: "Hotels", icon: <FaHotel size={24} /> },
    { name: "Hospitals", icon: <FaHospital size={24} /> },
    { name: "Cafes", icon: <FaCoffee size={24} /> },
    { name: "Restaurants", icon: <FaUtensils size={24} /> },
    { name: "Cinema Halls", icon: <FaFilm size={24} /> },
    { name: "Schools", icon: <FaSchool size={24} /> },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => findNearbyPlaces(category.name)}
          className="flex flex-col items-center p-4 rounded-lg hover:bg-blue-200"
        >
          <div className="flex items-center justify-center w-16 h-16 bg-white border-2 border-gray-300 rounded-full shadow-md hover:bg-gray-100">
            {category.icon}
          </div>
          <span className="mt-2 text-center">{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryGrid;
