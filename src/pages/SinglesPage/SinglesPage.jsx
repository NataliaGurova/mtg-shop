
import CardsList from "../../components/CardsList/CardsList";
import DocumentTitle from "../../components/DocumentTitle";

import css from './SinglesPage.module.css'
import { Toaster } from "react-hot-toast";

// import cards from "../../../src/data/output.json"

import { useEffect, useState } from "react";
import Filters from "../../components/Filters/Filters";
import { getCards } from "../../api";
import axios from "axios";
import Loader from "../../components/Loader/Loader";


const SinglesPage = () => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]); // Відфільтровані картки
  const [isError, setIsError] = useState(false); // Стан для обробки помилок
  const [isLoading, setIsLoading] = useState(false); // Стан завантаження
  const [page, setPage] = useState(1);  // Вхідне значення для пошуку карт
  

  const [inputValue, setInputValue] = useState("");
  // const [filteredCards, setFilteredCards] = useState([cards]);
  const [isFoil, setIsFoil] = useState("");
  


  
    useEffect(() => {

    const fetchCards = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const fetchedCardsAll = await getCards(page);
        const fetchedCards = fetchedCardsAll.filter(card => !card.name.includes("A-"))
        setCards(fetchedCards);
        setFilteredCards(fetchedCards); // При завантаженні зберігаємо всі картки
      } catch (error) {
        // setIsError(true);
        console.error("Error loading cards:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCards();
    }, [page]);
  
  // const handleSearch = async () => {
  //   setPage(1);
  //   setCards([]);
  // };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };


 // Функція для оновлення фільтрів
  useEffect(() => {
    if (inputValue.trim() === "") {
      setFilteredCards(cards); // Якщо поле порожнє, повертаємо всі картки
    } else {
      setFilteredCards(
        cards.filter((card) =>
          card.name.toLowerCase().includes(inputValue.trim().toLowerCase())
        )
      );
    }
  }, [inputValue, cards]);
  
//  ============================================ 
  
  
//   // Фільтруємо щоразу при зміні inputValue або cards

//   // useEffect(() => {
// const filterCards = () => {
//     let filtered = [...cards];

//     if (inputValue.trim() !== "") {
//       filtered = filtered.filter(card =>
//         card.name.toLowerCase().includes(inputValue.trim().toLowerCase())
//       );
//     }

//     setCards(filtered);
//   };



  // // Викликати фільтрацію щоразу, коли змінюється inputValue або isFoil
  // useEffect(() => {
  //   filterCards();
  // }, [inputValue]);

  useEffect(() => {
  console.log(cards);
  }, [cards]);

  
  return (
    <main className={css.mainContainer}>
      <DocumentTitle>Shop singles</DocumentTitle>
      <div className={css.container}>
        <Filters onChange={setInputValue} textValue={inputValue} />
        {/* <CardsList cards={filteredCards} /> */}
        {filteredCards.length > 0 && <CardsList cards={filteredCards} onClick={handleLoadMore} isLoading={isLoading} />}
        {isError && <p>Oops! There was an error! Try reloading!</p>}
        {isLoading && <Loader />}
      </div>

        <Toaster />

    </main>
  )
}

export default SinglesPage;





  // useEffect(() => {


  //   const fetchCards = async () => {

  //     const data = await getCards();
  //     setCards(data)
      
  //      //   try {
  //      //     // setIsLoading(true);
  //      //     // setIsError(false);
  //      //     const data = await getCards();
  //      //     setCards(data)
  //      //   } catch (error) {
  //      //     setIsError(true);
  //      //   } finally {
  //      //     setIsLoading(false);
  //      //   }
  //   };

  //   fetchCards();
  // }, []);

    // useEffect(() => {


    //   const fetchCards = async () => {
    //     setIsLoading(true);

    //     // const res = await axios.get("https://api.magicthegathering.io/v1/cards");
    //     const fetchedCards = await getCards();
    //     setCards(fetchedCards);
        
    //   }
    //   fetchCards();
    // }, []);