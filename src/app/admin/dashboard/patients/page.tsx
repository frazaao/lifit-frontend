"use client";

import UsersService from "@/services/app/domain/users/services/UsersService";
import { Avatar, Box, Image } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

export default function PatientsPage() {
    const { data, isLoading } = useQuery({
        queryFn: () => UsersService.list(),
        queryKey: ["ListUsers"],
    });

    return (
        <>
            {data?.map((user) => (
                <Box key={user.id}>
                    <Avatar src={user.avatar} name={user.name} />
                </Box>
            ))}
        </>
    );
}
