import { API_URL } from "@/util/constants";
import { LocationData, WorkshopData, WorkshopResponse } from "@/util/types";
import { useEffect, useState } from "react";
import LoadingCircle from "../icons/LoadingCircle";

interface WorkshopProps {
    id: number;
}

/**
 * Card for individual workshop
 * @param id workshop
 * @returns WorkshopCard component
 */
export default function WorkshopCard(props: WorkshopProps) {
    const [workshop, setWorkshop] = useState<WorkshopData>();
    const [location, setLocation] = useState<LocationData>();

    // workshop data
    useEffect(() => {
        fetch(`${API_URL}/workshop/${props.id}/`)
            .then((response) => {
                if (response.status === 200) {
                    response.json().then((data: WorkshopResponse) => {
                        // workshop data
                        const workshopData = data.workshop[0];

                        const formattedWorkshop: WorkshopData = {
                            id: workshopData.pk,
                            title: workshopData.fields.title,
                            description: workshopData.fields.description,
                            facilitators: workshopData.fields.facilitators,
                            location: workshopData.fields.location,
                            session: workshopData.fields.session,
                        };

                        setWorkshop(formattedWorkshop);

                        // location data
                        const locationData = data.location[0];

                        const formattedLocation: LocationData = {
                            id: locationData.pk,
                            room_num: locationData.fields.room_num,
                            building: locationData.fields.building,
                            capacity: locationData.fields.capacity,
                            session: locationData.fields.session,
                        };

                        setLocation(formattedLocation);
                    });
                } else {
                    response.text().then((text) => console.log(text));
                }
            })
            .catch((e) => console.log(e));
    }, [props.id]);

    return (
        <>
            {workshop && location ? (
                <div className="bg-highlight-primary text-black text-xs px-8 py-4 m-4 rounded-md w-80 shadow-lg">
                    <div>Session {workshop.session}</div>
                    <div className="text-center">
                        <div>{workshop.title}</div>
                        <div>00:00AM - 00:00AM</div>
                        <div>
                            {location.building} {location.room_num}
                        </div>
                    </div>
                </div>
            ) : (
                <LoadingCircle />
            )}
        </>
    );
}
