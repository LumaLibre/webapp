import Navbar from "@/components/navbar/Navbar.tsx";
import Footer from "@/components/footer/Footer.tsx";
import VoteContent from "@/components/vote/VoteContent.tsx";


function VotePage() {
    return (
        <div>
            <Navbar />
            <VoteContent />
            <Footer />
        </div>
    );
}

export default VotePage;