import Banner from "./Banner/Banner";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import FeaturesBanner from "./FeaturesBanner/FeaturesBanner";
import Footer from "./Footer/Footer";

const Home = () => {
    return (
        <>
            <Banner />
            <div className="container mx-auto">
                <FeaturedProducts />
                <FeaturesBanner />
            </div>
            <Footer />
        </>
    );
};

export default Home;