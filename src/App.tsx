// import React from 'react';
// import { Scene } from './components/Scene';
// import { BrainCircuit, Globe2, Sparkles } from 'lucide-react';
// import { motion } from 'framer-motion';

// // const languages = [
// //   "हिन्दी", "বাংলা", "తెలుగు", "मराठी", "தமிழ்", "ગુજરાતી", 
// //   "ಕನ್ನಡ", "മലയാളം", "ਪੰਜਾਬੀ", "অসमীয়া"
// // ];
// {/* <div className="max-w-4xl"> */}


// function App() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white overflow-hidden">
//       <div className="relative min-h-screen">
//         <div className="absolute inset-0">
//           <Scene />
//         </div>
        
//         <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%230066ff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
//           }}
//         />
        
//         <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center">
//           <div className="max-w-4xl pl-12">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <motion.div
//                 initial={{ scale: 0.95 }}
//                 animate={{ scale: 1 }}
//                 transition={{ 
//                   duration: 2,
//                   // repeat: Infinity,
//                   repeatType: "reverse"
//                 }}
//               >
//                 <Sparkles className="w-12 h-12 text-blue-400 mb-6" />
//               </motion.div>

//               <h1 className="text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 leading-tight">
//                 PolyMind
//               </h1>
              
//               <motion.p 
//                 className="text-2xl text-blue-200 mb-8 leading-relaxed max-w-2xl"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2, duration: 0.8 }}
//               >
//                 {/* Experience the power of AI in your native tongue. Polymind understands and responds 
//                 in all Indian languages and dialects, making technology truly accessible for everyone. */}
//                 Multi Agent Intelligence
//               </motion.p>
              
//               <div className="flex gap-4 mb-12">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full font-semibold flex items-center gap-2 hover:from-blue-600 hover:to-blue-800 transition-all shadow-lg shadow-blue-500/25 group"
//                 >
//                   <BrainCircuit className="w-5 h-5 group-hover:animate-pulse" />
//                   <span>Get Started</span>
//                   <motion.span
//                     className="absolute inset-0 rounded-full bg-blue-400/20"
//                     initial={{ scale: 0 }}
//                     // animate={{ scale: [1, 1.2, 1] }}
//                     // transition={{ duration: 1.5, repeat: Infinity }}
//                   />
//                 </motion.button>
                
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-8 py-4 border-2 border-blue-500 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-500/20 transition-colors relative overflow-hidden group"
//                 >
//                   <Globe2 className="w-5 h-5 group-hover:rotate-180 transition-transform duration-700" />
//                   Explore Languages
//                 </motion.button>
//               </div>

//               <motion.div 
//                 className="flex flex-wrap gap-3"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//               >
//                 {/* {languages.map((lang, index) => (
//                   <motion.span
//                     key={index}
//                     initial={{ opacity: 0, scale: 0.5 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: index * 0.1 }}
//                     whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
//                     className="px-4 py-2 rounded-full text-sm bg-blue-900/40 backdrop-blur-sm border border-blue-500/20 cursor-pointer hover:border-blue-400/40 transition-colors"
//                   >
//                     {lang}
//                   </motion.span>
//                 ))} */}
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// App.tsx
import React from 'react';
import { Scene } from './components/Scene';
import { BrainCircuit, Globe2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white overflow-hidden">
      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <Scene />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%230066ff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />

        <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center">
          <div className="max-w-4xl pl-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, repeatType: 'reverse' }}
              >
                <Sparkles className="w-12 h-12 text-blue-400 mb-6" />
              </motion.div>

              <h1 className="text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 leading-tight">
                PolyMind
              </h1>

              <motion.p
                className="text-2xl text-blue-200 mb-8 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Multi Agent Intelligence
              </motion.p>

              <div className="flex gap-4 mb-12">
                <motion.button
                  onClick={() => navigate('/login')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full font-semibold flex items-center gap-2 hover:from-blue-600 hover:to-blue-800 transition-all shadow-lg shadow-blue-500/25 group relative"
                >
                  <BrainCircuit className="w-5 h-5 group-hover:animate-pulse" />
                  <span>Get Started</span>
                  <motion.span
                    className="absolute inset-0 rounded-full bg-blue-400/20"
                    initial={{ scale: 0 }}
                  />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-blue-500 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-500/20 transition-colors relative overflow-hidden group"
                >
                  <Globe2 className="w-5 h-5 group-hover:rotate-180 transition-transform duration-700" />
                  Explore Languages
                </motion.button>
              </div>

              {/* Language Pills Placeholder */}
              {/* You can re-enable language rendering here if needed */}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
