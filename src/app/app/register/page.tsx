"use client";

import FormControl from "@/components/FormControl";
import Logo from "@/components/Logo";
import registerZodSchema, {
    RegisterZodSchema,
} from "@/services/app/domain/auth/schemas/RegisterZodSchema";
import AuthService from "@/services/app/domain/auth/services/AuthService";
import {
    Box,
    Button,
    Flex,
    Heading,
    Icon,
    Input,
    InputGroup,
    InputLeftAddon,
    Stack,
    Text,
    useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { ChevronLeft, Lock, Mail, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function RegisterPage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
    } = useForm<RegisterZodSchema>({
        resolver: zodResolver(registerZodSchema),
    });

    const router = useRouter();

    const toast = useToast();

    async function submitForm(data: RegisterZodSchema) {
        try {
            await AuthService.register(data);

            toast({
                title: "Registro feito com sucesso!",
                description:
                    "Você será redirecionado à página inicial da aplicação",
                status: "success",
                position: "top-right",
            });

            router.push("/app/platform/home");
        } catch (e) {
            if (e instanceof AxiosError && e.response?.status === 422) {
                if (e.response?.data.errors.email) {
                    setError("email", {
                        message: e.response?.data.errors.email[0],
                    });
                }

                if (e.response?.data.errors.name) {
                    setError("name", {
                        message: e.response?.data.errors.name[0],
                    });
                }

                if (e.response?.data.errors.password) {
                    setError("password", {
                        message: e.response?.data.errors.password[0],
                    });
                }
            } else {
                toast({
                    title: "Não foi possível criar o usuário.",
                    description:
                        "Ocorreu um erro durante a criação do usuário, por favor tente novamente. Caso o erro persista, entre em contato com a equipe de suporte",
                    status: "error",
                    position: "top-right",
                });
            }
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
                    Registrar
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
                        <FormControl error={errors.name?.message}>
                            <InputGroup>
                                <InputLeftAddon>
                                    <Icon as={User} w="1.25rem" />
                                </InputLeftAddon>
                                <Input
                                    placeholder="Nome"
                                    type="text"
                                    {...register("name")}
                                />
                            </InputGroup>
                        </FormControl>

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

                        <FormControl error={errors.confirmPassword?.message}>
                            <InputGroup>
                                <InputLeftAddon>
                                    <Icon as={Lock} w="1.25rem" />
                                </InputLeftAddon>
                                <Input
                                    placeholder="Confirme sua senha"
                                    type="password"
                                    {...register("confirmPassword")}
                                />
                            </InputGroup>
                        </FormControl>
                    </Stack>

                    <Box w="full">
                        <Button
                            h="16"
                            w="full"
                            size="lg"
                            type="submit"
                            bg="brand.green"
                            color="brand.white"
                            fontSize="1.5rem"
                            isLoading={isSubmitting}
                        >
                            Criar conta
                        </Button>

                        <Text
                            as={Link}
                            href="/app"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            fontSize="lg"
                            mt="2"
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
