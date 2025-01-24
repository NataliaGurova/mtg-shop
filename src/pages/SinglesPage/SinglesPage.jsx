
import CardsList from "../../components/CardsList/CardsList";
import DocumentTitle from "../../components/DocumentTitle";

import css from './SinglesPage.module.css'
import { Toaster } from "react-hot-toast";

import cards from "../../../src/data/output.json"
import Filters from "../../components/Filters/Filters";


const SinglesPage = () => {


  
  return (
    <main className={css.mainContainer}>
      <DocumentTitle>Shop singles</DocumentTitle>
      <div className={css.container}>
        <Filters />
        <CardsList filteredCards={cards}/>
      </div>
      {/* <div className={css.contactList}>
      {error && <b>{error}</b>}
      {isLoading && <b>Loading contacts...</b>}
        {items.length > 0 && <ContactList items={items} />}
      </div> */}
      <Toaster />
    </main>
  )
}

export default SinglesPage;