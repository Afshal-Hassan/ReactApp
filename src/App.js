import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { Route, Switch } from 'react-router-dom';
import Findload from './components/Findload';
import Shipper from './components/Shipper';
import Contact from './components/Contact';
import Aboutus from './components/Aboutus';
import TermsAndConditions from './components/TermsAndConditions';
import MasterCardPayment from './components/MasterCardPayment';
import Test from './components/Test';
import { useEffect, useState } from 'react';
import DarkModeState from './components/DarkModeState';
import PostLoadNavBar from './components/PostLoadNavBar';
import MasterVisaCard from './components/MasterVisaCard';
import GetAllPostLoad from './components/GetAllPostLoad';
import Whatsapp from './components/Whatsapp';
import ShareAContainer from './components/ShareAContainer';
import MatchedContainers from './components/MatchedContainers';
import Loadboaded from './components/Loadboaded';
import Filter from './components/Filter';
import HomeArabic from './components/HomeArabic';
import NavbarArabic from './components/NavbarArabic';
import SignupArabic from './components/SignupArabic';
import LoginArabic from './components/LoginArabic';
import FindLoadArabic from './components/FindLoadArabic';
import ShareAContainerArabic from './components/ShareAContainerArabic';
import GetAllPostLoadArabic from './components/GetAllPostLoadArabic';
import MatchedContainersArabic from './components/MatchedContainersArabic';
import ContactArabic from './components/ContactArabic';
import PaymentArabic from './components/PaymentArabic';
import ShipperArabic from './components/ShipperArabic';
import LoadboadedArabic from './components/LoadboadedArabic';
import PostLoadNavBarArabic from './components/PostloadNavbarArabic';
import Language from './components/Language'



function App() {
  return (
    <>
    <DarkModeState>
    <Switch>
    <Route exact path='/' component={Language}> <Language/></Route>

      <Route exact path='/home' component={Home}> <Navbar/><Home/></Route>
      <Route exact path='/login' component={Login}> <Navbar /><Login/></Route>
      <Route exact path='/signup' component={Signup}> <Navbar/><Signup/></Route>
      <Route exact path='/contact' component={Contact}><Navbar/><Contact/></Route>
      <Route exact path='/aboutus' component={Aboutus}><Navbar/><Aboutus/></Route>
      <Route exact path='/termsandconditions' component={TermsAndConditions}><Navbar/><TermsAndConditions/></Route>
      <Route exact path='/postload' component={Findload}><PostLoadNavBar/><Findload/></Route>
      <Route exact path='/getallpostload' component={GetAllPostLoad}><PostLoadNavBar/><GetAllPostLoad/></Route>
      <Route  path='/sharecontainerloads' component={Shipper}><PostLoadNavBar/><Shipper/></Route>
      <Route exact path='/payment' component={MasterVisaCard}><MasterVisaCard/></Route>
      <Route exact path='/sharecontainer' component={ShareAContainer}><PostLoadNavBar/><ShareAContainer/></Route>
      <Route exact path='/matchedcontainers' component={MatchedContainers}><PostLoadNavBar/><MatchedContainers/></Route>
      <Route exact path='/loadboarded' component={Loadboaded}><PostLoadNavBar/><Loadboaded/></Route>
      <Route exact path='/filter' component={Filter}><PostLoadNavBar/><Filter/></Route>
      <Route exact path='/home-arabic' component={HomeArabic}><NavbarArabic/><HomeArabic/></Route>
      <Route exact path='/signup-arabic' component={SignupArabic}><NavbarArabic/><SignupArabic/></Route>
      <Route exact path='/login-arabic' component={LoginArabic}><NavbarArabic/><LoginArabic/></Route>
      <Route exact path='/postload-arabic' component={FindLoadArabic}><PostLoadNavBarArabic/><FindLoadArabic/></Route>
      <Route exact path='/sharecontainer-arabic' component={ShareAContainerArabic}><PostLoadNavBarArabic></PostLoadNavBarArabic><ShareAContainerArabic/></Route>
      <Route exact path='/getallpostload-arabic' component={GetAllPostLoadArabic}><PostLoadNavBarArabic/><GetAllPostLoadArabic/></Route>
      <Route exact path='/matchedcontainers-arabic' component={MatchedContainersArabic}><PostLoadNavBarArabic/><MatchedContainersArabic/></Route>
      <Route exact path='/contact-arabic' component={ContactArabic}><NavbarArabic/><ContactArabic/></Route>
      <Route exact path='/payment-arabic' component={PaymentArabic}><PaymentArabic/></Route>
      <Route exact path='/shipper-arabic' component={ShipperArabic}><PostLoadNavBarArabic/><ShipperArabic/></Route>
      <Route exact path='/loadedboarded-arabic' component={LoadboadedArabic}><PostLoadNavBarArabic/><LoadboadedArabic/></Route>


    </Switch></DarkModeState>
    
    </>
   

  );
}

export default App;
