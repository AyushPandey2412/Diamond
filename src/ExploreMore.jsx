// import React from 'react';

// const ExploreMore = () => {
//   const exploreItems = [
//     {
//       id: 'jewelry-care',
//       title: 'JEWELRY CARE GUIDE',
//       subtitle: 'Keep Your Pieces Sparkling',
//       description: 'Learn professional tips and techniques to maintain the beauty and longevity of your precious jewelry.',
//       image: '/care-guide.jpg',
//       path: '/jewelry-care',
//       buttonText: 'LEARN MORE'
//     },
//     {
//       id: 'gemstone-education',
//       title: 'GEMSTONE EDUCATION',
//       subtitle: 'Understanding Quality & Value',
//       description: 'Discover the fascinating world of gemstones, from the 4 Cs of diamonds to rare colored stones.',
//       image: '/gemstones.jpg',
//       path: '/gemstone-guide',
//       buttonText: 'EXPLORE GEMS'
//     },
//     {
//       id: 'size-guide',
//       title: 'PERFECT FIT GUIDE',
//       subtitle: 'Find Your Ideal Size',
//       description: 'Ensure the perfect fit with our comprehensive sizing guides for rings, bracelets, and necklaces.',
//       image: '/sizing-guide.jpg',
//       path: '/size-guide',
//       buttonText: 'GET SIZED'
//     },
//     {
//       id: 'gift-guide',
//       title: 'GIFT INSPIRATION',
//       subtitle: 'Thoughtful Jewelry Gifts',
//       description: 'Find the perfect piece for every occasion, from anniversaries to graduations and everything in between.',
//       image: '/gift-guide.jpg',
//       path: '/gift-guide',
//       buttonText: 'FIND GIFTS'
//     },
//     {
//       id: 'virtual-try-on',
//       title: 'VIRTUAL TRY-ON',
//       subtitle: 'See Before You Buy',
//       description: 'Experience our innovative virtual try-on technology to visualize how pieces will look on you.',
//       image: '/virtual-tryon.jpg',
//       path: '/virtual-try-on',
//       buttonText: 'TRY NOW'
//     },
//     {
//       id: 'appointments',
//       title: 'PERSONAL CONSULTATION',
//       subtitle: 'Expert Guidance',
//       description: 'Schedule a one-on-one consultation with our jewelry experts for personalized recommendations.',
//       image: '/consultation.jpg',
//       path: '/book-appointment',
//       buttonText: 'BOOK NOW'
//     }
//   ];

//   return (
//     <div className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
//       <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
        
//         .typo-grotesk {
//           font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
//           font-weight: 500;
//           letter-spacing: 0.1em;
//         }
        
//         .yorkten-light {
//           font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
//           font-weight: 300;
//           letter-spacing: 0.05em;
//         }
        
//         .museo-sans {
//           font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
//           font-weight: 300;
//           letter-spacing: 0.02em;
//         }
        
//         .color-bold {
//           color: #52583c;
//         }
        
//         .color-medium {
//           color: #6b7257;
//         }
        
//         .color-light {
//           color: #8a9177;
//         }
        
//         .bg-color-bold {
//           background-color: #52583c;
//         }
        
//         .bg-color-medium {
//           background-color: #6b7257;
//         }
        
//         .bg-color-light {
//           background-color: #8a9177;
//         }
        
//         .hover-color-bold:hover {
//           background-color: #464b34;
//         }
        
//         .hover-color-medium:hover {
//           background-color: #5f6449;
//         }
        
//         .explore-card-overlay {
//           background: linear-gradient(to top, rgba(82, 88, 60, 0.95), rgba(82, 88, 60, 0.7), transparent);
//         }
        
//         .explore-card:hover .explore-card-overlay {
//           background: linear-gradient(to top, rgba(82, 88, 60, 0.98), rgba(82, 88, 60, 0.8), rgba(82, 88, 60, 0.1));
//         }
//       `}</style>

//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-10 sm:mb-14 lg:mb-16">
//           <h2 className="yorkten-light text-2xl sm:text-3xl lg:text-4xl color-bold mb-4 sm:mb-6 tracking-wider">
//             EXPLORE MORE
//           </h2>
//           <p className="museo-sans text-base sm:text-lg lg:text-xl color-medium max-w-3xl mx-auto leading-relaxed">
//             Deepen your jewelry knowledge and enhance your shopping experience with our comprehensive guides and expert services.
//           </p>
//         </div>

//         {/* Explore Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
//           {exploreItems.map((item) => (
//             <a
//               href={item.path}
//               key={item.id}
//               className="explore-card relative rounded-xl overflow-hidden cursor-pointer group transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white shadow-sm"
//             >
//               {/* Image Container */}
//               <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   onError={(e) => {
//                     e.target.style.display = 'none';
//                     e.target.nextSibling.style.display = 'flex';
//                   }}
//                 />
//                 {/* Fallback */}
//                 <div className="w-full h-full bg-gradient-to-br from-stone-100 to-stone-200 items-center justify-center hidden">
//                   <div className="text-center">
//                     <div className="w-12 h-12 bg-stone-300 rounded-full mx-auto mb-3 flex items-center justify-center">
//                       <svg className="w-6 h-6 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                       </svg>
//                     </div>
//                     <span className="text-stone-500 text-sm">{item.title}</span>
//                   </div>
//                 </div>
                
//                 {/* Overlay Content */}
//                 <div className="explore-card-overlay absolute inset-0 flex flex-col justify-end p-4 sm:p-6 transition-all duration-300">
//                   <div className="text-white transform transition-transform duration-300 group-hover:translate-y-0">
//                     <p className="typo-grotesk text-xs sm:text-sm mb-2 opacity-90">
//                       {item.subtitle}
//                     </p>
//                     <h3 className="typo-grotesk text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4">
//                       {item.title}
//                     </h3>
//                     <p className="museo-sans text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed opacity-95 line-clamp-3">
//                       {item.description}
//                     </p>
//                     <div className="inline-flex items-center typo-grotesk text-xs sm:text-sm bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm px-4 py-2 rounded transition-all duration-200 group-hover:bg-opacity-100 group-hover:text-color-bold">
//                       <span>{item.buttonText}</span>
//                       <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </a>
//           ))}
//         </div>

//         {/* Newsletter Signup Section */}
//         <div className="mt-16 sm:mt-20 lg:mt-24">
//           <div className="bg-stone-50 rounded-2xl p-8 sm:p-12 lg:p-16 text-center">
//             <h3 className="yorkten-light text-xl sm:text-2xl lg:text-3xl color-bold mb-4 sm:mb-6 tracking-wider">
//               STAY INFORMED
//             </h3>
//             <p className="museo-sans text-base sm:text-lg color-medium mb-6 sm:mb-8 max-w-2xl mx-auto">
//               Be the first to know about new collections, exclusive offers, and jewelry care tips delivered straight to your inbox.
//             </p>
            
//             {/* Newsletter Form */}
//             <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
//               <input
//                 type="email"
//                 placeholder="Enter your email address"
//                 className="flex-1 px-4 py-3 border border-stone-200 rounded focus:outline-none focus:ring-2 focus:ring-color-light focus:border-transparent museo-sans text-sm"
//               />
//               <button className="typo-grotesk bg-color-bold hover-color-bold text-white px-6 py-3 text-sm transition-colors uppercase shadow-md whitespace-nowrap">
//                 SUBSCRIBE
//               </button>
//             </div>
            
//             <p className="museo-sans text-xs color-light mt-4">
//               We respect your privacy. Unsubscribe at any time.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExploreMore;



// import React from 'react';

// const ExploreMore = () => {
//   const exploreItems = [
//     {
//       id: 'jewelry-care',
//       title: 'JEWELRY CARE GUIDE',
//       subtitle: 'Keep Your Pieces Sparkling',
//       description: 'Learn professional tips and techniques to maintain the beauty and longevity of your precious jewelry.',
//       image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop&crop=center',
//       path: '/jewelry-care',
//       buttonText: 'LEARN MORE'
//     },
//     {
//       id: 'gemstone-education',
//       title: 'GEMSTONE EDUCATION',
//       subtitle: 'Understanding Quality & Value',
//       description: 'Discover the fascinating world of gemstones, from the 4 Cs of diamonds to rare colored stones.',
//       image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=500&fit=crop&crop=center',
//       path: '/gemstone-guide',
//       buttonText: 'EXPLORE GEMS'
//     },
//     {
//       id: 'size-guide',
//       title: 'PERFECT FIT GUIDE',
//       subtitle: 'Find Your Ideal Size',
//       description: 'Ensure the perfect fit with our comprehensive sizing guides for rings, bracelets, and necklaces.',
//       image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=500&fit=crop&crop=center',
//       path: '/size-guide',
//       buttonText: 'GET SIZED'
//     },
//     {
//       id: 'gift-guide',
//       title: 'GIFT INSPIRATION',
//       subtitle: 'Thoughtful Jewelry Gifts',
//       description: 'Find the perfect piece for every occasion, from anniversaries to graduations and everything in between.',
//       image: 'https://images.unsplash.com/photo-1549062572-544a64fb0c56?w=400&h=500&fit=crop&crop=center',
//       path: '/gift-guide',
//       buttonText: 'FIND GIFTS'
//     },
//     {
//       id: 'virtual-try-on',
//       title: 'VIRTUAL TRY-ON',
//       subtitle: 'See Before You Buy',
//       description: 'Experience our innovative virtual try-on technology to visualize how pieces will look on you.',
//       image: 'https://images.unsplash.com/photo-1544376664-80b17f09d399?w=400&h=500&fit=crop&crop=center',
//       path: '/virtual-try-on',
//       buttonText: 'TRY NOW'
//     },
//     {
//       id: 'appointments',
//       title: 'PERSONAL CONSULTATION',
//       subtitle: 'Expert Guidance',
//       description: 'Schedule a one-on-one consultation with our jewelry experts for personalized recommendations.',
//       image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=500&fit=crop&crop=center',
//       path: '/book-appointment',
//       buttonText: 'BOOK NOW'
//     }
//   ];

//   return (
//     <div className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
//       <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
        
//         .typo-grotesk {
//           font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
//           font-weight: 500;
//           letter-spacing: 0.1em;
//         }
        
//         .yorkten-light {
//           font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
//           font-weight: 300;
//           letter-spacing: 0.05em;
//         }
        
//         .museo-sans {
//           font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
//           font-weight: 300;
//           letter-spacing: 0.02em;
//         }
        
//         .color-bold {
//           color: #52583c;
//         }
        
//         .color-medium {
//           color: #6b7257;
//         }
        
//         .color-light {
//           color: #8a9177;
//         }
        
//         .bg-color-bold {
//           background-color: #52583c;
//         }
        
//         .bg-color-medium {
//           background-color: #6b7257;
//         }
        
//         .bg-color-light {
//           background-color: #8a9177;
//         }
        
//         .hover-color-bold:hover {
//           background-color: #464b34;
//         }
        
//         .hover-color-medium:hover {
//           background-color: #5f6449;
//         }
        
//         .explore-card-overlay {
//           background: linear-gradient(to top, rgba(82, 88, 60, 0.95), rgba(82, 88, 60, 0.7), transparent);
//         }
        
//         .explore-card:hover .explore-card-overlay {
//           background: linear-gradient(to top, rgba(82, 88, 60, 0.98), rgba(82, 88, 60, 0.8), rgba(82, 88, 60, 0.1));
//         }
//       `}</style>

//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-10 sm:mb-14 lg:mb-16">
//           <h2 className="yorkten-light text-2xl sm:text-3xl lg:text-4xl color-bold mb-4 sm:mb-6 tracking-wider">
//             EXPLORE MORE
//           </h2>
//           <p className="museo-sans text-base sm:text-lg lg:text-xl color-medium max-w-3xl mx-auto leading-relaxed">
//             Deepen your jewelry knowledge and enhance your shopping experience with our comprehensive guides and expert services.
//           </p>
//         </div>

//         {/* Explore Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
//           {exploreItems.map((item) => (
//             <a
//               href={item.path}
//               key={item.id}
//               className="explore-card relative rounded-xl overflow-hidden cursor-pointer group transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white shadow-sm"
//             >
//               {/* Image Container */}
//               <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   onError={(e) => {
//                     e.target.style.display = 'none';
//                     e.target.nextSibling.style.display = 'flex';
//                   }}
//                 />
//                 {/* Fallback */}
//                 <div className="w-full h-full bg-gradient-to-br from-stone-100 to-stone-200 items-center justify-center hidden">
//                   <div className="text-center">
//                     <div className="w-12 h-12 bg-stone-300 rounded-full mx-auto mb-3 flex items-center justify-center">
//                       <svg className="w-6 h-6 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                       </svg>
//                     </div>
//                     <span className="text-stone-500 text-sm">{item.title}</span>
//                   </div>
//                 </div>
                
//                 {/* Overlay Content */}
//                 <div className="explore-card-overlay absolute inset-0 flex flex-col justify-end p-4 sm:p-6 transition-all duration-300">
//                   <div className="text-white transform transition-transform duration-300 group-hover:translate-y-0">
//                     <p className="typo-grotesk text-xs sm:text-sm mb-2 opacity-90">
//                       {item.subtitle}
//                     </p>
//                     <h3 className="typo-grotesk text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4">
//                       {item.title}
//                     </h3>
//                     <p className="museo-sans text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed opacity-95 line-clamp-3">
//                       {item.description}
//                     </p>
//                     <div className="inline-flex items-center typo-grotesk text-xs sm:text-sm bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm px-4 py-2 rounded transition-all duration-200 group-hover:bg-opacity-100 group-hover:text-color-bold">
//                       <span>{item.buttonText}</span>
//                       <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </a>
//           ))}
//         </div>

//         {/* Newsletter Signup Section */}
//         <div className="mt-16 sm:mt-20 lg:mt-24">
//           <div className="bg-stone-50 rounded-2xl p-8 sm:p-12 lg:p-16 text-center">
//             <h3 className="yorkten-light text-xl sm:text-2xl lg:text-3xl color-bold mb-4 sm:mb-6 tracking-wider">
//               STAY INFORMED
//             </h3>
//             <p className="museo-sans text-base sm:text-lg color-medium mb-6 sm:mb-8 max-w-2xl mx-auto">
//               Be the first to know about new collections, exclusive offers, and jewelry care tips delivered straight to your inbox.
//             </p>
            
//             {/* Newsletter Form */}
//             <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
//               <input
//                 type="email"
//                 placeholder="Enter your email address"
//                 className="flex-1 px-4 py-3 border border-stone-200 rounded focus:outline-none focus:ring-2 focus:ring-color-light focus:border-transparent museo-sans text-sm"
//               />
//               <button className="typo-grotesk bg-color-bold hover-color-bold text-white px-6 py-3 text-sm transition-colors uppercase shadow-md whitespace-nowrap">
//                 SUBSCRIBE
//               </button>
//             </div>
            
//             <p className="museo-sans text-xs color-light mt-4">
//               We respect your privacy. Unsubscribe at any time.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExploreMore;


import React from 'react';
import Header from './Header';

const ExploreMore = () => {
  const exploreItems = [
    {
      id: 'jewelry-care',
      title: 'JEWELRY CARE GUIDE',
      subtitle: 'Keep Your Pieces Sparkling',
      description: 'Learn professional tips and techniques to maintain the beauty and longevity of your precious jewelry.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop&crop=center',
      path: '/jewelry-care',
      buttonText: 'LEARN MORE'
    },
    {
      id: 'gemstone-education',
      title: 'GEMSTONE EDUCATION',
      subtitle: 'Understanding Quality & Value',
      description: 'Discover the fascinating world of gemstones, from the 4 Cs of diamonds to rare colored stones.',
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=500&fit=crop&crop=center',
      path: '/gemstone-guide',
      buttonText: 'EXPLORE GEMS'
    },
    {
      id: 'size-guide',
      title: 'PERFECT FIT GUIDE',
      subtitle: 'Find Your Ideal Size',
      description: 'Ensure the perfect fit with our comprehensive sizing guides for rings, bracelets, and necklaces.',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=500&fit=crop&crop=center',
      path: '/size-guide',
      buttonText: 'GET SIZED'
    },
    {
      id: 'gift-guide',
      title: 'GIFT INSPIRATION',
      subtitle: 'Thoughtful Jewelry Gifts',
      description: 'Find the perfect piece for every occasion, from anniversaries to graduations and everything in between.',
      image: 'https://images.unsplash.com/photo-1549062572-544a64fb0c56?w=400&h=500&fit=crop&crop=center',
      path: '/gift-guide',
      buttonText: 'FIND GIFTS'
    },
    {
      id: 'virtual-try-on',
      title: 'VIRTUAL TRY-ON',
      subtitle: 'See Before You Buy',
      description: 'Experience our innovative virtual try-on technology to visualize how pieces will look on you.',
      image: 'https://images.unsplash.com/photo-1544376664-80b17f09d399?w=400&h=500&fit=crop&crop=center',
      path: '/virtual-try-on',
      buttonText: 'TRY NOW'
    },
    {
      id: 'appointments',
      title: 'PERSONAL CONSULTATION',
      subtitle: 'Expert Guidance',
      description: 'Schedule a one-on-one consultation with our jewelry experts for personalized recommendations.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=500&fit=crop&crop=center',
      path: '/book-appointment',
      buttonText: 'BOOK NOW'
    }
  ];

  return (
    <>
      {/* HEADER COMPONENT INSERTION POINT */}
      {/* Insert your header component here without affecting the main design */}
      {/* Example: <Header /> */}
      <Header></Header>
      
      <div className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-14 lg:mb-16">
            <h2 className="font-light text-2xl sm:text-3xl lg:text-4xl text-slate-700 mb-4 sm:mb-6 tracking-[0.2em] font-serif">
              EXPLORE MORE
            </h2>
            <p className="font-light text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed tracking-wide">
              Deepen your jewelry knowledge and enhance your shopping experience with our comprehensive guides and expert services.
            </p>
          </div>

          {/* Explore Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {exploreItems.map((item) => (
              <div
                key={item.id}
                className="relative rounded-xl overflow-hidden cursor-pointer group transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white shadow-lg"
              >
                {/* Image Container */}
                <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback */}
                  <div className="w-full h-full bg-gradient-to-br from-stone-100 to-stone-200 items-center justify-center hidden">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-stone-300 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <svg className="w-6 h-6 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-stone-500 text-sm">{item.title}</span>
                    </div>
                  </div>
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/70 to-transparent flex flex-col justify-end p-4 sm:p-6 transition-all duration-300 group-hover:from-slate-900/98 group-hover:via-slate-900/80">
                    <div className="text-white transform transition-transform duration-300 group-hover:translate-y-0">
                      <p className="font-medium text-xs sm:text-sm mb-2 opacity-90 tracking-[0.1em] uppercase">
                        {item.subtitle}
                      </p>
                      <h3 className="font-medium text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 tracking-[0.1em]">
                        {item.title}
                      </h3>
                      <p className="font-light text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed opacity-95 line-clamp-3 tracking-wide">
                        {item.description}
                      </p>
                      
                      {/* Proper Button */}
                      <button 
                        onClick={() => window.location.href = item.path}
                        className="inline-flex items-center justify-center font-medium text-xs sm:text-sm bg-white/20 hover:bg-white hover:text-slate-800 backdrop-blur-sm px-6 py-3 rounded-md transition-all duration-300 group-hover:bg-white group-hover:text-slate-800 tracking-[0.1em] uppercase border border-white/30 hover:border-white min-w-[140px]"
                      >
                        <span>{item.buttonText}</span>
                        <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup Section */}
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <div className="bg-stone-50 rounded-2xl p-8 sm:p-12 lg:p-16 text-center">
              <h3 className="font-light text-xl sm:text-2xl lg:text-3xl text-slate-700 mb-4 sm:mb-6 tracking-[0.2em] font-serif">
                STAY INFORMED
              </h3>
              <p className="font-light text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto tracking-wide">
                Be the first to know about new collections, exclusive offers, and jewelry care tips delivered straight to your inbox.
              </p>
              
              {/* Newsletter Form */}
              <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-stone-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent font-light text-sm tracking-wide"
                />
                <button className="font-medium bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 text-sm transition-colors duration-300 uppercase shadow-md whitespace-nowrap rounded-md tracking-[0.1em] min-w-[120px]">
                  SUBSCRIBE
                </button>
              </div>
              
              <p className="font-light text-xs text-slate-500 mt-4 tracking-wide">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreMore;