import PaginationPersistence from "../types/PaginationPersistence";
import PaginationDomain from "../types/PaginationDomain";

class PaginationMapper {
    toDomain<T>(paginationData: PaginationPersistence<T>): PaginationDomain<T> {
        return {
            data: paginationData.data,
            currentPage: paginationData.current_page,
            firstPageUrl: paginationData.first_page_url,
            lastPageUrl: paginationData.last_page_url,
            from: paginationData.from,
            lastPage: paginationData.last_page,
            links: paginationData.links,
            nextPageUrl: paginationData.next_page_url,
            path: paginationData.path,
            perPage: paginationData.per_page,
            prevPageUrl: paginationData.prev_page_url,
            to: paginationData.to,
            total: paginationData.total,
        };
    }

    toPersistence<T>(
        paginationData: PaginationDomain<T>
    ): PaginationPersistence<T> {
        return {
            data: paginationData.data,
            current_page: paginationData.currentPage,
            first_page_url: paginationData.firstPageUrl,
            last_page_url: paginationData.lastPageUrl,
            from: paginationData.from,
            last_page: paginationData.lastPage,
            links: paginationData.links,
            next_page_url: paginationData.nextPageUrl,
            path: paginationData.path,
            per_page: paginationData.perPage,
            prev_page_url: paginationData.prevPageUrl,
            to: paginationData.to,
            total: paginationData.total,
        };
    }
}

export default new PaginationMapper();
