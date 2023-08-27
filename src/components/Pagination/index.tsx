import PaginationDomain from "@/services/pagination/types/PaginationDomain";
import { Button, ButtonGroup, Flex, Icon, Text } from "@chakra-ui/react";
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
                <Button
                    onClick={prevPage}
                    isDisabled={pagination.currentPage === 1}
                >
                    <Icon as={ChevronLeft} />
                </Button>

                {paginationLinks.map((link, index) => (
                    <Button
                        key={index}
                        color="brand.white"
                        bg="brand.green"
                        variant={link.active ? "solid" : "ghost"}
                        isDisabled={Number.isNaN(Number(link.label))}
                        onClick={() => setPage(Number(link.label))}
                    >
                        {link.label}
                    </Button>
                ))}

                <Button
                    isDisabled={pagination.currentPage === pagination.lastPage}
                    onClick={nextPage}
                >
                    <Icon as={ChevronRight} />
                </Button>
            </ButtonGroup>
        </>
    );
}
