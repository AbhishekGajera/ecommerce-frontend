import React , { useEffect, useState } from 'react'
import Banner from "./components/Banner";
import Blog from "./components/Blog";
import { DealOfTheWeek } from "./components/DealOfTheWeek";
import FooterSection from "./components/Footer";
import Header from "./components/Header";
import Heroes from "./components/Heroes";
import InstagramPhotoes from "./components/InstagaramPhotoes";
import ManBanner from "./components/ManBanner";
import WomenBanner from "./components/WomenBanner";
import PartnerLogo from "./PartnerLogoes";
import axios from "axios";


import { useSelector } from "react-redux";
import store from "./store";


import { loadUser } from "./actions/userAction";


const App = () => {

  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {

    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  return (
    <div className="App">
    <Header />
    <Heroes />
    <Banner />
    <WomenBanner />
    <DealOfTheWeek />
    <ManBanner />
    <InstagramPhotoes />
    <Blog />
    <PartnerLogo />
    <FooterSection />
  </div>
  )
}

export default App