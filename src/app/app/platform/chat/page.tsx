"use client";

import useAuth from "@/hooks/useAuth";
import messageZodSchema, {
    MessageZodSchema,
} from "@/services/app/domain/messages/schemas/MessageZodSchema";
import MessagesService from "@/services/app/domain/messages/services/MessagesService";
import NutritionistProfilesService from "@/services/app/domain/nutritionistProfiles/services/NutritionistProfilesService";
import {
    Avatar,
    Box,
    Card,
    Flex,
    Heading,
    Stack,
    Text,
    Textarea,
    Icon,
    useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { MousePointer2 } from "lucide-react";
import { useForm } from "react-hook-form";

export default function ChatPage() {
    const { user } = useAuth();
    const toast = useToast();

    const { data: messages } = useQuery({
        queryFn: MessagesService.list,
        queryKey: ["ListMessages"],
        refetchInterval: 5000,
    });

    const { data: myNutritionist } = useQuery({
        queryFn: NutritionistProfilesService.findMyNutritionist,
        queryKey: ["NutritionistProfileFindMy"],
    });

    const { register, handleSubmit, setValue } = useForm<MessageZodSchema>({
        resolver: zodResolver(messageZodSchema),
    });

    async function submitMessage(values: MessageZodSchema) {
        try {
            await MessagesService.create(values, myNutritionist?.user?.id!);

            setValue("content", "");
        } catch {
            toast({
                title: "Ocorreu um erro ao enviar a mensagem",
                description:
                    "Verifique sua conexão e tente novamente, caso o erro persista, entre em contato com o suporte",
                status: "error",
                position: "top-right",
            });
        }
    }

    return (
        <Stack spacing="0" h="100%" maxH="100%">
            <Flex px="4" py="2" align="center" gap="2">
                <Avatar
                    name={myNutritionist?.user?.name}
                    src={myNutritionist?.user?.avatar}
                    bg="brand.green"
                    color="brand.white"
                    size="sm"
                />
                <Stack spacing="0">
                    <Heading fontSize="md">
                        {myNutritionist?.user?.name}
                    </Heading>
                    <Text fontSize="xs" color="brand.text">
                        Seu médico
                    </Text>
                </Stack>
            </Flex>
            <Stack
                px="6"
                py="2"
                direction="column-reverse"
                bg="white"
                boxShadow="base"
                overflowY="auto"
                flex="1"
            >
                {messages?.map((message) => (
                    <Card
                        key={message.id}
                        maxW="90%"
                        color="white"
                        px="4"
                        py="2"
                        alignSelf={
                            user?.id === message.senderId
                                ? "flex-end"
                                : "flex-start"
                        }
                        bg={
                            user?.id === message.senderId
                                ? "brand.green"
                                : "brand.heading"
                        }
                        borderRadius={
                            user?.id === message.senderId
                                ? ".75rem .75rem 0 .75rem"
                                : "0 .75rem .75rem .75rem"
                        }
                    >
                        <Box>
                            <Text>{message.content}</Text>
                        </Box>
                    </Card>
                ))}
            </Stack>

            <Flex
                bg="white"
                pt="2"
                px="6"
                align="stretch"
                pb="4"
                as="form"
                onSubmit={handleSubmit(submitMessage)}
            >
                <Textarea
                    bg="white"
                    resize="none"
                    rounded=".5rem 0 0 .5rem"
                    placeholder="Envie uma mensagem"
                    rows={4}
                    height="60px"
                    {...register("content")}
                />
                <Flex
                    as="button"
                    type="submit"
                    h="100%"
                    minW="60px"
                    minH="60px"
                    bg="brand.green"
                    color="brand.text"
                    align="center"
                    justify="center"
                    rounded="0 .5rem .5rem 0"
                >
                    <Icon
                        as={MousePointer2}
                        fontSize="3xl"
                        transform="rotateY(180deg)"
                    />
                </Flex>
            </Flex>
        </Stack>
    );
}
