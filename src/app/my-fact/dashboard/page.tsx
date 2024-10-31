"use client";

import UserAgenda from "@/components/formatting/UserAgenda";
import WorkshopCard from "@/components/formatting/WorkshopCard";
import LoadingCircle from "@/components/icons/LoadingCircle";
import Navbar from "@/components/navigation/Navbar";
import InteractiveButton from "@/components/ui/InteractiveButton";
import LinkButton from "@/components/ui/LinkButton";
import { useLogout } from "@/hooks/api/useLogout";
import NotificationsManager from "@/components/ui/NotificationManager";
import { useNotifications } from "@/hooks/api/useNotifications";
import { useUser } from "@/hooks/api/useUser";
import { useRegistrationFlag } from "@/hooks/api/useRegistrationFlag";

export default function Dashboard() {
    const { user, isLoading, error } = useUser();
    const { logout, isSuccess, isPending: logoutLoading } = useLogout();
    const { notifications } = useNotifications();
    const { flag } = useRegistrationFlag("workshop-changes");

    if (isSuccess) {
        window.location.href = "/";
    }

    if (error) {
        window.location.href = "/my-fact/login";
    }

    return (
        <>
            {notifications && (
                <NotificationsManager
                    notifications={notifications.map(
                        (notification) => notification.message
                    )}
                />
            )}

            <Navbar />
            <div className="w-9/12 flex justify-evenly flex-col gap-10 md:gap-16 md:flex-row text-left mx-auto">
                <div>
                    {/* user info */}
                    <div>
                        {user ? (
                            <>
                                <div className="font-bold text-xl my-2">
                                    Welcome, {user.user.first_name}
                                </div>
                                <div className="my-1">
                                    {user.user.first_name} {user.user.last_name}
                                </div>
                            </>
                        ) : (
                            <LoadingCircle />
                        )}
                    </div>
                    <div className="text-center my-6">
                        <LinkButton
                            text="EDIT PROFILE"
                            url="/my-fact/profile"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center bg-text-primary px-2 py-4 my-4">
                        {user?.registration ? (
                            user.registration.map((pair) => (
                                <WorkshopCard
                                    key={pair.workshop}
                                    id={pair.workshop}
                                />
                            ))
                        ) : (
                            <LoadingCircle />
                        )}
                    </div>
                    {flag?.value ? (
                        <div className="text-center my-6">
                            <LinkButton
                                text="UPDATE WORKSHOPS"
                                url="/my-fact/workshops"
                            />
                        </div>
                    ) : (
                        <div className="text-center my-6 text-xs">
                            Workshop changes are not available at this time.
                        </div>
                    )}
                </div>
                <div>{user ? <UserAgenda /> : <LoadingCircle />}</div>
            </div>
            <br />
            <br />
            <div className="mx-auto w-fit text-background-primary">
                <InteractiveButton
                    text="Log out"
                    onClick={() => {
                        logout();
                        window.location.href = "/";
                    }}
                />
            </div>
        </>
    );
}
