import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Отримуємо шлях до файлу
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "public", "BOK.json");

try {
  // Читаємо JSON-файл
  const data = await fs.promises.readFile(filePath, "utf8");
  const jsonData = JSON.parse(data);

  // Форматуємо JSON
  const formattedJson = JSON.stringify(jsonData, null, 2);

  // Записуємо назад у файл
  await fs.promises.writeFile(filePath, formattedJson, "utf8");
  console.log("✅ JSON-файл відформатовано успішно!");
} catch (err) {
  console.error("❌ Помилка:", err);
}
