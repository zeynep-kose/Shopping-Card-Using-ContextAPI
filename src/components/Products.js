import React, { useContext } from "react";
import { BookContext } from "../App";
function Products() {
  const context = useContext(BookContext);
  console.log(context);
  return (
    <div className="flex flex-col gap-4">
      <h2 className="flex items-center justify-between">
        <span className="text-[#ea580c] font-semibold">Book List</span>
        <a href="/card" className="font-semibold text-[#ea580c]">
          My Basket
        </a>
      </h2>
      <div className="grid xl:grid-cols-3 gap-4 md:grid-cols-2 ">
        {context.state.bookList.map((book, index) => (
          <div
            key={index}
            className="flex items-center gap-8 bg-white rounded-lg shadow-md overflow-hidden xl:w-[450px] hover:shadow-lg hover:shadow-blue-200 "
          >
            <img
              className="h-72 w-56 hover:scale-105 scale-90 transform transition-transform duration-300 rounded-md hover:border-gra"
              src={book.image}
              alt={book.name}
            />
            <div className="flex  flex-col gap-4 items-start">
              <h4 className="text-lg font-bold">{book.name}</h4>
              <p className="text-gray-500"> {book?.author}</p>
              <p>
                <span className="text-xl font-semibold text-green-600">
                  &#8364; {book.price}
                </span>{" "}
              </p>
              <button
                onClick={() => context.addToCard(book)}
                className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg"
              >
                Sepete Ekle
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
