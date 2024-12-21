import {jobCategories} from "../../Data/Data.tsx";
import {Carousel} from "@mantine/carousel";
import {IconArrowLeft, IconArrowRight} from "@tabler/icons-react";
import {rem} from "@mantine/core";

const JobCategory = () => {
    return (
        <div className="mt-20 pb-5">
            <div className="text-4xl text-center mb-3 font-semibold text-mine-shaft-100"> Browse <span className={"text-bright-sun-400"}>Job</span> Category</div>
            <div className={"text-lg text-mine-shaft-300 text-center w-1/2 mx-auto"}>Explore diverse job opportunities tailored to your skills. Start your career journey today!</div>

            <Carousel
                slideSize="22%"
                slideGap="lg"
                controlSize={32}
                className={"focus-visible:[&_button]:!outline-none [&_button]:bg-bright-sun-400 [&_button]:border-none [&_button]:hover:opacity-75 [&_button]:opacity-0 hover:[&_button]:opacity-100"}
                nextControlIcon={<IconArrowRight className={"h-8 w-8"} />}
                previousControlIcon={<IconArrowLeft className={"h-8 w-8"} />}
                loop>
                {jobCategories.map((jobCategory,index)=> (
                    <Carousel.Slide>
                        <div key={index}
                             className="flex flex-col items-center w-64 sm-mx:w-56 xs-mx:w-48 gap-2 border border-bright-sun-400 p-5 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-5 transition duration-300 ease-in-out !shadow-bright-sun-300 aos-init aos-animate">
                            <div className={"w-8 h-8 mt-4 rounded-full p-2 bg-bright-sun-400"}><img
                                src={`/Category/${jobCategory.image}`} alt={jobCategory.name}/></div>
                            <div className={"text-mine-shaft-100 font-bold text-xl"}>{jobCategory.name}</div>
                            <div
                                className={"text-mine-shaft-300 text-[12px] w-56 text-center"}>{jobCategory.description}</div>
                            <div className={"text-bright-sun-400 font-semibold pb-2 text-lg"}>{jobCategory.jobs}</div>
                        </div>
                    </Carousel.Slide>
                ))}
            </Carousel>


        </div>
    )
}
export default JobCategory
