// import React from 'react'

// function Header() {
//   return (
//     <div>
//  <p>Home</p>
//  <p>Diamond Forest</p>
//  <p>User</p>
//  <p>Love</p>
//  <p>Cart</p>

//     </div>
//   )
// }

// export default Header


// import React from 'react';

// function Header() {
//   return (
//     <div className="relative flex items-center justify-between px-6 py-4 bg-transparent text-black z-10">
//       {/* Left: Home */}
//       <div>
//         <p>Home</p>
//       </div>

//       {/* Center: Diamond Forest */}
//      <div className="absolute left-1/2 transform -translate-x-1/2">
//   <p className="font-bold text-2xl">Diamond Forest</p>
// </div>


//       {/* Right: User, Love, Cart */}
//       <div className="flex items-center space-x-4">
//         <p>User</p>
//         <p>Love</p>
//         <p>Cart</p>
//       </div>
//     </div>
//   );
// }

// export default Header;



// import React from 'react';
// import { Search, User, Heart, ShoppingBag, Home } from 'lucide-react';

// function Header() {
//   const navItems = ['RINGS', 'BRACELETS', 'NECKLACES', 'EARRINGS', 'CUSTOM'];
  
//   return (
//     <div className="relative z-10">
//       {/* Top Header Row */}
//       <div className="flex items-center justify-between px-8 py-6 bg-transparent text-gray-800">
//         {/* Left: Home Icon */}
//         <div className="flex items-center">
//           <Home className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer transition-colors" />
//         </div>
        
//         {/* Center: Diamond Forest */}
//         <div className="absolute left-1/2 transform -translate-x-1/2">
//           <h1 className="font-light text-2xl tracking-[0.2em] text-gray-700">DIAMOND FOREST</h1>
//         </div>
        
//         {/* Right: User, Love, Cart */}
//         <div className="flex items-center space-x-6">
//           <User className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer transition-colors" />
//           <Heart className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer transition-colors" />
//           <ShoppingBag className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer transition-colors" />
//         </div>
//       </div>
      
//       {/* Navigation Row */}
//       <div className="flex items-center justify-between px-12 py-4 border-t border-gray-200 border-opacity-30">
//         {/* Navigation Menu */}
//         <nav className="flex space-x-15">
//           {navItems.map((item) => (
//             <a
//               key={item}
//               href="#"
//               className="text-sm font-light tracking-wide text-gray-700 hover:text-gray-900 transition-colors duration-200 cursor-pointer"
//             >
//               {item}
//             </a>
//           ))}
//         </nav>
        
//         {/* Search */}
//         <div className="relative">
//           <div className="flex items-center bg-gray-600 rounded-full px-5 py-2 hover:bg-gray-700 transition-colors">
//             <Search className="w-4 h-4 text-white mr-2" />
//             <input
//               type="text"
//               placeholder="SEARCH"
//               className="bg-transparent text-white placeholder-white text-sm font-light tracking-wide outline-none w-24 placeholder-opacity-90"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;




// import React, { useState } from 'react';
// import { Search, User, Heart, ShoppingBag, Home } from 'lucide-react';

// function Header() {
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const navigationData = {
//     RINGS: {
//       STYLE: [
//         'Solitaire Rings',
//         'Halo Rings', 
//         'Three-Stone Rings',
//         'Minimalist Rings',
//         'Eternity Bands',
//         'Stackable Rings'
//       ],
//       OCCASION: [
//         'Engagement Rings',
//         'Wedding Bands',
//         'Promise Rings',
//         'Anniversary Rings',
//         'Cocktail Rings',
//         'Daily Wear Rings',
//         'Proposal Rings',
//         'Graduation Rings'
//       ],
//       'METAL TYPE': [
//         'White Gold Rings',
//         'Yellow Gold Rings',
//         'Rose Gold Rings',
//         'Platinum Rings',
//         'Mixed Metal Rings'
//       ],
//       'SETTING TYPE': [
//         'Prong Setting',
//         'Bezel Setting',
//         'Pave Setting',
//         'Channel Setting',
//         'Tension Setting'
//       ]
//     },
//     BRACELETS: {
//       STYLE: [
//         'Tennis Bracelets',
//         'Chain Bracelets',
//         'Bangle Bracelets',
//         'Charm Bracelets',
//         'Cuff Bracelets'
//       ],
//       OCCASION: [
//         'Daily Wear',
//         'Special Events',
//         'Gift Bracelets',
//         'Anniversary'
//       ],
//       'METAL TYPE': [
//         'White Gold',
//         'Yellow Gold',
//         'Rose Gold',
//         'Platinum',
//         'Silver'
//       ]
//     },
//     NECKLACES: {
//       STYLE: [
//         'Pendant Necklaces',
//         'Chain Necklaces',
//         'Choker Necklaces',
//         'Statement Necklaces',
//         'Layered Necklaces'
//       ],
//       OCCASION: [
//         'Daily Wear',
//         'Evening Wear',
//         'Bridal',
//         'Gift Necklaces'
//       ],
//       'METAL TYPE': [
//         'White Gold',
//         'Yellow Gold',
//         'Rose Gold',
//         'Platinum'
//       ]
//     },
//     EARRINGS: {
//       STYLE: [
//         'Stud Earrings',
//         'Drop Earrings',
//         'Hoop Earrings',
//         'Chandelier Earrings',
//         'Huggie Earrings'
//       ],
//       OCCASION: [
//         'Daily Wear',
//         'Evening Wear',
//         'Bridal Earrings',
//         'Gift Earrings'
//       ],
//       'METAL TYPE': [
//         'White Gold',
//         'Yellow Gold',
//         'Rose Gold',
//         'Platinum'
//       ]
//     },
//     CUSTOM: {
//       SERVICES: [
//         'Custom Design',
//         'Ring Resizing',
//         'Stone Setting',
//         'Jewelry Repair',
//         'Engraving'
//       ],
//       CONSULTATION: [
//         'Design Consultation',
//         'Virtual Appointment',
//         'In-Store Visit'
//       ]
//     }
//   };

//   const navItems = ['RINGS', 'BRACELETS', 'NECKLACES', 'EARRINGS', 'CUSTOM'];
  
//   return (
//     <div className="relative z-50">
//       {/* Top Header Row */}
//       <div className="flex items-center justify-between px-8 py-6 bg-transparent text-gray-800">
//         {/* Left: Home Icon */}
//         <div className="flex items-center">
//           <Home className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer transition-colors" />
//         </div>
        
//         {/* Center: Diamond Forest */}
//         <div className="absolute left-1/2 transform -translate-x-1/2">
//           <h1 className="font-light text-2xl tracking-[0.2em] text-gray-700">DIAMOND FOREST</h1>
//         </div>
        
//         {/* Right: User, Love, Cart */}
//         <div className="flex items-center space-x-6">
//           <User className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer transition-colors" />
//           <Heart className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer transition-colors" />
//           <ShoppingBag className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer transition-colors" />
//         </div>
//       </div>
      
//       {/* Navigation Row */}
//       <div className="flex items-center justify-between px-8 py-4 border-t border-gray-200 border-opacity-30">
//         {/* Navigation Menu */}
//         <nav className="flex space-x-8">
//           {navItems.map((item) => (
//             <div 
//               key={item}
//               className="relative"
//               onMouseEnter={() => setActiveDropdown(item)}
//               onMouseLeave={() => setActiveDropdown(null)}
//             >
//               <a
//                 href="#"
//                 className={`text-sm font-light tracking-wide transition-colors duration-200 cursor-pointer ${
//                   activeDropdown === item ? 'text-gray-900 font-medium' : 'text-gray-700 hover:text-gray-900'
//                 }`}
//               >
//                 {item}
//               </a>
              
//               {/* Dropdown Menu */}
//               {activeDropdown === item && navigationData[item] && (
//                 <div 
//                   className="absolute top-full left-0 pt-2 z-50"
//                   onMouseEnter={() => setActiveDropdown(item)}
//                   onMouseLeave={() => setActiveDropdown(null)}
//                 >
//                   <div className="bg-white shadow-xl rounded-lg border border-gray-200 p-6 min-w-max">
//                     <div className="grid grid-cols-4 gap-8">
//                       {Object.entries(navigationData[item]).map(([category, items]) => (
//                         <div key={category} className="min-w-48">
//                           <h3 className="text-xs font-medium text-gray-800 mb-3 tracking-wide border-b border-gray-200 pb-2">
//                             {category}
//                           </h3>
//                           <ul className="space-y-2">
//                             {items.map((subItem) => (
//                               <li key={subItem}>
//                                 <a
//                                   href="#"
//                                   className="text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-150 block py-2 px-2 rounded-md"
//                                   onClick={(e) => {
//                                     e.preventDefault();
//                                     console.log(`Clicked: ${subItem}`);
//                                     // Add your navigation logic here
//                                   }}
//                                 >
//                                   {subItem}
//                                 </a>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </nav>
        
//         {/* Search */}
//         <div className="relative">
//           <div className="flex items-center bg-gray-600 rounded-full px-4 py-2 hover:bg-gray-700 transition-colors">
//             <Search className="w-4 h-4 text-white mr-2" />
//             <input
//               type="text"
//               placeholder="SEARCH"
//               className="bg-transparent text-white placeholder-white text-sm font-light tracking-wide outline-none w-24 placeholder-opacity-90"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;




// ----responsive

// import React, { useState } from 'react';
// import { Search, User, Heart, ShoppingBag, Home, Menu, X } from 'lucide-react';

// function Header() {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

//   const navigationData = {
//     RINGS: {
//       STYLE: [
//         'Solitaire Rings',
//         'Halo Rings', 
//         'Three-Stone Rings',
//         'Minimalist Rings',
//         'Eternity Bands',
//         'Stackable Rings'
//       ],
//       OCCASION: [
//         'Engagement Rings',
//         'Wedding Bands',
//         'Promise Rings',
//         'Anniversary Rings',
//         'Cocktail Rings',
//         'Daily Wear Rings',
//         'Proposal Rings',
//         'Graduation Rings'
//       ],
//       'METAL TYPE': [
//         'White Gold Rings',
//         'Yellow Gold Rings',
//         'Rose Gold Rings',
//         'Platinum Rings',
//         'Mixed Metal Rings'
//       ],
//       'SETTING TYPE': [
//         'Prong Setting',
//         'Bezel Setting',
//         'Pave Setting',
//         'Channel Setting',
//         'Tension Setting'
//       ]
//     },
//     BRACELETS: {
//       STYLE: [
//         'Tennis Bracelets',
//         'Chain Bracelets',
//         'Bangle Bracelets',
//         'Charm Bracelets',
//         'Cuff Bracelets'
//       ],
//       OCCASION: [
//         'Daily Wear',
//         'Special Events',
//         'Gift Bracelets',
//         'Anniversary'
//       ],
//       'METAL TYPE': [
//         'White Gold',
//         'Yellow Gold',
//         'Rose Gold',
//         'Platinum',
//         'Silver'
//       ]
//     },
//     NECKLACES: {
//       STYLE: [
//         'Pendant Necklaces',
//         'Chain Necklaces',
//         'Choker Necklaces',
//         'Statement Necklaces',
//         'Layered Necklaces'
//       ],
//       OCCASION: [
//         'Daily Wear',
//         'Evening Wear',
//         'Bridal',
//         'Gift Necklaces'
//       ],
//       'METAL TYPE': [
//         'White Gold',
//         'Yellow Gold',
//         'Rose Gold',
//         'Platinum'
//       ]
//     },
//     EARRINGS: {
//       STYLE: [
//         'Stud Earrings',
//         'Drop Earrings',
//         'Hoop Earrings',
//         'Chandelier Earrings',
//         'Huggie Earrings'
//       ],
//       OCCASION: [
//         'Daily Wear',
//         'Evening Wear',
//         'Bridal Earrings',
//         'Gift Earrings'
//       ],
//       'METAL TYPE': [
//         'White Gold',
//         'Yellow Gold',
//         'Rose Gold',
//         'Platinum'
//       ]
//     },
//     CUSTOM: {
//       SERVICES: [
//         'Custom Design',
//         'Ring Resizing',
//         'Stone Setting',
//         'Jewelry Repair',
//         'Engraving'
//       ],
//       CONSULTATION: [
//         'Design Consultation',
//         'Virtual Appointment',
//         'In-Store Visit'
//       ]
//     }
//   };

//   const navItems = ['RINGS', 'BRACELETS', 'NECKLACES', 'EARRINGS', 'CUSTOM'];
  
//   return (
//     <div className="relative z-50">
//       {/* Top Header Row */}
//       <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-6 bg-transparent text-gray-800">
//         {/* Left: Home Icon (Desktop) / Hamburger (Mobile) */}
//         <div className="flex items-center">
//           <Home className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer transition-colors hidden sm:block" />
//           <button
//             className="sm:hidden p-1"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             {isMobileMenuOpen ? (
//               <X className="w-6 h-6 text-gray-600" />
//             ) : (
//               <Menu className="w-6 h-6 text-gray-600" />
//             )}
//           </button>
//         </div>
        
//         {/* Center: Diamond Forest */}
//         <div className="flex-1 flex justify-center mx-4 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:flex-none sm:mx-0">
//           <h1 className="font-light text-sm sm:text-xl lg:text-2xl tracking-[0.1em] sm:tracking-[0.2em] text-gray-700 whitespace-nowrap">
//             DIAMOND FOREST
//           </h1>
//         </div>
        
//         {/* Right: User, Love, Cart, Search (Mobile) */}
//         <div className="flex items-center space-x-2 sm:space-x-6">
//           <button
//             className="sm:hidden p-1"
//             onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
//           >
//             <Search className="w-4 h-4 text-gray-600 hover:text-gray-800 transition-colors" />
//           </button>
//           <User className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-gray-800 cursor-pointer transition-colors" />
//           <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-gray-800 cursor-pointer transition-colors" />
//           <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-gray-800 cursor-pointer transition-colors" />
//         </div>
//       </div>

//       {/* Mobile Search Bar */}
//       {mobileSearchOpen && (
//         <div className="sm:hidden px-4 pb-4">
//           <div className="flex items-center bg-gray-600 rounded-full px-4 py-2">
//             <Search className="w-4 h-4 text-white mr-2" />
//             <input
//               type="text"
//               placeholder="SEARCH"
//               className="bg-transparent text-white placeholder-white text-sm font-light tracking-wide outline-none w-full placeholder-opacity-90"
//             />
//           </div>
//         </div>
//       )}
      
//       {/* Navigation Row - Desktop */}
//       <div className="hidden sm:flex items-center justify-between px-6 lg:px-8 py-4 border-t border-gray-200 border-opacity-30">
//         {/* Navigation Menu */}
//         <nav className="flex space-x-4 lg:space-x-8">
//           {navItems.map((item) => (
//             <div 
//               key={item}
//               className="relative"
//               onMouseEnter={() => setActiveDropdown(item)}
//               onMouseLeave={() => setActiveDropdown(null)}
//             >
//               <a
//                 href="#"
//                 className={`text-sm font-light tracking-wide transition-colors duration-200 cursor-pointer ${
//                   activeDropdown === item ? 'text-gray-900 font-medium' : 'text-gray-700 hover:text-gray-900'
//                 }`}
//               >
//                 {item}
//               </a>
              
//               {/* Dropdown Menu */}
//               {activeDropdown === item && navigationData[item] && (
//                 <div 
//                   className="absolute top-full left-0 pt-2 z-50"
//                   onMouseEnter={() => setActiveDropdown(item)}
//                   onMouseLeave={() => setActiveDropdown(null)}
//                 >
//                   <div className="bg-white shadow-xl rounded-lg border border-gray-200 p-6 min-w-max">
//                     <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
//                       {Object.entries(navigationData[item]).map(([category, items]) => (
//                         <div key={category} className="min-w-44 lg:min-w-48">
//                           <h3 className="text-xs font-medium text-gray-800 mb-3 tracking-wide border-b border-gray-200 pb-2">
//                             {category}
//                           </h3>
//                           <ul className="space-y-2">
//                             {items.map((subItem) => (
//                               <li key={subItem}>
//                                 <a
//                                   href="#"
//                                   className="text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-150 block py-2 px-2 rounded-md"
//                                   onClick={(e) => {
//                                     e.preventDefault();
//                                     console.log(`Clicked: ${subItem}`);
//                                   }}
//                                 >
//                                   {subItem}
//                                 </a>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </nav>
        
//         {/* Search - Desktop */}
//         <div className="relative">
//           <div className="flex items-center bg-gray-600 rounded-full px-4 py-2 hover:bg-gray-700 transition-colors">
//             <Search className="w-4 h-4 text-white mr-2" />
//             <input
//               type="text"
//               placeholder="SEARCH"
//               className="bg-transparent text-white placeholder-white text-sm font-light tracking-wide outline-none w-24 placeholder-opacity-90"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation Menu */}
//       {isMobileMenuOpen && (
//         <div className="sm:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-40">
//           <nav className="px-4 py-4">
//             {navItems.map((item) => (
//               <div key={item} className="border-b border-gray-100 last:border-b-0">
//                 <button
//                   className="w-full text-left py-4 text-sm font-light tracking-wide text-gray-700 hover:text-gray-900 transition-colors"
//                   onClick={() => {
//                     if (activeDropdown === item) {
//                       setActiveDropdown(null);
//                     } else {
//                       setActiveDropdown(item);
//                     }
//                   }}
//                 >
//                   <div className="flex items-center justify-between">
//                     <span>{item}</span>
//                     <span className={`transition-transform duration-200 ${activeDropdown === item ? 'rotate-180' : ''}`}>
//                       ▼
//                     </span>
//                   </div>
//                 </button>
                
//                 {/* Mobile Dropdown Content */}
//                 {activeDropdown === item && navigationData[item] && (
//                   <div className="pb-4 pl-4">
//                     {Object.entries(navigationData[item]).map(([category, items]) => (
//                       <div key={category} className="mb-4">
//                         <h4 className="text-xs font-medium text-gray-800 mb-2 tracking-wide">
//                           {category}
//                         </h4>
//                         <ul className="space-y-1">
//                           {items.map((subItem) => (
//                             <li key={subItem}>
//                               <a
//                                 href="#"
//                                 className="text-sm text-gray-600 hover:text-gray-900 block py-1 transition-colors"
//                                 onClick={(e) => {
//                                   e.preventDefault();
//                                   console.log(`Clicked: ${subItem}`);
//                                   setIsMobileMenuOpen(false);
//                                 }}
//                               >
//                                 {subItem}
//                               </a>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </nav>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Header;




// import React, { useState } from 'react';
// import { Search, User, Heart, ShoppingBag, Home, Menu, X } from 'lucide-react';

// function Header() {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

//   const navigationData = {
//     RINGS: {
//       STYLE: [
//         'Solitaire Rings',
//         'Halo Rings', 
//         'Three-Stone Rings',
//         'Minimalist Rings',
//         'Eternity Bands',
//         'Stackable Rings'
//       ],
//       OCCASION: [
//         'Engagement Rings',
//         'Wedding Bands',
//         'Promise Rings',
//         'Anniversary Rings',
//         'Cocktail Rings',
//         'Daily Wear Rings',
//         'Proposal Rings',
//         'Graduation Rings'
//       ],
//       'METAL TYPE': [
//         'White Gold Rings',
//         'Yellow Gold Rings',
//         'Rose Gold Rings',
//         'Platinum Rings',
//         'Mixed Metal Rings'
//       ],
//       'SETTING TYPE': [
//         'Prong Setting',
//         'Bezel Setting',
//         'Pave Setting',
//         'Channel Setting',
//         'Tension Setting'
//       ]
//     },
//     BRACELETS: {
//       STYLE: [
//         'Tennis Bracelets',
//         'Chain Bracelets',
//         'Bangle Bracelets',
//         'Charm Bracelets',
//         'Cuff Bracelets'
//       ],
//       OCCASION: [
//         'Daily Wear',
//         'Special Events',
//         'Gift Bracelets',
//         'Anniversary'
//       ],
//       'METAL TYPE': [
//         'White Gold',
//         'Yellow Gold',
//         'Rose Gold',
//         'Platinum',
//         'Silver'
//       ]
//     },
//     NECKLACES: {
//       STYLE: [
//         'Pendant Necklaces',
//         'Chain Necklaces',
//         'Choker Necklaces',
//         'Statement Necklaces',
//         'Layered Necklaces'
//       ],
//       OCCASION: [
//         'Daily Wear',
//         'Evening Wear',
//         'Bridal',
//         'Gift Necklaces'
//       ],
//       'METAL TYPE': [
//         'White Gold',
//         'Yellow Gold',
//         'Rose Gold',
//         'Platinum'
//       ]
//     },
//     EARRINGS: {
//       STYLE: [
//         'Stud Earrings',
//         'Drop Earrings',
//         'Hoop Earrings',
//         'Chandelier Earrings',
//         'Huggie Earrings'
//       ],
//       OCCASION: [
//         'Daily Wear',
//         'Evening Wear',
//         'Bridal Earrings',
//         'Gift Earrings'
//       ],
//       'METAL TYPE': [
//         'White Gold',
//         'Yellow Gold',
//         'Rose Gold',
//         'Platinum'
//       ]
//     },
//     CUSTOM: {
//       SERVICES: [
//         'Custom Design',
//         'Ring Resizing',
//         'Stone Setting',
//         'Jewelry Repair',
//         'Engraving'
//       ],
//       CONSULTATION: [
//         'Design Consultation',
//         'Virtual Appointment',
//         'In-Store Visit'
//       ]
//     }
//   };

//   const navItems = ['RINGS', 'BRACELETS', 'NECKLACES', 'EARRINGS', 'CUSTOM'];
  
//   return (
//     <div className="relative z-50 pt-4 sm:pt-6">
//       {/* Top Header Row */}
//       <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-6 bg-transparent text-gray-800">
//         {/* Left: Home Icon (Desktop) / Hamburger (Mobile) */}
//         <div className="flex items-center">
//           <Home className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer transition-colors hidden sm:block" />
//           <button
//             className="sm:hidden p-1"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             {isMobileMenuOpen ? (
//               <X className="w-6 h-6 text-gray-600" />
//             ) : (
//               <Menu className="w-6 h-6 text-gray-600" />
//             )}
//           </button>
//         </div>
        
//         {/* Center: Diamond Forest */}
//         <div className="flex-1 flex justify-center mx-4 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:flex-none sm:mx-0">
//           <h1 className="font-light text-lg sm:text-2xl lg:text-3xl tracking-[0.15em] sm:tracking-[0.25em] text-gray-600 whitespace-nowrap">
//             DIAMOND FOREST
//           </h1>
//         </div>
        
//         {/* Right: User, Love, Cart, Search (Mobile) */}
//         <div className="flex items-center space-x-2 sm:space-x-6">
//           <button
//             className="sm:hidden p-1"
//             onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
//           >
//             <Search className="w-4 h-4 text-gray-600 hover:text-gray-800 transition-colors" />
//           </button>
//           <User className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-gray-800 cursor-pointer transition-colors" />
//           <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-gray-800 cursor-pointer transition-colors" />
//           <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-gray-800 cursor-pointer transition-colors" />
//         </div>
//       </div>

//       {/* Mobile Search Bar */}
//       {mobileSearchOpen && (
//         <div className="sm:hidden px-4 pb-4 border-t border-green-600 border-opacity-60 pt-4">
//           <div className="flex items-center bg-gray-600 rounded-full px-4 py-2">
//             <Search className="w-4 h-4 text-white mr-2" />
//             <input
//               type="text"
//               placeholder="SEARCH"
//               className="bg-transparent text-white placeholder-white text-sm font-light tracking-wide outline-none w-full placeholder-opacity-90"
//             />
//           </div>
//         </div>
//       )}
      
//       {/* Green line separator for mobile when search is not open */}
//       {!mobileSearchOpen && (
//         <div className="sm:hidden border-t border-green-600 border-opacity-60"></div>
//       )}
      
//       {/* Navigation Row - Desktop */}
//       <div className="hidden sm:flex items-center justify-between px-6 lg:px-8 py-4 border-t border-green-600 border-opacity-60">
//         {/* Navigation Menu */}
//         <nav className="flex space-x-6 lg:space-x-10">
//           {navItems.map((item) => (
//             <div 
//               key={item}
//               className="relative"
//               onMouseEnter={() => setActiveDropdown(item)}
//               onMouseLeave={() => setActiveDropdown(null)}
//             >
//               <a
//                 href="#"
//                 className={`text-sm lg:text-base font-light tracking-[0.1em] transition-colors duration-200 cursor-pointer ${
//                   activeDropdown === item ? 'text-gray-700 font-medium' : 'text-gray-600 hover:text-gray-700'
//                 }`}
//               >
//                 {item}
//               </a>
              
//               {/* Dropdown Menu */}
//               {activeDropdown === item && navigationData[item] && (
//                 <div 
//                   className="absolute top-full left-0 pt-2 z-50"
//                   onMouseEnter={() => setActiveDropdown(item)}
//                   onMouseLeave={() => setActiveDropdown(null)}
//                 >
//                   <div className="bg-white shadow-xl rounded-lg border border-gray-200 p-6 min-w-max">
//                     <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
//                       {Object.entries(navigationData[item]).map(([category, items]) => (
//                         <div key={category} className="min-w-44 lg:min-w-48">
//                           <h3 className="text-xs font-medium text-gray-800 mb-3 tracking-wide border-b border-gray-200 pb-2">
//                             {category}
//                           </h3>
//                           <ul className="space-y-2">
//                             {items.map((subItem) => (
//                               <li key={subItem}>
//                                 <a
//                                   href="#"
//                                   className="text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-150 block py-2 px-2 rounded-md"
//                                   onClick={(e) => {
//                                     e.preventDefault();
//                                     console.log(`Clicked: ${subItem}`);
//                                   }}
//                                 >
//                                   {subItem}
//                                 </a>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </nav>
        
//         {/* Search - Desktop */}
//         <div className="relative">
//           <div className="flex items-center bg-gray-600 rounded-full px-4 py-2 hover:bg-gray-700 transition-colors">
//             <Search className="w-4 h-4 text-white mr-2" />
//             <input
//               type="text"
//               placeholder="SEARCH"
//               className="bg-transparent text-white placeholder-white text-sm font-light tracking-wide outline-none w-24 placeholder-opacity-90"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation Menu */}
//       {isMobileMenuOpen && (
//         <div className="sm:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-green-600 border-opacity-60 z-40">
//           <nav className="px-4 py-4">
//             {navItems.map((item) => (
//               <div key={item} className="border-b border-gray-100 last:border-b-0">
//                 <button
//                   className="w-full text-left py-4 text-sm font-light tracking-wide text-gray-700 hover:text-gray-900 transition-colors"
//                   onClick={() => {
//                     if (activeDropdown === item) {
//                       setActiveDropdown(null);
//                     } else {
//                       setActiveDropdown(item);
//                     }
//                   }}
//                 >
//                   <div className="flex items-center justify-between">
//                     <span>{item}</span>
//                     <span className={`transition-transform duration-200 ${activeDropdown === item ? 'rotate-180' : ''}`}>
//                       ▼
//                     </span>
//                   </div>
//                 </button>
                
//                 {/* Mobile Dropdown Content */}
//                 {activeDropdown === item && navigationData[item] && (
//                   <div className="pb-4 pl-4">
//                     {Object.entries(navigationData[item]).map(([category, items]) => (
//                       <div key={category} className="mb-4">
//                         <h4 className="text-xs font-medium text-gray-800 mb-2 tracking-wide">
//                           {category}
//                         </h4>
//                         <ul className="space-y-1">
//                           {items.map((subItem) => (
//                             <li key={subItem}>
//                               <a
//                                 href="#"
//                                 className="text-sm text-gray-600 hover:text-gray-900 block py-1 transition-colors"
//                                 onClick={(e) => {
//                                   e.preventDefault();
//                                   console.log(`Clicked: ${subItem}`);
//                                   setIsMobileMenuOpen(false);
//                                 }}
//                               >
//                                 {subItem}
//                               </a>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </nav>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Header;




// import React, { useState } from 'react';
// import { Search, User, Heart, ShoppingBag, Home, Menu, X } from 'lucide-react';

// function Header() {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

//   const navigationData = {
//     RINGS: {
//       STYLE: [
//         'Solitaire Rings',
//         'Halo Rings', 
//         'Three-Stone Rings',
//         'Minimalist Rings',
//         'Eternity Bands',
//         'Stackable Rings'
//       ],
//       OCCASION: [
//         'Engagement Rings',
//         'Wedding Bands',
//         'Promise Rings',
//         'Anniversary Rings',
//         'Cocktail Rings',
//         'Daily Wear Rings',
//         'Proposal Rings',
//         'Graduation Rings'
//       ],
//       'METAL TYPE': [
//         'White Gold Rings',
//         'Yellow Gold Rings',
//         'Rose Gold Rings',
//         'Platinum Rings',
//         'Mixed Metal Rings'
//       ],
//       'SETTING TYPE': [
//         'Prong Setting',
//         'Bezel Setting',
//         'Pave Setting',
//         'Channel Setting',
//         'Tension Setting'
//       ]
//     },
//     BRACELETS: {
//       STYLE: [
//         'Tennis Bracelets',
//         'Chain Bracelets',
//         'Bangle Bracelets',
//         'Charm Bracelets',
//         'Cuff Bracelets'
//       ],
//       OCCASION: [
//         'Daily Wear',
//         'Special Events',
//         'Gift Bracelets',
//         'Anniversary'
//       ],
//       'METAL TYPE': [
//         'White Gold',
//         'Yellow Gold',
//         'Rose Gold',
//         'Platinum',
//         'Silver'
//       ]
//     },
//     NECKLACES: {
//       STYLE: [
//         'Pendant Necklaces',
//         'Chain Necklaces',
//         'Choker Necklaces',
//         'Statement Necklaces',
//         'Layered Necklaces'
//       ],
//       OCCASION: [
//         'Daily Wear',
//         'Evening Wear',
//         'Bridal',
//         'Gift Necklaces'
//       ],
//       'METAL TYPE': [
//         'White Gold',
//         'Yellow Gold',
//         'Rose Gold',
//         'Platinum'
//       ]
//     },
//     EARRINGS: {
//       STYLE: [
//         'Stud Earrings',
//         'Drop Earrings',
//         'Hoop Earrings',
//         'Chandelier Earrings',
//         'Huggie Earrings'
//       ],
//       OCCASION: [
//         'Daily Wear',
//         'Evening Wear',
//         'Bridal Earrings',
//         'Gift Earrings'
//       ],
//       'METAL TYPE': [
//         'White Gold',
//         'Yellow Gold',
//         'Rose Gold',
//         'Platinum'
//       ]
//     },
//     CUSTOM: {
//       SERVICES: [
//         'Custom Design',
//         'Ring Resizing',
//         'Stone Setting',
//         'Jewelry Repair',
//         'Engraving'
//       ],
//       CONSULTATION: [
//         'Design Consultation',
//         'Virtual Appointment',
//         'In-Store Visit'
//       ]
//     }
//   };

//   const navItems = ['RINGS', 'BRACELETS', 'NECKLACES', 'EARRINGS', 'CUSTOM'];

//   const fontStyles = `
//     @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&display=swap');
//     @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
    
//     .logo-font {
//       font-family: 'Beaufort Pro', 'Playfair Display', serif;
//       font-weight: 400;
//     }
    
//     .nav-font {
//       font-family: 'Ground Round', 'Stano Sans', 'Inter', sans-serif;
//       font-weight: 400;
//     }
//   `;
  
//   return (
//     <>
//       <style dangerouslySetInnerHTML={{ __html: fontStyles }} />
//       <div className="relative z-50 pt-4 sm:pt-6">
//         {/* Top Header Row */}
//         <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-6 bg-transparent">
//           {/* Left: Home Icon (Desktop) / Hamburger (Mobile) */}
//           <div className="flex items-center">
//             <Home className="w-5 h-5 hover:opacity-80 cursor-pointer transition-opacity hidden sm:block" style={{ color: '#52583c' }} />
//             <button
//               className="sm:hidden p-1"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             >
//               {isMobileMenuOpen ? (
//                 <X className="w-6 h-6" style={{ color: '#52583c' }} />
//               ) : (
//                 <Menu className="w-6 h-6" style={{ color: '#52583c' }} />
//               )}
//             </button>
//           </div>
          
//           {/* Center: Diamond Forest */}
//           <div className="flex-1 flex justify-center mx-4 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:flex-none sm:mx-0">
//             <h1 className="logo-font font-normal text-lg sm:text-2xl lg:text-3xl tracking-[0.15em] sm:tracking-[0.25em] whitespace-nowrap" style={{ color: '#52583c' }}>
//               DIAMOND FOREST
//             </h1>
//           </div>
          
//           {/* Right: User, Love, Cart, Search (Mobile) */}
//           <div className="flex items-center space-x-2 sm:space-x-6">
//             <button
//               className="sm:hidden p-1"
//               onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
//             >
//               <Search className="w-4 h-4 hover:opacity-80 transition-opacity" style={{ color: '#52583c' }} />
//             </button>
//             <User className="w-4 h-4 sm:w-5 sm:h-5 hover:opacity-80 cursor-pointer transition-opacity" style={{ color: '#52583c' }} />
//             <Heart className="w-4 h-4 sm:w-5 sm:h-5 hover:opacity-80 cursor-pointer transition-opacity" style={{ color: '#52583c' }} />
//             <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 hover:opacity-80 cursor-pointer transition-opacity" style={{ color: '#52583c' }} />
//           </div>
//         </div>

//         {/* Mobile Search Bar */}
//         {mobileSearchOpen && (
//           <div className="sm:hidden px-4 pb-4 pt-4" style={{ borderTop: '1px solid #52583c' }}>
//             <div className="flex items-center rounded-full px-4 py-2" style={{ backgroundColor: '#52583c' }}>
//               <Search className="w-4 h-4 text-white mr-2" />
//               <input
//                 type="text"
//                 placeholder="SEARCH"
//                 className="bg-transparent text-white placeholder-white text-sm font-light tracking-wide outline-none w-full placeholder-opacity-90"
//               />
//             </div>
//           </div>
//         )}
        
//         {/* Green line separator for mobile when search is not open */}
//         {!mobileSearchOpen && (
//           <div className="sm:hidden" style={{ borderTop: '1px solid #52583c' }}></div>
//         )}
        
//         {/* Navigation Row - Desktop */}
//         <div className="hidden sm:flex items-center justify-between px-6 lg:px-8 py-4" style={{ borderTop: '1px solid #52583c' }}>
//           {/* Navigation Menu */}
//           <nav className="flex space-x-6 lg:space-x-10">
//             {navItems.map((item) => (
//               <div 
//                 key={item}
//                 className="relative"
//                 onMouseEnter={() => setActiveDropdown(item)}
//                 onMouseLeave={() => setActiveDropdown(null)}
//               >
//                 <a
//                   href="#"
//                   className={`nav-font text-sm lg:text-base font-normal tracking-[0.1em] transition-colors duration-200 cursor-pointer ${
//                     activeDropdown === item ? 'opacity-100 font-medium' : 'opacity-75 hover:opacity-100'
//                   }`}
//                   style={{ color: '#52583c' }}
//                 >
//                   {item}
//                 </a>
                
//                 {/* Dropdown Menu */}
//                 {activeDropdown === item && navigationData[item] && (
//                   <div 
//                     className="absolute top-full left-0 pt-2 z-50"
//                     onMouseEnter={() => setActiveDropdown(item)}
//                     onMouseLeave={() => setActiveDropdown(null)}
//                   >
//                     <div className="bg-white shadow-xl rounded-lg border border-gray-200 p-6 min-w-max">
//                       <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
//                         {Object.entries(navigationData[item]).map(([category, items]) => (
//                           <div key={category} className="min-w-44 lg:min-w-48">
//                             <h3 className="nav-font text-xs font-medium mb-3 tracking-wide border-b border-gray-200 pb-2" style={{ color: '#52583c' }}>
//                               {category}
//                             </h3>
//                             <ul className="space-y-2">
//                               {items.map((subItem) => (
//                                 <li key={subItem}>
//                                   <a
//                                     href="#"
//                                     className="nav-font text-sm hover:bg-gray-50 transition-all duration-150 block py-2 px-2 rounded-md opacity-70 hover:opacity-100"
//                                     style={{ color: '#52583c' }}
//                                     onClick={(e) => {
//                                       e.preventDefault();
//                                       console.log(`Clicked: ${subItem}`);
//                                     }}
//                                   >
//                                     {subItem}
//                                   </a>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </nav>
          
//           {/* Search - Desktop */}
//           <div className="relative">
//             <div className="flex items-center rounded-full px-4 py-2 hover:opacity-90 transition-opacity" style={{ backgroundColor: '#52583c' }}>
//               <Search className="w-4 h-4 text-white mr-2" />
//               <input
//                 type="text"
//                 placeholder="SEARCH"
//                 className="bg-transparent text-white placeholder-white text-sm font-light tracking-wide outline-none w-24 placeholder-opacity-90"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation Menu */}
//         {isMobileMenuOpen && (
//           <div className="sm:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-40" style={{ borderTop: '1px solid #52583c' }}>
//             <nav className="px-4 py-4">
//               {navItems.map((item) => (
//                 <div key={item} className="border-b border-gray-100 last:border-b-0">
//                   <button
//                     className="nav-font w-full text-left py-4 text-sm font-normal tracking-wide hover:opacity-80 transition-opacity"
//                     style={{ color: '#52583c' }}
//                     onClick={() => {
//                       if (activeDropdown === item) {
//                         setActiveDropdown(null);
//                       } else {
//                         setActiveDropdown(item);
//                       }
//                     }}
//                   >
//                     <div className="flex items-center justify-between">
//                       <span>{item}</span>
//                       <span className={`transition-transform duration-200 ${activeDropdown === item ? 'rotate-180' : ''}`}>
//                         ▼
//                       </span>
//                     </div>
//                   </button>
                  
//                   {/* Mobile Dropdown Content */}
//                   {activeDropdown === item && navigationData[item] && (
//                     <div className="pb-4 pl-4">
//                       {Object.entries(navigationData[item]).map(([category, items]) => (
//                         <div key={category} className="mb-4">
//                           <h4 className="nav-font text-xs font-medium mb-2 tracking-wide" style={{ color: '#52583c' }}>
//                             {category}
//                           </h4>
//                           <ul className="space-y-1">
//                             {items.map((subItem) => (
//                               <li key={subItem}>
//                                 <a
//                                   href="#"
//                                   className="nav-font text-sm block py-1 transition-opacity opacity-70 hover:opacity-100"
//                                   style={{ color: '#52583c' }}
//                                   onClick={(e) => {
//                                     e.preventDefault();
//                                     console.log(`Clicked: ${subItem}`);
//                                     setIsMobileMenuOpen(false);
//                                   }}
//                                 >
//                                   {subItem}
//                                 </a>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </nav>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default Header;




import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, Home, Menu, X, ChevronDown } from 'lucide-react';

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const navigationData = {
    RINGS: {
      STYLE: [
        'Solitaire Rings',
        'Halo Rings', 
        'Three-Stone Rings',
        'Minimalist Rings',
        'Eternity Bands',
        'Stackable Rings'
      ],
      OCCASION: [
        'Engagement Rings',
        'Wedding Bands',
        'Promise Rings',
        'Anniversary Rings',
        'Cocktail Rings',
        'Daily Wear Rings',
        'Proposal Rings',
        'Graduation Rings'
      ],
      'METAL TYPE': [
        'White Gold Rings',
        'Yellow Gold Rings',
        'Rose Gold Rings',
        'Platinum Rings',
        'Mixed Metal Rings'
      ],
      'SETTING TYPE': [
        'Prong Setting',
        'Bezel Setting',
        'Pave Setting',
        'Channel Setting',
        'Tension Setting'
      ]
    },
    BRACELETS: {
      STYLE: [
        'Tennis Bracelets',
        'Chain Bracelets',
        'Bangle Bracelets',
        'Charm Bracelets',
        'Cuff Bracelets'
      ],
      OCCASION: [
        'Daily Wear',
        'Special Events',
        'Gift Bracelets',
        'Anniversary'
      ],
      'METAL TYPE': [
        'White Gold',
        'Yellow Gold',
        'Rose Gold',
        'Platinum',
        'Silver'
      ]
    },
    NECKLACES: {
      STYLE: [
        'Pendant Necklaces',
        'Chain Necklaces',
        'Choker Necklaces',
        'Statement Necklaces',
        'Layered Necklaces'
      ],
      OCCASION: [
        'Daily Wear',
        'Evening Wear',
        'Bridal',
        'Gift Necklaces'
      ],
      'METAL TYPE': [
        'White Gold',
        'Yellow Gold',
        'Rose Gold',
        'Platinum'
      ]
    },
    EARRINGS: {
      STYLE: [
        'Stud Earrings',
        'Drop Earrings',
        'Hoop Earrings',
        'Chandelier Earrings',
        'Huggie Earrings'
      ],
      OCCASION: [
        'Daily Wear',
        'Evening Wear',
        'Bridal Earrings',
        'Gift Earrings'
      ],
      'METAL TYPE': [
        'White Gold',
        'Yellow Gold',
        'Rose Gold',
        'Platinum'
      ]
    },
    CUSTOM: {
      SERVICES: [
        'Custom Design',
        'Ring Resizing',
        'Stone Setting',
        'Jewelry Repair',
        'Engraving'
      ],
      CONSULTATION: [
        'Design Consultation',
        'Virtual Appointment',
        'In-Store Visit'
      ]
    }
  };

  const navItems = ['RINGS', 'BRACELETS', 'NECKLACES', 'EARRINGS', 'CUSTOM'];



  const fontStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
    
    .logo-font {
      font-family: 'Beaufort Pro', 'Playfair Display', serif;
      font-weight: 400;
    }
    
    .nav-font {
      font-family: 'Ground Round', 'Stano Sans', 'Inter', sans-serif;
      font-weight: 400;
    }
  `;
  
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: fontStyles }} />
      <div className="relative z-50 pt-4 sm:pt-6">
        {/* Top Header Row */}
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-6 bg-transparent">
          {/* Left: Home Icon (Desktop) / Hamburger (Mobile) */}
          <div className="flex items-center">
            <a href="/">
              <Home 
                className="w-5 h-5 hover:opacity-80 cursor-pointer transition-opacity hidden sm:block" 
                style={{ color: '#52583c' }}
              />
            </a>
            <button
              className="sm:hidden p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" style={{ color: '#52583c' }} />
              ) : (
                <Menu className="w-6 h-6" style={{ color: '#52583c' }} />
              )}
            </button>
          </div>
          
          {/* Center: Diamond Forest */}
          <div className="flex-1 flex justify-center mx-4 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:flex-none sm:mx-0">
            <h1 className="logo-font font-normal text-lg sm:text-2xl lg:text-3xl tracking-[0.15em] sm:tracking-[0.25em] whitespace-nowrap" style={{ color: '#52583c' }}>
              DIAMOND FOREST
            </h1>
          </div>
          
          {/* Right: User, Love, Cart, Search (Mobile) */}
          <div className="flex items-center space-x-2 sm:space-x-6">
            <button
              className="sm:hidden p-1"
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            >
              <Search className="w-4 h-4 hover:opacity-80 transition-opacity" style={{ color: '#52583c' }} />
            </button>
            <a href="/profile">
              <User 
                className="w-4 h-4 sm:w-5 sm:h-5 hover:opacity-80 cursor-pointer transition-opacity" 
                style={{ color: '#52583c' }}
              />
            </a>
            <a href="/wishlist">
              <Heart 
                className="w-4 h-4 sm:w-5 sm:h-5 hover:opacity-80 cursor-pointer transition-opacity" 
                style={{ color: '#52583c' }}
              />
            </a>
            <a href="/cart">
              <ShoppingBag 
                className="w-4 h-4 sm:w-5 sm:h-5 hover:opacity-80 cursor-pointer transition-opacity" 
                style={{ color: '#52583c' }}
              />
            </a>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {mobileSearchOpen && (
          <div className="sm:hidden px-4 pb-4 pt-4" style={{ borderTop: '1px solid #52583c' }}>
            <div className="flex items-center rounded-full px-4 py-2" style={{ backgroundColor: '#52583c' }}>
              <Search className="w-4 h-4 text-white mr-2" />
              <input
                type="text"
                placeholder="SEARCH"
                className="bg-transparent text-white placeholder-white text-sm font-light tracking-wide outline-none w-full placeholder-opacity-90"
              />
            </div>
          </div>
        )}
        
        {/* Green line separator for mobile when search is not open */}
        {!mobileSearchOpen && (
          <div className="sm:hidden" style={{ borderTop: '1px solid #52583c' }}></div>
        )}
        
        {/* Navigation Row - Desktop */}
        <div className="hidden sm:flex items-center justify-between px-6 lg:px-8 py-4" style={{ borderTop: '1px solid #52583c' }}>
          {/* Navigation Menu */}
          <nav className="flex space-x-6 lg:space-x-10">
            {navItems.map((item) => (
              <div 
                key={item}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href="#"
                  className={`nav-font text-sm lg:text-base font-normal tracking-[0.1em] transition-colors duration-200 cursor-pointer ${
                    activeDropdown === item ? 'opacity-100 font-medium' : 'opacity-75 hover:opacity-100'
                  }`}
                  style={{ color: '#52583c' }}
                >
                  {item}
                </a>
                
                {/* Dropdown Menu */}
                {activeDropdown === item && navigationData[item] && (
                  <div 
                    className="absolute top-full left-0 pt-2 z-50"
                    onMouseEnter={() => setActiveDropdown(item)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="bg-white shadow-xl rounded-lg border border-gray-200 p-6 min-w-max">
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {Object.entries(navigationData[item]).map(([category, items]) => (
                          <div key={category} className="min-w-44 lg:min-w-48">
                            <h3 className="nav-font text-xs font-medium mb-3 tracking-wide border-b border-gray-200 pb-2" style={{ color: '#52583c' }}>
                              {category}
                            </h3>
                            <ul className="space-y-2">
                              {items.map((subItem) => (
                                <li key={subItem}>
                                  <a
                                    href="#"
                                    className="nav-font text-sm hover:bg-gray-50 transition-all duration-150 block py-2 px-2 rounded-md opacity-70 hover:opacity-100"
                                    style={{ color: '#52583c' }}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      console.log(`Clicked: ${subItem}`);
                                    }}
                                  >
                                    {subItem}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          {/* Search - Desktop */}
          <div className="relative">
            <div className="flex items-center rounded-full px-4 py-2 hover:opacity-90 transition-opacity" style={{ backgroundColor: '#52583c' }}>
              <Search className="w-4 h-4 text-white mr-2" />
              <input
                type="text"
                placeholder="SEARCH"
                className="bg-transparent text-white placeholder-white text-sm font-light tracking-wide outline-none w-24 placeholder-opacity-90"
              />
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-40" style={{ borderTop: '1px solid #52583c' }}>
            <nav className="px-4 py-4">
              {navItems.map((item) => (
                <div key={item} className="border-b border-gray-100 last:border-b-0">
                  <button
                    className="nav-font w-full text-left py-4 text-sm font-normal tracking-wide hover:opacity-80 transition-opacity"
                    style={{ color: '#52583c' }}
                    onClick={() => {
                      if (activeDropdown === item) {
                        setActiveDropdown(null);
                      } else {
                        setActiveDropdown(item);
                      }
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item}</span>
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item ? 'rotate-180' : ''
                        }`}
                        style={{ color: '#52583c' }}
                      />
                    </div>
                  </button>
                  
                  {/* Mobile Dropdown Content */}
                  {activeDropdown === item && navigationData[item] && (
                    <div className="pb-4 pl-4 animate-in slide-in-from-top-2 duration-200">
                      {Object.entries(navigationData[item]).map(([category, items]) => (
                        <div key={category} className="mb-4">
                          <h4 className="nav-font text-xs font-medium mb-2 tracking-wide" style={{ color: '#52583c' }}>
                            {category}
                          </h4>
                          <ul className="space-y-1">
                            {items.map((subItem) => (
                              <li key={subItem}>
                                <a
                                  href="#"
                                  className="nav-font text-sm block py-1 transition-opacity opacity-70 hover:opacity-100"
                                  style={{ color: '#52583c' }}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    console.log(`Clicked: ${subItem}`);
                                    setIsMobileMenuOpen(false);
                                    setActiveDropdown(null);
                                  }}
                                >
                                  {subItem}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;