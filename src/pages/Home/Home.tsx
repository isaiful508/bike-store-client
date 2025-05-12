import Banner from "./Banner/Banner";
import BlogPreview from "./BlockPreview/BlockPreview";
import CtaBanner from "./CtaBanner/CtaBanner";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import FeaturesBanner from "./FeaturesBanner/FeaturesBanner";
import Footer from "./Footer/Footer";
import Newsletter from "./Newsletter/Newsletter";
import Testimonials from "./Testimonials/Testimonnials";

const Home = () => {
    return (
        <>
            <Banner />
            <div className="container mx-auto">
                <FeaturedProducts />
                <FeaturesBanner />
                <CtaBanner />
                <Newsletter />
                <Testimonials />
                <BlogPreview />
            </div>
            <Footer />
        </>
    );
};

export default Home;