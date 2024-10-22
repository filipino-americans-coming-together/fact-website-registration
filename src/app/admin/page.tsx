"use client";
import TextInput from "@/components/ui/TextInput";
import FormContainer from "./components/FormContainer";
import NotificationCard from "./components/NotificationCard";
import { FaTicket, FaTrashCan } from "react-icons/fa6";
import { FaDownload, FaSchool } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";

const NOTIFICATION_PLACEHOLDER = [
    {
        text: "Notification example text for notification card",
        expiration: "October 22, 2024 at 12:45PM",
    },
    {
        text: "Notification example text for notification card",
        expiration: "October 22, 2024 at 12:45PM",
    },
    {
        text: "Notification example text for notification card",
        expiration: "October 22, 2024 at 12:45PM",
    },
];

const TICKET_DATA_PLACEHOLDER = [
    { type: "Bundle", amount: 112 },
    { type: "Variety Show", amount: 39 },
    { type: "Sessions", amount: 16 },
];

export default function Admin() {
    // TODO placeholder
    const isLoggedIn = true;

    const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

    // dashboard
    if (isLoggedIn) {
        return (
            <div className="min-h-screen bg-slate-50 text-black">
                <div className="w-9/12 mx-auto">
                    {/* stats */}
                    <h1 className="text-xl font-bold">At a Glance</h1>
                    <br />
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="bg-gradient-to-r from-lime-100 to-green-100 rounded shadow aspect-[4/3] md:w-[240px] flex items-center justify-center">
                            <div className="flex flex-col gap-2">
                                <div className="text-4xl text-green-400">
                                    <BsPeopleFill />
                                </div>
                                <p className="text-4xl font-bold">234</p>
                                <p>Registered Delegates</p>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded shadow aspect-[4/3] md:w-[240px] flex items-center justify-center">
                            <div className="flex flex-col gap-2">
                                <div className="text-4xl text-rose-400">
                                    <FaTicket />
                                </div>
                                <p className="text-4xl font-bold">93</p>
                                <p>Variety Show Tickets</p>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded shadow aspect-[4/3] md:w-[240px] flex items-center justify-center">
                            <div className="flex flex-col gap-2">
                                <div className="text-4xl text-blue-400">
                                    <FaSchool />
                                </div>
                                <p className="text-4xl font-bold">17</p>
                                <p>Unique Schools</p>
                            </div>
                        </div>
                    </div>

                    <div>Recent Registrations</div>
                    <div>By Ticket</div>
                    <div>Top Workshops</div>
                    <div>Top Schools</div>

                    <br />
                    {/* downloads */}
                    <div>
                        <button className="flex items-center gap-2 hover:underline">
                            Download Delegate Data <FaDownload />
                        </button>

                        <button className="flex items-center gap-2 hover:underline">
                            Download Workshop Locations <FaDownload />
                        </button>
                    </div>

                    <br />
                    {/* notifications */}
                    <h1 className="text-xl font-bold">Notifications</h1>
                    <br />
                    <div className="rounded bg-gray-300 p-6 w-fit">
                        <FormContainer
                            formName="notifications"
                            onSubmit={() => {}}
                            submitText="Save"
                            isLoading={false}
                            errorMessage={undefined}
                        >
                            <div className="flex flex-col gap-2 md:flex-row">
                                <div className="flex flex-col">
                                    <TextInput
                                        label="Message"
                                        id="message"
                                        setState={() => {}}
                                        maxLength={180}
                                        showCharacters
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label>
                                        Expiration{" "}
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        className="py-1 px-2 rounded border w-full min-w-48"
                                        type="datetime-local"
                                        required
                                    />
                                    <p className="text-xs text-right text-gray-500">
                                        {timeZone} Time
                                    </p>
                                </div>
                            </div>
                        </FormContainer>
                        <br />

                        <h2>Active Notifications</h2>
                        <br />
                        <div className="flex flex-col gap-4">
                            {NOTIFICATION_PLACEHOLDER.map(
                                (notification, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <NotificationCard
                                            text={notification.text}
                                            expiration={notification.expiration}
                                        />
                                        <button
                                            className="w-fit hover:text-slate-700"
                                            type="button"
                                            onClick={() => {
                                                confirm(
                                                    "Are you sure you want to delete this notification? This action can not be undone."
                                                );
                                            }}
                                        >
                                            <FaTrashCan />
                                        </button>
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    {/* danger zone */}
                    <h1 className="text-xl font-bold text-red-600">
                        Danger Zone
                    </h1>
                </div>
            </div>
        );
    }

    // login
    return <></>;
}
