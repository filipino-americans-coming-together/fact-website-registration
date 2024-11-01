import { API_URL } from "@/util/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { error } from "console";

export interface RegisterFacilitatorsProps {
    registrations: {
        facilitator_name: string;
        workshops: (number | undefined)[];
    }[];
}

async function fetchRegisterFacilitators(
    props: RegisterFacilitatorsProps
): Promise<void> {
    // for each facilitator make request

    const responses = await Promise.all(
        props.registrations.map((facilitator) => {
            return fetch(`${API_URL}/registration/facilitator/register/`, {
                credentials: "include",
                method: "PUT",
                body: JSON.stringify({
                    facilitator_name: facilitator.facilitator_name,
                    workshops: facilitator.workshops,
                }),
            })
                .then((response) => {
                    return response.json();
                })
                .catch((error) => {
                    throw new Error("Server error, please try again later");
                });
        })
    );

    console.log(responses);
}

export function useRegisterFacilitators() {
    const queryClient = useQueryClient();

    const {
        data,
        error,
        isPending,
        mutate: registerFacilitators,
        isSuccess,
    } = useMutation({
        mutationFn: (props: RegisterFacilitatorsProps) => {
            return fetchRegisterFacilitators(props);
        },

        onSuccess: () =>
            queryClient.refetchQueries({
                queryKey: ["active-profile"],
                type: "active",
            }),
    });

    console.log("isSuccess", isSuccess);

    return { data, error, isPending, registerFacilitators, isSuccess };
}
