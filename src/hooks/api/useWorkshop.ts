import { API_URL } from "@/util/constants";
import {
    LocationData,
    ResponseData,
    WorkshopData,
    WorkshopResponse,
} from "@/util/types";
import { useQuery } from "@tanstack/react-query";

export async function fetchWorkshop({ id }: { id: number }): Promise<{
    workshop: WorkshopData;
    location: LocationData;
    registrations: number;
    facilitator_assistants?: { name: string; contact: string }[];
}> {
    const response = await fetch(`${API_URL}/registration/workshop/${id}`, {
        credentials: "include",
    });

    const json = await response.json();

    if (!response.ok) {
        let message = "Server error, please try again later";

        if (json.message) {
            message = json.message;
        }

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

    const formattedAssistants = json.facilitator_assistants?.map(
        (fa: ResponseData<{ name: string; contact: string }>) => {
            return { name: fa.fields.name, contact: fa.fields.contact };
        }
    );

    return {
        workshop: formattedWorkshop,
        location: formattedLocation,
        registrations: json.registrations,
        facilitator_assistants: formattedAssistants,
    };
}

export function useWorkshop({ id }: { id: number }): {
    workshop:
        | {
              workshop: WorkshopData;
              location: LocationData;
              registrations: number;
              facilitator_assistants?: { name: string; contact: string }[];
          }
        | undefined;
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
