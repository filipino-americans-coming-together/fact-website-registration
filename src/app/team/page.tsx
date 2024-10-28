"use client";

import PageContainer from "@/components/formatting/PageContainer";
import Footer from "@/components/formatting/PageFooter";
import Image from "next/image";
import { useState } from "react";
import teamData from "./teamData.json";

const FACT_LOGO_SOURCE = "/fact-2024-logo-transparent.png";

type Officer = {
    name: string;
    bio: string;
    pronouns: string;
    image: string;
};

type OfficerCardProps = {
    officer: Officer;
    onClick: (officer: Officer) => void;
};

// Component for displaying each FACT Pack officer
const OfficerCard = ({ officer, onClick }: OfficerCardProps) => {
    const [src, setSrc] = useState(`/team-fact/${officer.image}`);

    return (
        <div className="m-4 p-2 md:m-8 mx-auto">
            <div
                className="relative w-48 h-56 lg:w-80 lg:h-96 cursor-pointer"
                onClick={() => onClick(officer)}
            >
                <Image
                src={src}
                alt={officer.name}
                fill={true}
                className="object-cover"
                onError={() => {
                    setSrc(FACT_LOGO_SOURCE);
                }}
                />
            </div>

            <p className="text-center mt-2">{officer.name}</p>
        </div>
    );
};

type OfficerRowProps = {
    role: string;
    officers: Officer[];
    onOfficerClick: (officer: Officer) => void;
};

// Component to display the officers for each position
const OfficerRow = ({ role, officers, onOfficerClick }: OfficerRowProps) => {
    return (
        <div>
            {/* Position Title */}
            <h2 className="text-xl mb-4">{role}</h2>
            <div className="flex flex-col md:flex-row justify-center">
                {officers.map((officer, index) => (
                <OfficerCard
                    key={index}
                    officer={officer}
                    onClick={onOfficerClick}
                />
                ))}
            </div>
        </div>
    );
};

type ModalProps = {
    children: React.ReactNode;
    onClose: () => void;
};

// Modal component for displaying officer details when img is clicked
const Modal = ({ children, onClose }: ModalProps) => {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={onClose}
        >
            <div
                className="relative bg-white rounded w-full max-w-4xl h-[90vh] md:h-auto mx-4"
            >
                {/* Close Button */}
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-3xl font-bold"
                    onClick={onClose}
                >
                ×
                </button>
                {/* Scrollable Content */}
                <div className="p-4 overflow-y-auto h-full md:max-h-[80vh]">
                    {children}
                </div>
            </div>
        </div>
    );
};

// Main component
export default function Team() {
    const [selectedOfficer, setSelectedOfficer] = useState<Officer | null>(null);

    const handleOfficerClick = (officer: Officer) => {
        setSelectedOfficer(officer);
    };

    return (
    <PageContainer title="Team FACT 2024">
        <div className="text-center">
            {teamData.map((roleData, index) => (
                <OfficerRow
                key={index}
                role={roleData.role}
                officers={roleData.officers}
                onOfficerClick={handleOfficerClick}
                />
            ))}
        </div>
        {selectedOfficer && (
        <Modal onClose={() => setSelectedOfficer(null)}>
            <div className="flex flex-col md:flex-row items-center text-black p-5">
                {/* Image */}
                <div className="w-full md:w-1/2">
                    <Image
                    src={`/team-fact/${selectedOfficer.image}`}
                    alt={selectedOfficer.name}
                    width={400}
                    height={300}
                    className="object-cover text-center"
                    />
                </div>
                {/* Officer Info */}
                <div className="md:ml-6 mt-4 md:mt-0 text-left w-full md:w-1/2 p-5">
                    <h2 className="text-2xl md:text-3xl font-bold">
                    {selectedOfficer.name}
                    </h2>
                    <p className="text-sm text-gray-500">{selectedOfficer.pronouns}</p>
                    <p className="mt-4">{selectedOfficer.bio}</p>
                </div>
            </div>
        </Modal>
        )}
        <Footer />
    </PageContainer>
    );
}