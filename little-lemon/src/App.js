import { Route, Routes } from 'react-router-dom';
import pages from './utils/pages';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import Login from './components/pages/Login/LoginForm';
import UnderConstruction from './components/pages/UnderConstruction';
import Reservations from './components/pages/Reservations';
import ConfirmedReservation from './components/pages/Reservations/ConfirmedReservation';
import SignupForm from './components/pages/Signup/SignupForm';

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={pages.get('home').path} element={<Home />}/>
          <Route path={pages.get('about').path} element={<UnderConstruction />}/>
          <Route path={pages.get('menu').path} element={<UnderConstruction />}/>
          <Route path={pages.get('reservations').path} element={<Reservations />}/>
          <Route path={pages.get('confirmedreservation').path} element={<ConfirmedReservation />}/>
          <Route path={pages.get('orderOnline').path} element={<UnderConstruction />}/>
          <Route path={pages.get('login').path} element={<Login />}/>
          <Route path={pages.get('signup').path} element={<SignupForm />}/>
        </Routes>
      </Layout>
    </>
  );
};

export default App;
