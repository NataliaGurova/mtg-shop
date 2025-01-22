import React, { useState } from "react";
import "./ModalSelect.css"; // Стилі




const ModalSelect = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Стан для відкриття/закриття модального вікна
  const [selectedItems, setSelectedItems] = useState([]); // Масив вибраних елементів

  const items = ["Apple", "Banana", "Cherry", "Mango", "Orange"]; // Приклад списку

  const toggleSelectItem = (item) => {
    if (selectedItems.includes(item)) {
      // Якщо елемент уже вибраний, видаляємо його
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      // Якщо елемента немає, додаємо його
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div className="modal-dropdown">
      {/* Поле для кліку */}
      <div
        className="dropdown-field"
        onClick={() => setIsModalOpen(true)}
      >
        {selectedItems.length > 0
          ? selectedItems.join(", ") // Відображаємо вибрані елементи через кому
          : ""} {/* Якщо нічого не вибрано, поле буде порожнім */}
      </div>

      {/* Модальне вікно */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Зупиняємо закриття при кліку всередині модального вікна
          >
            <ul>
              {items.map((item) => (
                <li
                  key={item}
                  className={`modal-item ${
                    selectedItems.includes(item) ? "selected" : ""
                  }`} // Додаємо клас "selected" для вибраних елементів
                  onClick={() => toggleSelectItem(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
            <button
              className="close-button"
              onClick={() => setIsModalOpen(false)}
            >
              Закрити
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalSelect;

