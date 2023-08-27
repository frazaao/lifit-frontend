export default interface DefaultFiltersDomain<T> {
    page?: number;
    perPage?: number;
    order?: "ASC" | "DESC";
    columnOrder?: keyof T;
}
