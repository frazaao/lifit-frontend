"use client";

import GamificationWidget from "@/components/GamificationWidget";
import NextAppointment from "@/components/NextAppointment";
import RecipeSuggestion from "@/components/RecipeSuggestion";
import UserHeader from "@/components/UserHeader";
import AuthService from "@/services/app/domain/auth/services/AuthService";
import { Stack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

export default function HomePage() {
    const { data: userData } = useQuery({
        queryFn: AuthService.me,
        queryKey: ["GetMe"],
    });

    return (
        <>
            <Stack px="3" py="3" spacing="4">
                <UserHeader
                    fullname={userData?.name || ""}
                    avatarUrl={userData?.avatar}
                />

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

                <GamificationWidget
                    title="Registros de refeição hoje"
                    href="/app/platform/registries"
                    value={70}
                    valueLabel="5/7"
                    experienceAmount={300}
                    missingAmount={2}
                />

                <GamificationWidget
                    title="Registros de refeição hoje"
                    href="/app/platform/registries"
                    value={70}
                    valueLabel="5/7"
                    experienceAmount={300}
                    missingAmount={2}
                />

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
