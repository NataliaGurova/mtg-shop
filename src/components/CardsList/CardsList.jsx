// import filteredCards from "../../../src/data/output.json"
import CardItem from "../CardItem/CardItem";
import css from "./CardsList.module.css"


const CardsList = ({ filteredCards }) => {
  
  return (
    <ul className={css.listCards}>
      {filteredCards.map((card) => (
        <li key={card.id} >
          <CardItem card={card} />
        </li>
      ))}
    </ul>
  );
};

export default CardsList;
