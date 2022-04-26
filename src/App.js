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

function App() {
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
  );
}

export default App;
