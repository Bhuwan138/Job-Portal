import {work} from "../../Data/Data.tsx";
import {Avatar} from "@mantine/core";

const Working = () => {
    return (
        <div className={"m-2 mt-10 text-mine-shaft-100 flex flex-col items-center justify-center"}>
            <div className={"text-4xl mb-3 font-bold"}>How it <span className={"text-bright-sun-400"}>Works</span></div>
            <div className={"text-xl text-mine-shaft-300 text-center w-1/2 mx-auto"}>Effortlessly navigate through the process and land your dream job.</div>
            <div className={"flex w-[90vw] items-center justify-between"}>
                <div className={"relative"}>
                    <div className={"w-[35rem]"}> <img src={"Girl.png"} alt={"girl"} /> </div>
                    <div className={"backdrop-blur-md absolute top-20 right-2 border rounded-xl w-40 py-2 px-4 items-center border-bright-sun-400 text-center justify-center"}>
                        <div className={"flex items-center justify-center"}> <Avatar className={"!w-16 !h-16"} src={"avatar-3.png"} alt={"avatar 3"} /> </div>
                        <div className={"text-mine-shaft-100 mx-auto font-bold" }>Complete your profile</div>
                        <div className={"text-mine-shaft-300"}>70% completed</div>
                    </div>
                </div>
                <div className={"w-[35%] flex flex-col gap-6"}>
                    {work.map((item, index) => (
                        <div key={index} className={"flex gap-8 items-center justify-center"}>
                            <div className={"rounded-full p-2.5 border-bright-sun-400 bg-bright-sun-400"}> <img src={`/Working/${item.image}`} alt={item.name.endsWith(" ").toString()}  className={"h-12 w-20 object-cover "}/> </div>
                            <div className={"flex flex-col gap-1"}>
                                <div className={"text-2xl font-semibold text-mine-shaft-200"}> {item.name} </div>
                                <div className={"text-lg text-mine-shaft-300"}> {item.description} </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Working
