import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './component/auth/SignUp';
import './App.css';
import {SignIn} from './component/auth/SignIn';
import { Layout } from './component/layout/Layout';
import { Home } from './component/quiz/Home';
import Quiz from './component/quiz/Quiz';
import Result from './component/page/result/Result';
import { AuthProvider } from './context/AuthContext';


function App() {
  return (
    <BrowserRouter>
        <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout />}>

        <Route path='/' element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/result' element={<Result />} />
        {/* <Route path="*" element={<NoPage />} /> */}

        </Route>
      </Routes>
        </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
