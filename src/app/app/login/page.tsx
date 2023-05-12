"use client";

import FormControl from "@/components/FormControl";
import Logo from "@/components/Logo";
import { Mail, Lock, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import AuthService from "@/services/app/domain/auth/services/AuthService";
import authZodSchema, {
    AuthZodSchema,
} from "@/services/app/domain/auth/schemas/AuthZodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Flex,
    Heading,
    Stack,
    Icon,
    Text,
    Box,
    useToast,
    Input,
    InputGroup,
    InputLeftAddon,
    Button,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AuthZodSchema>({
        resolver: zodResolver(authZodSchema),
    });

    const toast = useToast();

    const router = useRouter();

    async function submitForm(data: AuthZodSchema) {
        try {
            await AuthService.login(data);

            toast({
                status: "success",
                title: "Login realizado com sucesso",
                position: "top-right",
                description:
                    "Você será redirecionado para a tela inicial da aplicação",
            });

            router.push("/app/home");
        } catch {
            toast({
                status: "error",
                title: "Email ou senha incorreta",
                position: "top-right",
                description:
                    "Verifique o email e senha digitados e tente novamente",
            });
        }
    }

    return (
        <>
            <Flex
                align="center"
                justify="center"
                w="full"
                h="100vh"
                py="20"
                px="10"
                direction="column"
            >
                <Logo />

                <Heading
                    fontSize="2.5rem"
                    fontWeight="bold"
                    color="brand.green"
                    mt="14"
                >
                    Fazer login
                </Heading>

                <Flex
                    as="form"
                    direction="column"
                    justify="space-between"
                    flex="1"
                    gap="6"
                    mt="8"
                    w="full"
                    onSubmit={handleSubmit(submitForm)}
                >
                    <Stack spacing="6">
                        <FormControl error={errors.email?.message}>
                            <InputGroup>
                                <InputLeftAddon>
                                    <Icon as={Mail} w="1.25rem" />
                                </InputLeftAddon>
                                <Input
                                    placeholder="Email"
                                    type="text"
                                    {...register("email")}
                                />
                            </InputGroup>
                        </FormControl>

                        <FormControl error={errors.password?.message}>
                            <InputGroup>
                                <InputLeftAddon>
                                    <Icon as={Lock} w="1.25rem" />
                                </InputLeftAddon>
                                <Input
                                    placeholder="Senha"
                                    type="password"
                                    {...register("password")}
                                />
                            </InputGroup>
                        </FormControl>
                    </Stack>

                    <Box w="full">
                        <Button
                            h="16"
                            w="full"
                            size="lg"
                            bg="brand.green"
                            color="brand.white"
                            fontSize="1.5rem"
                            type="submit"
                        >
                            Entrar
                        </Button>

                        <Text
                            as={Link}
                            href="/app"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            fontSize="lg"
                            mt="2"
                            color="brand.heading"
                        >
                            <ChevronLeft />
                            Voltar
                        </Text>
                    </Box>
                </Flex>
            </Flex>
        </>
    );
}
