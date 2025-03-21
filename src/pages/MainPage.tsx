import Header from "@/components/homepage/header/Header.tsx";
import LeadContent from "@/components/homepage/components/lead/LeadContent.tsx";
import SecondaryContent from "@/components/homepage/components/secondary/SecondaryContent.tsx";
import Navbar from "@/components/navbar/Navbar.tsx";
import Footer from "@/components/footer/Footer.tsx";
import {setTitle} from "@/App.tsx";

function MainPage() {
    setTitle('Home');

    return (
        <div>
            <Navbar />
            <Header />
            {/*<LeadContent />*/}
            {/*<SecondaryContent />*/}
            <Footer />
        </div>
    );
}

export default MainPage;