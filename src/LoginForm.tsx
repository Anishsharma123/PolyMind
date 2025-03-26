// // // LoginForm.tsx
// // import React from 'react';
// // import { motion } from 'framer-motion';

// // const LoginForm = () => {
// //   return (
// //     <div className="flex items-center justify-center min-h-screen px-4">
// //       <motion.div 
// //         className="bg-black/60 border border-blue-500/20 rounded-2xl p-10 backdrop-blur-md w-full max-w-md shadow-xl shadow-blue-500/10"
// //         initial={{ opacity: 0, scale: 0.9, y: 20 }}
// //         animate={{ opacity: 1, scale: 1, y: 0 }}
// //         transition={{ duration: 0.8 }}
// //       >
// //         <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">Login</h2>

// //         <form className="flex flex-col gap-6">
// //           <input 
// //             type="email" 
// //             placeholder="Email" 
// //             className="px-4 py-3 bg-blue-950/60 text-white border border-blue-500/30 rounded-md placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
// //           />
          
// //           <input 
// //             type="password" 
// //             placeholder="Password" 
// //             className="px-4 py-3 bg-blue-950/60 text-white border border-blue-500/30 rounded-md placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
// //           />

// //           <motion.button 
// //             type="submit"
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //             className="py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-md hover:from-blue-600 hover:to-blue-800 transition-all shadow-md shadow-blue-500/30"
// //           >
// //             Sign In
// //           </motion.button>
// //         </form>

// //         <p className="text-sm text-blue-300 mt-4 text-center">
// //           Don't have an account? <span className="underline cursor-pointer hover:text-blue-400">Register</span>
// //         </p>
// //       </motion.div>
// //     </div>
// //   );
// // };

// // export default LoginForm;
// import React from 'react';
// import { motion } from 'framer-motion';
// import { FcGoogle } from 'react-icons/fc';

// const LoginForm = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen px-4">
//       <motion.div 
//         className="bg-black/60 border border-blue-500/20 rounded-2xl p-10 backdrop-blur-md w-full max-w-md shadow-xl shadow-blue-500/10"
//         initial={{ opacity: 0, scale: 0.9, y: 20 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">Login</h2>

//         <form className="flex flex-col gap-6">
//           <input 
//             type="email" 
//             placeholder="Email" 
//             className="px-4 py-3 bg-blue-950/60 text-white border border-blue-500/30 rounded-md placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
//           />
          
//           <input 
//             type="password" 
//             placeholder="Password" 
//             className="px-4 py-3 bg-blue-950/60 text-white border border-blue-500/30 rounded-md placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
//           />

//           <motion.button 
//             type="submit"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-md hover:from-blue-600 hover:to-blue-800 transition-all shadow-md shadow-blue-500/30"
//           >
//             Sign In
//           </motion.button>

//           {/* Google Sign In Button */}
//           <motion.button
//             type="button"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="flex items-center justify-center gap-2 py-3 border border-blue-500/30 text-white rounded-md hover:bg-blue-900/30 transition-all"
//             onClick={() => alert('Google login clicked')}
//           >
//             <FcGoogle className="text-2xl" />
//             <span className="font-medium">Login with Google</span>
//           </motion.button>
//         </form>

//         <p className="text-sm text-blue-300 mt-4 text-center">
//           Don't have an account? <span className="underline cursor-pointer hover:text-blue-400">Register</span>
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default LoginForm;



// import React from 'react';
// import { motion } from 'framer-motion';
// import { FcGoogle } from 'react-icons/fc';
// import { signInWithPopup } from 'firebase/auth';
// import { auth, provider } from './firebaseConfig';

// const LoginForm = () => {
//   const handleGoogleLogin = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;
//       alert(`Welcome, ${user.displayName}!`);
//       console.log('User info:', user);
//     } catch (error) {
//       console.error("Google sign-in error", error);
//       alert("Failed to sign in with Google");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen px-4">
//       <motion.div 
//         className="bg-black/60 border border-blue-500/20 rounded-2xl p-10 backdrop-blur-md w-full max-w-md shadow-xl shadow-blue-500/10"
//         initial={{ opacity: 0, scale: 0.9, y: 20 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">Login</h2>

//         <form className="flex flex-col gap-6">
//           <input 
//             type="email" 
//             placeholder="Email" 
//             className="px-4 py-3 bg-blue-950/60 text-white border border-blue-500/30 rounded-md placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
//           />
          
//           <input 
//             type="password" 
//             placeholder="Password" 
//             className="px-4 py-3 bg-blue-950/60 text-white border border-blue-500/30 rounded-md placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
//           />

//           <motion.button 
//             type="submit"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-md hover:from-blue-600 hover:to-blue-800 transition-all shadow-md shadow-blue-500/30"
//           >
//             Sign In
//           </motion.button>

//           <motion.button
//             type="button"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="flex items-center justify-center gap-2 py-3 border border-blue-500/30 text-white rounded-md hover:bg-blue-900/30 transition-all"
//             onClick={handleGoogleLogin}
//           >
//             <FcGoogle className="text-2xl" />
//             <span className="font-medium">Login with Google</span>
//           </motion.button>
//         </form>

//         <p className="text-sm text-blue-300 mt-4 text-center">
//           Don't have an account? <span className="underline cursor-pointer hover:text-blue-400">Register</span>
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default LoginForm;


// LoginForm.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './firebaseConfig';

const LoginForm = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      alert(`Welcome, ${user.displayName}!`);
      console.log('User info:', user);
      navigate('/'); // Redirect to homepage after login
    } catch (error) {
      console.error("Google sign-in error", error);
      alert("Failed to sign in with Google");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <motion.div 
        className="bg-black/60 border border-blue-500/20 rounded-2xl p-10 backdrop-blur-md w-full max-w-md shadow-xl shadow-blue-500/10"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">Login</h2>

        <form className="flex flex-col gap-6">
          <input 
            type="email" 
            placeholder="Email" 
            className="px-4 py-3 bg-blue-950/60 text-white border border-blue-500/30 rounded-md placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
          />
          
          <input 
            type="password" 
            placeholder="Password" 
            className="px-4 py-3 bg-blue-950/60 text-white border border-blue-500/30 rounded-md placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
          />

          <motion.button 
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-md hover:from-blue-600 hover:to-blue-800 transition-all shadow-md shadow-blue-500/30"
          >
            Sign In
          </motion.button>

          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 py-3 border border-blue-500/30 text-white rounded-md hover:bg-blue-900/30 transition-all"
            onClick={handleGoogleLogin}
          >
            <FcGoogle className="text-2xl" />
            <span className="font-medium">Login with Google</span>
          </motion.button>
        </form>

        <p className="text-sm text-blue-300 mt-4 text-center">
          Don't have an account? <span className="underline cursor-pointer hover:text-blue-400">Register</span>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginForm;
