import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './features/cartSlice';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Your Bag</h2>
      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        items.map((item, i) => (
          <div key={i} className="flex items-center gap-4 border-b py-4">
            <img src={item.images[0]} alt={item.name} className="w-20 h-20 object-cover" />
            <div>
              <p className="font-semibold">{item.name}</p>
              <p>${item.price}</p>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-500 text-sm"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
