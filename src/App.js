import React, {createContext, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Products from "./components/Products";
import Card from "./components/Card";
import {data} from "./data"
export const BookContext=createContext();

function App() {
  const  [state,setState]=useState({bookList:data, card:[]})
  const addToCard= (book)=>{  const existingCardItem = state.card.find((cardItem) => cardItem.id === book.id);

  if (existingCardItem) {
    setState({
      ...state,
      card: state.card.map((card) =>
        card.id === book.id ? { ...card, count: card.count + 1 } : card
      ),
    });
  } else {
    setState({
      ...state,
      card: [...state.card, { ...book, count: 1 }],
    });
  }
}
  return (
    <BookContext.Provider value={{state:state, addToCard}}>
       <div className="App p-4">
   <h1 className="font-bold text-lg">Making Shopping Basket</h1>
 
  
         <Routes>
         <Route exact path="/" element={<Products/>} />
      <Route path="/card" element={<Card/>} />
         </Routes>
    </div>
    </BookContext.Provider>
   
  );
}

export default App;
