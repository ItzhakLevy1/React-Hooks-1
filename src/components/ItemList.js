import React, { useState } from "react";

const ItemList = () => {
  // State for the current input value
  const [item, setItem] = useState("");

  // State for the array of submitted items
  const [items, setItems] = useState([]);

  // Function to handle submit
  const handleSubmit = () => {
    if (item.trim()) {
      // Add the new item to the list
      setItems([...items, item]);
      // Clear the input
      setItem("");
    }
  };

  // Handle Enter key press
  const handleKeySubmit = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  // Function to delete an item by index
  const handleDelete = (index) => {
    //  Delete item by index
    setItems(items.filter((item, i) => i !== index)); // Remove item from list by creating a new array with all items except the one at the deleted index
  };

  return (
    <div>
      <h2>List Of Items:</h2>

      <input
        type="text"
        placeholder="Add An Item..."
        value={item} // controlled input
        onChange={(e) => setItem(e.target.value)}
        onKeyPress={handleKeySubmit}
      />
      <button onClick={handleSubmit} disabled={!item.trim()}>
        Submit
      </button>

      {/* Render the list */}
      <ul>
        {/* Loop through each item in the items array and render a list item */}
        {items.map((item, index) => (
          <li key={index}>
            {/* Display the item text */}
            {item}
            {/* Delete button that removes this specific item when clicked */}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
