import { WorkshopData, WorkshopDetails } from "@/util/types";
import { useWorkshops } from "@/hooks/api/useWorkshops";
import SearchableSelect from "./SearchableSelect";
import useManyWorkshopDetails from "@/hooks/api/useManyWorkshopDetails";

interface WorkshopSelectProps {
    id: string;
    session: number;
    setState: (state: Object) => void;
    defaultValue?: string;
    required?: boolean;
}

/**
 * Workshop selection menu
 * @param id html id for select
 * @param session session number
 * @param setState function to call on input change
 * @param defaultValue id of workshop to select by default
 * @returns WorkshopSelect component
 */
function WorkshopSelect({
    id,
    session,
    setState,
    defaultValue,
    required = true,
}: WorkshopSelectProps) {
    const { workshops } = useWorkshops();
    const { data: workshopDetails } = useManyWorkshopDetails(
        workshops?.map((workshops) => workshops.id) || []
    );

    return (
        workshopDetails &&
        workshopDetails.length > 0 && (
            <SearchableSelect
                id={id}
                label={`Session ${session}`}
                placeholder="Search for workshops..."
                setState={setState}
                defaultValue={
                    defaultValue
                    // ? defaultValue
                    // : workshops
                    //       .filter(
                    //           (workshop: WorkshopData) =>
                    //               workshop.session == session
                    //       )[0]
                    //       .id.toString()
                }
                required={required}
                options={workshopDetails
                    .filter(
                        (workshop: WorkshopDetails) =>
                            workshop.workshop.session == session
                    )
                    .map((workshop: WorkshopDetails) => {
                        return {
                            label: workshop.workshop.title,
                            value: workshop.workshop.id.toString(),
                            selectable:
                                workshop.registrations <
                                workshop.location.capacity,
                        };
                    })}
            />
        )
    );
}

export default WorkshopSelect;
