import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"



interface IProjectCard {
    id: number;
    title: string;
    image: string;
    class: string;
}


const featureCard = {
    title: "Helping Blind & Leprosy Patients",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    image: "/image-1.png",
};

const projectCards: IProjectCard[] = [
    {
        id: 1,
        title: "Blood donation & medical camps",
        image: "/image-2.png",
        class: "w-full lg:w-[410px]",
    },
    {
        id: 2,
        title: "Food Distribution",
        image: "/image-3.png",
        class: "w-full lg:w-[679px]",
    },
    {
        id: 3,
        title: "Old age home",
        image: "/image-4.png",
        class: "w-full lg:w-[679px]",
    },
    {
        id: 4,
        title: "Helping underprivileged",
        image: "/image-5.png",
        class: "w-full lg:w-[410px]",
    },
];



function Works() {
    return (
        <>
            <div className="flex flex-col w-full max-w-[1161px] items-start gap-10 md:gap-20 px-4 md:px-6 lg:px-8 mx-auto">
                <h1 className="self-stretch font-medium text-[#0c0c0c] text-4xl md:text-5xl lg:text-[70px] leading-tight lg:leading-[89px]">
                    Our Works
                </h1>

                <div className="flex flex-col w-full items-center gap-6 md:gap-10">
                    {/* Featured Project Card */}
                    <Card className="w-full h-auto md:h-[441px] bg-[#fff0f6] rounded-[25px] overflow-hidden border-none relative">
                        <CardContent className="p-0 flex flex-col md:flex-row h-full">
                            <div className="relative w-full md:w-[633px] h-[300px] md:h-full">
                                <img
                                    className="absolute w-full h-full object-cover"
                                    alt="Helping blind and leprosy patients"
                                    src={featureCard.image}
                                />
                            </div>
                            <div className="flex flex-col w-full md:w-[345px] items-start gap-6 md:gap-10 p-6 md:p-[60px]">
                                <div className="flex flex-col items-start gap-4 md:gap-5 w-full">
                                    <h2 className="font-semibold text-[#2d2d2d] text-2xl md:text-[34px] leading-tight md:leading-[44px]">
                                        {featureCard.title}
                                    </h2>
                                    <p className="font-normal text-black text-base md:text-xl leading-relaxed md:leading-7">
                                        {featureCard.description}
                                    </p>
                                </div>
                                <Button className="w-[135px] h-11 bg-[#f78c00] rounded-[50px] hover:bg-[#e07b00] text-white font-semibold text-[15px]">
                                    Contribute
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Project Cards Grid */}
                    <div className="flex flex-col w-full max-w-[1129px] gap-6 md:gap-10">
                        {/* First row */}
                        <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-10">
                            <ProjectCard project={projectCards[0]} />
                            <ProjectCard project={projectCards[1]} />
                        </div>

                        {/* Second row */}
                        <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-10">
                            <ProjectCard project={projectCards[2]} />
                            <ProjectCard project={projectCards[3]} />
                        </div>
                    </div>




                </div>
            </div>


        </>
    );
}

export default Works;

/* Project Card Component */
const ProjectCard = ({ project }: { project: IProjectCard }) => {
    return (
        <Card className={`${project.class} h-auto md:h-[494px] border-none`}>
            <CardContent className="p-0">
                <div className="w-full h-[250px] md:h-[414px] bg-[#fff0f6] rounded-[30px] relative">
                    <img
                        className="absolute w-[calc(100%-30px)] h-[calc(100%-30px)] top-[15px] left-[15px] object-cover rounded-[20px]"
                        alt={project.title}
                        src={project.image}
                    />
                </div>
                <div className="w-full md:w-[324px] h-auto md:h-20 mx-auto bg-[#fff0f6] rounded-b-[30px] p-4 md:p-0">
                    <div className="w-full text-xl font-semibold text-center text-[#2d2d2d]">
                        {project.title}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};





