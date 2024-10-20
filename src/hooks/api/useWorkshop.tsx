import { API_URL } from "@/util/constants";
import { LocationData, WorkshopData, WorkshopResponse } from "@/util/types";
import { useQuery } from "@tanstack/react-query";

async function fetchWorkshop({ id }: { id: number }): Promise<{
    workshop: WorkshopData;
    location: LocationData;
}> {
    const response = await fetch(`${API_URL}/workshop/${id}`);

    const json: WorkshopResponse = await response.json();

    if (!response.ok) {
        let message = "Server Error";

        throw new Error(message);
    }

    // format workshop data
    const workshopData = json.workshop[0];

    const formattedWorkshop: WorkshopData = {
        id: workshopData.pk,
        title: workshopData.fields.title,
        description: workshopData.fields.description,
        facilitators: workshopData.fields.facilitators,
        location: workshopData.fields.location,
        session: workshopData.fields.session,
    };

    // format location data
    const locationData = json.location[0];

    const formattedLocation: LocationData = {
        id: locationData.pk,
        room_num: locationData.fields.room_num,
        building: locationData.fields.building,
        capacity: locationData.fields.capacity,
        session: locationData.fields.session,
    };

    return {
        workshop: formattedWorkshop,
        location: formattedLocation,
    };
}

export function useWorkshop({ id }: { id: number }): {
    workshop: { workshop: WorkshopData; location: LocationData } | undefined;
    isLoading: boolean;
    error: Error | null;
} {
    const {
        data: workshop,
        error,
        isLoading,
    } = useQuery({
        queryKey: ["workshops", id],
        queryFn: () => fetchWorkshop({ id: id }),
        retry: 0,
    });

    return { workshop, isLoading, error };
}
