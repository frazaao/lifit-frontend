export default interface PaginationPersistence<T> {
    data: T;
    current_page: number;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: PaginationLinks[];
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

interface PaginationLinks {
    url: string | null;
    label: string;
    active: boolean;
}
