import React, { useState } from 'react';

function App() {
  const [userPreferences, setUserPreferences] = useState([]);

  // Handle user selections and update preferences
  const handleSelection = (selectedItems) => {
    setUserPreferences([...userPreferences, ...selectedItems]);
  }

  return (
    <div>
      <h1>Service Bundling and Upselling</h1>
      <ServiceSelection onSelect={handleSelection} />
      <SelectedServices preferences={userPreferences} />
    </div>
  );
}

function ServiceSelection({ onSelect }) {
  const [selectedItems, setSelectedItems] = useState([]);

  // Handle item selection
  const handleItemSelect = (item) => {
    setSelectedItems([...selectedItems, item]);
  }

  // Notify parent component about selected items
  useEffect(() => {
    onSelect(selectedItems);
  }, [selectedItems]);

  return (
    <div>
      <h2>Select Services</h2>
      {/* Render service options */}
    </div>
  );
}

function SelectedServices({ preferences }) {
  return (
    <div>
      <h2>Selected Services</h2>
      {/* Render selected services */}
    </div>
  );
}

export default App;
