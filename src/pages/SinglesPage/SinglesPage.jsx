
import DocumentTitle from "../../components/DocumentTitle";

import css from './SinglesPage.module.css'
import { Toaster } from "react-hot-toast";



const SinglesPage = () => {


  
  return (
    <main className={css.mainContainer}>
      <DocumentTitle>Shop singles</DocumentTitle>
      <div className={css.container}>
<h1>Singles</h1>
      {/* <Filters /> */}
      {/* <CardsList /> */}
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