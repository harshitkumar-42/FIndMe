import Image from "next/image";
import React, { useState } from "react";

const BASE_URL_PHOTO =
  "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400";

function SideDrawer({ place, close }:any) {
  const [isCopied, setIsCopied] = useState(false);

  const onDirectionClick = () => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        place.name + ' ' + place.formatted_address
      )}`
    );
  };

  const handleCopyClick = () => {
    const textToCopy = `${place.name}\n${place.formatted_address}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setIsCopied(true);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <div className="h-screen w-screen md:w-[400px] bg-white shadow-md p-5">
      <button
        onClick={() => close()}
        className="absolute top-2 right-2 p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div>
        <h2 className="line-clamp-2 text-[20px] font-semibold mb-3">
          {place.name}
        </h2>
        {place.photos?.[0]?.photo_reference && (
          <Image
            src={
              `${BASE_URL_PHOTO}&photo_reference=${place.photos[0].photo_reference}&key=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY}`
            }
            alt={place.name}
            width={200}
            height={80}
            className="w-full h-[170px] rounded-t-xl object-cover"
          />
        )}
        <div className="flex gap-2 mt-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <h2 className="text-[12px] text-gray-400 line-clamp-2">
            {place.formatted_address}
          </h2>
        </div>
        <div className="flex gap-2 mt-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
          <h2 className="text-[12px] text-gray-400 line-clamp-2">
            {place.rating} ({place.user_ratings_total})
          </h2>
        </div>
        <div className="mt-5 flex gap-5">
          <button
            onClick={onDirectionClick}
            className="flex gap-2 p-1 px-2 bg-red-500 rounded-full text-white hover:scale-105 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <span>Direction</span>
          </button>
          <button
            onClick={handleCopyClick}
            disabled={isCopied}
            className={`flex gap-2 p-1 px-2 bg-red-500 rounded-full text-white ${isCopied ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'} transition-all`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6.75a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75V6m0 0H4.5a1.5 1.5 0 0 0-1.5 1.5v11a1.5 1.5 0 0 0 1.5 1.5H18a1.5 1.5 0 0 0 1.5-1.5v-11a1.5 1.5 0 0 0-1.5-1.5H12Z"
              />
            </svg>
            <span>{isCopied ? "Copied!" : "Copy"}</span>
          </button>
        </div>
        <div className="mt-5">
          <iframe
            width="600"
            height="450"
            className="w-full h-[200px] rounded-lg"
            loading="lazy"
            src={
              `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY}&q=${encodeURIComponent(place.formatted_address)}`
            }
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default SideDrawer;
