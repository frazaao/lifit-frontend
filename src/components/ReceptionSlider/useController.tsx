import { useEffect, useRef, useState } from "react";

export default function useController(data: any) {
    const [activeIndex, setActiveIndex] = useState(0);

    const carouselWrapper = useRef<HTMLDivElement>(null);

    const timeout = useRef<NodeJS.Timeout>();

    function handleScroll(scrollWidth?: number) {
        clearTimeout(timeout.current);
        if (scrollWidth !== undefined && carouselWrapper.current) {
            const scrollPerItem =
                carouselWrapper.current.scrollWidth / data.length;

            const scrollIndex = scrollWidth / scrollPerItem;

            timeout.current = setTimeout(() => {
                setActiveIndex(Math.round(scrollIndex) || 0);
            }, 400);
        }
    }

    useEffect(() => {
        if (carouselWrapper.current) {
            const scrollPerItem =
                carouselWrapper.current.scrollWidth / data.length;

            carouselWrapper.current.scroll({
                left: Math.round(scrollPerItem) * activeIndex,
                behavior: "smooth",
            });
        }
    }, [activeIndex]);

    return { activeIndex, carouselWrapper, handleScroll };
}
