import AuthService from "@/services/app/domain/auth/services/AuthService";
import UserDomain from "@/services/app/domain/users/types/UserDomain";
import { useRouter } from "next/navigation";
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

    const router = useRouter();

    useEffect(() => {
        if (user) {
            return;
        }

        AuthService.me()
            .then((data) => setUser(data))
            .catch(() => {
                router.push("/app/login");
            });
    });

    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
}

export default function useAuth() {
    const { user } = useContext(AuthContext);

    return { user };
}
