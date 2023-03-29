import NavBar2 from "../components/NavBar2";
import CustomerSectionThree from "../components/CustomerSectionThree"
import CustomerSectionSeven from "../components/CustomerSectionSeven";
import FooterSectionSupportPage from "../components/FooterSectionSupportPage";
import CustomerSectionTwo from "../components/CustomerSectionTwo";
import CustomerSectionFour from "../components/CustomerSectionFour";
import CustomerSectionFive from "../components/CustomerSectionFive";
import CustomerSectionSix from "../components/CustomerSectionSix";
import Footer from "../components/Footer";

const customers = () => {

    return (
        <div className='bg-light-blue pt-3'>
            <NavBar2></NavBar2>
            <CustomerSectionTwo></CustomerSectionTwo>
            <div className="mb-[180px] px-[2px]">
                <h3 className="text-center text-[42px] font-normal Kn mb-[60px]">How to use this template</h3>

                <CustomerSectionThree></CustomerSectionThree>

            </div>
            <CustomerSectionFour></CustomerSectionFour> 
            <CustomerSectionFive></CustomerSectionFive>
             <CustomerSectionSix></CustomerSectionSix> 
            <CustomerSectionSeven></CustomerSectionSeven>
            <Footer></Footer>

        </div>
    );
};

export default customers;