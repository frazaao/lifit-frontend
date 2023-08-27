import {
    useSearchParams as useNextSearchParams,
    useRouter,
    usePathname,
} from "next/navigation";

type UseSearchParamsProps<T> = T;

export default function useSearchParams<T = { [key: string]: any }>(
    initialState: UseSearchParamsProps<T>
) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useNextSearchParams();

    const filters = Array.from(searchParams.entries()).reduce(
        (acc, item) => {
            const [key, value] = item;

            return {
                ...acc,
                [key]: value,
            };
        },
        { ...initialState }
    );

    // TODO: Verify others typings that must be apllied in filters parameter
    const setFilters = (filters: any) => {
        const params = new URLSearchParams();
        Object.keys(filters).forEach((key: string) => {
            if (filters[key] instanceof Date) {
                params.set(key, new Date(filters[key]).toJSON());
            } else if (filters[key as keyof UseSearchParamsProps<T>]) {
                params.set(key, filters[key as keyof UseSearchParamsProps<T>]);
            }
        });

        router.push(`${pathname}?${params}`);
    };

    return { filters, setFilters };
}
