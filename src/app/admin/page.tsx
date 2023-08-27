"use client";

import AuthService from "@/services/app/domain/auth/services/AuthService";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

export default function AdminPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    const verifyIfUserIsLogged = useCallback(async () => {
        try {
            const me = await AuthService.me();

            if (me) {
                router.push("/admin/dashboard");
            }
        } catch {
            setIsLoading(false);
            return;
        }
    }, []);

    useEffect(() => {
        verifyIfUserIsLogged();
    }, [verifyIfUserIsLogged]);

    if (isLoading) {
        return (
            <Flex w="100vw" h="100vh" align="center" justify="center">
                <Player
                    autoplay
                    loop
                    src="/animations/loading/fruits-loading.json"
                    style={{ width: "200px" }}
                />
            </Flex>
        );
    }

    return <></>;
}
