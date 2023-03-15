import { useState } from "react";
import { AppRoutes } from "./routes/routes";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css' ; 
function App() {



  return (
    <div className="App">
      <AppRoutes />

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />

      
    </div>
  );
}

export default App;
