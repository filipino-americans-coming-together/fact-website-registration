import { useQueries } from "@tanstack/react-query";
import { fetchWorkshop } from "./useWorkshop";

function combine(results: any[]) {
    return {
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending),
    };
}

export default function useManyWorkshopDetails(ids: number[]) {
    const results = useQueries({
        queries: ids.map((id) => {
            return {
                queryKey: ["workshops", id],
                queryFn: () => fetchWorkshop({ id: id }),
            };
        }),
        combine: combine,
    });

    // wait for all results

    if (results.pending) {
        results.data = [];
    }

    return { data: results.data, isPending: results.pending };
}
