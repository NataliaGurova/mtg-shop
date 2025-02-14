import axios from "axios";

// axios.defaults.baseURL = "http://hn.algolia.com/api/v1";
// axios.defaults.baseURL = "https://api.magicthegathering.io/v1";
// axios.defaults.baseURL = "https://api.scryfall.com/cards/search?q=*&unique=cards&page=1";

// "https://api.scryfall.com/cards/search?format=json&include_extras=false&include_multilingual=false&include_variations=false&order=name&page=2&q=%2A&unique=cards"

axios.defaults.baseURL = "https://api.scryfall.com/cards";

// export const getCards = async (currentPage) => {
//   const response = await axios.get("/cards", {
//     params: {
//       page: currentPage,
//       pageSize: 20,
//     },
//   });

//   return response.data.cards;
// };
export const getCards = async (page) => {
  const response = await axios.get("/search", {
    params: {
      q: "*",
      unique: "cards",
      // order: "-release_date",
      page: page,
      // total_cards: 20,
    },
  });

  return response.data.data;
};






// export const getArticles = async (topic, currentPage) => {
//   const response = await axios.get("/search", {
//     params: {
//       query: topic,
//       page: currentPage,
//       hitsPerPage: 5,
//     },
//   });

//   return response.data.hits;
// };