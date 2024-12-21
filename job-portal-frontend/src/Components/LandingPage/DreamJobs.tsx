import {Avatar, TextInput} from "@mantine/core";
import {IconSearch} from "@tabler/icons-react";

const DreamJobs = () => {
    return (
        <div className="flex items-center px-16">
            <div className="flex flex-col w-[45%]">
                <div className="text-6xl leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400 gap-3 ">Find your <span>dream jobs</span> with us</div>
                <div className="text-lg text-mine-shaft-200">Good Life begins with a good company. Start explore thousands of jobs in one place</div>
                <div className="flex gap-3 mt-5 items-center ">
                    <TextInput
                        className="bg-mine-shaft-900 rounded-lg py-3 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
                        variant="unstyled"
                        label="Job Title"
                        placeholder="Software Engineer"
                    />
                    <TextInput
                        className="bg-mine-shaft-900 rounded-lg py-3 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
                        variant="unstyled"
                        label="Job Type"
                        placeholder="Full Time"
                    />
                    <button className="flex items-center justify-center h-16 w-16 rounded-lg py-2 bg-bright-sun-400 text-mine-shaft-100 hover:bg-amber-500 cursor-pointer">
                        <IconSearch className="h-[85%] w-[85%]" />
                    </button>

                </div>
            </div>
            <div className="flex items-center justify-center w-[55%] ">
                <div className="w-[30rem] relative">
                    <img src="Boy.png" alt="Dream Job Image" />
                    <div className="absolute -right-10 top-[50%] w-fit border-bright-sun-400 border rounded-lg p-2  backdrop-blur-md">
                        <div className="text-center text-mine-shaft-100 mb-1 text-sm">10k+ got jobs</div>
                        <Avatar.Group>
                            <Avatar src="avatar.png" />
                            <Avatar src="avatar-2.png" />
                            <Avatar src="avatar-3.png" />
                            <Avatar>+9K</Avatar>
                        </Avatar.Group>
                    </div>
                    <div className="absolute -left-5 top-[28%] w-fit border-bright-sun-400 border rounded-lg p-2  backdrop-blur-md flex flex-col gap-3">
                        <div className="flex gap-2 items-center">
                            <div className="w-10 h-10 p-1 bg-mine-shaft-900 rounded-lg">
                               <img src="Google.png" alt="google" />
                            </div>
                            <div className="text-sm text-mine-shaft-100">
                                <div>Software Engeneer</div>
                                <div className="text-mine-shaft-200 text-xs">New York</div>
                            </div>
                        </div>
                        <div className="flex gap-2 justify-around text-mine-shaft-200 text-xs">
                            <span>1 Day ago</span>
                            <span>120 Applicants</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DreamJobs
