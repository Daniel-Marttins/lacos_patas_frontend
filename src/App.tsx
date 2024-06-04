/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="flex item-center justify-center w-screen h-screen" style={{ background: '#3B5875' }}>
      <Router>
            <Routes>
              <Route path="/" element={<Home />} /*element={logado ? <Navigate to="/home/main" /> : <Login />}*/ />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {/*<Route path="home" element={<Home />}  /*element={logado ? <Home /> : <Navigate to="/" />} >
                <Route path="main" element={<Main />} />
                <Route path="company" element={<Company />} />
                <Route path="persons" element={<Persons />} />
                <Route path="responsible" element={<Responsible />} />
                <Route path="order" element={<Movement />} />
                <Route path="paymentMethods" element={<PaymentMethods />} />
                <Route path="expenses" element={<Expense />} />
                <Route path="assets" element={<Asset />} />
                <Route path="groups" element={<Groups />} />
                <Route path="situations" element={<Situation />} />
                <Route path="contracts" element={<Contract />} />
              </Route>*/}
            </Routes>
        </Router>
    </div>
  );
}

export default App;
