// // // // // // app/Home/page.tsx
// // // // // import React from "react";
// // // // // import RestaurantCard from "../../components/RestaurantCard";
// // // // // import CategoryBox from "../../components/CategoryBox";

// // // // // export default function HomePage() {
// // // // //   return (
// // // // //     <main className="p-6">
// // // // //       <h1 className="text-2xl font-bold mb-4">Home Page</h1>
// // // // //       <RestaurantCard 
// // // // //         imageUrl="/assets/images/image.png"
// // // // //         title="Adenine Kitchen"
// // // // //         rating={4.4}
// // // // //       />
// // // // //       <CategoryBox
// // // // //         imageUrl="/assets/images/icon.png"
// // // // //         title="Adenine Kitchen"
// // // // //         alt="icon"
// // // // //       />

// // // // //     </main>
// // // // //   );
// // // // // }





// // // // import React from "react";
// // // // import RestaurantCard from "../../components/RestaurantCard";
// // // // import CategoryBox from "../../components/CategoryBox";

// // // // export default function HomePage() {
// // // //   return (
// // // //     <div className="p-6">
// // // //       <h1 className="text-2xl font-bold mb-4">Now - London Hall</h1>
// // // //       <CategoryBox imageUrl="/assets/images/icon.png" title="American" alt="American" />
// // // //       <CategoryBox imageUrl="/assets/images/icon.png" title="Grocery" alt="Grocery" />
// // // //       <CategoryBox imageUrl="/assets/images/icon.png" title="Convenience" alt="Convenience" />
// // // //       <CategoryBox imageUrl="/assets/images/icon.png" title="Alcohol" alt="Alcohol" />
// // // //       <CategoryBox imageUrl="/assets/images/icon.png" title="Pet Supplies" alt="Pet Supplies" />
// // // //       <CategoryBox imageUrl="/assets/images/icon.png" title="More" alt="More" />
// // // //       <RestaurantCard 
// // // //         imageUrl="/assets/images/image.png"
// // // //         title="Adenine Kitchen"
// // // //         rating={4.4}
// // // //       />
// // // //       <RestaurantCard 
// // // //         imageUrl="/assets/images/image.png"
// // // //         title="Cardinal Chips"
// // // //         rating={4.3}
// // // //       />
// // // //     </div>
// // // //   );
// // // // }






// // // import React from "react";
// // // import RestaurantCard from "../../components/RestaurantCard";
// // // import CategoryBox from "../../components/CategoryBox";
// // // import CategoriesScreen from "@/components/CategoriesScreen";

// // // export default function HomePage() {
// // //   return (
// // //     // <div>
// // //     //   <CategoriesScreen />
// // //     // </div>
// // //     <div className="p-6 space-y-6 bg-white">
// // //       <h1 className="text-2xl font-bold mb-4">Now - London Hall</h1>

// // //       {/* Categories Section */}
// // //       <div className="space-y-4">
// // //         {/* First row → 2 items */}
// // //         <div className="grid grid-cols-2 gap-2">
// // //           <CategoryBox imageUrl="/assets/images/icon.png" title="American" alt="American" />
// // //           <CategoryBox imageUrl="/assets/images/icon.png" title="Grocery" alt="Grocery" />
// // //         </div>

// // //         {/* Second row → 4 items */}
// // //         <div className="grid grid-cols-4 gap-3">
// // //           <CategoryBox imageUrl="/assets/images/icon.png" title="Convenience" alt="Convenience" />
// // //           <CategoryBox imageUrl="/assets/images/icon.png" title="Alcohol" alt="Alcohol" />
// // //           <CategoryBox imageUrl="/assets/images/icon.png" title="Pet Supplies" alt="Pet Supplies" />
// // //           <CategoryBox imageUrl="/assets/images/MoreIcon.png" title="More" alt="More" />
// // //         </div>
// // //       </div>

// // //       {/* Restaurants Section */}
// // //       <div className="flex flex-col gap-2">
// // //         <RestaurantCard 
// // //           imageUrl="/assets/images/image.png"
// // //           title="Adenine Kitchen"
// // //           rating={4.4}
// // //         />
// // //         <RestaurantCard 
// // //           imageUrl="/assets/images/image.png"
// // //           title="Cardinal Chips"
// // //           rating={4.3}
// // //         />
// // //       </div>
// // //     </div>
// // //   );
// // // }




// // // 'use client'

// // // import React, { useState } from "react";
// // // import CategoryBox from "@/components/CategoryBox";
// // // import RestaurantCard from "@/components/RestaurantCard";
// // // import CategoriesScreen from "@/components/CategoriesScreen";

// // // export default function HomePage() {
// // //   const [showCategories, setShowCategories] = useState(false);

// // //   if (showCategories) {
// // //     // Only render CategoriesScreen if More is clicked
// // //     return <CategoriesScreen />;
// // //   }

// // //   return (
// // //     <div className="p-6 space-y-6 bg-white">
// // //       <h1 className="text-2xl font-bold mb-4">Now - London Hall</h1>

// // //       {/* Categories Section */}
// // //       <div className="space-y-4">
// // //         {/* First row → 2 items */}
// // //         <div className="grid grid-cols-2 gap-2">
// // //           <CategoryBox imageUrl="/assets/images/icon.png" title="American" alt="American" />
// // //           <CategoryBox imageUrl="/assets/images/icon.png" title="Grocery" alt="Grocery" />
// // //         </div>

// // //         {/* Second row → 4 items */}
// // //         <div className="grid grid-cols-4 gap-3">
// // //           <CategoryBox imageUrl="/assets/images/icon.png" title="Convenience" alt="Convenience" />
// // //           <CategoryBox imageUrl="/assets/images/icon.png" title="Alcohol" alt="Alcohol" />
// // //           <CategoryBox imageUrl="/assets/images/icon.png" title="Pet Supplies" alt="Pet Supplies" />
          
// // //           {/* More (make clickable) */}
// // //           <div onClick={() => setShowCategories(true)} className="cursor-pointer">
// // //             <CategoryBox imageUrl="/assets/images/MoreIcon.png" title="More" alt="More" />
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Restaurants Section */}
// // //       <div className="flex flex-col gap-2">
// // //         <RestaurantCard 
// // //           imageUrl="/assets/images/image.png"
// // //           title="Adenine Kitchen"
// // //           rating={4.4}
// // //         />
// // //         <RestaurantCard 
// // //           imageUrl="/assets/images/image.png"
// // //           title="Cardinal Chips"
// // //           rating={4.3}
// // //         />
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // // 'use client'

// // // import React, { useState } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import CategoryBox from "@/components/CategoryBox";
// // // import RestaurantCard from "@/components/RestaurantCard";
// // // import CategoriesScreen from "@/components/CategoriesScreen";

// // // export default function HomePage() {
// // //   const [showCategories, setShowCategories] = useState(false);

// // //   return (
// // //     <div className="relative">
// // //       <AnimatePresence>
// // //         {showCategories ? (
// // //           // Animated Categories Screen
// // //           <motion.div
// // //             key="categories"
// // //             initial={{ y: "100%", opacity: 0 }}
// // //             animate={{ y: 0, opacity: 1 }}
// // //             exit={{ y: "100%", opacity: 0 }}
// // //             transition={{ duration: 0.5, ease: "easeInOut" }}
// // //             className="absolute inset-0 bg-white z-50"
// // //           >
// // //             <CategoriesScreen />
// // //           </motion.div>
// // //         ) : (
// // //           // Normal Home content
// // //           <motion.div
// // //             key="home"
// // //             initial={{ opacity: 1 }}
// // //             exit={{ opacity: 0 }}
// // //           >
// // //             <div className="p-6 space-y-6 bg-white">
// // //               <h1 className="text-2xl font-bold mb-4">Now - London Hall</h1>

// // //               {/* Categories Section */}
// // //               <div className="space-y-4">
// // //                 {/* First row → 2 items */}
// // //                 <div className="grid grid-cols-2 gap-2">
// // //                   <CategoryBox imageUrl="/assets/images/icon.png" title="American" alt="American" />
// // //                   <CategoryBox imageUrl="/assets/images/icon.png" title="Grocery" alt="Grocery" />
// // //                 </div>

// // //                 {/* Second row → 4 items */}
// // //                 <div className="grid grid-cols-4 gap-3">
// // //                   <CategoryBox imageUrl="/assets/images/icon.png" title="Convenience" alt="Convenience" />
// // //                   <CategoryBox imageUrl="/assets/images/icon.png" title="Alcohol" alt="Alcohol" />
// // //                   <CategoryBox imageUrl="/assets/images/icon.png" title="Pet Supplies" alt="Pet Supplies" />
                  
// // //                   {/* More (make clickable) */}
// // //                   <div onClick={() => setShowCategories(true)} className="cursor-pointer">
// // //                     <CategoryBox imageUrl="/assets/images/MoreIcon.png" title="More" alt="More" />
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Restaurants Section */}
// // //               <div className="flex flex-col gap-2">
// // //                 <RestaurantCard 
// // //                   imageUrl="/assets/images/image.png"
// // //                   title="Adenine Kitchen"
// // //                   rating={4.4}
// // //                 />
// // //                 <RestaurantCard 
// // //                   imageUrl="/assets/images/image.png"
// // //                   title="Cardinal Chips"
// // //                   rating={4.3}
// // //                 />
// // //               </div>
// // //             </div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     </div>
// // //   );
// // // }






// // 'use client'

// // import React, { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import CategoryBox from "@/components/CategoryBox";
// // import RestaurantCard from "@/components/RestaurantCard";
// // import CategoriesScreen from "@/components/CategoriesScreen";

// // export default function HomePage() {
// //   const [showCategories, setShowCategories] = useState(false);

// //   return (
// //     <div className="relative">
// //       <AnimatePresence>
// //         {showCategories ? (
// //           // Animated Categories Screen
// //           <motion.div
// //             key="categories"
// //             initial={{ y: "100%", opacity: 0 }}
// //             animate={{ y: 0, opacity: 1 }}
// //             exit={{ y: "100%", opacity: 0 }}
// //             transition={{ duration: 0.5, ease: "easeInOut" }}
// //             className="absolute inset-0 bg-white z-50"
// //           >
// //             <CategoriesScreen />
// //           </motion.div>
// //         ) : (
// //           // Normal Home content
// //           <motion.div
// //             key="home"
// //             initial={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //           >
// //             <div className="p-6 space-y-6 bg-white">
// //               <h1 className="text-xl mb-4 text-center font-bold">Now - London Hall</h1>

// //               {/* Categories Section */}
// //               <div className="space-y-4">
// //                 {/* First row → 2 items */}
// //                 <div className="grid grid-cols-2 gap-2">
// //                   <div onClick={() => setShowCategories(true)} className="cursor-pointer">
// //                     <CategoryBox imageUrl="/assets/images/icon.png" title="American" alt="American" />
// //                   </div>
// //                   <div onClick={() => setShowCategories(true)} className="cursor-pointer">
// //                     <CategoryBox imageUrl="/assets/images/icon.png" title="Grocery" alt="Grocery" />
// //                   </div>
// //                 </div>

// //                 {/* Second row → 4 items */}
// //                 <div className="grid grid-cols-4 gap-3">
// //                   <div onClick={() => setShowCategories(true)} className="cursor-pointer">
// //                     <CategoryBox imageUrl="/assets/images/icon.png" title="Convenience" alt="Convenience" />
// //                   </div>
// //                   <div onClick={() => setShowCategories(true)} className="cursor-pointer">
// //                     <CategoryBox imageUrl="/assets/images/icon.png" title="Alcohol" alt="Alcohol" />
// //                   </div>
// //                   <div onClick={() => setShowCategories(true)} className="cursor-pointer">
// //                     <CategoryBox imageUrl="/assets/images/icon.png" title="Pet Supplies" alt="Pet Supplies" />
// //                   </div>
// //                   <div onClick={() => setShowCategories(true)} className="cursor-pointer">
// //                     <CategoryBox imageUrl="/assets/images/MoreIcon.png" title="More" alt="More" />
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Restaurants Section */}
// //               <div className="flex flex-col gap-2">
// //                 <RestaurantCard 
// //                   imageUrl="/assets/images/image.png"
// //                   title="Adenine Kitchen"
// //                   rating={4.4}
// //                 />
// //                 <RestaurantCard 
// //                   imageUrl="/assets/images/image.png"
// //                   title="Cardinal Chips"
// //                   rating={4.3}
// //                 />
// //                 <RestaurantCard 
// //                   imageUrl="/assets/images/image.png"
// //                   title="Cardinal Chips"
// //                   rating={4.3}
// //                 />
// //               </div>
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </div>
// //   );
// // }







// 'use client'

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import CategoryBox from "@/components/CategoryBox";
// import RestaurantCard from "@/components/RestaurantCard";
// import CategoriesScreen from "@/components/CategoriesScreen";

// export default function HomePage() {
//   const [showCategories, setShowCategories] = useState(false);

//   return (
//     <div className="relative">
//       <AnimatePresence>
//         {showCategories ? (
//           // Animated Categories Screen
//           <motion.div
//             key="categories"
//             initial={{ y: "100%", opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: "100%", opacity: 0 }}
//             transition={{ duration: 0.5, ease: "easeInOut" }}
//             className="absolute inset-0 bg-white z-50"
//           >
//             <CategoriesScreen goBack={() => setShowCategories(false)} />
//           </motion.div>
//         ) : (
//           // Normal Home content
//           <motion.div key="home" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
//             <div className="p-6 space-y-6 bg-white">
//               <h1 className="text-xl mb-4 text-center font-bold">Now - London Hall</h1>

//               {/* Categories Section */}
//               <div className="space-y-4">
//                 {/* First row → 2 items */}
//                 <div className="grid grid-cols-2 gap-2">
//                   <div onClick={() => setShowCategories(true)} className="cursor-pointer">
//                     <CategoryBox imageUrl="/assets/images/icon.png" title="American" alt="American" />
//                   </div>
//                   <div onClick={() => setShowCategories(true)} className="cursor-pointer">
//                     <CategoryBox imageUrl="/assets/images/icon.png" title="Grocery" alt="Grocery" />
//                   </div>
//                 </div>

//                 {/* Second row → 4 items */}
//                 <div className="grid grid-cols-4 gap-3">
//                   <div onClick={() => setShowCategories(true)} className="cursor-pointer">
//                     <CategoryBox imageUrl="/assets/images/icon.png" title="Convenience" alt="Convenience" />
//                   </div>
//                   <div onClick={() => setShowCategories(true)} className="cursor-pointer">
//                     <CategoryBox imageUrl="/assets/images/icon.png" title="Alcohol" alt="Alcohol" />
//                   </div>
//                   <div onClick={() => setShowCategories(true)} className="cursor-pointer">
//                     <CategoryBox imageUrl="/assets/images/icon.png" title="Pet Supplies" alt="Pet Supplies" />
//                   </div>
//                   <div onClick={() => setShowCategories(true)} className="cursor-pointer">
//                     <CategoryBox imageUrl="/assets/images/MoreIcon.png" title="More" alt="More" />
//                   </div>
//                 </div>
//               </div>

//               {/* Restaurants Section */}
//               <div className="flex flex-col gap-2">
//                 <RestaurantCard imageUrl="/assets/images/image.png" title="Adenine Kitchen" rating={4.4} />
//                 <RestaurantCard imageUrl="/assets/images/image.png" title="Cardinal Chips" rating={4.3} />
//                 <RestaurantCard imageUrl="/assets/images/image.png" title="Cardinal Chips" rating={4.3} />
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CategoryBox from "@/components/CategoryBox";
import RestaurantCard from "@/components/RestaurantCard";
import CategoriesScreen from "@/components/CategoriesScreen";

export default function HomePage() {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* Background (always rendered, blurred if modal open) */}
      <div className={`transition-all duration-300 ${showCategories ? "blur-sm" : ""}`}>
        <div className="p-6 space-y-6 bg-white min-h-screen">
          <h1 className="text-xl mb-4 text-center font-bold">Now - London Hall</h1>

          {/* Categories Section */}
          <div className="space-y-4">
            {/* First row → 2 items */}
            <div className="grid grid-cols-2 gap-2">
              <div onClick={() => setShowCategories(true)} className="cursor-pointer">
                <CategoryBox imageUrl="/assets/images/icon.png" title="American" alt="American" />
              </div>
              <div onClick={() => setShowCategories(true)} className="cursor-pointer">
                <CategoryBox imageUrl="/assets/images/icon.png" title="Grocery" alt="Grocery" />
              </div>
            </div>

            {/* Second row → 4 items */}
            <div className="grid grid-cols-4 gap-3">
              <div onClick={() => console.log("clicked")} className="cursor-pointer">
                <CategoryBox imageUrl="/assets/images/icon.png" title="Convenience" alt="Convenience" />
              </div>
              <div onClick={() => console.log("clicked")} className="cursor-pointer">
                <CategoryBox imageUrl="/assets/images/icon.png" title="Alcohol" alt="Alcohol" />
              </div>
              <div onClick={() => console.log("clicked")} className="cursor-pointer">
                <CategoryBox imageUrl="/assets/images/icon.png" title="Pet Supplies" alt="Pet Supplies" />
              </div>
              <div onClick={() => setShowCategories(true)} className="cursor-pointer">
                <CategoryBox imageUrl="/assets/images/MoreIcon.png" title="More" alt="More" />
              </div>
            </div>
          </div>

          {/* Restaurants Section */}
          <div className="flex flex-col gap-2">
            <RestaurantCard imageUrl="/assets/images/image.png" title="Adenine Kitchen" rating={4.4} />
            <RestaurantCard imageUrl="/assets/images/image.png" title="Cardinal Chips" rating={4.3} />
            <RestaurantCard imageUrl="/assets/images/image.png" title="Cardinal Chips" rating={4.3} />
          </div>
        </div>
      </div>

      {/* Categories Modal */}
      {/* <AnimatePresence>
        {showCategories && (
          <motion.div
            key="categories"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 z-50 flex items-center justify-center"
          >
            <div className="bg-white w-full max-w-4xl shadow-lg p-6">
              <CategoriesScreen goBack={() => setShowCategories(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}
      {/* Categories Modal — bottom aligned */}
      <AnimatePresence>
        {showCategories && (
          <motion.div
            key="categories"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            // items-end aligns children to the bottom of the screen
            // pb-6 gives a nice 1.5rem gap from the viewport bottom (remove if you want flush)
            className="absolute inset-0 z-50 flex items-end justify-center pb-6"
            onClick={() => setShowCategories(false)}
          >
            {/* stopPropagation keeps clicks inside modal from closing */}
            <div
              className="bg-white w-full max-w-4xl shadow-lg p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <CategoriesScreen />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
