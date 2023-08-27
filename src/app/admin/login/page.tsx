"use client";

import FormControl from "@/components/FormControl";
import Logo from "@/components/Logo";
import authZodSchema, {
    AuthZodSchema,
} from "@/services/app/domain/auth/schemas/AuthZodSchema";
import AuthService from "@/services/app/domain/auth/services/AuthService";
import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    Icon,
    Image,
    Input,
    InputGroup,
    InputLeftAddon,
    Stack,
    StackDivider,
    Text,
    useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function AdminLoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
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

            router.push("/admin/dashboard/patients");
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
                w="100vw"
                h="100vh"
                align="center"
                justify="space-between"
                color="brand.heading"
                bg="brand.background"
            >
                <Stack spacing="4" align="center" px="48">
                    <Logo />
                    <Box>
                        <Heading fontSize="2xl" textAlign="center">
                            Login nutricionista
                        </Heading>
                        <Text color="brand.text" textAlign="center">
                            Plataforma gerencial
                        </Text>
                    </Box>

                    <StackDivider />

                    <Stack
                        spacing="8"
                        as="form"
                        onSubmit={handleSubmit(submitForm)}
                    >
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

                        <Button
                            type="submit"
                            bg="brand.green"
                            color="brand.white"
                            size="lg"
                            isLoading={isSubmitting}
                        >
                            Entrar
                        </Button>
                    </Stack>
                </Stack>

                <Image
                    src="/images/patient-profile-header.jpeg"
                    maxH="100%"
                    objectFit="cover"
                    flex="1"
                    alt="Frutas e verduras cortadas em fundo amarelo"
                />
            </Flex>
        </>
    );
}
