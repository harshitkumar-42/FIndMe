import React, { useState } from 'react';
import PlaceItemcard from './PlaceItemcard';
import SideDrawer from './SideDrawer';
import Skeleton from './Skeleton';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface PlaceListProps {
  placeList: any[];
}

const ITEMS_PER_PAGE = 12;

const PlaceList: React.FC<PlaceListProps> = ({ placeList }) => {
  const [selectedPlace, setSelectedPlace] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(placeList.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPlaces = placeList.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='px-[10px] md:px-[120px] mt-7'>
      <h2 className='text-[20px] font-bold'>Search Results</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {currentPlaces.length > 0 ? (
          currentPlaces.map((place: any, i: any) => (
            <div key={i} onClick={() => setSelectedPlace(place)}>
              <PlaceItemcard place={place} />
            </div>
          ))
        ) : (
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <Skeleton key={index} />
            ))}
          </div>
        )}
      </div>
      {selectedPlace?.name && (
        <div className='fixed top-0 right-0'>
          <SideDrawer place={selectedPlace} close={() => setSelectedPlace([])} />
        </div>
      )}
      <div className='flex justify-center items-center mt-10 mb-10'>
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className='text-gray-700 hover:text-teal-500 disabled:text-gray-400 transition-colors px-4'
        >
          <FaChevronLeft size={24} />
        </button>
        <span className='mx-4 '>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className='text-gray-700 hover:text-teal-500 disabled:text-gray-400 transition-colors px-4'
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default PlaceList;
