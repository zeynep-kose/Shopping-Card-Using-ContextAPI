import React,{useContext} from 'react'
import { BookContext } from '../App';

function Card() {
  const context=useContext(BookContext);
console.log(context.state.card,'lol')
  return (
    <div>
      <h2 className='flex items-center justify-between'>
        <a href='/' >Book List</a>
        <span >My Basket</span>
      </h2>
      <h3>Total amount of Basket :&#8364;19.00</h3>
      {context.state.card.map((book)=>(<div className='flex items-center gap-8'>
        <img
        className='h-72'
        src={book.image}
        alt={book.name}
        />
        <div className='flex  flex-col gap-6 items-start'>
        <h4>{book.name}</h4>
        <p>{book?.author}</p>
        <p>Fiyat: &#8378; {book.price* book.count}</p>
          <p> There is only {book.count} 1 of this book in your cart.</p>
         <div className='flex items-center'>
         <button className='bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-l'>-</button>
          <button className='bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-l'>Remove</button>
          <button className='bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-l'>+</button>
         </div>
        </div>
        </div>))}

    </div>
  )
}

export default Card