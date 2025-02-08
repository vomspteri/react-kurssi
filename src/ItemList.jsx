import { useState } from "react";

function ItemList() {
    const [items, setItems] = useState(["Banaani", "Omena", "Appelsiini"]);
  const [newItem, setNewItem] = useState(""); // Syöttökentän arvo

  function addItem() {
    if (newItem.trim() !== "") { // Estetään tyhjien arvojen lisääminen
      setItems([...items, newItem]);
      setNewItem(""); // Tyhjennetään syöttökenttä
    }
  }

  return (
    <div>
      <h2>Lista:</h2>
      <input 
        type="text" 
        value={newItem} 
        onChange={(e) => setNewItem(e.target.value)} 
        placeholder="Lisää uusi kohde"
      />
      <button onClick={addItem}>Lisää</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li> // Huom! `key` on tärkeä Reactille
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
