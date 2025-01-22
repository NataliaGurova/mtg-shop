// import css from "./ModalDropdown.module.css";
import React, { useState } from "react";
import "./ModalDropdown.css"; // Стилі

const ModalDropdown = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Стан для відкриття/закриття модального вікна
  const [selectedItem, setSelectedItem] = useState(""); // Вибраний елемент

  const items = ["Apple", "Banana", "Cherry", "Mango", "Orange"]; // Приклад списку

  const handleSelectItem = (item) => {
    setSelectedItem(item); // Зберігаємо вибраний елемент
    setIsModalOpen(false); // Закриваємо модальне вікно
  };

  return (
    <div className="modal-dropdown">
      {/* Поле для кліку */}
      <div
        className="dropdown-field"
        onClick={() => setIsModalOpen(true)}
      >
        {selectedItem || "Виберіть елемент"} {/* Відображаємо текст або вибраний елемент */}
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
                  className="modal-item"
                  onClick={() => handleSelectItem(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
            {/* <button
              className="close-button"
              onClick={() => setIsModalOpen(false)}
            >
              Закрити
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalDropdown;