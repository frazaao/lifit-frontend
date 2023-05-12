"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
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
            <Box w="full" data-testid="ReceptionSlider">
                <Flex
                    overflowY="scroll"
                    className="scroll-mandatory without-scrollbar"
                    ref={carouselWrapper}
                    onScroll={() =>
                        handleScroll(carouselWrapper.current?.scrollLeft)
                    }
                >
                    {items.map((item, index) => (
                        <Flex
                            key={item.title}
                            w="100%"
                            flexShrink="0"
                            direction="column"
                            align="center"
                            scrollSnapAlign="center"
                        >
                            <img src={item.image} alt={item.title} />

                            <Heading
                                color="gray.900"
                                fontWeight="semibold"
                                fontSize="2xl"
                                textAlign="center"
                                mb="4"
                                mt="6"
                            >
                                {item.title}
                            </Heading>

                            <Text
                                textAlign="center"
                                color="gray.500"
                                fontSize="lg"
                                mb="6"
                            >
                                {item.description}
                            </Text>
                        </Flex>
                    ))}
                </Flex>
                <Flex gap="1" justify="center" align="center">
                    {items.map((_, index) => (
                        <Box
                            key={index}
                            w={activeIndex === index ? "8" : "5"}
                            h="5"
                            bg={
                                activeIndex === index
                                    ? "brand.purple"
                                    : "purple.200"
                            }
                            borderRadius="3xl"
                            transition="all .1s ease-in-out"
                        />
                    ))}
                </Flex>
            </Box>
        </>
    );
}
