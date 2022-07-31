import './App.css';
import Login from './Login/Login';
import Register from './Register/Register';
import Footer from './Footer/Footer';
import PayInstallment from './PayInstallment/PayInstallment';

function App() {
  return (
    <div>
      <Login/>
      <Register/>
      <PayInstallment/>
      <Footer/>
    </div>
  );
}

export default App;
