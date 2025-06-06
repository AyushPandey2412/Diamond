




// import React, { useState } from 'react';
// import { Heart, Filter, ChevronDown } from 'lucide-react';

// const Bracelet = () => {
//   const [favorites, setFavorites] = useState(new Set());
//   const [sortBy, setSortBy] = useState('default');
//   const [showFilter, setShowFilter] = useState(false);
//   const [priceRange, setPriceRange] = useState('all');

//   const bracelets = [
//     { id: 1, name: "Round Lab Diamond Tennis Bracelet (5 ct. tw.)", price: 2995, colors: ['rose-gold', 'white-gold', 'yellow-gold'], badge: "MOST LOVED" },
//     { id: 2, name: "Round Lab Diamond Tennis Bracelet (3 ct. tw.)", price: 2995, colors: ['rose-gold', 'white-gold', 'yellow-gold'] },
//     { id: 3, name: "Olivetta Lab Diamond Tennis Bracelet (2 3/4 ct. tw.)", price: 7000, colors: ['white-gold'] },
//     { id: 4, name: "Azura Sapphire and Diamond Bracelet (1/2 ct. tw.)", price: 3595, colors: ['white-gold'] },
//     { id: 5, name: "Round Lab Diamond Tennis Bracelet (3 ct. tw.)", price: 2995, colors: ['rose-gold', 'white-gold', 'yellow-gold'] },
//     { id: 6, name: "Round Lab Diamond Tennis Bracelet (3 ct. tw.)", price: 2995, colors: ['rose-gold', 'white-gold', 'yellow-gold'], badge: "BEST SELLER" },
//     { id: 7, name: "Olivetta Lab Diamond Tennis Bracelet (2 3/4 ct. tw.)", price: 7000, colors: ['white-gold'] },
//     { id: 8, name: "Azura Sapphire and Diamond Bracelet (1/2 ct. tw.)", price: 3595, colors: ['white-gold'] },
//     { id: 9, name: "Round Lab Diamond Tennis Bracelet (3 ct. tw.)", price: 2995, colors: ['rose-gold', 'white-gold', 'yellow-gold'] },
//     { id: 10, name: "Round Lab Diamond Tennis Bracelet (3 ct. tw.)", price: 2995, colors: ['rose-gold', 'white-gold', 'yellow-gold'] },
//     { id: 11, name: "Olivetta Lab Diamond Tennis Bracelet (2 3/4 ct. tw.)", price: 7000, colors: ['white-gold'] },
//     { id: 12, name: "Azura Sapphire and Diamond Bracelet (1/2 ct. tw.)", price: 3595, colors: ['white-gold'] }
//   ];

//   const toggleFavorite = (id) => {
//     const newFavorites = new Set(favorites);
//     newFavorites.has(id) ? newFavorites.delete(id) : newFavorites.add(id);
//     setFavorites(newFavorites);
//   };

//   const formatPrice = (price) => new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
//     minimumFractionDigits: 0
//   }).format(price);

//   const getColorClass = (color) => {
//     const map = { 'rose-gold': 'bg-rose-300', 'white-gold': 'bg-gray-200', 'yellow-gold': 'bg-yellow-300' };
//     return map[color] || 'bg-gray-200';
//   };

//   const filteredBracelets = bracelets
//     .filter(item => {
//       if (priceRange === 'under-3500') return item.price < 3500;
//       if (priceRange === '3500-6000') return item.price >= 3500 && item.price <= 6000;
//       if (priceRange === 'above-6000') return item.price > 6000;
//       return true;
//     })
//     .sort((a, b) => {
//       if (sortBy === 'price-low') return a.price - b.price;
//       if (sortBy === 'price-high') return b.price - a.price;
//       if (sortBy === 'name') return a.name.localeCompare(b.name);
//       return 0;
//     });

//   return (
//     <div className="min-h-screen bg-stone-50 px-4 py-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-6 text-sm text-gray-600"><span>Home</span><span className="mx-2">/</span><span>Bracelets</span></div>

//         <div className="mb-8">
//           <h1 className="text-4xl font-light text-gray-800 mb-6">BRACELETS</h1>
//           <div className="flex justify-between items-center">
//             <button onClick={() => setShowFilter(!showFilter)} className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-sm text-gray-700 hover:bg-gray-50">
//               <Filter size={16} /> FILTER
//             </button>
//             <div className="relative">
//               <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="appearance-none bg-white border border-gray-300 rounded-sm px-4 py-2 pr-8 text-gray-700">
//                 <option value="default">SORT</option>
//                 <option value="price-low">Price: Low to High</option>
//                 <option value="price-high">Price: High to Low</option>
//                 <option value="name">Name</option>
//               </select>
//               <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
//             </div>
//           </div>

//           {showFilter && (
//             <div className="mt-4 flex gap-4 text-sm">
//               <label className="flex items-center gap-1">
//                 <input type="radio" name="price" value="all" checked={priceRange === 'all'} onChange={(e) => setPriceRange(e.target.value)} />
//                 All Prices
//               </label>
//               <label className="flex items-center gap-1">
//                 <input type="radio" name="price" value="under-3500" checked={priceRange === 'under-3500'} onChange={(e) => setPriceRange(e.target.value)} />
//                 Under $3500
//               </label>
//               <label className="flex items-center gap-1">
//                 <input type="radio" name="price" value="3500-6000" checked={priceRange === '3500-6000'} onChange={(e) => setPriceRange(e.target.value)} />
//                 $3500 - $6000
//               </label>
//               <label className="flex items-center gap-1">
//                 <input type="radio" name="price" value="above-6000" checked={priceRange === 'above-6000'} onChange={(e) => setPriceRange(e.target.value)} />
//                 Above $6000
//               </label>
//             </div>
//           )}
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {filteredBracelets.map((b) => (
//             <div key={b.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group">
//               <div className="relative">
//                 {b.badge && (
//                   <div className={`absolute top-3 left-3 px-2 py-1 text-xs font-medium rounded-sm ${b.badge === 'MOST LOVED' ? 'bg-green-700 text-white' : 'bg-yellow-600 text-white'}`}>
//                     {b.badge}
//                   </div>
//                 )}
//                 <button onClick={() => toggleFavorite(b.id)} className="absolute top-3 right-3 p-2 rounded-full bg-white shadow-sm">
//                   <Heart size={20} className={`${favorites.has(b.id) ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'} transition-colors`} />
//                 </button>
//                 <div className="aspect-square bg-gray-100 rounded-t-lg flex items-center justify-center">
//                   <div className="w-32 h-8 bg-gray-300 rounded-full flex items-center justify-center">
//                     <div className="w-24 h-2 bg-gray-400 rounded-full"></div>
//                   </div>
//                 </div>
//               </div>

//               <div className="p-4">
//                 <div className="flex gap-2 mb-3">
//                   {b.colors.map((c, i) => <div key={i} className={`w-4 h-4 rounded-full border border-gray-300 ${getColorClass(c)}`}></div>)}
//                 </div>
//                 <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">{b.name}</h3>
//                 <p className="text-lg font-semibold text-gray-900">{formatPrice(b.price)}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Bracelet;

















// import React, { useState } from 'react';
// import { Heart, Filter, ChevronDown } from 'lucide-react';

// const Bracelet = () => {
//   const [favorites, setFavorites] = useState(new Set());
//   const [sortBy, setSortBy] = useState('default');
//   const [showFilter, setShowFilter] = useState(false);
//   const [priceRange, setPriceRange] = useState('all');

//   const bracelets = [
//     { id: 1, name: "Round Lab Diamond Tennis Bracelet (5 ct. tw.)", price: 2995, colors: ['rose-gold', 'white-gold', 'yellow-gold'], badge: "MOST LOVED" },
//     { id: 2, name: "Round Lab Diamond Tennis Bracelet (3 ct. tw.)", price: 2995, colors: ['rose-gold', 'white-gold', 'yellow-gold'] },
//     { id: 3, name: "Olivetta Lab Diamond Tennis Bracelet (2 3/4 ct. tw.)", price: 7000, colors: ['white-gold'] },
//     { id: 4, name: "Azura Sapphire and Diamond Bracelet (1/2 ct. tw.)", price: 3595, colors: ['white-gold'] },
//     { id: 5, name: "Round Lab Diamond Tennis Bracelet (3 ct. tw.)", price: 2995, colors: ['rose-gold', 'white-gold', 'yellow-gold'] },
//     { id: 6, name: "Round Lab Diamond Tennis Bracelet (3 ct. tw.)", price: 2995, colors: ['rose-gold', 'white-gold', 'yellow-gold'], badge: "BEST SELLER" },
//     { id: 7, name: "Olivetta Lab Diamond Tennis Bracelet (2 3/4 ct. tw.)", price: 7000, colors: ['white-gold'] },
//     { id: 8, name: "Azura Sapphire and Diamond Bracelet (1/2 ct. tw.)", price: 3595, colors: ['white-gold'] },
//     { id: 9, name: "Round Lab Diamond Tennis Bracelet (3 ct. tw.)", price: 2995, colors: ['rose-gold', 'white-gold', 'yellow-gold'] },
//     { id: 10, name: "Round Lab Diamond Tennis Bracelet (3 ct. tw.)", price: 2995, colors: ['rose-gold', 'white-gold', 'yellow-gold'] },
//     { id: 11, name: "Olivetta Lab Diamond Tennis Bracelet (2 3/4 ct. tw.)", price: 7000, colors: ['white-gold'] },
//     { id: 12, name: "Azura Sapphire and Diamond Bracelet (1/2 ct. tw.)", price: 3595, colors: ['white-gold'] }
//   ];

//   const toggleFavorite = (id) => {
//     const newFavorites = new Set(favorites);
//     newFavorites.has(id) ? newFavorites.delete(id) : newFavorites.add(id);
//     setFavorites(newFavorites);
//   };

//   const formatPrice = (price) => new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
//     minimumFractionDigits: 0
//   }).format(price);

//   const getColorClass = (color) => {
//     const map = { 'rose-gold': 'bg-rose-300', 'white-gold': 'bg-gray-200', 'yellow-gold': 'bg-yellow-300' };
//     return map[color] || 'bg-gray-200';
//   };

//   const filteredBracelets = bracelets
//     .filter(item => {
//       if (priceRange === 'under-3500') return item.price < 3500;
//       if (priceRange === '3500-6000') return item.price >= 3500 && item.price <= 6000;
//       if (priceRange === 'above-6000') return item.price > 6000;
//       return true;
//     })
//     .sort((a, b) => {
//       if (sortBy === 'price-low') return a.price - b.price;
//       if (sortBy === 'price-high') return b.price - a.price;
//       if (sortBy === 'name') return a.name.localeCompare(b.name);
//       return 0;
//     });

//   return (
//     <div className="min-h-screen bg-stone-50 px-4 py-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-6 text-sm text-gray-600"><span>Home</span><span className="mx-2">/</span><span>Bracelets</span></div>

//         <div className="mb-8">
//           <h1 className="text-4xl font-light text-gray-800 mb-6">BRACELETS</h1>
//           <div className="flex justify-between items-center">
//             <button onClick={() => setShowFilter(!showFilter)} className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-sm text-gray-700 hover:bg-gray-50">
//               <Filter size={16} /> FILTER
//             </button>
//             <div className="relative">
//               <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="appearance-none bg-white border border-gray-300 rounded-sm px-4 py-2 pr-8 text-gray-700">
//                 <option value="default">SORT</option>
//                 <option value="price-low">Price: Low to High</option>
//                 <option value="price-high">Price: High to Low</option>
//                 <option value="name">Name</option>
//               </select>
//               <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
//             </div>
//           </div>

//           {showFilter && (
//             <div className="mt-4 flex gap-4 text-sm">
//               <label className="flex items-center gap-1">
//                 <input type="radio" name="price" value="all" checked={priceRange === 'all'} onChange={(e) => setPriceRange(e.target.value)} />
//                 All Prices
//               </label>
//               <label className="flex items-center gap-1">
//                 <input type="radio" name="price" value="under-3500" checked={priceRange === 'under-3500'} onChange={(e) => setPriceRange(e.target.value)} />
//                 Under $3500
//               </label>
//               <label className="flex items-center gap-1">
//                 <input type="radio" name="price" value="3500-6000" checked={priceRange === '3500-6000'} onChange={(e) => setPriceRange(e.target.value)} />
//                 $3500 - $6000
//               </label>
//               <label className="flex items-center gap-1">
//                 <input type="radio" name="price" value="above-6000" checked={priceRange === 'above-6000'} onChange={(e) => setPriceRange(e.target.value)} />
//                 Above $6000
//               </label>
//             </div>
//           )}
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {filteredBracelets.map((b) => (
//             <div key={b.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group">
//               <div className="relative">
//                 {b.badge && (
//                   <div className={`absolute top-3 left-3 px-2 py-1 text-xs font-medium rounded-sm ${b.badge === 'MOST LOVED' ? 'bg-green-700 text-white' : 'bg-yellow-600 text-white'}`}>
//                     {b.badge}
//                   </div>
//                 )}
//                 <button onClick={() => toggleFavorite(b.id)} className="absolute top-3 right-3 p-2 rounded-full bg-white shadow-sm">
//                   <Heart size={20} className={`${favorites.has(b.id) ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'} transition-colors`} />
//                 </button>
//                 <div className="aspect-square bg-gray-100 rounded-t-lg flex items-center justify-center">
//                   <div className="w-32 h-8 bg-gray-300 rounded-full flex items-center justify-center">
//                     <div className="w-24 h-2 bg-gray-400 rounded-full"></div>
//                   </div>
//                 </div>
//               </div>

//               <div className="p-4">
//                 <div className="flex gap-2 mb-3">
//                   {b.colors.map((c, i) => <div key={i} className={`w-4 h-4 rounded-full border border-gray-300 ${getColorClass(c)}`}></div>)}
//                 </div>
//                 <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">{b.name}</h3>
//                 <p className="text-lg font-semibold text-gray-900">{formatPrice(b.price)}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Bracelet;



// import React, { useState } from 'react';
// import { Heart, Filter, ChevronDown } from 'lucide-react';
// import { Link } from 'react-router-dom';  // import Link

// const Bracelet = () => {
//   const [favorites, setFavorites] = useState(new Set());
//   const [sortBy, setSortBy] = useState('default');
//   const [showFilter, setShowFilter] = useState(false);
//   const [priceRange, setPriceRange] = useState('all');

//   const bracelets = [
//     { id: 1, name: "Round Lab Diamond Tennis Bracelet (5 ct. tw.)", price: 2995, colors: ['rose-gold', 'white-gold', 'yellow-gold'], badge: "MOST LOVED", image: "https://images.unsplash.com/photo-1572472257812-2256ee78d87c?auto=format&fit=crop&w=400&q=80" },
//     { id: 2, name: "Round Lab Diamond Tennis Bracelet (3 ct. tw.)", price: 2995, colors: ['rose-gold', 'white-gold', 'yellow-gold'], image: "https://images.unsplash.com/photo-1600185361074-14f9e3a26c8b?auto=format&fit=crop&w=400&q=80" },
//     { id: 3, name: "Olivetta Lab Diamond Tennis Bracelet (2 3/4 ct. tw.)", price: 7000, colors: ['white-gold'], image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=400&q=80" },
//     // Add images for other bracelets similarly or leave blank
//   ];

//   const toggleFavorite = (id) => {
//     const newFavorites = new Set(favorites);
//     if (newFavorites.has(id)) newFavorites.delete(id);
//     else newFavorites.add(id);
//     setFavorites(newFavorites);
//   };

//   const formatPrice = (price) => new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
//     minimumFractionDigits: 0
//   }).format(price);

//   const getColorClass = (color) => {
//     const map = { 'rose-gold': 'bg-rose-300', 'white-gold': 'bg-gray-200', 'yellow-gold': 'bg-yellow-300' };
//     return map[color] || 'bg-gray-200';
//   };

//   const filteredBracelets = bracelets
//     .filter(item => {
//       if (priceRange === 'under-3500') return item.price < 3500;
//       if (priceRange === '3500-6000') return item.price >= 3500 && item.price <= 6000;
//       if (priceRange === 'above-6000') return item.price > 6000;
//       return true;
//     })
//     .sort((a, b) => {
//       if (sortBy === 'price-low') return a.price - b.price;
//       if (sortBy === 'price-high') return b.price - a.price;
//       if (sortBy === 'name') return a.name.localeCompare(b.name);
//       return 0;
//     });

//   return (
//     <div className="min-h-screen bg-stone-50 px-4 py-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-6 text-sm text-gray-600">
//           <span>Home</span><span className="mx-2">/</span><span>Bracelets</span>
//         </div>

//         <div className="mb-8">
//           <h1 className="text-4xl font-light text-gray-800 mb-6">BRACELETS</h1>
//           <div className="flex justify-between items-center">
//             <button onClick={() => setShowFilter(!showFilter)} className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-sm text-gray-700 hover:bg-gray-50">
//               <Filter size={16} /> FILTER
//             </button>
//             <div className="relative">
//               <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="appearance-none bg-white border border-gray-300 rounded-sm px-4 py-2 pr-8 text-gray-700">
//                 <option value="default">SORT</option>
//                 <option value="price-low">Price: Low to High</option>
//                 <option value="price-high">Price: High to Low</option>
//                 <option value="name">Name</option>
//               </select>
//               <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
//             </div>
//           </div>

//           {showFilter && (
//             <div className="mt-4 flex gap-4 text-sm">
//               <label className="flex items-center gap-1">
//                 <input type="radio" name="price" value="all" checked={priceRange === 'all'} onChange={(e) => setPriceRange(e.target.value)} />
//                 All Prices
//               </label>
//               <label className="flex items-center gap-1">
//                 <input type="radio" name="price" value="under-3500" checked={priceRange === 'under-3500'} onChange={(e) => setPriceRange(e.target.value)} />
//                 Under $3500
//               </label>
//               <label className="flex items-center gap-1">
//                 <input type="radio" name="price" value="3500-6000" checked={priceRange === '3500-6000'} onChange={(e) => setPriceRange(e.target.value)} />
//                 $3500 - $6000
//               </label>
//               <label className="flex items-center gap-1">
//                 <input type="radio" name="price" value="above-6000" checked={priceRange === 'above-6000'} onChange={(e) => setPriceRange(e.target.value)} />
//                 Above $6000
//               </label>
//             </div>
//           )}
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {filteredBracelets.map((b) => (
//             <Link to={`/bracelet/${b.id}`} key={b.id} className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
//               <div className="relative">
//                 {b.badge && (
//                   <div className={`absolute top-3 left-3 px-2 py-1 text-xs font-medium rounded-sm ${b.badge === 'MOST LOVED' ? 'bg-green-700 text-white' : 'bg-yellow-600 text-white'}`}>
//                     {b.badge}
//                   </div>
//                 )}
//                 <button
//                   onClick={(e) => {
//                     e.preventDefault(); // prevent link navigation on favorite toggle
//                     toggleFavorite(b.id);
//                   }}
//                   className="absolute top-3 right-3 p-2 rounded-full bg-white shadow-sm"
//                   aria-label={favorites.has(b.id) ? "Remove from favorites" : "Add to favorites"}
//                 >
//                   <Heart size={20} className={`${favorites.has(b.id) ? 'fill-red-500 text-red-500' : 'text-gray-400 group-hover:text-red-500'} transition-colors`} />
//                 </button>
//                 <div className="aspect-square bg-gray-100 rounded-t-lg flex items-center justify-center overflow-hidden">
//                   {b.image ? (
//                     <img src={b.image} alt={b.name} className="object-cover w-full h-full" />
//                   ) : (
//                     <div className="w-32 h-8 bg-gray-300 rounded-full flex items-center justify-center">
//                       <div className="w-24 h-2 bg-gray-400 rounded-full"></div>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               <div className="p-4">
//                 <div className="flex gap-2 mb-3">
//                   {b.colors.map((c, i) => (
//                     <div key={i} className={`w-4 h-4 rounded-full border border-gray-300 ${getColorClass(c)}`}></div>
//                   ))}
//                 </div>
//                 <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">{b.name}</h3>
//                 <p className="text-lg font-semibold text-gray-900">{formatPrice(b.price)}</p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Bracelet;


// import React, { useState } from 'react';
// import { Heart, Filter, ChevronDown } from 'lucide-react';

// const Bracelet = () => {
//   const [favorites, setFavorites] = useState(new Set());
//   const [sortBy, setSortBy] = useState('default');
//   const [showFilter, setShowFilter] = useState(false);
//   const [priceRange, setPriceRange] = useState('all');

//   const bracelets = [
//     { 
//       id: 1, 
//       name: "Round Lab Diamond Tennis Bracelet (3 ct. tw.)", 
//       price: 2995, 
//       colors: ['rose-gold', 'white-gold', 'yellow-gold'], 
//       badge: "MOST LOVED", 
//       image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80" 
//     },
//     { 
//       id: 2, 
//       name: "Round Lab Diamond Tennis Bracelet (3 ct. tw.)", 
//       price: 2995, 
//       colors: ['rose-gold', 'white-gold', 'yellow-gold'], 
//       image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=400&q=80" 
//     },
//     { 
//       id: 3, 
//       name: "Olivetta Lab Diamond Tennis Bracelet (2 3/4 ct. tw.)", 
//       price: 7000, 
//       colors: ['white-gold'], 
//       image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=400&q=80" 
//     },
//     { 
//       id: 4, 
//       name: "Azure Sapphire and Diamond Bracelet (1/2 ct. tw.)", 
//       price: 3595, 
//       colors: ['white-gold'], 
//       image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=400&q=80" 
//     },
//     { 
//       id: 5, 
//       name: "Round Lab Diamond Tennis Bracelet (4 ct. tw.)", 
//       price: 2995, 
//       colors: ['rose-gold', 'white-gold', 'yellow-gold'], 
//       image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80" 
//     },
//     { 
//       id: 6, 
//       name: "Round Lab Diamond Tennis Bracelet (3 ct. tw.)", 
//       price: 2995, 
//       colors: ['rose-gold', 'white-gold', 'yellow-gold'], 
//       badge: "BEST SELLER", 
//       image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80" 
//     },
//     { 
//       id: 7, 
//       name: "Olivetta Lab Diamond Tennis Bracelet (2 3/4 ct. tw.)", 
//       price: 7000, 
//       colors: ['white-gold'], 
//       image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=400&q=80" 
//     },
//     { 
//       id: 8, 
//       name: "Azure Sapphire and Diamond Bracelet (1/2 ct. tw.)", 
//       price: 3595, 
//       colors: ['white-gold'], 
//       image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=400&q=80" 
//     },
//     { 
//       id: 9, 
//       name: "Round Lab Diamond Tennis Bracelet (5 ct. tw.)", 
//       price: 2995, 
//       colors: ['rose-gold', 'white-gold', 'yellow-gold'], 
//       image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=400&q=80" 
//     },
//     { 
//       id: 10, 
//       name: "Round Lab Diamond Tennis Bracelet (3 ct. tw.)", 
//       price: 2995, 
//       colors: ['rose-gold', 'white-gold', 'yellow-gold'], 
//       image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80" 
//     },
//     { 
//       id: 11, 
//       name: "Olivetta Lab Diamond Tennis Bracelet (2 3/4 ct. tw.)", 
//       price: 7000, 
//       colors: ['white-gold'], 
//       image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=400&q=80" 
//     },
//     { 
//       id: 12, 
//       name: "Emerald Cut Diamond Tennis Bracelet", 
//       price: 4500, 
//       colors: ['yellow-gold'], 
//       image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80" 
//     }
//   ];

//   const toggleFavorite = (id) => {
//     const newFavorites = new Set(favorites);
//     if (newFavorites.has(id)) {
//       newFavorites.delete(id);
//     } else {
//       newFavorites.add(id);
//     }
//     setFavorites(newFavorites);
//   };

//   const formatPrice = (price) => {
//     return new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD',
//       minimumFractionDigits: 0
//     }).format(price);
//   };

//   const getColorClass = (color) => {
//     const colorMap = {
//       'rose-gold': 'bg-rose-300 border-rose-400',
//       'white-gold': 'bg-gray-100 border-gray-300',
//       'yellow-gold': 'bg-yellow-300 border-yellow-400'
//     };
//     return colorMap[color] || 'bg-gray-200 border-gray-300';
//   };

//   const filteredBracelets = bracelets
//     .filter(item => {
//       if (priceRange === 'under-3500') return item.price < 3500;
//       if (priceRange === '3500-6000') return item.price >= 3500 && item.price <= 6000;
//       if (priceRange === 'above-6000') return item.price > 6000;
//       return true;
//     })
//     .sort((a, b) => {
//       if (sortBy === 'price-low') return a.price - b.price;
//       if (sortBy === 'price-high') return b.price - a.price;
//       if (sortBy === 'name') return a.name.localeCompare(b.name);
//       return 0;
//     });

//   return (
//     <div className="min-h-screen bg-stone-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
//         {/* Breadcrumb */}
//         <div className="mb-6 text-sm text-gray-600">
//           <span>Home</span>
//           <span className="mx-2">/</span>
//           <span>Bracelets</span>
//         </div>

//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl sm:text-4xl font-light text-gray-800 mb-6 tracking-wide">
//             BRACELETS
//           </h1>
          
//           {/* Filter and Sort Controls */}
//           <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
//             <button 
//               onClick={() => setShowFilter(!showFilter)} 
//               className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-sm text-gray-700 hover:bg-gray-50 transition-colors w-full sm:w-auto"
//             >
//               <Filter size={16} />
//               FILTER
//             </button>
            
//             <div className="relative w-full sm:w-auto">
//               <select 
//                 value={sortBy} 
//                 onChange={(e) => setSortBy(e.target.value)} 
//                 className="appearance-none bg-white border border-gray-300 rounded-sm px-4 py-2 pr-8 text-gray-700 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-gray-200"
//               >
//                 <option value="default">SORT</option>
//                 <option value="price-low">Price: Low to High</option>
//                 <option value="price-high">Price: High to Low</option>
//                 <option value="name">Name</option>
//               </select>
//               <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
//             </div>
//           </div>

//           {/* Filter Options */}
//           {showFilter && (
//             <div className="mt-4 p-4 bg-white rounded-sm border border-gray-200">
//               <h3 className="text-sm font-medium text-gray-800 mb-3">Price Range</h3>
//               <div className="flex flex-wrap gap-4 text-sm">
//                 <label className="flex items-center gap-2 cursor-pointer">
//                   <input 
//                     type="radio" 
//                     name="price" 
//                     value="all" 
//                     checked={priceRange === 'all'} 
//                     onChange={(e) => setPriceRange(e.target.value)}
//                     className="text-gray-600"
//                   />
//                   All Prices
//                 </label>
//                 <label className="flex items-center gap-2 cursor-pointer">
//                   <input 
//                     type="radio" 
//                     name="price" 
//                     value="under-3500" 
//                     checked={priceRange === 'under-3500'} 
//                     onChange={(e) => setPriceRange(e.target.value)}
//                     className="text-gray-600"
//                   />
//                   Under $3,500
//                 </label>
//                 <label className="flex items-center gap-2 cursor-pointer">
//                   <input 
//                     type="radio" 
//                     name="price" 
//                     value="3500-6000" 
//                     checked={priceRange === '3500-6000'} 
//                     onChange={(e) => setPriceRange(e.target.value)}
//                     className="text-gray-600"
//                   />
//                   $3,500 - $6,000
//                 </label>
//                 <label className="flex items-center gap-2 cursor-pointer">
//                   <input 
//                     type="radio" 
//                     name="price" 
//                     value="above-6000" 
//                     checked={priceRange === 'above-6000'} 
//                     onChange={(e) => setPriceRange(e.target.value)}
//                     className="text-gray-600"
//                   />
//                   Above $6,000
//                 </label>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
//           {filteredBracelets.map((bracelet) => (
//             <div key={bracelet.id} className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer">
//               <div className="relative">
//                 {/* Badge */}
//                 {bracelet.badge && (
//                   <div className={`absolute top-3 left-3 px-2 py-1 text-xs font-medium rounded-sm z-10 ${
//                     bracelet.badge === 'MOST LOVED' ? 'bg-green-700 text-white' : 'bg-yellow-600 text-white'
//                   }`}>
//                     {bracelet.badge}
//                   </div>
//                 )}
                
//                 {/* Favorite Button */}
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     toggleFavorite(bracelet.id);
//                   }}
//                   className="absolute top-3 right-3 p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow z-10"
//                   aria-label={favorites.has(bracelet.id) ? "Remove from favorites" : "Add to favorites"}
//                 >
//                   <Heart 
//                     size={18} 
//                     className={`${
//                       favorites.has(bracelet.id) 
//                         ? 'fill-red-500 text-red-500' 
//                         : 'text-gray-400 group-hover:text-red-500'
//                     } transition-colors`} 
//                   />
//                 </button>
                
//                 {/* Product Image */}
//                 <div className="aspect-square bg-gray-50 rounded-t-lg flex items-center justify-center overflow-hidden">
//                   <img 
//                     src={bracelet.image} 
//                     alt={bracelet.name} 
//                     className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>
//               </div>

//               {/* Product Info */}
//               <div className="p-4">
//                 {/* Color Options */}
//                 <div className="flex gap-1 mb-3">
//                   {bracelet.colors.map((color, index) => (
//                     <div 
//                       key={index} 
//                       className={`w-4 h-4 rounded-full border ${getColorClass(color)} cursor-pointer hover:scale-110 transition-transform`}
//                       title={color.replace('-', ' ')}
//                     />
//                   ))}
//                 </div>
                
//                 {/* Product Name */}
//                 <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2 leading-relaxed">
//                   {bracelet.name}
//                 </h3>
                
//                 {/* Price */}
//                 <p className="text-lg font-semibold text-gray-900">
//                   {formatPrice(bracelet.price)}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Show message if no products found */}
//         {filteredBracelets.length === 0 && (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">No bracelets found matching your criteria.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Bracelet;




// import React, { useState } from 'react';
// import { Heart, Filter, ChevronDown } from 'lucide-react';

// const Bracelet = () => {
//   const [favorites, setFavorites] = useState(new Set());
//   const [sortBy, setSortBy] = useState('default');
//   const [showFilter, setShowFilter] = useState(false);
//   const [priceRange, setPriceRange] = useState('all');

//   const bracelets = [
//     { 
//       id: 1, 
//       name: "Round Lab Diamond Tennis Bracelet (3 ct. tw.)", 
//       price: 2995, 
//       colors: ['rose-gold', 'white-gold', 'yellow-gold'], 
//       badge: "MOST LOVED", 
//       image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80" 
//     },
//     { 
//       id: 2, 
//       name: "Round Lab Diamond Tennis Bracelet (3 ct. tw.)", 
//       price: 2995, 
//       colors: ['rose-gold', 'white-gold', 'yellow-gold'], 
//       image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=400&q=80" 
//     },
//     { 
//       id: 3, 
//       name: "Olivetta Lab Diamond Tennis Bracelet (2 3/4 ct. tw.)", 
//       price: 7000, 
//       colors: ['white-gold'], 
//       image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=400&q=80" 
//     },
//     { 
//       id: 4, 
//       name: "Azure Sapphire and Diamond Bracelet (1/2 ct. tw.)", 
//       price: 3595, 
//       colors: ['white-gold'], 
//       image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=400&q=80" 
//     },
//     { 
//       id: 5, 
//       name: "Round Lab Diamond Tennis Bracelet (4 ct. tw.)", 
//       price: 2995, 
//       colors: ['rose-gold', 'white-gold', 'yellow-gold'], 
//       image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80" 
//     },
//     { 
//       id: 6, 
//       name: "Round Lab Diamond Tennis Bracelet (3 ct. tw.)", 
//       price: 2995, 
//       colors: ['rose-gold', 'white-gold', 'yellow-gold'], 
//       badge: "BEST SELLER", 
//       image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80" 
//     },
//     { 
//       id: 7, 
//       name: "Olivetta Lab Diamond Tennis Bracelet (2 3/4 ct. tw.)", 
//       price: 7000, 
//       colors: ['white-gold'], 
//       image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=400&q=80" 
//     },
//     { 
//       id: 8, 
//       name: "Azure Sapphire and Diamond Bracelet (1/2 ct. tw.)", 
//       price: 3595, 
//       colors: ['white-gold'], 
//       image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=400&q=80" 
//     },
//     { 
//       id: 9, 
//       name: "Round Lab Diamond Tennis Bracelet (5 ct. tw.)", 
//       price: 2995, 
//       colors: ['rose-gold', 'white-gold', 'yellow-gold'], 
//       image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=400&q=80" 
//     },
//     { 
//       id: 10, 
//       name: "Round Lab Diamond Tennis Bracelet (3 ct. tw.)", 
//       price: 2995, 
//       colors: ['rose-gold', 'white-gold', 'yellow-gold'], 
//       image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80" 
//     },
//     { 
//       id: 11, 
//       name: "Olivetta Lab Diamond Tennis Bracelet (2 3/4 ct. tw.)", 
//       price: 7000, 
//       colors: ['white-gold'], 
//       image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=400&q=80" 
//     },
//     { 
//       id: 12, 
//       name: "Emerald Cut Diamond Tennis Bracelet", 
//       price: 4500, 
//       colors: ['yellow-gold'], 
//       image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80" 
//     }
//   ];

//   const toggleFavorite = (id) => {
//     const newFavorites = new Set(favorites);
//     if (newFavorites.has(id)) {
//       newFavorites.delete(id);
//     } else {
//       newFavorites.add(id);
//     }
//     setFavorites(newFavorites);
//   };

//   const formatPrice = (price) => {
//     return new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD',
//       minimumFractionDigits: 0
//     }).format(price);
//   };

//   const getColorClass = (color) => {
//     const colorMap = {
//       'rose-gold': 'bg-rose-300 border-rose-400',
//       'white-gold': 'bg-gray-100 border-gray-300',
//       'yellow-gold': 'bg-yellow-300 border-yellow-400'
//     };
//     return colorMap[color] || 'bg-gray-200 border-gray-300';
//   };

//   const filteredBracelets = bracelets
//     .filter(item => {
//       if (priceRange === 'under-3500') return item.price < 3500;
//       if (priceRange === '3500-6000') return item.price >= 3500 && item.price <= 6000;
//       if (priceRange === 'above-6000') return item.price > 6000;
//       return true;
//     })
//     .sort((a, b) => {
//       if (sortBy === 'price-low') return a.price - b.price;
//       if (sortBy === 'price-high') return b.price - a.price;
//       if (sortBy === 'name') return a.name.localeCompare(b.name);
//       return 0;
//     });

//   return (
//     <div className="min-h-screen bg-stone-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
//         {/* Breadcrumb */}
//         <div className="mb-6 text-sm text-gray-600">
//           <span>Home</span>
//           <span className="mx-2">/</span>
//           <span>Bracelets</span>
//         </div>

//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl sm:text-4xl font-light text-gray-800 mb-6 tracking-wide">
//             BRACELETS
//           </h1>
          
//           {/* Filter and Sort Controls */}
//           <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
//             <button 
//               onClick={() => setShowFilter(!showFilter)} 
//               className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-sm text-gray-700 hover:bg-gray-50 transition-colors w-full sm:w-auto"
//             >
//               <Filter size={16} />
//               FILTER
//             </button>
            
//             <div className="relative w-full sm:w-auto">
//               <select 
//                 value={sortBy} 
//                 onChange={(e) => setSortBy(e.target.value)} 
//                 className="appearance-none bg-white border border-gray-300 rounded-sm px-4 py-2 pr-8 text-gray-700 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-gray-200"
//               >
//                 <option value="default">SORT</option>
//                 <option value="price-low">Price: Low to High</option>
//                 <option value="price-high">Price: High to Low</option>
//                 <option value="name">Name</option>
//               </select>
//               <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
//             </div>
//           </div>

//           {/* Filter Options */}
//           {showFilter && (
//             <div className="mt-4 p-4 bg-white rounded-sm border border-gray-200">
//               <h3 className="text-sm font-medium text-gray-800 mb-3">Price Range</h3>
//               <div className="flex flex-wrap gap-4 text-sm">
//                 <label className="flex items-center gap-2 cursor-pointer">
//                   <input 
//                     type="radio" 
//                     name="price" 
//                     value="all" 
//                     checked={priceRange === 'all'} 
//                     onChange={(e) => setPriceRange(e.target.value)}
//                     className="text-gray-600"
//                   />
//                   All Prices
//                 </label>
//                 <label className="flex items-center gap-2 cursor-pointer">
//                   <input 
//                     type="radio" 
//                     name="price" 
//                     value="under-3500" 
//                     checked={priceRange === 'under-3500'} 
//                     onChange={(e) => setPriceRange(e.target.value)}
//                     className="text-gray-600"
//                   />
//                   Under $3,500
//                 </label>
//                 <label className="flex items-center gap-2 cursor-pointer">
//                   <input 
//                     type="radio" 
//                     name="price" 
//                     value="3500-6000" 
//                     checked={priceRange === '3500-6000'} 
//                     onChange={(e) => setPriceRange(e.target.value)}
//                     className="text-gray-600"
//                   />
//                   $3,500 - $6,000
//                 </label>
//                 <label className="flex items-center gap-2 cursor-pointer">
//                   <input 
//                     type="radio" 
//                     name="price" 
//                     value="above-6000" 
//                     checked={priceRange === 'above-6000'} 
//                     onChange={(e) => setPriceRange(e.target.value)}
//                     className="text-gray-600"
//                   />
//                   Above $6,000
//                 </label>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
//           {filteredBracelets.map((bracelet) => (
//             <div 
//               key={bracelet.id} 
//               className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
//               onClick={() => {
//                 // Navigate to individual bracelet page
//                 window.location.href = `/bracelet/${bracelet.id}`;
//               }}
//             >
//               <div className="relative">
//                 {/* Badge */}
//                 {bracelet.badge && (
//                   <div className={`absolute top-3 left-3 px-2 py-1 text-xs font-medium rounded-sm z-10 ${
//                     bracelet.badge === 'MOST LOVED' ? 'bg-green-700 text-white' : 'bg-yellow-600 text-white'
//                   }`}>
//                     {bracelet.badge}
//                   </div>
//                 )}
                
//                 {/* Favorite Button */}
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     toggleFavorite(bracelet.id);
//                   }}
//                   className="absolute top-3 right-3 p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow z-10"
//                   aria-label={favorites.has(bracelet.id) ? "Remove from favorites" : "Add to favorites"}
//                 >
//                   <Heart 
//                     size={18} 
//                     className={`${
//                       favorites.has(bracelet.id) 
//                         ? 'fill-red-500 text-red-500' 
//                         : 'text-gray-400 group-hover:text-red-500'
//                     } transition-colors`} 
//                   />
//                 </button>
                
//                 {/* Product Image */}
//                 <div className="aspect-square bg-gray-50 rounded-t-lg flex items-center justify-center overflow-hidden">
//                   <img 
//                     src={bracelet.image} 
//                     alt={bracelet.name} 
//                     className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>
//               </div>

//               {/* Product Info */}
//               <div className="p-4">
//                 {/* Color Options */}
//                 <div className="flex gap-1 mb-3">
//                   {bracelet.colors.map((color, index) => (
//                     <div 
//                       key={index} 
//                       className={`w-4 h-4 rounded-full border ${getColorClass(color)} cursor-pointer hover:scale-110 transition-transform`}
//                       title={color.replace('-', ' ')}
//                     />
//                   ))}
//                 </div>
                
//                 {/* Product Name */}
//                 <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2 leading-relaxed">
//                   {bracelet.name}
//                 </h3>
                
//                 {/* Price */}
//                 <p className="text-lg font-semibold text-gray-900">
//                   {formatPrice(bracelet.price)}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Show message if no products found */}
//         {filteredBracelets.length === 0 && (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">No bracelets found matching your criteria.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Bracelet;


import React, { useState } from 'react';
import { Heart, Filter, ChevronDown } from 'lucide-react';
import Header from "./Header"
const Bracelet = () => {
  const [favorites, setFavorites] = useState(new Set());
  const [sortBy, setSortBy] = useState('default');
  const [showFilter, setShowFilter] = useState(false);
  const [priceRange, setPriceRange] = useState('all');

  const bracelets = [
    { 
      id: 1, 
      name: "Round Lab Diamond Tennis Bracelet (3 ct. tw.)", 
      price: 2995, 
      colors: ['rose-gold', 'white-gold', 'yellow-gold'], 
      badge: "MOST LOVED", 
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80" 
    },
    { 
      id: 2, 
      name: "Round Lab Diamond Tennis Bracelet (3 ct. tw.)", 
      price: 2995, 
      colors: ['rose-gold', 'white-gold', 'yellow-gold'], 
      image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=400&q=80" 
    },
    { 
      id: 3, 
      name: "Olivetta Lab Diamond Tennis Bracelet (2 3/4 ct. tw.)", 
      price: 7000, 
      colors: ['white-gold'], 
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=400&q=80" 
    },
    { 
      id: 4, 
      name: "Azure Sapphire and Diamond Bracelet (1/2 ct. tw.)", 
      price: 3595, 
      colors: ['white-gold'], 
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=400&q=80" 
    },
    { 
      id: 5, 
      name: "Round Lab Diamond Tennis Bracelet (4 ct. tw.)", 
      price: 2995, 
      colors: ['rose-gold', 'white-gold', 'yellow-gold'], 
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80" 
    },
    { 
      id: 6, 
      name: "Round Lab Diamond Tennis Bracelet (3 ct. tw.)", 
      price: 2995, 
      colors: ['rose-gold', 'white-gold', 'yellow-gold'], 
      badge: "BEST SELLER", 
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80" 
    },
    { 
      id: 7, 
      name: "Olivetta Lab Diamond Tennis Bracelet (2 3/4 ct. tw.)", 
      price: 7000, 
      colors: ['white-gold'], 
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=400&q=80" 
    },
    { 
      id: 8, 
      name: "Azure Sapphire and Diamond Bracelet (1/2 ct. tw.)", 
      price: 3595, 
      colors: ['white-gold'], 
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=400&q=80" 
    },
    { 
      id: 9, 
      name: "Round Lab Diamond Tennis Bracelet (5 ct. tw.)", 
      price: 2995, 
      colors: ['rose-gold', 'white-gold', 'yellow-gold'], 
      image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=400&q=80" 
    },
    { 
      id: 10, 
      name: "Round Lab Diamond Tennis Bracelet (3 ct. tw.)", 
      price: 2995, 
      colors: ['rose-gold', 'white-gold', 'yellow-gold'], 
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80" 
    },
    { 
      id: 11, 
      name: "Olivetta Lab Diamond Tennis Bracelet (2 3/4 ct. tw.)", 
      price: 7000, 
      colors: ['white-gold'], 
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=400&q=80" 
    },
    { 
      id: 12, 
      name: "Emerald Cut Diamond Tennis Bracelet", 
      price: 4500, 
      colors: ['yellow-gold'], 
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80" 
    }
  ];

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getColorClass = (color) => {
    const colorMap = {
      'rose-gold': 'bg-rose-300 border-rose-400',
      'white-gold': 'bg-gray-100 border-gray-300',
      'yellow-gold': 'bg-yellow-300 border-yellow-400'
    };
    return colorMap[color] || 'bg-gray-200 border-gray-300';
  };

  const filteredBracelets = bracelets
    .filter(item => {
      if (priceRange === 'under-3500') return item.price < 3500;
      if (priceRange === '3500-6000') return item.price >= 3500 && item.price <= 6000;
      if (priceRange === 'above-6000') return item.price > 6000;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f5f0' }}>
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
          
          .hover\\:bg-primary-light:hover {
            background-color: #a8b085;
          }
          
          .hover\\:border-primary:hover {
            border-color: #52583c;
          }
        `}
      </style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm font-yorkten color-primary-medium">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span>Bracelets</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-typo-grotesk color-primary mb-6 tracking-wide">
            BRACELETS
          </h1>
          
          {/* Filter and Sort Controls */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <button 
              onClick={() => setShowFilter(!showFilter)} 
              className="flex items-center justify-center gap-2 px-4 py-2 border border-primary-medium rounded-sm color-primary hover:bg-primary-light hover:text-white transition-colors w-full sm:w-auto font-museo-sans"
            >
              <Filter size={16} />
              FILTER
            </button>
            
            <div className="relative w-full sm:w-auto">
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)} 
                className="appearance-none bg-white border border-primary-medium rounded-sm px-4 py-2 pr-8 color-primary w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-primary-light font-museo-sans"
              >
                <option value="default">SORT</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 color-primary-medium pointer-events-none" size={16} />
            </div>
          </div>

          {/* Filter Options */}
          {showFilter && (
            <div className="mt-4 p-4 bg-white rounded-sm border border-primary-light">
              <h3 className="text-sm font-medium color-primary mb-3 font-typo-grotesk">Price Range</h3>
              <div className="flex flex-wrap gap-4 text-sm font-yorkten">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="price" 
                    value="all" 
                    checked={priceRange === 'all'} 
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="accent-primary"
                  />
                  <span className="color-primary-medium">All Prices</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="price" 
                    value="under-3500" 
                    checked={priceRange === 'under-3500'} 
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="accent-primary"
                  />
                  <span className="color-primary-medium">Under $3,500</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="price" 
                    value="3500-6000" 
                    checked={priceRange === '3500-6000'} 
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="accent-primary"
                  />
                  <span className="color-primary-medium">$3,500 - $6,000</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="price" 
                    value="above-6000" 
                    checked={priceRange === 'above-6000'} 
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="accent-primary"
                  />
                  <span className="color-primary-medium">Above $6,000</span>
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredBracelets.map((bracelet) => (
            <div 
              key={bracelet.id} 
              className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-primary-light border border-transparent"
              onClick={() => {
                // Navigate to individual bracelet page
                window.location.href = `/bracelet/${bracelet.id}`;
              }}
            >
              <div className="relative">
                {/* Badge */}
                {bracelet.badge && (
                  <div className={`absolute top-3 left-3 px-2 py-1 text-xs font-medium rounded-sm z-10 font-museo-sans ${
                    bracelet.badge === 'MOST LOVED' ? 'bg-primary text-white' : 'bg-primary-medium text-white'
                  }`}>
                    {bracelet.badge}
                  </div>
                )}
                
                {/* Favorite Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(bracelet.id);
                  }}
                  className="absolute top-3 right-3 p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow z-10"
                  aria-label={favorites.has(bracelet.id) ? "Remove from favorites" : "Add to favorites"}
                >
                  <Heart 
                    size={18} 
                    className={`${
                      favorites.has(bracelet.id) 
                        ? 'fill-red-500 text-red-500' 
                        : 'text-gray-400'
                    } transition-colors`} 
                    style={!favorites.has(bracelet.id) ? { color: '#a8b085' } : {}}
                  />
                </button>
                
                {/* Product Image */}
                <div className="aspect-square bg-gray-50 rounded-t-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src={bracelet.image} 
                    alt={bracelet.name} 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                {/* Color Options */}
                <div className="flex gap-1 mb-3">
                  {bracelet.colors.map((color, index) => (
                    <div 
                      key={index} 
                      className={`w-4 h-4 rounded-full border ${getColorClass(color)} cursor-pointer hover:scale-110 transition-transform`}
                      title={color.replace('-', ' ')}
                    />
                  ))}
                </div>
                
                {/* Product Name */}
                <h3 className="text-sm font-medium color-primary mb-2 line-clamp-2 leading-relaxed font-gibson">
                  {bracelet.name}
                </h3>
                
                {/* Price */}
                <p className="text-lg font-semibold color-primary font-typo-grotesk">
                  {formatPrice(bracelet.price)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Show message if no products found */}
        {filteredBracelets.length === 0 && (
          <div className="text-center py-12">
            <p className="color-primary-medium text-lg font-yorkten">No bracelets found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bracelet;