// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// // import App from './App.tsx';
// import LoginForm from './LoginForm.tsx';

// import './index.css';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     {/* <App /> */}
//     <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center justify-center">
//   <LoginForm />
// </div>
//   </StrictMode>
// );


// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import LoginForm from './LoginForm';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
