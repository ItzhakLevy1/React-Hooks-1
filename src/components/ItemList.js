import React, { useState } from "react";

const ItemList = () => {
  // State for the current input value
  const [item, setItem] = useState("");

  // State for the array of submitted items
  const [items, setItems] = useState([]);

  // State to track which item is being edited (by index)
  const [editingIndex, setEditingIndex] = useState(null);

  // State for the edit input value
  const [editValue, setEditValue] = useState("");

  // Function to handle submit
  const handleSubmit = () => {
    // Check that the edited value is not just empty spaces
    if (item.trim()) {
      // Add the new item to the list in addition to all existing items
      setItems([...items, item]);
      // Clear the input
      setItem("");
    }
  };

  // Handle Enter key press for adding new items
  const handleKeySubmit = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  // Function to delete an item by index
  const handleDelete = (index) => {
    //  Delete item by index - Remove item from list by creating a new array with all items except the one at the specified index
    setItems(items.filter((item, i) => i !== index));
  };

  // Function to start editing an item
  const handleEdit = (index) => {
    setEditingIndex(index); // Store the index of the item currently being edited
    setEditValue(items[index]); // Pre-fill the input field with the current value of the item
  };

  // Function to save the edited item
  const handleSaveEdit = (index) => {
    // Check that the edited value is not just empty spaces
    if (editValue.trim()) {
      const updatedItems = [...items]; // Make a copy of the items array
      updatedItems[index] = editValue; // Replace the old value with the new edited value
      setItems(updatedItems); // Update the state with the new array
    }
    // Reset editing state after saving
    setEditingIndex(null); // Clear the index, so no item is in editing mode
    setEditValue(""); // Clear the temporary edit value
  };

  // Function to cancel editing
  const handleCancelEdit = () => {
    setEditingIndex(null); // Exit editing mode by resetting the index
    setEditValue(""); // Clear the edit input value
  };

  // Handle key press events while editing
  const handleEditKeyPress = (e, index) => {
    // If user presses Enter, save the changes
    if (e.key === "Enter") {
      handleSaveEdit(index);
      // If user presses Escape, cancel editing
    } else if (e.key === "Escape") {
      handleCancelEdit();
    }
  };

  return (
    <div>
      <h2>List Of Items:</h2>

      <input
        type="text"
        placeholder="Add An Item..."
        value={item} // controlled input
        onChange={(e) => setItem(e.target.value)}
        onKeyDown={handleKeySubmit}
      />
      <button onClick={handleSubmit} disabled={!item.trim()}>
        Submit
      </button>

      {/* Render the list of items */}
      <ul>
        {items.map(
          (
            item,
            index // Loop through all items in the "items" array
          ) => (
            <li key={index}>
              {/* Each item gets a unique "key" (the index in this case) */}
              {editingIndex === index ? ( // Check: is the current item being edited?
                // Edit mode
                <>
                  <input
                    type="text"
                    value={editValue} // Controlled input: shows the current edit value
                    onChange={(e) => setEditValue(e.target.value)} // Update "editValue" as the user types
                    onKeyDown={(e) => handleEditKeyPress(e, index)} // Handle Enter (save) or Escape (cancel)
                    autoFocus // Automatically focus the input when entering edit mode
                  />
                  {/* Save changes button */}
                  <button onClick={() => handleSaveEdit(index)}>Save</button>
                  {/* Cancel editing button */}
                  <button onClick={handleCancelEdit}>Cancel</button>
                </>
              ) : (
                // View mode
                <>
                  <span>{item}</span> {/* Display the item text */}
                  {/* Switch to edit mode for this item by clicking the button */}
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  {/* Delete this item by clicking the button */}
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </>
              )}
            </li>
          )
        )}
      </ul>
      {/* If there are no items display the no items message */}
      {items.length === 0 && <p>No items yet. Add some!</p>}
    </div>
  );
};

export default ItemList;
