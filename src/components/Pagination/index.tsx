import PaginationDomain from "@/services/pagination/types/PaginationDomain";
import {
    Button,
    ButtonGroup,
    Flex,
    Icon,
    IconButton,
    Text,
} from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useController from "./useController";

interface PaginationProps<T> {
    pagination: PaginationDomain<T>;
    onSetPage?: (page: number) => void;
}

export default function Pagination<T = null>({
    pagination,
    onSetPage = () => {},
}: PaginationProps<T>) {
    const { paginationLinks, nextPage, prevPage, setPage } = useController({
        pagination,
        onSetPage,
    });

    return (
        <>
            <ButtonGroup data-testid="Pagination">
                <IconButton
                    aria-label="Página anterior"
                    onClick={prevPage}
                    isDisabled={pagination.currentPage === 1}
                >
                    <Icon as={ChevronLeft} />
                </IconButton>

                {paginationLinks.map((link, index) => (
                    <Button
                        key={index}
                        {...(link.active && {
                            bg: "brand.green",
                            color: "brand.white",
                        })}
                        aria-label={`Página ${link.label}`}
                        isDisabled={Number.isNaN(Number(link.label))}
                        onClick={() => setPage(Number(link.label))}
                    >
                        {link.label}
                    </Button>
                ))}

                <IconButton
                    aria-label="Página posterior"
                    isDisabled={pagination.currentPage === pagination.lastPage}
                    onClick={nextPage}
                >
                    <Icon as={ChevronRight} />
                </IconButton>
            </ButtonGroup>
        </>
    );
}
