import {IconAnchor, IconAsset, IconBell, IconSettings} from "@tabler/icons-react";
import {Avatar, Indicator} from "@mantine/core";
import navLinks from "./NavLinks.tsx";

const Header = () => {
    return (
        <div className="w-full text-white bg-mine-shaft-950 h-20 flex justify-between items-center px-6 font-['poppins'] ">
            <div className="flex items-center gap-1 text-bright-sun-400">
                <IconAnchor className="w-8 h-8"  stroke={2.5}/>
                <div className="text-2xl font-semibold">JobHook</div>
            </div>
            { navLinks() }
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                    Bhuwan
                    <Avatar src="avatar.png" alt="it's me" />
                </div>
                <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                    <IconSettings stroke={1.5} />
                </div>
                <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                    <Indicator color="brightSun.4" offset={6} size={8} processing>
                        <IconBell stroke={1.5} />
                    </Indicator>
                </div>
            </div>
        </div>
    )
}
export default Header
