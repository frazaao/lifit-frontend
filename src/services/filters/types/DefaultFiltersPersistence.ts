export default interface DefaultFiltersPersistence<T> {
    page?: number;
    per_page?: number;
    order?: "ASC" | "DESC";
    column_order?: keyof T;
}
