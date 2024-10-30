import React, { createContext, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Card from "./components/Card";
import { data } from "./data";
export const BookContext = createContext();

function App() {
  const [state, setState] = useState({
    bookList: data,
    card: JSON.parse(localStorage.getItem("card")) || [],
  });
  const [modalState, setModalState] = useState({});

  useEffect(() => {
    localStorage.setItem("card", JSON.stringify(state.card));
  }, [state.card]);

  const addToCard = (book) => {
    setModalState({ [book.id]: true });
    setTimeout(() => {
      setModalState({
        [book.id]: false,
      });
    }, 2000);
    const existingCardItem = state.card.find(
      (cardItem) => cardItem.id === book.id
    );

    if (existingCardItem) {
      setState((prevState) => ({
        ...prevState,
        card: prevState.card.map((card) =>
          card.id === book.id ? { ...card, count: card.count + 1 } : card
        ),
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        card: [...prevState.card, { ...book, count: 1 }],
      }));
    }
  };

  const increase = (id) => {
    setState({
      ...state,
      card: state.card.map((cardItem) =>
        cardItem.id === id
          ? { ...cardItem, count: cardItem.count + 1 }
          : cardItem
      ),
    });
  };
  const decrease = (id) => {
    setState({
      ...state,
      card: state.card.map((cardItem) =>
        cardItem.id === id
          ? { ...cardItem, count: cardItem.count > 1 ? cardItem.count - 1 : 1 }
          : cardItem
      ),
    });
  };

  const removeFromBasket = (id) => {
    setState({
      ...state,
      card: state.card.filter((cardItem) => cardItem.id !== id),
    });
  };

  return (
    <BookContext.Provider
      value={{
        state: state,
        addToCard,
        increase,
        decrease,
        removeFromBasket,
        modalState,
        setModalState,
      }}
    >
      <div className="App p-4">
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </div>
    </BookContext.Provider>
  );
}

export default App;
