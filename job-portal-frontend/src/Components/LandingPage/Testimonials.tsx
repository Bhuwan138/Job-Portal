import {Carousel} from "@mantine/carousel";
import {IconArrowLeft, IconArrowRight} from "@tabler/icons-react";
import { testimonials} from "../../Data/Data.tsx";
import {Avatar, Rating} from "@mantine/core";

const Testimonials = () => {
    return (
        <div className="mt-20 pb-5">
            <div className="text-4xl text-center mb-10 font-semibold text-mine-shaft-100"> What <span
                className={"text-bright-sun-400"}>User</span> says about us?
            </div>

            <Carousel
                slideSize="35%"
                slideGap="lg"
                controlSize={32}
                className={"focus-visible:[&_button]:!outline-none [&_button]:bg-bright-sun-400 [&_button]:border-none [&_button]:hover:opacity-75 [&_button]:opacity-0 hover:[&_button]:opacity-100"}
                nextControlIcon={<IconArrowRight className={"h-8 w-8"}/>}
                previousControlIcon={<IconArrowLeft className={"h-8 w-8"}/>}
                loop>
                {testimonials.map((testimonial, index) => (
                    <Carousel.Slide>
                        <div key={index} className={"flex border rounded-lg gap-2 flex-col p-2"}>
                            <div className={"flex gap-2"}>
                                <div className={""}>
                                    <Avatar src={"avatar.png"} alt={"it's me"} className={"!w-16 !h-16"} />
                                </div>
                                <div className={"flex flex-col gap-2"}>
                                    <div className={"text-mine-shaft-100 text-2xl font-bold"}>{ testimonial.name }</div>
                                    <div>
                                        <Rating value={testimonial.rating} fractions={2} readOnly />;
                                    </div>
                                </div>
                            </div>
                            <div className={"text-xs text-mine-shaft-300"}> {testimonial.description} </div>
                        </div>
                    </Carousel.Slide>
                ))}
            </Carousel>
        </div>
    )
}
export default Testimonials
