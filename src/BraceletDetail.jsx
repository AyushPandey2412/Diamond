
// import React from "react";
// import { useParams, Link } from "react-router-dom";


// const data = [
//   {
//     id: 4,
//     name: "Azura Sapphire and Diamond Bracelet (1/2 ct. tw.) in 18K White Gold",
//     price: 3595,
//     images: [
//       "/bracelet1.jpg",
//       "/bracelet2.jpg",
//       "/bracelet3.jpg"
//     ],
//     sizes: ["6\"", "6.5\"", "7\"", "7.5\""],
//     weights: [1, 2, 3, 4, 5, 7],
//     metals: ["rose-gold", "white-gold", "yellow-gold"],
//     metalName: "18K White Gold",
//     caratWeight: "1 ct. tw."
//   },
//   {
//     id: 2,
//     name: "Azura Sapphire and Diamond Bracelet (1/2 ct. tw.) in 18K White Gold",
//     price: 3595,
//     images: [
//       "/bracelet1.jpg",
//       "/bracelet2.jpg",
//       "/bracelet3.jpg"
//     ],
//     sizes: ["6\"", "6.5\"", "7\"", "7.5\""],
//     weights: [1, 2, 3, 4, 5, 7],
//     metals: ["rose-gold", "white-gold", "yellow-gold"],
//     metalName: "18K White Gold",
//     caratWeight: "1 ct. tw."
//   },
//   {
//     id: 3,
//     name: "Azura Sapphire and Diamond Bracelet (1/2 ct. tw.) in 18K White Gold",
//     price: 3595,
//     images: [
//       "/bracelet1.jpg",
//       "/bracelet2.jpg",
//       "/bracelet3.jpg"
//     ],
//     sizes: ["6\"", "6.5\"", "7\"", "7.5\""],
//     weights: [1, 2, 3, 4, 5, 7],
//     metals: ["rose-gold", "white-gold", "yellow-gold"],
//     metalName: "18K White Gold",
//     caratWeight: "1 ct. tw."
//   },
//   {
//     id: 1,
//     name: "Azura Sapphire and Diamond Bracelet (1/2 ct. tw.) in 18K White Gold",
//     price: 3595,
//     images: [
//       "/bracelet1.jpg",
//       "/bracelet2.jpg",
//       "/bracelet3.jpg"
//     ],
//     sizes: ["6\"", "6.5\"", "7\"", "7.5\""],
//     weights: [1, 2, 3, 4, 5, 7],
//     metals: ["rose-gold", "white-gold", "yellow-gold"],
//     metalName: "18K White Gold",
//     caratWeight: "1 ct. tw."
//   },
// ];



// const BraceletDetail = () => {
//   const { id } = useParams();
//   const product = data.find((item) => item.id.toString() === id);

//   return (
//     <div className="bg-stone-50 min-h-screen p-6 text-gray-800">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-sm text-gray-600 mb-4">
//           <Link to="/" className="hover:underline text-inherit">Home</Link> / Bracelets / Tennis / {product.name}
//         </div>
//         <div className="flex flex-col lg:flex-row gap-10">
//           {/* Left images */}
//           <div className="flex flex-col gap-4 w-full lg:w-1/2">
//             <div className="border rounded p-2">
//               <img src={product.images[0]} alt={product.name} className="w-full" />
//             </div>
//             <div className="grid grid-cols-3 gap-2">
//               {product.images.map((img, i) => (
//                 <img key={i} src={img} alt="thumb" className="rounded border h-20 object-cover" />
//               ))}
//             </div>
//           </div>

//           {/* Right content */}
//           <div className="w-full lg:w-1/2 space-y-6">
//             <h2 className="text-xl font-semibold">{product.name}</h2>
//             <p className="text-2xl font-bold">${product.price}</p>

//             <div>
//               <p className="text-sm">Total Carat Weight: {product.caratWeight}</p>
//               <div className="flex gap-2 mt-2">
//                 {product.weights.map((w) => (
//                   <button key={w} className="px-3 py-1 border rounded text-sm hover:bg-stone-100">
//                     {w}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <p className="text-sm">Size:</p>
//               <div className="flex gap-2 mt-2">
//                 {product.sizes.map((s) => (
//                   <button key={s} className="px-3 py-1 border rounded text-sm hover:bg-stone-100">
//                     {s}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <p className="text-sm">Metal: {product.metalName}</p>
//               <div className="flex gap-2 mt-2">
//                 {product.metals.map((m) => (
//                   <div
//                     key={m}
//                     className={`w-6 h-6 rounded-full border ${
//                       m === "white-gold"
//                         ? "bg-gray-200"
//                         : m === "rose-gold"
//                         ? "bg-rose-300"
//                         : "bg-yellow-300"
//                     }`}
//                   ></div>
//                 ))}
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-3 mt-6">
//               <button className="bg-green-800 text-white px-6 py-2 rounded">ADD TO BAG</button>
//               <button className="border px-4 py-2 rounded">DROP A HINT</button>
//               <button className="border px-4 py-2 rounded">ADD TO WISHLIST</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BraceletDetail;





// import React, { useState } from "react";
// import { useParams, Link } from "react-router-dom";

// const data = [
//   {
//     id: 1,
//     name: "Azura Sapphire and Diamond Bracelet (1/2 ct. tw.) in 18K White Gold",
//     price: 3595,
//     images: ["/bracelet1.jpg", "/bracelet2.jpg", "/bracelet3.jpg"],
//     sizes: ['6"', '6.5"', '7"', '7.5"'],
//     weights: [1, 2, 3, 4, 5, 7],
//     metals: ["rose-gold", "white-gold", "yellow-gold"],
//     metalName: "18K White Gold",
//     caratWeight: "1 ct. tw.",
//   },
//   {
//     id: 3,
//     name: "Azura Sapphire and Diamond Bracelet (1/2 ct. tw.) in 18K White Gold",
//     price: 3595,
//     images: ["/bracelet1.jpg", "/bracelet2.jpg", "/bracelet3.jpg"],
//     sizes: ['6"', '6.5"', '7"', '7.5"'],
//     weights: [1, 2, 3, 4, 5, 7],
//     metals: ["rose-gold", "white-gold", "yellow-gold"],
//     metalName: "18K White Gold",
//     caratWeight: "1 ct. tw.",
//   },
//   {
//     id: 4,
//     name: "Azura Sapphire and Diamond Bracelet (1/2 ct. tw.) in 18K White Gold",
//     price: 3595,
//     images: ["/bracelet1.jpg", "/bracelet2.jpg", "/bracelet3.jpg"],
//     sizes: ['6"', '6.5"', '7"', '7.5"'],
//     weights: [1, 2, 3, 4, 5, 7],
//     metals: ["rose-gold", "white-gold", "yellow-gold"],
//     metalName: "18K White Gold",
//     caratWeight: "1 ct. tw.",
//   },
//   // ... other products
// ];

// const BraceletDetail = () => {
//   const { id } = useParams();
//   const product = data.find((item) => item.id.toString() === id);

//   const [selectedWeight, setSelectedWeight] = useState(product.weights[0]);
//   const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
//   const [cart, setCart] = useState([]);
//   const [wishlist, setWishlist] = useState([]);

//   const handleAddToCart = () => {
//     const item = {
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       size: selectedSize,
//       weight: selectedWeight,
//       metal: product.metalName,
//       image: product.images[0],
//     };
//     setCart((prev) => [...prev, item]);
//     alert("Item added to bag!");
//   };

//   const handleAddToWishlist = () => {
//     setWishlist((prev) => [...prev, product.id]);
//     alert("Item added to wishlist!");
//   };

//   const handleDropHint = () => {
//     alert("We'll send a subtle hint to your special someone! 😉");
//   };

//   return (
//     <div className="bg-stone-50 min-h-screen p-6 text-gray-800">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-sm text-gray-600 mb-4">
//           <Link to="/" className="hover:underline text-inherit">
//             Home
//           </Link>{" "}
//           / Bracelets / Tennis / {product.name}
//         </div>

//         <div className="flex flex-col lg:flex-row gap-10">
//           {/* Images */}
//           <div className="flex flex-col gap-4 w-full lg:w-1/2">
//             <div className="border rounded p-2">
//               <img src={product.images[0]} alt={product.name} className="w-full" />
//             </div>
//             <div className="grid grid-cols-3 gap-2">
//               {product.images.map((img, i) => (
//                 <img key={i} src={img} alt="thumb" className="rounded border h-20 object-cover" />
//               ))}
//             </div>
//           </div>

//           {/* Details */}
//           <div className="w-full lg:w-1/2 space-y-6">
//             <h2 className="text-xl font-semibold">{product.name}</h2>
//             <p className="text-2xl font-bold">${product.price}</p>

//             <div>
//               <p className="text-sm">Total Carat Weight: {product.caratWeight}</p>
//               <div className="flex gap-2 mt-2">
//                 {product.weights.map((w) => (
//                   <button
//                     key={w}
//                     onClick={() => setSelectedWeight(w)}
//                     className={`px-3 py-1 border rounded text-sm hover:bg-stone-100 ${
//                       selectedWeight === w ? "bg-stone-200" : ""
//                     }`}
//                   >
//                     {w}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <p className="text-sm">Size:</p>
//               <div className="flex gap-2 mt-2">
//                 {product.sizes.map((s) => (
//                   <button
//                     key={s}
//                     onClick={() => setSelectedSize(s)}
//                     className={`px-3 py-1 border rounded text-sm hover:bg-stone-100 ${
//                       selectedSize === s ? "bg-stone-200" : ""
//                     }`}
//                   >
//                     {s}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <p className="text-sm">Metal: {product.metalName}</p>
//               <div className="flex gap-2 mt-2">
//                 {product.metals.map((m) => (
//                   <div
//                     key={m}
//                     className={`w-6 h-6 rounded-full border ${
//                       m === "white-gold"
//                         ? "bg-gray-200"
//                         : m === "rose-gold"
//                         ? "bg-rose-300"
//                         : "bg-yellow-300"
//                     }`}
//                     title={m}
//                   ></div>
//                 ))}
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-3 mt-6">
//               <button onClick={handleAddToCart} className="bg-green-800 text-white px-6 py-2 rounded">
//                 ADD TO BAG
//               </button>
//               <button onClick={handleDropHint} className="border px-4 py-2 rounded">
//                 DROP A HINT
//               </button>
//               <button onClick={handleAddToWishlist} className="border px-4 py-2 rounded">
//                 ADD TO WISHLIST
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BraceletDetail;



// import React, { useState } from "react";
// import { Heart, MessageCircle } from "lucide-react";

// const data = [
//   {
//     id: 1,
//     name: "AZURA SAPPHIRE AND DIAMOND BRACELET (1/2 CT. TW.) IN 18K WHITE GOLD",
//     price: 3595,
//     images: [
//       "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80",
//       "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80",
//       "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80"
//     ],
//     sizes: ['6"', '6.5"', '7"', '7.5"'],
//     weights: [1, 2, 3, 4, 5, 7],
//     metals: ["rose-gold", "white-gold", "yellow-gold"],
//     metalName: "18K White Gold",
//     caratWeight: "1 ct. tw",
//   },
//   {
//     id: 2,
//     name: "ROUND LAB DIAMOND TENNIS BRACELET (3 CT. TW.) IN 18K WHITE GOLD",
//     price: 2995,
//     images: [
//       "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80",
//       "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80",
//       "https://images.unsplash.com/photo-1572472257812-2256ee78d87c?auto=format&fit=crop&w=600&q=80"
//     ],
//     sizes: ['6"', '6.5"', '7"', '7.5"'],
//     weights: [1, 2, 3, 4, 5, 7],
//     metals: ["rose-gold", "white-gold", "yellow-gold"],
//     metalName: "18K White Gold",
//     caratWeight: "3 ct. tw",
//   },
//   {
//     id: 3,
//     name: "OLIVETTA LAB DIAMOND TENNIS BRACELET (2 3/4 CT. TW.)",
//     price: 7000,
//     images: [
//       "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80",
//       "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80",
//       "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80"
//     ],
//     sizes: ['6"', '6.5"', '7"', '7.5"'],
//     weights: [1, 2, 3, 4, 5, 7],
//     metals: ["rose-gold", "white-gold", "yellow-gold"],
//     metalName: "18K White Gold",
//     caratWeight: "2 3/4 ct. tw",
//   }
// ];

// const BraceletDetail = () => {
//   // For demo purposes, using the first product. In real app, you'd get ID from URL
//   const [currentProductId] = useState(1);
//   const product = data.find((item) => item.id === currentProductId);
  
//   const [selectedWeight, setSelectedWeight] = useState(product.weights[0]);
//   const [selectedSize, setSelectedSize] = useState(product.sizes[2]); // Default to 7"
//   const [selectedMetal, setSelectedMetal] = useState("white-gold");
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);
//   const [isWishlisted, setIsWishlisted] = useState(false);

//   const handleAddToCart = () => {
//     const item = {
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       size: selectedSize,
//       weight: selectedWeight,
//       metal: product.metalName,
//       image: product.images[0],
//     };
//     console.log("Added to cart:", item);
//     alert("Item added to bag!");
//   };

//   const handleAddToWishlist = () => {
//     setIsWishlisted(!isWishlisted);
//     alert(isWishlisted ? "Removed from wishlist!" : "Added to wishlist!");
//   };

//   const handleDropHint = () => {
//     alert("We'll send a subtle hint to your special someone! 😉");
//   };

//   const getMetalColor = (metal) => {
//     const colorMap = {
//       'rose-gold': 'bg-rose-300 border-rose-400',
//       'white-gold': 'bg-gray-100 border-gray-300',
//       'yellow-gold': 'bg-yellow-300 border-yellow-400'
//     };
//     return colorMap[metal] || 'bg-gray-200 border-gray-300';
//   };

//   const formatPrice = (price) => {
//     return new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD',
//       minimumFractionDigits: 0
//     }).format(price);
//   };

//   if (!product) {
//     return <div className="min-h-screen bg-stone-50 flex items-center justify-center">Product not found</div>;
//   }

//   return (
//     <div className="bg-stone-50 min-h-screen">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         {/* Breadcrumb */}
//         <div className="text-sm text-gray-600 mb-6">
//           <span 
//             className="hover:underline cursor-pointer"
//             onClick={() => window.location.href = '/'}
//           >
//             Home
//           </span>
//           <span className="mx-2">/</span>
//           <span 
//             className="hover:underline cursor-pointer"
//             onClick={() => window.location.href = '/bracelets'}
//           >
//             Bracelets
//           </span>
//           <span className="mx-2">/</span>
//           <span>Tennis</span>
//           <span className="mx-2">/</span>
//           <span>Azura Sapphire and Diamond Bracelet</span>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
//           {/* Image Gallery */}
//           <div className="space-y-4">
//             {/* Main Image */}
//             <div className="bg-white rounded-lg p-4 shadow-sm">
//               <div className="aspect-square flex items-center justify-center">
//                 <img 
//                   src={product.images[selectedImageIndex]} 
//                   alt={product.name} 
//                   className="max-w-full max-h-full object-contain"
//                 />
//               </div>
//             </div>
            
//             {/* Thumbnail Images */}
//             <div className="grid grid-cols-3 gap-3">
//               {product.images.map((img, index) => (
//                 <div 
//                   key={index}
//                   className={`bg-white rounded-lg p-2 shadow-sm cursor-pointer transition-all hover:shadow-md ${
//                     selectedImageIndex === index ? 'ring-2 ring-gray-400' : ''
//                   }`}
//                   onClick={() => setSelectedImageIndex(index)}
//                 >
//                   <div className="aspect-square flex items-center justify-center">
//                     <img 
//                       src={img} 
//                       alt={`View ${index + 1}`} 
//                       className="max-w-full max-h-full object-contain"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Product Details */}
//           <div className="space-y-6">
//             {/* Wishlist Button */}
//             <div className="flex justify-end">
//               <button
//                 onClick={handleAddToWishlist}
//                 className="p-2 rounded-full hover:bg-gray-100 transition-colors"
//                 aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
//               >
//                 <Heart 
//                   size={24} 
//                   className={`${
//                     isWishlisted 
//                       ? 'fill-red-500 text-red-500' 
//                       : 'text-gray-400 hover:text-red-500'
//                   } transition-colors`} 
//                 />
//               </button>
//             </div>

//             {/* Product Title */}
//             <div>
//               <h1 className="text-xl sm:text-2xl font-medium text-gray-800 leading-tight mb-4">
//                 {product.name}
//               </h1>
//               <p className="text-2xl sm:text-3xl font-semibold text-gray-900">
//                 {formatPrice(product.price)}
//               </p>
//             </div>

//             {/* Total Carat Weight */}
//             <div>
//               <p className="text-sm font-medium text-gray-700 mb-3">
//                 Total Carat Weight: {product.caratWeight}
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {product.weights.map((weight) => (
//                   <button
//                     key={weight}
//                     onClick={() => setSelectedWeight(weight)}
//                     className={`px-4 py-2 border rounded-sm text-sm font-medium transition-colors ${
//                       selectedWeight === weight 
//                         ? "bg-gray-200 border-gray-400 text-gray-800" 
//                         : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
//                     }`}
//                   >
//                     {weight}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Size Selection */}
//             <div>
//               <p className="text-sm font-medium text-gray-700 mb-3">Size: 7"</p>
//               <div className="flex flex-wrap gap-2">
//                 {product.sizes.map((size) => (
//                   <button
//                     key={size}
//                     onClick={() => setSelectedSize(size)}
//                     className={`px-4 py-2 border rounded-sm text-sm font-medium transition-colors ${
//                       selectedSize === size 
//                         ? "bg-gray-200 border-gray-400 text-gray-800" 
//                         : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
//                     }`}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Metal Selection */}
//             <div>
//               <p className="text-sm font-medium text-gray-700 mb-3">
//                 Metal: {product.metalName}
//               </p>
//               <div className="flex gap-3">
//                 {product.metals.map((metal) => (
//                   <button
//                     key={metal}
//                     onClick={() => setSelectedMetal(metal)}
//                     className={`w-8 h-8 rounded-full border-2 transition-all hover:scale-110 ${
//                       getMetalColor(metal)
//                     } ${
//                       selectedMetal === metal ? 'ring-2 ring-gray-400 ring-offset-2' : ''
//                     }`}
//                     title={metal.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="space-y-4 pt-4">
//               <button 
//                 onClick={handleAddToCart}
//                 className="w-full bg-green-800 hover:bg-green-900 text-white font-medium py-3 px-6 rounded-sm transition-colors"
//               >
//                 ADD TO BAG
//               </button>
              
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 <button 
//                   onClick={handleDropHint}
//                   className="flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-sm transition-colors"
//                 >
//                   <MessageCircle size={16} />
//                   DROP A HINT
//                 </button>
                
//                 <button 
//                   onClick={handleAddToWishlist}
//                   className="flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-sm transition-colors"
//                 >
//                   <Heart size={16} />
//                   ADD TO WISHLIST
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BraceletDetail;



// import React, { useState } from "react";
// import { Heart, MessageCircle, X, Check } from "lucide-react";

// const data = [
//   {
//     id: 1,
//     name: "AZURA SAPPHIRE AND DIAMOND BRACELET (1/2 CT. TW.) IN 18K WHITE GOLD",
//     price: 3595,
//     images: [
//       "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80",
//       "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80",
//       "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80"
//     ],
//     sizes: ['6"', '6.5"', '7"', '7.5"'],
//     weights: [1, 2, 3, 4, 5, 7],
//     metals: ["rose-gold", "white-gold", "yellow-gold"],
//     metalName: "18K White Gold",
//     caratWeight: "1 ct. tw",
//   },
//   {
//     id: 2,
//     name: "ROUND LAB DIAMOND TENNIS BRACELET (3 CT. TW.) IN 18K WHITE GOLD",
//     price: 2995,
//     images: [
//       "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80",
//       "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80",
//       "https://images.unsplash.com/photo-1572472257812-2256ee78d87c?auto=format&fit=crop&w=600&q=80"
//     ],
//     sizes: ['6"', '6.5"', '7"', '7.5"'],
//     weights: [1, 2, 3, 4, 5, 7],
//     metals: ["rose-gold", "white-gold", "yellow-gold"],
//     metalName: "18K White Gold",
//     caratWeight: "3 ct. tw",
//   },
//   {
//     id: 3,
//     name: "OLIVETTA LAB DIAMOND TENNIS BRACELET (2 3/4 CT. TW.)",
//     price: 7000,
//     images: [
//       "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80",
//       "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80",
//       "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80"
//     ],
//     sizes: ['6"', '6.5"', '7"', '7.5"'],
//     weights: [1, 2, 3, 4, 5, 7],
//     metals: ["rose-gold", "white-gold", "yellow-gold"],
//     metalName: "18K White Gold",
//     caratWeight: "2 3/4 ct. tw",
//   }
// ];

// // Message component
// const MessageBox = ({ message, type, onClose }) => {
//   if (!message) return null;
  
//   const bgColor = type === 'success' ? 'bg-green-50 border-green-200' : 'bg-blue-50 border-blue-200';
//   const textColor = type === 'success' ? 'text-green-800' : 'text-blue-800';
//   const iconColor = type === 'success' ? 'text-green-500' : 'text-blue-500';
  
//   return (
//     <div className={`fixed top-4 right-4 z-50 ${bgColor} border rounded-lg p-4 shadow-lg max-w-sm`}>
//       <div className="flex items-start gap-3">
//         <div className={`flex-shrink-0 ${iconColor}`}>
//           {type === 'success' ? <Check size={20} /> : <MessageCircle size={20} />}
//         </div>
//         <div className="flex-1">
//           <p className={`text-sm font-medium ${textColor}`}>
//             {message}
//           </p>
//         </div>
//         <button
//           onClick={onClose}
//           className={`flex-shrink-0 ${textColor} hover:opacity-70 transition-opacity`}
//         >
//           <X size={16} />
//         </button>
//       </div>
//     </div>
//   );
// };

// const BraceletDetail = () => {
//   // For demo purposes, using the first product. In real app, you'd get ID from URL
//   const [currentProductId] = useState(1);
//   const product = data.find((item) => item.id === currentProductId);
  
//   const [selectedWeight, setSelectedWeight] = useState(product.weights[0]);
//   const [selectedSize, setSelectedSize] = useState(product.sizes[2]); // Default to 7"
//   const [selectedMetal, setSelectedMetal] = useState("white-gold");
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);
//   const [isWishlisted, setIsWishlisted] = useState(false);
//   const [message, setMessage] = useState(null);
//   const [messageType, setMessageType] = useState('success');

//   const showMessage = (text, type = 'success') => {
//     setMessage(text);
//     setMessageType(type);
//     // Auto-hide message after 4 seconds
//     setTimeout(() => {
//       setMessage(null);
//     }, 4000);
//   };

//   const handleAddToCart = () => {
//     const item = {
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       size: selectedSize,
//       weight: selectedWeight,
//       metal: product.metalName,
//       image: product.images[0],
//     };
//     console.log("Added to cart:", item);
//     showMessage("Item successfully added to your bag!", 'success');
//   };

//   const handleAddToWishlist = () => {
//     setIsWishlisted(!isWishlisted);
//     const message = isWishlisted ? "Removed from your wishlist" : "Added to your wishlist";
//     showMessage(message, 'success');
//   };

//   const handleDropHint = () => {
//     showMessage("We'll send a subtle hint to your special someone! 😉", 'info');
//   };

//   const getMetalColor = (metal) => {
//     const colorMap = {
//       'rose-gold': 'bg-rose-300 border-rose-400',
//       'white-gold': 'bg-gray-100 border-gray-300',
//       'yellow-gold': 'bg-yellow-300 border-yellow-400'
//     };
//     return colorMap[metal] || 'bg-gray-200 border-gray-300';
//   };

//   const formatPrice = (price) => {
//     return new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD',
//       minimumFractionDigits: 0
//     }).format(price);
//   };

//   if (!product) {
//     return <div className="min-h-screen bg-stone-50 flex items-center justify-center">Product not found</div>;
//   }

//   return (
//     <div className="bg-stone-50 min-h-screen">
//       {/* Message Box */}
//       <MessageBox 
//         message={message} 
//         type={messageType} 
//         onClose={() => setMessage(null)} 
//       />
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         {/* Breadcrumb */}
//         <div className="text-sm text-gray-600 mb-6">
//           <span 
//             className="hover:underline cursor-pointer"
//             onClick={() => window.location.href = '/'}
//           >
//             Home
//           </span>
//           <span className="mx-2">/</span>
//           <span 
//             className="hover:underline cursor-pointer"
//             onClick={() => window.location.href = '/bracelets'}
//           >
//             Bracelets
//           </span>
//           <span className="mx-2">/</span>
//           <span>Tennis</span>
//           <span className="mx-2">/</span>
//           <span>Azura Sapphire and Diamond Bracelet</span>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
//           {/* Image Gallery */}
//           <div className="space-y-4">
//             {/* Main Image */}
//             <div className="bg-white rounded-lg p-4 shadow-sm">
//               <div className="aspect-square flex items-center justify-center">
//                 <img 
//                   src={product.images[selectedImageIndex]} 
//                   alt={product.name} 
//                   className="max-w-full max-h-full object-contain"
//                 />
//               </div>
//             </div>
            
//             {/* Thumbnail Images */}
//             <div className="grid grid-cols-3 gap-3">
//               {product.images.map((img, index) => (
//                 <div 
//                   key={index}
//                   className={`bg-white rounded-lg p-2 shadow-sm cursor-pointer transition-all hover:shadow-md ${
//                     selectedImageIndex === index ? 'ring-2 ring-gray-400' : ''
//                   }`}
//                   onClick={() => setSelectedImageIndex(index)}
//                 >
//                   <div className="aspect-square flex items-center justify-center">
//                     <img 
//                       src={img} 
//                       alt={`View ${index + 1}`} 
//                       className="max-w-full max-h-full object-contain"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Product Details */}
//           <div className="space-y-6">
//             {/* Wishlist Button */}
//             <div className="flex justify-end">
//               <button
//                 onClick={handleAddToWishlist}
//                 className="p-2 rounded-full hover:bg-gray-100 transition-colors"
//                 aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
//               >
//                 <Heart 
//                   size={24} 
//                   className={`${
//                     isWishlisted 
//                       ? 'fill-red-500 text-red-500' 
//                       : 'text-gray-400 hover:text-red-500'
//                   } transition-colors`} 
//                 />
//               </button>
//             </div>

//             {/* Product Title */}
//             <div>
//               <h1 className="text-xl sm:text-2xl font-medium text-gray-800 leading-tight mb-4">
//                 {product.name}
//               </h1>
//               <p className="text-2xl sm:text-3xl font-semibold text-gray-900">
//                 {formatPrice(product.price)}
//               </p>
//             </div>

//             {/* Total Carat Weight */}
//             <div>
//               <p className="text-sm font-medium text-gray-700 mb-3">
//                 Total Carat Weight: {product.caratWeight}
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {product.weights.map((weight) => (
//                   <button
//                     key={weight}
//                     onClick={() => setSelectedWeight(weight)}
//                     className={`px-4 py-2 border rounded-sm text-sm font-medium transition-colors ${
//                       selectedWeight === weight 
//                         ? "bg-gray-200 border-gray-400 text-gray-800" 
//                         : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
//                     }`}
//                   >
//                     {weight}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Size Selection */}
//             <div>
//               <p className="text-sm font-medium text-gray-700 mb-3">Size: 7"</p>
//               <div className="flex flex-wrap gap-2">
//                 {product.sizes.map((size) => (
//                   <button
//                     key={size}
//                     onClick={() => setSelectedSize(size)}
//                     className={`px-4 py-2 border rounded-sm text-sm font-medium transition-colors ${
//                       selectedSize === size 
//                         ? "bg-gray-200 border-gray-400 text-gray-800" 
//                         : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
//                     }`}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Metal Selection */}
//             <div>
//               <p className="text-sm font-medium text-gray-700 mb-3">
//                 Metal: {product.metalName}
//               </p>
//               <div className="flex gap-3">
//                 {product.metals.map((metal) => (
//                   <button
//                     key={metal}
//                     onClick={() => setSelectedMetal(metal)}
//                     className={`w-8 h-8 rounded-full border-2 transition-all hover:scale-110 ${
//                       getMetalColor(metal)
//                     } ${
//                       selectedMetal === metal ? 'ring-2 ring-gray-400 ring-offset-2' : ''
//                     }`}
//                     title={metal.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="space-y-4 pt-4">
//               <button 
//                 onClick={handleAddToCart}
//                 className="w-full bg-green-800 hover:bg-green-900 text-white font-medium py-3 px-6 rounded-sm transition-colors"
//               >
//                 ADD TO BAG
//               </button>
              
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 <button 
//                   onClick={handleDropHint}
//                   className="flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-sm transition-colors"
//                 >
//                   <MessageCircle size={16} />
//                   DROP A HINT
//                 </button>
                
//                 <button 
//                   onClick={handleAddToWishlist}
//                   className="flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-sm transition-colors"
//                 >
//                   <Heart size={16} />
//                   ADD TO WISHLIST
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BraceletDetail;


// import React, { useState } from "react";
// import { Heart, MessageCircle, X, Check } from "lucide-react";

// const data = [
//   {
//     id: 1,
//     name: "AZURA SAPPHIRE AND DIAMOND BRACELET (1/2 CT. TW.) IN 18K WHITE GOLD",
//     price: 3595,
//     images: [
//       "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80",
//       "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80",
//       "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80"
//     ],
//     sizes: ['6"', '6.5"', '7"', '7.5"'],
//     weights: [1, 2, 3, 4, 5, 7],
//     metals: ["rose-gold", "white-gold", "yellow-gold"],
//     metalName: "18K White Gold",
//     caratWeight: "1 ct. tw",
//   },
//   {
//     id: 2,
//     name: "ROUND LAB DIAMOND TENNIS BRACELET (3 CT. TW.) IN 18K WHITE GOLD",
//     price: 2995,
//     images: [
//       "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80",
//       "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80",
//       "https://images.unsplash.com/photo-1572472257812-2256ee78d87c?auto=format&fit=crop&w=600&q=80"
//     ],
//     sizes: ['6"', '6.5"', '7"', '7.5"'],
//     weights: [1, 2, 3, 4, 5, 7],
//     metals: ["rose-gold", "white-gold", "yellow-gold"],
//     metalName: "18K White Gold",
//     caratWeight: "3 ct. tw",
//   },
//   {
//     id: 3,
//     name: "OLIVETTA LAB DIAMOND TENNIS BRACELET (2 3/4 CT. TW.)",
//     price: 7000,
//     images: [
//       "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80",
//       "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80",
//       "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80"
//     ],
//     sizes: ['6"', '6.5"', '7"', '7.5"'],
//     weights: [1, 2, 3, 4, 5, 7],
//     metals: ["rose-gold", "white-gold", "yellow-gold"],
//     metalName: "18K White Gold",
//     caratWeight: "2 3/4 ct. tw",
//   }
// ];

// // Message component
// const MessageBox = ({ message, type, onClose }) => {
//   if (!message) return null;
  
//   const bgColor = type === 'success' ? 'bg-green-50 border-green-200' : 'bg-blue-50 border-blue-200';
//   const textColor = type === 'success' ? 'text-green-800' : 'text-blue-800';
//   const iconColor = type === 'success' ? 'text-green-500' : 'text-blue-500';
  
//   return (
//     <div className={`fixed top-4 right-4 z-50 ${bgColor} border rounded-lg p-4 shadow-lg max-w-sm`}>
//       <div className="flex items-start gap-3">
//         <div className={`flex-shrink-0 ${iconColor}`}>
//           {type === 'success' ? <Check size={20} /> : <MessageCircle size={20} />}
//         </div>
//         <div className="flex-1">
//           <p className={`text-sm font-medium ${textColor} font-museo-sans`}>
//             {message}
//           </p>
//         </div>
//         <button
//           onClick={onClose}
//           className={`flex-shrink-0 ${textColor} hover:opacity-70 transition-opacity`}
//         >
//           <X size={16} />
//         </button>
//       </div>
//     </div>
//   );
// };

// const BraceletDetail = () => {
//   // For demo purposes, using the first product. In real app, you'd get ID from URL
//   const [currentProductId] = useState(1);
//   const product = data.find((item) => item.id === currentProductId);
  
//   const [selectedWeight, setSelectedWeight] = useState(product.weights[0]);
//   const [selectedSize, setSelectedSize] = useState(product.sizes[2]); // Default to 7"
//   const [selectedMetal, setSelectedMetal] = useState("white-gold");
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);
//   const [isWishlisted, setIsWishlisted] = useState(false);
//   const [message, setMessage] = useState(null);
//   const [messageType, setMessageType] = useState('success');

//   const showMessage = (text, type = 'success') => {
//     setMessage(text);
//     setMessageType(type);
//     // Auto-hide message after 4 seconds
//     setTimeout(() => {
//       setMessage(null);
//     }, 4000);
//   };

//   const handleAddToCart = () => {
//     const item = {
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       size: selectedSize,
//       weight: selectedWeight,
//       metal: product.metalName,
//       image: product.images[0],
//     };
//     console.log("Added to cart:", item);
//     showMessage("Item successfully added to your bag!", 'success');
//   };

//   const handleAddToWishlist = () => {
//     setIsWishlisted(!isWishlisted);
//     const message = isWishlisted ? "Removed from your wishlist" : "Added to your wishlist";
//     showMessage(message, 'success');
//   };

//   const handleDropHint = () => {
//     showMessage("We'll send a subtle hint to your special someone! 😉", 'info');
//   };

//   const getMetalColor = (metal) => {
//     const colorMap = {
//       'rose-gold': 'bg-rose-300 border-rose-400',
//       'white-gold': 'bg-gray-100 border-gray-300',
//       'yellow-gold': 'bg-yellow-300 border-yellow-400'
//     };
//     return colorMap[metal] || 'bg-gray-200 border-gray-300';
//   };

//   const formatPrice = (price) => {
//     return new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD',
//       minimumFractionDigits: 0
//     }).format(price);
//   };

//   if (!product) {
//     return <div className="min-h-screen bg-stone-50 flex items-center justify-center">Product not found</div>;
//   }

//   return (
//     <div style={{ backgroundColor: '#f5f5f0' }} className="min-h-screen">
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          
//           .font-typo-grotesk {
//             font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
//             font-weight: 500;
//           }
          
//           .font-yorkten {
//             font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
//             font-weight: 300;
//           }
          
//           .font-museo-sans {
//             font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
//             font-weight: 300;
//           }
          
//           .font-gibson {
//             font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
//             font-weight: 300;
//           }
          
//           .color-primary {
//             color: #52583c;
//           }
          
//           .color-primary-medium {
//             color: #6b7149;
//           }
          
//           .color-primary-light {
//             color: #a8b085;
//           }
          
//           .bg-primary {
//             background-color: #52583c;
//           }
          
//           .bg-primary-medium {
//             background-color: #6b7149;
//           }
          
//           .bg-primary-light {
//             background-color: #a8b085;
//           }
          
//           .border-primary {
//             border-color: #52583c;
//           }
          
//           .border-primary-medium {
//             border-color: #6b7149;
//           }
          
//           .border-primary-light {
//             border-color: #a8b085;
//           }
          
//           .hover\\:bg-primary:hover {
//             background-color: #52583c;
//           }
          
//           .hover\\:bg-primary-medium:hover {
//             background-color: #6b7149;
//           }
          
//           .hover\\:bg-primary-light:hover {
//             background-color: #a8b085;
//           }
          
//           .hover\\:border-primary:hover {
//             border-color: #52583c;
//           }
          
//           .ring-primary {
//             --tw-ring-color: #52583c;
//           }
          
//           .focus\\:ring-primary-light:focus {
//             --tw-ring-color: #a8b085;
//           }
//         `}
//       </style>
      
//       {/* Message Box */}
//       <MessageBox 
//         message={message} 
//         type={messageType} 
//         onClose={() => setMessage(null)} 
//       />
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         {/* Breadcrumb */}
//         <div className="text-sm color-primary-medium mb-6 font-yorkten">
//           <span 
//             className="hover:underline cursor-pointer"
//             onClick={() => window.location.href = '/'}
//           >
//             Home
//           </span>
//           <span className="mx-2">/</span>
//           <span 
//             className="hover:underline cursor-pointer"
//             onClick={() => window.location.href = '/bracelets'}
//           >
//             Bracelets
//           </span>
//           <span className="mx-2">/</span>
//           <span>Tennis</span>
//           <span className="mx-2">/</span>
//           <span>Azura Sapphire and Diamond Bracelet</span>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
//           {/* Image Gallery */}
//           <div className="space-y-4">
//             {/* Main Image */}
//             <div className="bg-white rounded-lg p-4 shadow-sm">
//               <div className="aspect-square flex items-center justify-center">
//                 <img 
//                   src={product.images[selectedImageIndex]} 
//                   alt={product.name} 
//                   className="max-w-full max-h-full object-contain"
//                 />
//               </div>
//             </div>
            
//             {/* Thumbnail Images */}
//             <div className="grid grid-cols-3 gap-3">
//               {product.images.map((img, index) => (
//                 <div 
//                   key={index}
//                   className={`bg-white rounded-lg p-2 shadow-sm cursor-pointer transition-all hover:shadow-md ${
//                     selectedImageIndex === index ? 'ring-2 ring-primary' : ''
//                   }`}
//                   onClick={() => setSelectedImageIndex(index)}
//                 >
//                   <div className="aspect-square flex items-center justify-center">
//                     <img 
//                       src={img} 
//                       alt={`View ${index + 1}`} 
//                       className="max-w-full max-h-full object-contain"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Product Details */}
//           <div className="space-y-6">
//             {/* Wishlist Button */}
//             <div className="flex justify-end">
//               <button
//                 onClick={handleAddToWishlist}
//                 className="p-2 rounded-full hover:bg-primary-light hover:bg-opacity-20 transition-colors"
//                 aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
//               >
//                 <Heart 
//                   size={24} 
//                   className={`${
//                     isWishlisted 
//                       ? 'fill-red-500 text-red-500' 
//                       : 'color-primary-light hover:text-red-500'
//                   } transition-colors`} 
//                 />
//               </button>
//             </div>

//             {/* Product Title */}
//             <div>
//               <h1 className="text-xl sm:text-2xl font-medium color-primary leading-tight mb-4 font-gibson">
//                 {product.name}
//               </h1>
//               <p className="text-2xl sm:text-3xl font-semibold color-primary font-typo-grotesk">
//                 {formatPrice(product.price)}
//               </p>
//             </div>

//             {/* Total Carat Weight */}
//             <div>
//               <p className="text-sm font-medium color-primary-medium mb-3 font-museo-sans">
//                 Total Carat Weight: {product.caratWeight}
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {product.weights.map((weight) => (
//                   <button
//                     key={weight}
//                     onClick={() => setSelectedWeight(weight)}
//                     className={`px-4 py-2 border rounded-sm text-sm font-medium transition-colors font-yorkten ${
//                       selectedWeight === weight 
//                         ? "bg-primary-light text-white border-primary" 
//                         : "bg-white border-primary-medium color-primary-medium hover:bg-primary-light hover:bg-opacity-20"
//                     }`}
//                   >
//                     {weight}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Size Selection */}
//             <div>
//               <p className="text-sm font-medium color-primary-medium mb-3 font-museo-sans">Size: 7"</p>
//               <div className="flex flex-wrap gap-2">
//                 {product.sizes.map((size) => (
//                   <button
//                     key={size}
//                     onClick={() => setSelectedSize(size)}
//                     className={`px-4 py-2 border rounded-sm text-sm font-medium transition-colors font-yorkten ${
//                       selectedSize === size 
//                         ? "bg-primary-light text-white border-primary" 
//                         : "bg-white border-primary-medium color-primary-medium hover:bg-primary-light hover:bg-opacity-20"
//                     }`}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Metal Selection */}
//             <div>
//               <p className="text-sm font-medium color-primary-medium mb-3 font-museo-sans">
//                 Metal: {product.metalName}
//               </p>
//               <div className="flex gap-3">
//                 {product.metals.map((metal) => (
//                   <button
//                     key={metal}
//                     onClick={() => setSelectedMetal(metal)}
//                     className={`w-8 h-8 rounded-full border-2 transition-all hover:scale-110 ${
//                       getMetalColor(metal)
//                     } ${
//                       selectedMetal === metal ? 'ring-2 ring-primary ring-offset-2' : ''
//                     }`}
//                     title={metal.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="space-y-4 pt-4">
//               <button 
//                 onClick={handleAddToCart}
//                 className="w-full bg-primary hover:bg-primary-medium text-white font-medium py-3 px-6 rounded-sm transition-colors font-typo-grotesk"
//               >
//                 ADD TO BAG
//               </button>
              
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 <button 
//                   onClick={handleDropHint}
//                   className="flex items-center justify-center gap-2 border border-primary-medium hover:bg-primary-light hover:bg-opacity-20 color-primary font-medium py-2 px-4 rounded-sm transition-colors font-museo-sans"
//                 >
//                   <MessageCircle size={16} />
//                   DROP A HINT
//                 </button>
                
//                 <button 
//                   onClick={handleAddToWishlist}
//                   className="flex items-center justify-center gap-2 border border-primary-medium hover:bg-primary-light hover:bg-opacity-20 color-primary font-medium py-2 px-4 rounded-sm transition-colors font-museo-sans"
//                 >
//                   <Heart size={16} />
//                   ADD TO WISHLIST
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BraceletDetail;



import React, { useState, useEffect } from "react";
import { Heart, MessageCircle, X, Check } from "lucide-react";
import Header from "./Header";

const data = [
  {
    id: 1,
    name: "AZURA SAPPHIRE AND DIAMOND BRACELET (1/2 CT. TW.) IN 18K WHITE GOLD",
    price: 3595,
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80"
    ],
    sizes: ['6"', '6.5"', '7"', '7.5"'],
    weights: [1, 2, 3, 4, 5, 7],
    metals: ["rose-gold", "white-gold", "yellow-gold"],
    metalName: "18K White Gold",
    caratWeight: "1 ct. tw",
  },
  {
    id: 2,
    name: "ROUND LAB DIAMOND TENNIS BRACELET (3 CT. TW.) IN 18K WHITE GOLD",
    price: 2995,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1572472257812-2256ee78d87c?auto=format&fit=crop&w=600&q=80"
    ],
    sizes: ['6"', '6.5"', '7"', '7.5"'],
    weights: [1, 2, 3, 4, 5, 7],
    metals: ["rose-gold", "white-gold", "yellow-gold"],
    metalName: "18K White Gold",
    caratWeight: "3 ct. tw",
  },
  {
    id: 3,
    name: "OLIVETTA LAB DIAMOND TENNIS BRACELET (2 3/4 CT. TW.)",
    price: 7000,
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80"
    ],
    sizes: ['6"', '6.5"', '7"', '7.5"'],
    weights: [1, 2, 3, 4, 5, 7],
    metals: ["rose-gold", "white-gold", "yellow-gold"],
    metalName: "18K White Gold",
    caratWeight: "2 3/4 ct. tw",
  },
  {
    id: 4,
    name: "Azure Sapphire and Diamond Bracelet (1/2 ct. tw.)",
    price: 3595,
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80"
    ],
    sizes: ['6"', '6.5"', '7"', '7.5"'],
    weights: [1, 2, 3, 4, 5, 7],
    metals: ["white-gold"],
    metalName: "18K White Gold",
    caratWeight: "1/2 ct. tw",
  },
  {
    id: 5,
    name: "Round Lab Diamond Tennis Bracelet (4 ct. tw.)",
    price: 2995,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1572472257812-2256ee78d87c?auto=format&fit=crop&w=600&q=80"
    ],
    sizes: ['6"', '6.5"', '7"', '7.5"'],
    weights: [1, 2, 3, 4, 5, 7],
    metals: ["rose-gold", "white-gold", "yellow-gold"],
    metalName: "18K White Gold",
    caratWeight: "4 ct. tw",
  }
];

// Message component
const MessageBox = ({ message, type, onClose }) => {
  if (!message) return null;
  
  const bgColor = type === 'success' ? 'bg-green-50 border-green-200' : 'bg-blue-50 border-blue-200';
  const textColor = type === 'success' ? 'text-green-800' : 'text-blue-800';
  const iconColor = type === 'success' ? 'text-green-500' : 'text-blue-500';
  
  return (
    <div className={`fixed top-4 right-4 z-50 ${bgColor} border rounded-lg p-4 shadow-lg max-w-sm`}>
      <div className="flex items-start gap-3">
        <div className={`flex-shrink-0 ${iconColor}`}>
          {type === 'success' ? <Check size={20} /> : <MessageCircle size={20} />}
        </div>
        <div className="flex-1">
          <p className={`text-sm font-medium ${textColor} font-museo-sans`}>
            {message}
          </p>
        </div>
        <button
          onClick={onClose}
          className={`flex-shrink-0 ${textColor} hover:opacity-70 transition-opacity`}
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

const BraceletDetail = () => {
  // Function to get product ID from URL hash (for demo purposes)
  const getProductIdFromUrl = () => {
    const hash = window.location.hash;
    const match = hash.match(/#\/bracelet\/(\d+)/);
    return match ? parseInt(match[1]) : 1; // Default to 1 if no ID found
  };

  const [currentProductId, setCurrentProductId] = useState(getProductIdFromUrl());
  const product = data.find((item) => item.id === currentProductId);
  
  const [selectedWeight, setSelectedWeight] = useState(product?.weights[0] || 1);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[2] || '7"'); // Default to 7"
  const [selectedMetal, setSelectedMetal] = useState("white-gold");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState('success');

  // Listen for URL changes (for demo purposes)
  useEffect(() => {
    const handleHashChange = () => {
      const newId = getProductIdFromUrl();
      setCurrentProductId(newId);
      setSelectedImageIndex(0); // Reset image selection
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update selections when product changes
  useEffect(() => {
    if (product) {
      setSelectedWeight(product.weights[0]);
      setSelectedSize(product.sizes[2] || product.sizes[0]);
      setSelectedMetal(product.metals[0]);
    }
  }, [product]);

  const showMessage = (text, type = 'success') => {
    setMessage(text);
    setMessageType(type);
    // Auto-hide message after 4 seconds
    setTimeout(() => {
      setMessage(null);
    }, 4000);
  };

  const handleAddToCart = () => {
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      weight: selectedWeight,
      metal: product.metalName,
      image: product.images[0],
    };
    console.log("Added to cart:", item);
    showMessage("Item successfully added to your bag!", 'success');
  };

  const handleAddToWishlist = () => {
    setIsWishlisted(!isWishlisted);
    const message = isWishlisted ? "Removed from your wishlist" : "Added to your wishlist";
    showMessage(message, 'success');
  };

  const handleDropHint = () => {
    showMessage("We'll send a subtle hint to your special someone! 😉", 'info');
  };

  const getMetalColor = (metal) => {
    const colorMap = {
      'rose-gold': 'bg-rose-300 border-rose-400',
      'white-gold': 'bg-gray-100 border-gray-300',
      'yellow-gold': 'bg-yellow-300 border-yellow-400'
    };
    return colorMap[metal] || 'bg-gray-200 border-gray-300';
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Product not found</h2>
          <button 
            onClick={() => window.location.hash = '#/bracelets'}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Bracelets
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#f5f5f0' }} className="min-h-screen">
      <Header></Header>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          
          .font-typo-grotesk {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            font-weight: 500;
          }
          
          .font-yorkten {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            font-weight: 300;
          }
          
          .font-museo-sans {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            font-weight: 300;
          }
          
          .font-gibson {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            font-weight: 300;
          }
          
          .color-primary {
            color: #52583c;
          }
          
          .color-primary-medium {
            color: #6b7149;
          }
          
          .color-primary-light {
            color: #a8b085;
          }
          
          .bg-primary {
            background-color: #52583c;
          }
          
          .bg-primary-medium {
            background-color: #6b7149;
          }
          
          .bg-primary-light {
            background-color: #a8b085;
          }
          
          .border-primary {
            border-color: #52583c;
          }
          
          .border-primary-medium {
            border-color: #6b7149;
          }
          
          .border-primary-light {
            border-color: #a8b085;
          }
          
          .hover\\:bg-primary:hover {
            background-color: #52583c;
          }
          
          .hover\\:bg-primary-medium:hover {
            background-color: #6b7149;
          }
          
          .hover\\:bg-primary-light:hover {
            background-color: #a8b085;
          }
          
          .hover\\:border-primary:hover {
            border-color: #52583c;
          }
          
          .ring-primary {
            --tw-ring-color: #52583c;
          }
          
          .focus\\:ring-primary-light:focus {
            --tw-ring-color: #a8b085;
          }
        `}
      </style>
      
      {/* Message Box */}
      <MessageBox 
        message={message} 
        type={messageType} 
        onClose={() => setMessage(null)} 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb */}
        <div className="text-sm color-primary-medium mb-6 font-yorkten">
          <span 
            className="hover:underline cursor-pointer"
            onClick={() => window.location.hash = '#/'}
          >
            Home
          </span>
          <span className="mx-2">/</span>
          <span 
            className="hover:underline cursor-pointer"
            onClick={() => window.location.hash = '#/bracelets'}
          >
            Bracelets
          </span>
          <span className="mx-2">/</span>
          <span>Tennis</span>
          <span className="mx-2">/</span>
          <span>{product.name.split(' ').slice(0, 4).join(' ')}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="aspect-square flex items-center justify-center">
                <img 
                  src={product.images[selectedImageIndex]} 
                  alt={product.name} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((img, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-lg p-2 shadow-sm cursor-pointer transition-all hover:shadow-md ${
                    selectedImageIndex === index ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <div className="aspect-square flex items-center justify-center">
                    <img 
                      src={img} 
                      alt={`View ${index + 1}`} 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Wishlist Button */}
            <div className="flex justify-end">
              <button
                onClick={handleAddToWishlist}
                className="p-2 rounded-full hover:bg-primary-light hover:bg-opacity-20 transition-colors"
                aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart 
                  size={24} 
                  className={`${
                    isWishlisted 
                      ? 'fill-red-500 text-red-500' 
                      : 'color-primary-light hover:text-red-500'
                  } transition-colors`} 
                />
              </button>
            </div>

            {/* Product Title */}
            <div>
              <h1 className="text-xl sm:text-2xl font-medium color-primary leading-tight mb-4 font-gibson">
                {product.name}
              </h1>
              <p className="text-2xl sm:text-3xl font-semibold color-primary font-typo-grotesk">
                {formatPrice(product.price)}
              </p>
            </div>

            {/* Total Carat Weight */}
            <div>
              <p className="text-sm font-medium color-primary-medium mb-3 font-museo-sans">
                Total Carat Weight: {product.caratWeight}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.weights.map((weight) => (
                  <button
                    key={weight}
                    onClick={() => setSelectedWeight(weight)}
                    className={`px-4 py-2 border rounded-sm text-sm font-medium transition-colors font-yorkten ${
                      selectedWeight === weight 
                        ? "bg-primary-light text-white border-primary" 
                        : "bg-white border-primary-medium color-primary-medium hover:bg-primary-light hover:bg-opacity-20"
                    }`}
                  >
                    {weight}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <p className="text-sm font-medium color-primary-medium mb-3 font-museo-sans">Size: {selectedSize}</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-sm text-sm font-medium transition-colors font-yorkten ${
                      selectedSize === size 
                        ? "bg-primary-light text-white border-primary" 
                        : "bg-white border-primary-medium color-primary-medium hover:bg-primary-light hover:bg-opacity-20"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Metal Selection */}
            <div>
              <p className="text-sm font-medium color-primary-medium mb-3 font-museo-sans">
                Metal: {product.metalName}
              </p>
              <div className="flex gap-3">
                {product.metals.map((metal) => (
                  <button
                    key={metal}
                    onClick={() => setSelectedMetal(metal)}
                    className={`w-8 h-8 rounded-full border-2 transition-all hover:scale-110 ${
                      getMetalColor(metal)
                    } ${
                      selectedMetal === metal ? 'ring-2 ring-primary ring-offset-2' : ''
                    }`}
                    title={metal.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  />
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 pt-4">
              <button 
                onClick={handleAddToCart}
                className="w-full bg-primary hover:bg-primary-medium text-white font-medium py-3 px-6 rounded-sm transition-colors font-typo-grotesk"
              >
                ADD TO BAG
              </button>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button 
                  onClick={handleDropHint}
                  className="flex items-center justify-center gap-2 border border-primary-medium hover:bg-primary-light hover:bg-opacity-20 color-primary font-medium py-2 px-4 rounded-sm transition-colors font-museo-sans"
                >
                  <MessageCircle size={16} />
                  DROP A HINT
                </button>
                
                <button 
                  onClick={handleAddToWishlist}
                  className="flex items-center justify-center gap-2 border border-primary-medium hover:bg-primary-light hover:bg-opacity-20 color-primary font-medium py-2 px-4 rounded-sm transition-colors font-museo-sans"
                >
                  <Heart size={16} />
                  ADD TO WISHLIST
                </button>
              </div>
            </div>

            {/* Test Navigation Buttons */}
            <div className="mt-8 p-4 bg-white rounded-lg border-2 border-dashed border-gray-300">
              <p className="text-sm font-medium color-primary-medium mb-3">Test Navigation (Demo):</p>
              <div className="flex flex-wrap gap-2">
                {data.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => window.location.hash = `#/bracelet/${item.id}`}
                    className={`px-3 py-1 text-xs border rounded transition-colors ${
                      currentProductId === item.id 
                        ? 'bg-primary text-white border-primary' 
                        : 'bg-white border-gray-300 hover:border-primary'
                    }`}
                  >
                    ID {item.id}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BraceletDetail;

