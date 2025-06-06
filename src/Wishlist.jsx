import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from './features/wishlistSlice';

const Wishlist = () => {
  const items = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Your Wishlist</h2>
      {items.length === 0 ? (
        <p>Wishlist is empty</p>
      ) : (
        items.map((item, i) => (
          <div key={i} className="flex items-center gap-4 border-b py-4">
            <img src={item.images[0]} alt={item.name} className="w-20 h-20 object-cover" />
            <div>
              <p className="font-semibold">{item.name}</p>
              <p>${item.price}</p>
              <button
                onClick={() => dispatch(removeFromWishlist(item.id))}
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

export default Wishlist;
