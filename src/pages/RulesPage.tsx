import RulesContent from "@/components/rules/RulesContent.tsx";
import {useEffect} from "react";
import Footer from "@/components/footer/Footer.tsx";
import Navbar from "@/components/navbar/Navbar.tsx";

function RulesPage() {
    useEffect(() => {
        document.title = "LumaMC • Rules";
    }, []);

    return (
        <div>
            <Navbar />
            <RulesContent />
            <Footer />
        </div>

    );
}

export default RulesPage;