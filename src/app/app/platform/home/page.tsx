"use client";

import GamificationWidget from "@/components/GamificationWidget";
import NextAppointment from "@/components/NextAppointment";
import RecipeSuggestion from "@/components/RecipeSuggestion";
import UserHeader from "@/components/UserHeader";
import { Stack } from "@chakra-ui/react";

export default function HomePage() {
    return (
        <>
            <Stack px="3" py="3" spacing="4">
                <UserHeader />
                <RecipeSuggestion />
                <NextAppointment />
                <GamificationWidget
                    title="Registros de refeição hoje"
                    href="/app/platform/registries"
                    value={70}
                    valueLabel="5/7"
                    experienceAmount={300}
                    missingAmount={2}
                />
            </Stack>
        </>
    );
}
