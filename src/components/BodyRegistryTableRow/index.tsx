import useController from "./useController";
import { Calendar, Gauge, MoveVertical, PersonStanding } from "lucide-react";
import { Button, Flex, Icon, Td, Text, Tr } from "@chakra-ui/react";
import BodyRegistryDomain from "@/services/app/domain/bodyRegistries/types/BodyRegistryDomain";
import Link from "next/link";

interface BodyRegistryTableRowProps {
    registry: BodyRegistryDomain;
    href?: string;
}

export default function BodyRegistryTableRow({
    registry,
    href = "#",
}: BodyRegistryTableRowProps) {
    return (
        <>
            <Tr
                data-testid="BodyRegistryTableRow"
                rounded="lg"
                border="1px solid"
                borderColor="brand.background"
            >
                <Td
                    border="inherit"
                    rounded="inherit"
                    borderRight="none"
                    borderRightRadius="none"
                >
                    #{registry.id}
                </Td>
                <Td border="inherit" borderRight="none" borderLeft="none">
                    <Flex align="center" gap="1">
                        <Icon as={Calendar} />
                        <Text>
                            {new Date(
                                registry.registryDate || ""
                            ).toLocaleDateString("pt-BR")}
                        </Text>
                    </Flex>
                </Td>

                <Td border="inherit" borderRight="none" borderLeft="none">
                    <Flex align="center" gap="1">
                        <Icon as={PersonStanding} />
                        <Text>{registry.bodyMassIndex?.toFixed(1)}</Text>
                    </Flex>
                </Td>

                <Td border="inherit" borderRight="none" borderLeft="none">
                    <Flex align="center" gap="1">
                        <Icon as={MoveVertical} />
                        <Text>{registry.height / 100}m</Text>
                    </Flex>
                </Td>

                <Td border="inherit" borderRight="none" borderLeft="none">
                    <Flex align="center" gap="1">
                        <Icon as={Gauge} />
                        <Text>{registry.weight / 100}kg</Text>
                    </Flex>
                </Td>

                <Td
                    border="inherit"
                    borderRadius="inherit"
                    borderLeft="none"
                    borderLeftRadius="none"
                >
                    <Button
                        color="brand.white"
                        bg="brand.purple"
                        as={Link}
                        href={href}
                        _hover={{
                            filter: "brightness(0.9)",
                        }}
                    >
                        Ver registro
                    </Button>
                </Td>
            </Tr>
        </>
    );
}
