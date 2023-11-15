import axios from "axios";
import { useState, useEffect } from "react";
import DateApp from "./DateApp";
import { RandomQuoteInterface } from "./RandomQuoteInterface";

function TimeApi() {
  const [timeData, setTimeData] = useState(null);
  const [geoData, setGeoData] = useState(null);
  const [randomQuotes, setRandomQuotes] = useState<
    RandomQuoteInterface[] | null
  >(null);

  useEffect(() => {
    axiosRandomQuotesData();
  }, []);

  const axiosRandomQuotesData = async () => {
    try {
      const response = await axios.get("https://api.quotable.io/quotes/random");
      setRandomQuotes(
        Array.isArray(response.data) ? response.data : [response.data]
      );
    } catch (error) {
      console.error("Error fetching time data:", error);
    }
  };

  useEffect(() => {
    const axiosTimeData = async () => {
      try {
        const response = await axios.get("http://worldtimeapi.org/api/ip");
        setTimeData(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching time data:", error);
      }
    };
    axiosTimeData();
  }, []);

  useEffect(() => {
    const axiosGeoData = async () => {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        setGeoData(response.data);
      } catch (error) {
        console.error("error fetching geo data:", error);
      }
    };
    axiosGeoData();
  }, []);

  const handleChangeQuote = () => {
    axiosRandomQuotesData();
  };

  return (
    <div>
      <DateApp
        timeData={timeData}
        geoData={geoData}
        randomQuotes={randomQuotes}
        handleChangeQuote={handleChangeQuote}
      />
    </div>
  );
}

export default TimeApi;
