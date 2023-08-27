import AuthService from "@/services/app/domain/auth/services/AuthService";
import UserDomain from "@/services/app/domain/users/types/UserDomain";
import { Flex } from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextProps {
    user: UserDomain | null;
}

const AuthContext = createContext({} as AuthContextProps);

interface AuthContextProviderProps {
    children: React.ReactNode;
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<UserDomain | null>(null);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        if (user) {
            return;
        }

        AuthService.me()
            .then((data) => setUser(data))
            .catch(() => {
                if (pathname.includes("admin")) {
                    router.push("/admin/login");
                } else {
                    router.push("/app/login");
                }
            });
    }, []);

    if (!user) {
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

    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
}

export default function useAuth() {
    const { user } = useContext(AuthContext);

    return { user };
}
