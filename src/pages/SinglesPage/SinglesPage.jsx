
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DocumentTitle from "../../components/DocumentTitle";
// import ContactList from "../../components/ContactList/ContactList"
// import SearchBox from "../../components/Search/Search"
// import ContactForm from "../../components/ContactForm/ContactForm"
import { fetchContacts } from '../../redux/contacts/operations';
import { selectContacts, selectError, selectIsLoading } from '../../redux/contacts/selectors';
import css from './SinglesPage.module.css'
import { Toaster } from "react-hot-toast";

import CardsList from "../../components/CardsList/CardsList";
// import Filters from "../../components/Filters/Filters";
// import Filter from "../../components/Filter/Filter";
// import SearchCards from "../../components/SearchCards/SearchCards";
import cards from "../../../src/data/output.json"
import { useState } from "react";


const SinglesPage = () => {
  
  const dispatch = useDispatch();
  // const { items, isLoading, error } = useSelector(selectContacts);
  const items = useSelector(selectContacts)
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);



  
  // Фільтруєм foil notFoil

   const [searchCard, setSearchCard] = useState([]); 
  const [filteredCards, setFilteredCards] = useState(cards);


  const handleSearchChange = (e) => {
    const newCard = e.target.value;
    setSearchCard(newCard);

    const filtered = cards.filter(card =>
      card.name.toLowerCase().includes(newCard.toLowerCase())
    );
    setFilteredCards(filtered);
    console.log(filteredCards);
    
  };
// --------------------------
  
  
  
  return (
    <main className={css.mainContainer}>
      <DocumentTitle>Shop singles</DocumentTitle>
      <div className={css.container}>

      {/* <Filters onChange={handleSearchChange} searchCard={searchCard}/> */}
      <CardsList filteredCards={filteredCards} />
      </div>
      {/* <div className={css.contactList}>
      {error && <b>{error}</b>}
      {isLoading && <b>Loading contacts...</b>}
      </div> */}
      <Toaster />
    </main>
  )
}

export default SinglesPage;