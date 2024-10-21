"use client";

import PageContainer from "@/components/formatting/PageContainer";
import Image from "next/image";
import { useState } from "react";

const FACT_LOGO_SOURCE = "/fact-2024-logo-transparent.png";

const teamData = [
    {
        role: "FACT Coordinators",
        image: "fact-coords.jpg",
        officers: [
            {
                name: "Kristel Ong",
                bio: "Kristel is a senior majoring in Community Health with minors in Spanish and Chemistry. She has previous FACT planning experience as the '23 Hospitality co-chair and has served as a board member of the Philippine Student Association as the '23-'24 Vice-President External and '22-'23 Awareness co-chair. Outside of PSA, Kristel is very passionate about public health and medicine and hopes to pursue a career that connects both. She is extremely excited to see the culmination of her and her co-chairs' hard work and meet everyone attending FACT!",
                pronouns: "she/her",
                image: "kristel-ong.JPG",
            },
            {
                name: "Eillen Nigos",
                bio: "Eillen is a junior studying Architecture with a minor in Spanish and is one of this year's FACT Co-Coordinators with Team EHKO! She has a passion for culture and the arts and dreams to work in non-profit organizations post-grad, providing housing and other essential needs to countries abroad. Eillen is currently involved in architecture student organizations as the Event and Marketing/Merchandise Chair and has previously held positions in PSA as Awareness, FCN Marketing, and FACT Marketing. She is super excited to see everyone come out for the 32nd conference anniversary and hopes that you all have an experience even better than the last year!",
                pronouns: "she/her",
                image: "eillen-nigos.jpeg",
            },
            {
                name: "Hahnbit Lee",
                bio: "Hahnbit is a senior in the College of Applied Health Sciences, studying Kinesiology with a minor in Health Administration on the Pre-Occupational Therapy (OT) Track to become an OT. Afterward, she would like to return to school and gain an education degree to become an OT professor or take a side in health management. Hahnbit was PSA's co-publicity chair, and secretary, and held positions under the Filipino Culture Night committee. On campus, she is part of the Phi Chi Pre-Health Fraternity, the Asian American Association, and the Korean American Association. In her downtime, she watches shows, dances, listens to music, try new dishes, and sleep. For the 32nd Annual FACT Conference, she hopes her co-chairs, Eillen Nigos and Kristel Ong, FACT Pack, and PSA, create a memorable experience for the delegates and bring excitement throughout the conference!",
                pronouns: "she/her",
                image: "hahnbit-lee.jpg",
            },
        ],
    },
    {
        role: "Treasurer",
        image: "treasurer.jpg",
        officers: [
            {
                name: "Maya Moloney",
                bio: "Maya is a Junior majoring in Learning & Education Studies, with a concentration in Workplace Training & Development. She currently serves as PSA's Treasurer and was one of the Cultural Coordinators last year. Outside of PSA, Maya is involved in an Asian-Interest sorority, Kappa Phi Lambda, interning at the Asian American Cultural Center, and was recently elected to serve on the Board of Governors at the YMCA! She hopes and plans to raise money to support this annual event that brings students from around the nation together to celebrate their Filipinx culture.",
                pronouns: "she/they",
                image: "maya-moloney.jpeg",
            },
        ],
    },
    {
        role: "Delegate",
        image: "delegate.jpg",
        officers: [
            {
                name: "Diane Alagaban",
                bio: "Diane is a junior majoring in Information Systems in the Gies Business School, with a minor in Health Administration. She currently serves as the Vice President External for PSA and has previously held the position of philanthropy chair. Outside of PSA, Diane is actively involved in Beta Alpha Psi, a business fraternity, where she is the Co-Director of Internal Engagement. She is excited to foster new friendships during FACT and looks forward to the fun events planned for Delegate Day!",
                pronouns: "she/her",
                image: "diane-alagaban.jpg",
            },
            {
                name: "Charlynne Ligo",
                bio: "Charlynne is a sophomore studying molecular and cellular biology with a minor in psychology, following the pre-physician's assistant track. During her time in PSA, she has been an active member of Barkada and is currently FCN co-coordinator. Outside of PSA, she is involved in a couple pre-health RSOs. Charlynne is excited to make the very first FACT Delegate Day memorable and fun for everyone! ",
                pronouns: "she/her",
                image: "charlynne-ligo.jpeg",
            },
        ],
    },
    {
        role: "Hospitality",
        image: "hospitality.jpg",
        officers: [
            {
                name: "Catalina Sophia Murga",
                bio: "Catalina is a junior studying Engineering Mechanics and minoring in Mathematics and hopes to take part in research or technological development post-graduation. She has loved the welcoming community that PSA offers since coming from overseas and has been involved in PSA's board, FACT Pack, Barkada, and Harana. For fun, Catalina enjoys painting and crocheting, watching movies and listening to a range of music. She hopes for a successful FACT this year and is excited to see people from all across the country come together and partake in all that FACT has to offer!",
                pronouns: "she/her",
                image: "catalina-sophia-murga.jpeg",
            },
            {
                name: "Grace Requeno",
                bio: "Grace is a Junior studying Information Sciences and minoring in Computer Science & Data Science. She is interested in pursuing a career in Bioinformatics or a general Data Science field after graduation. Over these past couple of years, she has been involved in PSA through Barkada and being an active member! Outside of PSA, she enjoys painting, skating, thrifting, and exploring new cafes. She is super excited to be a part of FACT Pack and can't wait to meet everyone during FACT Weekend!",
                pronouns: "she/her",
                image: "grace-requeno.jpg",
            },
        ],
    },
    {
        role: "Information Technology (IT)",
        image: "it.jpg",
        officers: [
            {
                name: "Emilia Daniels",
                bio: "insert bio",
                pronouns: "insert pronouns",
                image: "emilia-daniels.jpg",
            },
            {
                name: "Kian De Guzman",
                bio: "Kian is a junior studying Computer Science. He is currently one of the IT Chairs for FACT and has been involved in PSA since his freshman year. Besides PSA, Kian is a brother of Kappa Pi Beta Fraternity Inc., works as a Site Consultant for Illinois Technology Services, and is a CS 222 Course Assistant. He is ecstatic to work hard to create a smooth, enjoyable FACT for all delegates, and is looking forward to meeting everyone during the conference!",
                pronouns: "he/him",
                image: "kian-de-guzman.jpg",
            },
        ],
    },
    {
        role: "Marketing",
        image: "marketing.jpg",
        officers: [
            {
                name: "Kaila Babyar",
                bio: "Kaila is a Junior majoring in Global Studies and minoring in East Asian Languages & Culture and Media. She is currently one of the Marketing Chairs for FACT, and in PSA she has three super cute Adings! Outside of PSA, Kaila is also this semester’s Social Chair for the Global Studies Professional Society (GSPS), does a lot of drawing, bakes too many deserts, and works as a part time barista. With FACT coming up this year, she is excited to make connections across different schools and to create lasting memories with friends. Kaila is also looking forward to the merchandise her and her co-chairs will design, which you can expect to see during the conference!",
                pronouns: "she/her",
                image: "kaila-babyar.jpeg",
            },
            {
                name: "Hailey Grace Keating",
                bio: "Hailey is currently a sophomore studying Molecular and Cellular Biology with plans to pursue research in the future. Within PSA, she has been an active member of Barkada since her freshman year, performing in some smaller performances and FACT's Variety Show in 2023, as well as competing in Battle of the Bamboo 2024. Outside of PSA, you can find her skiing way too fast, proctoring at the CBTF, doodling in a café, or locking in at a library. Hailey is looking forward to fostering a sense of community at this year's FACT Conference, and she hopes that it will be an exciting and memorable experience for all that attend! ",
                pronouns: "she/they",
                image: "lee-keating.jpg",
            },
            {
                name: "Miranda Espinoza",
                bio: "Miranda is currently a sophomore majoring in Earth, Society, and Environmental Sustainability. She has been an active member of PSA since her freshman year, performing with Barkada for FACT 2023 and Battle of the Bamboo 2024. Outside of PSA, you can find her trying to focus on homework at Funk Library, wandering the streets of Urbana-Champaign late at night, or journaling in her room. Miranda is eager to further people’s knowledge on Filipinx culture in a fun and engaging way.",
                pronouns: "she/her",
                image: "miranda-espinoza.jpeg",
            },
        ],
    },
    {
        role: "Media",
        image: "media.jpg",
        officers: [
            {
                name: "Jamila Nadine Booc",
                bio: "Jamila Nadine is a sophomore studying Computer Science and Linguistics with a minor in East Asian Languages and Cultures. As part of PSA, she was a member of Barkada as a musician during the Battle of the Bamboo competition, and is excited to be further involved as one of the FACT Media Chairs. Outside of PSA, she devotes a lot of her time to the Illini Student Musicals (ISM) as the current Head Sound Designer for their upcoming production of \"9 to 5\". She is really excited to be working with her co-chair Sofia, and is looking forward to seeing everyone at FACT!",
                pronouns: "she/her",
                image: "jamila-booc.jpg",
            },
            {
                name: "Sofia Kanda",
                bio: "Sofia is a junior majoring in Media & Cinema Studies with a minor in Business. Within PSA, she is involved with PSA Harana and was one of the short film directors for Filipino Culture Night 2024. Outside of PSA, Sofia is involved in Alpha Delta Pi, Phi Eta Sigma, and the Illini Swim Club. In addition, she is also a Video Intern for the UIUC College of Media and a Creative Video Intern for Fighting Illini Productions (through the athletic department). After graduation, Sofia hopes to attend grad school and pursue a career within the realm of film and television production. Sofia is beyond excited to be one of the Media chairs for FACT this year, as she can't wait to meet other students and help them feel a sense of empowerment through all of the amazing activities that FACT has to offer!",
                pronouns: "she/her",
                image: "sofia-kanda.jpeg",
            },
        ],
    },
    {
        role: "Palengke",
        image: "palengke.jpg",
        officers: [
            {
                name: "Michael Echavez",
                bio: "Michael is a senior studying Animal Sciences with a minor in Wildlife Conservation. After graduation they plan to continue their internship at the Scovill Zoo for nine months before hopefully becoming a full-time keeper at an AZA accredited zoo. Michael has been a Barkada performer since Fall 2021, Harana section lead since Spring 2024, and is FACT's Palengke Chair for a second year. ",
                pronouns: "he/they",
                image: "michael-echavez.jpeg",
            },
            {
                name: "Ysabelle Pinpin",
                bio: "Ysabelle is a senior majoring in both Animal Sciences and Psychology and minoring in both Food & Environmental Systems and Chemistry. In the future, Ysabelle hopes to attend vet school and become a feline and canine vet with a specialization in radiology or rehabilitation therapy. In PSA, she has been both FACT 2023 Palengke co-coordinator and FCN 2024 Tiangge co-director with Michael Echavez. She has also participated in Battle of the Bamboo as a musician and FCN as a dancer in 2023. Outside of PSA, Ysabelle is a resident advisor (RA), desk clerk, co-advisor for Sherman Hall's Residential Leadership Board (RLB), and publicity chair for the Asian American Student Housing Organization (AASHO). When she isn't stressing about her to-do list, she is most likely writing stuff on her to-do list, talking about her dog, Shadow, or working on her art business, YPArtistry.",
                pronouns: "she/her",
                image: "ysabelle-pinpin.jpg",
            },
        ],
    },
    {
        role: "Team FACT Managers",
        image: "team-fact-managers.jpg",
        officers: [
            {
                name: "Erien Lucero",
                bio: "Erien is a senior majoring in Bioengineering. After graduation, she plans to enter into industry working in research and development. She is also a co-coordinator of PSA's Filipino Culture Night. Outside of PSA, Erien is involved in her Bioengineering department as an ambassador and course assistant. In her free time, she loves to cook, watch tv shows, and hang out with friends. Erien hopes everyone can have a fun and memorable time at FACT whether its their first time or they are returning.",
                pronouns: "she/her",
                image: "erien-lucero.jpeg",
            },
            {
                name: "Joshua Ryan Fajardo",
                bio: "Joshua Ryan Fajardo is a sophomore at UIUC majoring in Information Sciences + Data Science with a minor in Computer Science. He's been involved in PSA, as the current co-Formal chair and performed for Barkada at FACT, Battle of the Bamboo, and FCN. Outside of PSA, he enjoys going to the gym and spontaneous hangouts with friends. Josh is excited to help create a memorable FACT weekend for you all!",
                pronouns: "he/him",
                image: "joshua-fajardo.jpeg",
            },
        ],
    },
    {
        role: "Variety Show",
        image: "variety-show.jpg",
        officers: [
            {
                name: "Adrian Matthew Isidoro",
                bio: "Adrian Matthew is currently a sophomore studying political science with plans to become a professor after graduation. He is a former FIA at UIC general body and Liwan member and has been involved with Battle of the Bamboo for 5 years. After transferring to UIUC last semester, Adrian Matthew has since become a general member of PSA, a props master for PSA Barkada, a college outreach ambassador for the PUSO Foundation, and a brother of Chi Sigma Tau Fraternity Inc. In his free time, he can't stop drinking coffee and other caffeinated drinks (it might be a problem) and has the barista experience to prove it! Adrian Matthew also loves travelling, boxing, dancing, riding his electric motorbike. He is excited to bring you a great and memorable Variety show with his co-coordinator Stephanie!",
                pronouns: "he/him",
                image: "adrian-isidoro.jpg",
            },
            {
                name: "Stephanie Mago",
                bio: "Stephanie is a sophomore majoring in interdisciplinary health sciences on the pre-nursing track. Within PSA, she has competed in Battle of the Bamboo with Barkada and also sings with Harana. Outside of PSA, she is marketing and recruitment chair for the American Medical Students Association and volunteers around the Champaign-Urbana area. She is so excited to share with you all this year's variety show!",
                pronouns: "she/her",
                image: "stephanie-mago.jpeg",
            },
        ],
    },
];

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
        className="fixed inset-0 z-1 flex items-center justify-center bg-black bg-opacity-50"
        onClick={onClose}
    >
        <div
        className="bg-white p-4 rounded relative mx-2 md:mx-auto md:max-w-4xl max-h-screen"
        >
        {children}
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
                width={600}
                height={400}
                className="object-cover"
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
    </PageContainer>
    );
}