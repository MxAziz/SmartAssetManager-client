import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
  import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import './index.css'
import './App.css'
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/Routes';
import AuthProvider from './Provider/AuthProvider';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
    <AuthProvider>
        <div className="max-w-screen-xl mx-auto">
          <RouterProvider router={router} />
          <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={true}
            draggable={true}
            pauseOnHover={true}
            theme="colored"
          />
        </div>
    </AuthProvider>
      </QueryClientProvider>
  </StrictMode>
);
