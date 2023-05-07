"use client";

import FormControl from "@/components/FormControl";
import Input from "@/components/Input";
import Logo from "@/components/Logo";
import { Mail, Lock, ChevronLeft } from "lucide-react";
import Button from "@/components/Button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import AuthService from "@/services/app/domain/auth/services/AuthService";
import authZodSchema, {
    AuthZodSchema,
} from "@/services/app/domain/auth/schemas/AuthZodSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AuthZodSchema>({
        resolver: zodResolver(authZodSchema),
    });

    function submitForm(data: AuthZodSchema) {
        AuthService.login(data);
    }

    return (
        <>
            <main className="flex flex-col justify-center items-center w-full h-screen py-20 px-11">
                <Logo />

                <h1 className="text-[2.5rem] font-bold text-green-primary mt-14">
                    Fazer login
                </h1>

                <form
                    onSubmit={handleSubmit(submitForm)}
                    className="w-full flex flex-col justify-between flex-1 gap-6 mt-8"
                >
                    <div className="flex flex-col gap-6">
                        <FormControl error={errors.email?.message} hint="Teste">
                            <Input
                                leftIcon={<Mail className="w-5" />}
                                placeholder="Email"
                                type="text"
                                {...register("email")}
                            />
                        </FormControl>

                        <FormControl error={errors.password?.message}>
                            <Input
                                leftIcon={<Lock className="w-5" />}
                                placeholder="Senha"
                                type="password"
                                {...register("password")}
                            />
                        </FormControl>
                    </div>

                    <div className="w-full">
                        <Button size="lg" className="h-16" type="submit">
                            Entrar
                        </Button>

                        <Link
                            href="/app"
                            className="flex items-center justify-center text-lg mt-2"
                        >
                            <ChevronLeft />
                            Voltar
                        </Link>
                    </div>
                </form>
            </main>
        </>
    );
}
