import React, { useState } from 'react';

const FruitsSearch = () => {
  // List of fruit names
  const fruits = [
    'Apple',
    'Banana',
    'Cherry',
    'Grape',
    'Lemon',
    'Orange',
    'Strawberry',
    'Watermelon',
  ];

  // State to store the search query and filtered fruits
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFruits, setFilteredFruits] = useState([]);

  // Handle input change
  const handleInputChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter fruits based on the search query
    const filtered = fruits.filter((fruit) =>
      fruit.toLowerCase().includes(query)
    );
    setFilteredFruits(filtered);
  };

  return (
    <div>
      <h1>Fruits Search</h1>
      <input
        type="text"
        placeholder="Search for a fruit"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <ul>
        {filteredFruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default FruitsSearch;