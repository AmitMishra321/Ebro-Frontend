import { Card, CardContent } from "@/components/ui/card";



interface IStoryCard {
    id: number;
    title: string;
    description: string;
    image: string;

}

function Stories() {
  
    const stories: IStoryCard[] = [
        {
            id: 1,
            title: "A Journey Of Hope And Support",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            image: "/image-6.png",

        },
        {
            id: 2,
            title: "A Journey Of Hope And Support",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            image: "/image-7.png",

        },
    ];

    return (
        <section className="w-full mt-6" >
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-[100px]">
                <div className="flex flex-col lg:flex-row lg:items-start lg:gap-[59px]">
                    {/* Left content - Heading and description */}
                    <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 lg:w-[458px] lg:p-10 rounded-[25px]">
                        <h2 className="text-4xl sm:text-5xl lg:text-[70px] font-medium text-[#2d2d2d] font-['Montserrat'] leading-tight">
                            Stories Of
                            Change
                        </h2>

                        <p className="text-lg sm:text-xl lg:text-2xl text-[#2d2d2d] font-['Inter'] leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu.
                        </p>
                    </div>

                    {/* Right content - Story cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-[50px]">
                        {stories.map((story) => (
                            <StoryCard
                               
                                story={story}
                               
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Stories;

/* Story Card Component */
const StoryCard = (
    {story}:{story:IStoryCard}
   ) => {
    return (
        <div 
            className={`relative flex flex-col transition-all duration-500 ease-in-out mt-5 w-full max-w-[313px] `}

        >
            <div className="w-full aspect-[1.11/1] relative">
                <img
                    className="w-full h-full object-cover rounded-none rounded-t-[25px] "
                    alt={story.title}
                    src={story.image}
                />
            </div>

            <Card className="border-none w-full rounded-none rounded-b-[25px] bg-[#e7f4c0] hover:bg-[#82dd7c]">
                <CardContent className="flex flex-col items-start gap-6 p-6">
                    <div className="flex flex-col items-start gap-4 w-full">
                        <h3 className="font-['Montserrat'] font-semibold text-base sm:text-[19px] text-[#2d2d2d] leading-tight">
                            {story.title}
                        </h3>

                        <p className="font-['Montserrat'] font-normal text-sm sm:text-base lg:text-lg text-[#2d2d2d] leading-relaxed">
                            {story.description}
                        </p>
                    </div>

                    <a
                        href="#"
                        className="font-['Montserrat'] font-semibold text-lg sm:text-xl lg:text-2xl text-[#f78c00] leading-normal touch-target-auto"
                    >
                        Read More
                    </a>
                </CardContent>
            </Card>
        </div>
    );
};


