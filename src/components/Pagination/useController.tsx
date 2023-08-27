import PaginationDomain from "@/services/pagination/types/PaginationDomain";

interface PaginationProps<T> {
    pagination: PaginationDomain<T>;
    onSetPage?: (page: number) => void;
}

export default function useController<T = null>({
    pagination,
    onSetPage = () => {},
}: PaginationProps<T>) {
    const paginationLinks = pagination.links.slice(1).slice(0, -1);

    function prevPage() {
        onSetPage(pagination.currentPage - 1);
    }

    function nextPage() {
        onSetPage(pagination.currentPage + 1);
    }

    function setPage(pageNumber: number) {
        onSetPage(pageNumber);
    }

    return { paginationLinks, prevPage, nextPage, setPage };
}
