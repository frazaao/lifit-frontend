"use client";

import PatientProfileHeader from "@/components/PatientProfileHeader";
import PatientProfileTabs from "@/components/PatientProfileTabs";
import PatientProfilesService from "@/services/app/domain/patientProfiles/services/PatientProfilesService";
import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

interface PatientProfileLayoutProps {
    children: React.ReactNode;
    params: {
        id: string;
    };
}

export default function PatientProfileLayout({
    children,
    params,
}: PatientProfileLayoutProps) {
    const { data: patient, isLoading } = useQuery({
        queryFn: () => PatientProfilesService.find(params.id),
        queryKey: ["PatientProfilesService.find", params.id],
    });

    if (isLoading) {
        return (
            <>
                <Flex
                    w="full"
                    h="full"
                    flex="1"
                    align="center"
                    justify="center"
                >
                    <Spinner />
                </Flex>
            </>
        );
    }

    return (
        <>
            <Box w="full" h="full" flex="1">
                <PatientProfileHeader patientProfile={patient} />

                <PatientProfileTabs id={params.id} />

                {children}
            </Box>
        </>
    );
}
