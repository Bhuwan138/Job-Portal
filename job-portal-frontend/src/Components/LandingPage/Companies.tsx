import Marquee from "react-fast-marquee";
import {companies} from "../../Data/Data.tsx";
const Companies = () => {
    return (
        <div className="mt-20 pb-5">
            <div className="text-4xl text-center mb-10 font-semibold text-mine-shaft-100"> Trusted by <span className={"text-bright-sun-400"}>1000+</span> companies</div>
            <Marquee pauseOnHover={true}>
                {companies.map((company, index) =>
                    <div key={index} className="mx-8 px-2 py-1 hover:bg-mine-shaft-900 rounded-xl cursor-pointer">
                        <img src={`Companies/${company}.png`} alt={company} className="h-14" />
                    </div>
                )}
            </Marquee>
        </div>

    )
}
export default Companies