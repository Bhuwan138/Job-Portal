import {Button, Input} from "@mantine/core";

const Newsletters = () => {
    return (
        <div className={"mx-20 mt-10 py-5 px-10 rounded-lg bg-mine-shaft-800 flex items-center justify-around "}>
            <div className={"text-center text-mine-shaft-100 text-4xl font-bold leading-1 w-[40%]"}>Never Wants to Miss Any <span className={"text-bright-sun-400"}>Job News?</span></div>
            <div className={"flex bg-mine-shaft-700 rounded-lg px-6 py-4 justify-center items-center"}>
                <Input variant="unstyled" placeholder="your@email.com" className={"w-64 text-xl [&>input]:text-mine-shaft-100 [&>input]:text-xl [&>input]:font-bold"}  />
                <Button variant="filled" color={"brightSun.4"} size={"xl"} >Subscribe</Button>
                </div>
        </div>
    )
}
export default Newsletters
