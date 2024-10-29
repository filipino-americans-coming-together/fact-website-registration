import WorkshopSelect from "@/components/ui/WorkshopSelect";

const SESSION_NUMBERS = [1, 2, 3];

export default function FacilitatorRow({
    name,
    facilitatedSessions,
    registrations,
    setState,
}: {
    name: string;
    facilitatedSessions: { title: string; session: number }[];
    registrations: {
        facilitator_name: string;
        workshop: number;
        session: number;
    }[];
    setState(state: Object): void;
}) {
    return (
        <div className="grid grid-cols-1 gap-2 pb-6 md:pb-2 border-b border-gray-300 md:grid-cols-4 items-center">
            <div>{name}</div>
            {SESSION_NUMBERS.map((sessionNum) => {
                const facilitatedSession = facilitatedSessions.find(
                    (session) => session.session === sessionNum
                );
                if (facilitatedSession) {
                    return (
                        <div
                            key={sessionNum}
                            className="text-left text-slate-600"
                        >
                            <div>Session {sessionNum} Workshop</div>
                            <div key={sessionNum}>
                                {facilitatedSession.title}
                            </div>
                        </div>
                    );
                } else {
                    return (
                        <div key={sessionNum}>
                            <WorkshopSelect
                                session={sessionNum}
                                id={`${name}|${sessionNum.toString()}`}
                                setState={setState}
                                defaultValue={
                                    registrations.filter(
                                        (registration) =>
                                            registration.session === sessionNum
                                    )[0]
                                        ? registrations
                                              .filter(
                                                  (registration) =>
                                                      registration.session ===
                                                      sessionNum
                                              )[0]
                                              .workshop.toString()
                                        : undefined
                                }
                                required={false}
                            />
                        </div>
                    );
                }
            })}
        </div>
    );
}
