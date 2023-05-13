"use client";

import BottomMenu from "@/components/BottomMenu";
import UserHeader from "@/components/UserHeader";
import { Box } from "@chakra-ui/react";

export default function HomePage() {
    return (
        <>
            <Box px="4" py="2">
                <UserHeader />
            </Box>
        </>
    );
}
