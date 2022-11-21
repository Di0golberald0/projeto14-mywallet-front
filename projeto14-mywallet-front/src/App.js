import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import { Login, SignUp, Transfers, Entry, Exit } from "./pages";

export const pathsWithoutHeaderAndMenu = ['/', '/sign-up'];

export default function App() {
  return (
    <UserProvider>
         <BrowserRouter>
             <Routes>
                 <Route path="/" element={<Login />} />
                  <Route path="/sign-up" element={<SignUp />} />
                  <Route path="/transfers" element={<Transfers />} />
                  <Route path="/entry" element={<Entry />} />
                  <Route path="/exit" element={<Exit />} />
            </Routes>
          </BrowserRouter>
    </UserProvider>
  );
}