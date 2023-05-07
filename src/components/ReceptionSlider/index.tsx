"use client";

import useController from "./useController";

interface Items {
    image: string;
    title: string;
    description: string;
}

interface ReceptionSliderProps {
    items?: Items[];
}

export default function ReceptionSlider({ items = [] }: ReceptionSliderProps) {
    const { activeIndex, carouselWrapper, handleScroll } = useController(items);

    return (
        <>
            <div data-testid="ReceptionSlider" className="w-full">
                <div
                    className="flex overflow-y-scroll scroll-mandatory without-scrollbar"
                    ref={carouselWrapper}
                    onScroll={() =>
                        handleScroll(carouselWrapper.current?.scrollLeft)
                    }
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="w-[100%] flex-shrink-0 flex flex-col items-center scroll-align-center"
                        >
                            <img src={item.image} alt={item.title} />

                            <h3 className="text-text-heading font-semibold text-2xl text-center mb-4 mt-6">
                                {item.title}
                            </h3>

                            <p className="text-center text-text-default text-lg mb-6">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex gap-1 justify-center items-center">
                    {items.map((_, index) => (
                        <div
                            key={index}
                            className={
                                activeIndex === index
                                    ? `bg-purple-primary w-8 h-5 rounded-3xl transition-all`
                                    : `bg-purple-primary/30 w-5 h-5 rounded-3xl transition-all`
                            }
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
