import {IconAnchor, IconBrandInstagram, IconBrandTelegram, IconBrandYoutube} from "@tabler/icons-react";
import {footerLinks} from "../../Data/Data.tsx";

const Footer = () => {
    return (
        <div className={"pt-20 bg-mine-shaft-950"}>
            <div className={"flex gap-4 pb-5 justify-around "}>
                <div className={"flex flex-col gap-4 w-1/4"}>
                    <div className="flex items-center gap-1 text-bright-sun-400">
                        <IconAnchor className="w-6 h-6" stroke={2.5}/>
                        <div className="text-2xl font-semibold">JobHook</div>
                    </div>
                    <div className={"text-mine-shaft-300 text-sm"}>
                        Job portal with user profiles, skill updates, certifications, work experience and admin job
                        postings.
                    </div>
                    <div
                        className={"flex gap-2 w-6 text-bright-sun-400 [&>div]:bg-mine-shaft-900 [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer hover:[&>div]:bg-mine-shaft-700"}>
                        <div><IconBrandInstagram/></div>
                        <div><IconBrandTelegram/></div>
                        <div><IconBrandYoutube/></div>
                    </div>
                </div>
                {
                    footerLinks.map((footer, index) => (
                        <div>
                            <div className={"text-lg font-semibold mb-4 text-bright-sun-400"}> {footer.title} </div>
                            <div className={"flex flex-col gap-2"}>
                                {footer.links.map((link, index) => (
                                    <div
                                        className={"text-mine-shaft-300 text-sm hover:text-bright-sun-400 cursor-pointer mb-1 hover:translate-x-2 transition duration-300 ease-in-out"}
                                        key={index}> {link} </div>
                                ))}
                            </div>
                        </div>
                    ))}
            </div>
            <div className={"flex items-center text-lg justify-center text-mine-shaft-200 py-7 border-t border-t-mine-shaft-300 font-semibold"}>
                Designed & Developed by &nbsp; <span className={"text-bright-sun-400"}>Bhuwan Pandey</span>
            </div>
        </div>
    )
}
export default Footer
