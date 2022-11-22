import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import { SignIn, SignUp, Transfers, Entry, Exit } from "./pages";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="app">
      <UserContext.Provider value={{ user, setUser }}>
        <header className="header">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/transfers" element={<Transfers />} />
              <Route path="/entry" element={<Entry />} />
              <Route path="/exit" element={<Exit />} />
            </Routes>
          </BrowserRouter>
        </header>
      </UserContext.Provider>
    </div>
  );
}