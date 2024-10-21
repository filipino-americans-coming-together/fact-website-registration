"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import InteractiveButton from "../ui/InteractiveButton";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const iconList = [
    // { icon: <FaFacebook style={{ fontSize: "22px" }} />, link: "#" },
    {
        icon: <FaInstagram style={{ fontSize: "22px" }} />,
        link: "https://www.instagram.com/psa_fact/",
    },
];

const NAV_LINKS = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Team", path: "/team" },
    { text: "Gallery", path: "/gallery" },
    { text: "FAQs", path: "/faqs"}
];

const FACT_LOGO_SRC = "/fact-2024-logo.png";

export default function Navbar() {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <nav className="flex justify-between mx-auto items-center py-4 px-10 md:px-20">
            <Link href={"/"}>
                <img className="rounded-lg w-12 h-12" src={FACT_LOGO_SRC} />
            </Link>

            <DesktopNav links={NAV_LINKS} />

            <ul className="flex text-text-primary gap-6 items-center">
                {iconList.map((item, index) => (
                    <li key={index}>
                        <Link
                            href={item.link}
                            target="_blank"
                            className="hover:text-highlight-primary"
                        >
                            {item.icon}
                        </Link>
                    </li>
                ))}

                {/* mobile navigation toggle */}
                <li className="flex flex-col items-center">
                    <button className="relative text-text-primary rounded md:hidden">
                        {showModal ? (
                            <div>
                                <FaTimes
                                    onClick={toggleModal}
                                    style={{ fontSize: "22px" }}
                                />
                                <MobileNav links={NAV_LINKS} />
                            </div>
                        ) : (
                            <FaBars
                                onClick={toggleModal}
                                style={{ fontSize: "22px" }}
                            />
                        )}
                    </button>
                </li>
            </ul>
        </nav>
    );
}
