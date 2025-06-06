// import React from 'react';

// const DiamondCard = () => {
//   return (
//     <div className="relative w-[1300px] h-[550px] rounded-xl overflow-hidden shadow-lg mx-auto">
//       {/* Background Image */}
//       <img
//         src="/Forest Website.pdf-image-001.jpg"
//         alt="Featured"
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/30 z-10" />

//       {/* Text Content */}
//       <div className="relative z-20 h-full flex flex-col justify-center px-6 text-white">
//         <h2 className="text-2xl font-serif italic mb-2">Featured collection</h2>
//         <p className="text-sm font-light">
//           Explore the exclusive pieces inspired by the beauty of nature
//         </p>
//       </div>

//       {/* Bottom Cut Shape */}
//       <svg
//         className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20"
//         width="60"
//         height="30"
//         viewBox="0 0 80 40"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path d="M0 0C40 80 40 80 80 0H0Z" fill="white" />
//       </svg>

//       {/* Scroll Arrow */}
//       <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-30">
//         <div className="w-8 h-8 rounded-full bg-white bg-opacity-90 flex items-center justify-center animate-bounce shadow-md">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-4 h-4 text-black"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DiamondCard;


// import React from 'react';

// const DiamondCard = () => {
//   return (
//     <div className="relative w-full max-w-[1300px] h-[300px] sm:h-[400px] lg:h-[550px] rounded-xl overflow-hidden shadow-lg mx-auto">
//       {/* Background Image */}
//       <img
//         src="/Forest Website.pdf-image-001.jpg"
//         alt="Featured"
//         className="absolute inset-0 w-full h-full object-cover object-center"
//         style={{
//           imageRendering: 'crisp-edges',
//           imageRendering: '-webkit-optimize-contrast'
//         }}
//       />
      
//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/30 z-10" />
      
//       {/* Text Content */}
//       <div className="relative z-20 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 text-white">
//         <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-serif italic mb-1 sm:mb-2">
//           Featured collection
//         </h2>
//         <p className="text-xs sm:text-sm lg:text-base font-light max-w-md">
//           Explore the exclusive pieces inspired by the beauty of nature
//         </p>
//       </div>
      
//       {/* Bottom Cut Shape - Circular Upward Curve */}
//       <svg
//         className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20"
//         width="40"
//         height="20"
//         viewBox="0 0 80 40"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         style={{ width: 'clamp(40px, 8vw, 60px)', height: 'clamp(20px, 4vw, 30px)' }}
//       >
//         <path d="M0 40 Q40 0 80 40 H0 Z" fill="white" />
//       </svg>
      
//       {/* Scroll Arrow */}
//       <div className="absolute bottom-1 sm:bottom-2 left-1/2 transform -translate-x-1/2 z-30">
//         <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white bg-opacity-90 flex items-center justify-center animate-bounce shadow-md">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-3 h-3 sm:w-4 sm:h-4 text-black"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DiamondCard;



// import React from 'react';

// const DiamondCard = () => {
//   return (
//     <div className="relative w-full max-w-[1300px] h-[300px] sm:h-[400px] lg:h-[550px] rounded-xl overflow-hidden shadow-lg mx-auto">
//       {/* Background Image */}
//       <img
//         src="/Forest Website.pdf-image-001.jpg"
//         alt="Featured"
//         className="absolute inset-0 w-full h-full object-cover object-center"
//         style={{
//           imageRendering: 'crisp-edges',
//           imageRendering: '-webkit-optimize-contrast'
//         }}
//       />
      
//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/30 z-10" />
      
//       {/* Text Content */}
//       <div className="relative z-20 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 text-white">
//         <h2 className="text-base sm:text-xl lg:text-2xl xl:text-3xl font-serif italic mb-1 sm:mb-2">
//           Featured collection
//         </h2>
//         <p className="text-xs sm:text-sm lg:text-base font-light max-w-md">
//           Explore the exclusive pieces inspired by the beauty of nature
//         </p>
//       </div>
      
//       {/* Bottom Cut Shape - Larger Circular Upward Curve */}
//       <svg
//         className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20"
//         width="80"
//         height="40"
//         viewBox="0 0 120 60"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         style={{ width: 'clamp(80px, 12vw, 120px)', height: 'clamp(40px, 6vw, 60px)' }}
//       >
//         <path d="M0 60 Q60 0 120 60 H0 Z" fill="white" />
//       </svg>
      
//       {/* Scroll Arrow - Inside the Circle */}
//       <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2 z-30">
//         <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-white bg-opacity-95 flex items-center justify-center animate-bounce shadow-lg">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-700"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DiamondCard;

// import React from 'react';

// const DiamondCard = () => {
//   return (
//     <div className="relative w-full max-w-[1300px] h-[300px] sm:h-[400px] lg:h-[550px] rounded-xl overflow-hidden shadow-lg mx-auto my-4 sm:my-6 lg:my-8">
//       {/* Background Image */}
//       <img
//         src="/ChatGPT Image Jun 6, 2025, 01_21_36 PM.png"
//         alt="Featured"
//         className="absolute inset-0 w-full h-full object-cover object-center"
//         style={{
//           imageRendering: 'crisp-edges',
//           imageRendering: '-webkit-optimize-contrast'
//         }}
//       />
      
//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/30 z-10" />
      
//       {/* Text Content */}
//       <div className="relative z-20 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 text-white">
//         <h2 className="text-base sm:text-xl lg:text-2xl xl:text-3xl font-serif italic mb-1 sm:mb-2">
//           Featured collection
//         </h2>
//         <p className="text-xs sm:text-sm lg:text-base font-light max-w-md">
//           Explore the exclusive pieces inspired by the beauty of nature
//         </p>
//       </div>
      
//       {/* Bottom Cut Shape - Larger Circular Upward Curve */}
//       <svg
//         className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20"
//         width="80"
//         height="40"
//         viewBox="0 0 120 60"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         style={{ width: 'clamp(80px, 12vw, 120px)', height: 'clamp(40px, 6vw, 60px)' }}
//       >
//         <path d="M0 60 Q60 0 120 60 H0 Z" fill="white" />
//       </svg>
      
//       {/* Scroll Arrow - Inside the Circle */}
//       <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2 z-30">
//         <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-white bg-opacity-95 flex items-center justify-center animate-bounce shadow-lg">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-700"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DiamondCard;



import React from 'react';

const DiamondCard = () => {
  return (
    <div className="relative w-full max-w-[1300px] h-[300px] sm:h-[400px] lg:h-[550px] rounded-xl overflow-hidden shadow-lg mx-auto my-4 sm:my-6 lg:my-8">
      {/* Background Image */}
      <img
        src="/ChatGPT Image Jun 6, 2025, 01_21_36 PM.png" // Replace with actual image path if needed
        alt="Featured"
        className="absolute inset-0 w-full h-full object-cover object-center"
        // style={{
        //   imageRendering: 'crisp-edges',
        //   imageRendering: '-webkit-optimize-contrast'
        // }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      
      {/* Text Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 text-white">
        <h2 className="text-base sm:text-xl lg:text-2xl xl:text-3xl font-serif italic mb-1 sm:mb-2">
          Featured collection
        </h2>
        <p className="text-xs sm:text-sm lg:text-base font-light max-w-md">
          Explore the exclusive pieces inspired by the beauty of nature
        </p>
      </div>
    </div>
  );
};

export default DiamondCard;
