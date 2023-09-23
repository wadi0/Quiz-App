import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './component/auth/SignUp';
import './App.css';
import {SignIn} from './component/auth/SignIn';
import { Navbar } from './component/auth/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path='/navbar' element={<Navbar />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
