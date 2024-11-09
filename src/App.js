import React, { useState } from 'react';

function App() {
  // Manage the state for pepperoni topping
  const [pepperoniIsChecked, setPepperoniIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    // Toggle the state when the checkbox is clicked
    setPepperoniIsChecked(prevState => !prevState);
  };

  return (
    <div>
      <h1>Select Pizza Toppings</h1>
      <input
        type="checkbox"
        id="pepperoni"
        checked={pepperoniIsChecked} // Controlled checkbox
        onChange={handleCheckboxChange} // Handle change
        aria-checked={pepperoniIsChecked}
      />
      <label htmlFor="pepperoni">Add pepperoni</label>
      
      <h2>Your Toppings:</h2>
      <ul>
        <li>Cheese</li>
        {pepperoniIsChecked && <li>Pepperoni</li>}
      </ul>
    </div>
  );
}

export default App;
