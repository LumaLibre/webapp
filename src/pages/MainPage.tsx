import Header from "../components/homepage/header/Header.tsx";
import LeadContent from "../components/homepage/content/lead/LeadContent.tsx";
import SecondaryContent from "../components/homepage/content/secondary/SecondaryContent.tsx";

function MainPage() {
    return (
        <div>
            <Header />
            <LeadContent />
            <SecondaryContent />
        </div>
    );
}

export default MainPage;