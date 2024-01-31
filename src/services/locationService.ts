/* eslint-disable @typescript-eslint/no-explicit-any */
import { mapsAPIKey } from "@/api/config";
import axios from "axios";

const getCityName = async (latitude: number, longitude: number) => {
  const apiKey = mapsAPIKey;
  const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    const data = response.data;

    if (data.results && data.results.length > 0) {
      const city = data.results[0].address_components.find(
        (component: { types: string | string[] }) =>
          component.types.includes("locality")
      );

      return city ? city.short_name : null;
    } else {
      throw new Error("No results found");
    }
  } catch (error) {
    console.error("Error fetching city name:", error);
    return null;
  }
};

const getCurrentPosition = (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => reject(error)
    );
  });
};

const getUserLocation = async (
  setLocationAccess: React.Dispatch<React.SetStateAction<boolean>>
) => {
  let cityName = "";

  try {
    const position = await getCurrentPosition();
    const city = await getCityName(
      position.coords.latitude,
      position.coords.longitude
    );
    setLocationAccess(true);
    cityName = city;
  } catch (error: any) {
    console.error("Error fetching current city:", error);
    throw new Error(error.message);
  }
  return cityName;
};

export { getUserLocation };
