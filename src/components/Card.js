import React, { useContext } from "react";
import { BookContext } from "../App";

function Card() {
  const context = useContext(BookContext);
  const totalBook = context.state.card.reduce(
    (total, book) => (total = total + book.count),
    0
  );
  console.log(context.state, "lol");
  return (
    <div>
      <h2 className="flex items-center justify-between">
        <a href="/" className="text-[#ea580c] font-semibold">
          Book List
        </a>
        <span className="font-semibold text-[#ea580c]">
          My Basket({totalBook})
        </span>
      </h2>
      <h3>
        Total amount of Basket :
        <span className=" text-lg font-semibold text-green-600">
          &#8364;
          {context.state.card.reduce(
            (total, book) => total + book.price * book.count,
            0
          )}
        </span>{" "}
      </h3>
      <div className="flex flex-col gap-8 mt-4">
        {context.state.card.map((book) => (
          <div className="flex items-center gap-8">
            <img className="h-72 w-56 " src={book.image} alt={book.name} />
            <div className="flex  flex-col gap-6 items-start">
              <h4 className="text-lg font-bold">{book.name}</h4>
              <p className="text-gray-500"> {book?.author}</p>
              <p className="text-xl font-semibold text-green-600">
                {" "}
                &#8364; {(book.price * book.count).toFixed(2)}
              </p>
              <p> There is only {book.count} of this book in your cart.</p>
              <div className="flex items-center gap">
                <button
                  onClick={() => context.decrease(book.id)}
                  className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-l-md"
                >
                  -
                </button>
                <button
                  onClick={() => context.removeFromBasket(book.id)}
                  className="bg-gray-200 text-gray-700 font-bold py-2 px-4 "
                >
                  Remove
                </button>
                <button
                  onClick={() => context.increase(book.id)}
                  className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-r-md"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
