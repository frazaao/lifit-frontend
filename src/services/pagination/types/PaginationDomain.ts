export default interface PaginationDomain<T> {
    data: T;
    currentPage: number;
    firstPageUrl: string;
    from: number;
    lastPage: number;
    lastPageUrl: string;
    links: PaginationLinks[];
    nextPageUrl: string;
    path: string;
    perPage: number;
    prevPageUrl: string | null;
    to: number;
    total: number;
}

interface PaginationLinks {
    url: string | null;
    label: string;
    active: boolean;
}
