"use client";

import Navbar from "@/components/Navbar";
import { useEffect } from "react";

export default function Donate() {
    useEffect(() => {
        (window as any).bboxInit = function () {
            // @ts-ignore
            bbox.showForm("799cd906-9cc4-401c-bf98-a0de4daac6c6");
        };
        (function () {
            var e = document.createElement("script");
            e.async = true;
            e.src = "https://bbox.blackbaudhosting.com/webforms/bbox-min.js";
            document.getElementsByTagName("head")[0].appendChild(e);
        })();
    }, []);

    return (
        <>
            <Navbar />

            <div className="w-9/12 mx-auto text-center flex flex-col items-center">
                <h1 className="font-bold sm:text-4xl lg:text-6xl">
                    Support FACT
                </h1>
                <br />
                <p className="w-8/12">
                    The Filipinx Americans Coming Together (FACT) conference is
                    an annual student-run conference organized by the Philippine
                    Student Association at University of Illinois at
                    Urbana-Champaign.
                </p>
                <br />
                <p className="w-8/12">
                    Your donation to the FACT Conference helps us bring
                    facilitators, panelists, keynote speakers, headliners,
                    venues, and much more for our attendees to enjoy and benefit
                    from. This conference would not be possible without the help
                    of generous donors like you. But your help goes beyond
                    sponsorship. By supporting this conference, you contribute
                    to inspiring and empowering today’s generation to be
                    passionate and responsible leaders, who aim to shape their
                    world and follow their dreams. You are laying the groundwork
                    to strengthen the upcoming generation.
                </p>
                <div id="bbox-root"></div>
            </div>
        </>
    );
}
