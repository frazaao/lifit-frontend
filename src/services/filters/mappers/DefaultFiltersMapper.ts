import DefaultFiltersDomain from "../types/DefaultFiltersDomain";
import DefaultFiltersPersistence from "../types/DefaultFiltersPersistence";

class DefaultFiltersMapper {
    toDomain(
        filters: DefaultFiltersPersistence<any>
    ): DefaultFiltersDomain<any> {
        return {
            columnOrder: filters.column_order,
            order: filters.order,
            page: filters.page,
            perPage: filters.per_page,
        };
    }

    toPersistence(
        filters: DefaultFiltersDomain<any>
    ): DefaultFiltersPersistence<any> {
        return {
            column_order: filters.columnOrder,
            order: filters.order,
            page: filters.page,
            per_page: filters.perPage,
        };
    }
}

export default new DefaultFiltersMapper();
