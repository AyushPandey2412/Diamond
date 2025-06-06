import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { addToWishlist } from '../features/wishlistSlice';

const ProductActions = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert('Added to Bag');
  };

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
    alert('Added to Wishlist');
  };

  return (
    <div className="flex flex-wrap gap-3 mt-6">
      <button
        onClick={handleAddToCart}
        className="bg-green-800 text-white px-6 py-2 rounded"
      >
        ADD TO BAG
      </button>
      <button className="border px-4 py-2 rounded">DROP A HINT</button>
      <button
        onClick={handleAddToWishlist}
        className="border px-4 py-2 rounded"
      >
        ADD TO WISHLIST
      </button>
    </div>
  );
};

export default ProductActions;
