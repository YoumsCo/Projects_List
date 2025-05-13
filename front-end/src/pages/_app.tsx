import { ToastContainer } from "react-toastify";
import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";
import { AuthUserProvider } from "@/context/auth-user-context";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <AuthUserProvider>
    <ToastContainer position="top-center" autoClose={3000} />
    <Component {...pageProps} />
  </AuthUserProvider>
  );
}
