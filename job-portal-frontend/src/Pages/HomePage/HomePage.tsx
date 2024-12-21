import DreamJobs from "../../Components/LandingPage/DreamJobs.tsx";
import Companies from "../../Components/LandingPage/Companies.tsx";
import JobCategory from "../../Components/LandingPage/JobCategory.tsx";
import Working from "../../Components/LandingPage/Working.tsx";
import Testimonials from "../../Components/LandingPage/Testimonials.tsx";
import Newsletters from "../../Components/LandingPage/Newsletters.tsx";

const HomePage = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950">
            <DreamJobs />
            <Companies />
            <JobCategory />
            <Working />
            <Testimonials />
            <Newsletters />
        </div>
    )
}
export default HomePage
