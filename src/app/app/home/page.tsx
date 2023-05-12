"use client";

import BottomMenu from "@/components/BottomMenu";
import { Box } from "@chakra-ui/react";

export default function HomePage() {
    return (
        <>
            <h1>Home page</h1>
            <Box w="full" position="fixed" bottom="0" left="0" right="0">
                <BottomMenu />
            </Box>
        </>
    );
}
