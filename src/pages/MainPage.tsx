import Header from "@/components/homepage/header/Header.tsx";
import LeadContent from "@/components/homepage/content/lead/LeadContent.tsx";
import SecondaryContent from "@/components/homepage/content/secondary/SecondaryContent.tsx";
import {useEffect} from "react";
import Navbar from "@/components/navbar/Navbar.tsx";
import Footer from "@/components/footer/Footer.tsx";

function MainPage() {
    useEffect(() => {
        document.title = "LumaMC • Home";
    }, []);

    return (
        <div>
            <Navbar />
            <Header />
            <LeadContent />
            <SecondaryContent />
            <Footer />
        </div>
    );
}

export default MainPage;