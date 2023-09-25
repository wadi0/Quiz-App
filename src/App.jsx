import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './component/auth/SignUp';
import './App.css';
import {SignIn} from './component/auth/SignIn';
import { Layout } from './component/layout/Layout';
import { Home } from './component/quiz/Home';
import Quiz from './component/quiz/Quiz';
import Result from './component/page/result/Result';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
        <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout />}>

        <Route path='/' element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path='/quiz' element={<PrivateRoute><Quiz /></PrivateRoute>} />
        <Route path='/result' element={<PrivateRoute><Result /></PrivateRoute>} />
        {/* <Route path="*" element={<NoPage />} /> */}

        </Route>
      </Routes>
        </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import PrivateRoute from "./routes/PrivateRoute";
// import PublicRoute from "./routes/PublicRoute";
// import { AuthProvider } from "./context/AuthContext";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <AuthProvider>
//         <Routes>
//           <Route path="/" element={<PublicRoute />} />
//           <Route path="/" element={<PrivateRoute />} />
//         </Routes>
//       </AuthProvider>
//     </BrowserRouter>
//   );
// };

// // const Public = () => <div>public</div>;
// // const Private = () => <div>private</div>;

// export default App;



// const App = () => {
//   return (
//     <BrowserRouter>
//     <AuthProvider>
//     <Routes>
//       <Route path="/" component={Public} />
//       <PrivateRoute path="/private" component={Private} />
//       </Routes>
//       </AuthProvider>
//     </BrowserRouter>
//   )
// }

// export default App
