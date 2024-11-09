import React, { useState } from 'react';

function App() {
  // State to manage if the pepperoni topping is selected
  const [pepperoniIsChecked, setPepperoniIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setPepperoniIsChecked(prevState => !prevState); // Toggle state
  };

  return (
    <div>
      <h1>Select Pizza Toppings</h1>
      <input
        type="checkbox"
        id="pepperoni"
        checked={pepperoniIsChecked} // Controlled checkbox state
        onChange={handleCheckboxChange} // Handle the checkbox change
        aria-checked={pepperoniIsChecked}
      />
      <label htmlFor="pepperoni">Add pepperoni</label>

      <h2>Your Toppings:</h2>
      <ul>
        <li>Cheese</li>
        {pepperoniIsChecked && <li>Pepperoni</li>} {/* Conditionally render pepperoni */}
      </ul>
    </div>
  );
}

export default App;
