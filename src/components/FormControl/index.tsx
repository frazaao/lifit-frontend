import {
    Flex,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    FormControl as ChakraFormControl,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import useController from "./useController";

interface FormControlProps {
    children: React.ReactElement;
    label?: string;
    hint?: string;
    error?: string;
}

export default function FormControl({
    children,
    label = "",
    hint = "",
    error = "",
}: FormControlProps) {
    const {} = useController();

    return (
        <>
            <Flex
                as={ChakraFormControl}
                direction="column"
                w="full"
                data-testid="FormControl"
                isInvalid={!!error}
            >
                {!!label && (
                    <FormLabel
                        htmlFor={children.props.name}
                        fontSize="sm"
                        mr="0"
                    >
                        {label}
                    </FormLabel>
                )}

                {children}

                {!!hint && <FormHelperText>{hint}</FormHelperText>}

                {!!error && (
                    <FormErrorMessage className="text-red-primary">
                        {error}
                    </FormErrorMessage>
                )}
            </Flex>
        </>
    );
}
