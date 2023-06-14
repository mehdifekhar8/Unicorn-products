import Header from "../../Components/Layout/Header/Header";
import Banner from "../../Components/Banner/Banner";
import ProductFilters from "../../Components/ProductFilters/ProductFilters";
import ProductList from "../../Components/ProductList/ProductList";
import JoinNewsletter from "../../Components/JoinNewsLetter/JoinNewsLetter";
import Footer from "../../Components/Layout/Footer/Footer";

import "./Products.scss";

function Home() {
  return (
    <>
      <Header></Header>
      <Banner
        imageUrl="/images/Hero.png"
        title="Home Shopping,  Your Choice!"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      />
      <div className="products-container">
        <ProductFilters />
        <ProductList />
      </div>
      <div className="news-container">
        <JoinNewsletter />
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
