"use client"
import { ChangeEvent, useState } from "react";

const hotels = ["Hotel 1", "Extended Stay", "Holiday Inn", "Hilton", "Mariott", "Ritz-Carlton", "Motel 6", "Airbnb"]




const MainPage = () => {
    const [query, setQuery] = useState('');
  
    const handleInputChange = (e) => {
      setQuery(e.target.value);
    };
  
    const filteredItems = hotels.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  
    return (
      <div>
        <input
          type="text"
          placeholder="Type to filter..."
          value={query}
          onChange={handleInputChange}
        />
        <ul>
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          ) : (
            <li>No results found</li>
          )}
        </ul>
      </div>
    );
  };
export default MainPage