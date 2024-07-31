"use client";
import Hero from "@/components/Hero";
import PlaceList from "@/components/PlaceList";
import CategoryGrid from "@/components/CategoryGrid";
import { useEffect, useState } from "react";

export default function Home() {
  const [placeList, setPlaceList] = useState([]);
  const [radius, setRadius] = useState(10000); // Default radius in meters

  useEffect(() => {
    getPlaceList("Schools in New Delhi");
  }, []);

  const getPlaceList = async (value: string, location?: string) => {
    setPlaceList([]);
    const url = location
      ? `/api/google-place-api?location=${location}&q=${value}&radius=${radius}`
      : `/api/google-place-api?q=${value}`;
    const result = await fetch(url);
    const data = await result.json();
    console.log(data.resp.results);
    setPlaceList(data.resp.results);
  };

  const findNearbyPlaces = (category: string) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        const location = `${latitude},${longitude}`;
        getPlaceList(category, location);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div>
      <Hero userInput={(value: string) => getPlaceList(value)} setRadius={setRadius} />
      <CategoryGrid findNearbyPlaces={findNearbyPlaces} />
      {placeList ? <PlaceList placeList={placeList} /> : null}
    </div>
  );
}
