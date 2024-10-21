import FAQSection from "@/components/formatting/FAQSection";
import PageContainer from "@/components/formatting/PageContainer";

const FAQs_data = [
    {
        question: "What is FACT?",
        answer: "FACT stands for Filipinx Americans Coming Together and is a conference hosted annually by the Philippine Student Association at the University of Illinois at Urbana-Champaign. It is the largest Filipinx-interest conference in the Midwest, bringing in over 1,000 delegates yearly. The conference works to empower young, rising professionals while simultaneously educating the delegates about Filipinx culture, identity and issues. Despite the conference’s title, the conference is not limited to delegates of Filipinx descent. The facilitators and delegates come from different backgrounds and ethnicities, and the workshops cover a wide array of topics. FACT’s mission is to build a community of leaders by uniting, enlightening and empowering the Filipinx/Fil-Am/Non-Filipinx youth nationwide. By exploring our interests, culture and identity as a rising generation, we hope that our delegates can take with them knowledge that they can apply beyond their college career as leaders in the professional world ready to give back to their community.",
    },
    {
        question: "How do I register?",
        answer: "Use the \"Register\” tab on our website and fill out your information in the boxes. Continue to the next page and you can view the sessions you signed up for and the details for those workshops!",
    },
    {
        question: "Where can we find information regarding workshop information?",
        answer: "Workshop and facilitator biographies are available via our Instagram (@psa_fact) or via the “Workshops” tab on our website. After registering, you can find information about those specific workshops via your Dashboard."
    },
    {
        question: "Where can I eat?",
        answer: "During your free time during the FACT Conference, you have the freedom to choose between the variety of food options available on and near the UIUC campus. We encourage you to support our day-of food and drink fundraisers, which will be announced via our Instagram (@psa_fact) and our newsletter at a later date.",
    },
    {
        question: "How do I book a hotel using the hotel block booking system?",
        answer: "FACT has coordinated a selection of hotel blocks specifically for conference guests. Details and instructions are outlined on our Instagram (@psa_fact) and our newsletter, but rooms are only available for booking for a limited time.",
    },
    {
        question: "I am a minor, can I go to FACT?",
        answer: "Due to university policies and safety reasons, minors who are unattended by their guardians are not permitted to attend FACT affiliated events.",
    },
    {
        question: "How can I change my workshop choice that I have made?",
        answer: "If other workshops have not reached capacity, you may go into your portal, click on \“Update Workshops\”, then click on confirm and you will see that your choice has changed."
    },
    {
        question: "How can I get around campus?",
        answer: "All MTD bus stops within campus borders will be marked by an orange bus stop sign and are free of charge. Arrival and departure times are most accurate via the Illini Bus app and Google Maps. You may also use other transportation or rideshares at your own expense.",
    },
    {
        question:
            "Do you guys have ways for accessibility for workshops or variety shows?",
        answer: "All FACT venue entrances are accessible via ramps on either the front or sides of buildings.",
    },
    {
        question: "What wifi services are available?",
        answer: "Campus Wi-Fi is free for guests by connecting to “IllinoisNet_Guest.” See instructions for connecting on this page here.",
    },
    {
        question: "What can I bring into Variety Show?",
        answer: "Food and drinks are NOT allowed into Foellinger Auditorium. Backpacks and large bags are subject for search by Facilities Staff.",
    },
    {
        question: "Will the conference be live streamed?",
        answer: "Yes the conference will be livestreamed and so will the variety show! Please check out our YouTube: https://www.youtube.com/@factmedia92 Subscribe, Like, and Comment!",
    },
    {
        question: "What do I do if I lose anything during the conference?",
        answer: "As outlined in the Terms and Conditions that all registered participants have affirmed to, all FACT attendees are responsible for “loss of items or damage to FACT Conference facilities” and are “liable for any costs incurred to repair any inflicted damage.”",
    },
    {
        question: "Is there a dress code?",
        answer: "As long as apparel is not offensive, there is no specific dress code for FACT. Since this is a winter event, please dress for the weather. Most delegates wear their organization’s merchandise to conference.",
    },
    {
        question: "Will any part of the conference be on Zoom/virtual?",
        answer: "This year, FACT will be a purely in-person conference. However, we will be providing informational materials on our Instagram, newsletter, and website after the conference for anyone hoping to stay connected to the speakers, guests, and performers post-FACT.",
    },
    {
        question: "Are there refunds?",
        answer: "Refunds can be requested via this form up until the end of the Early Registration dates. Please secure your availability and ensure that you will attend the events paid for prior to providing payment during registration."
    },
    {
        question: "I wasn’t able to register early, can I still attend the conference? ",
        answer: "Yes! If you were unable to register early, you can still register for FACT online with the Late Registration price until the week prior to the conference. You may additionally register in-person at the conference with the Late Registration price at the Asian American Cultural Center (1210 W Nevada St, Urbana, IL 61801) from 4:00-10:00 PM on Friday, December 6th, or from 8:30-9:30 AM on Saturday, December 7th."
    },
    {
        question: "Can I upgrade to the bundle?",
        answer: "After completing your purchases, upgrading to the bundle is not allowed. You may purchase an additional session or Variety Show ticket separately.",
    },
    {
        question: "What are COVID/illness restrictions?",
        answer: "PSA is currently not requiring any masking or vaccination for this year’s FACT. If you are feeling sick or unwell, please refrain from attending or use a mask to protect the health and safety of others who may be prone or sensitive to sickness.",
    },
    {
        question: "Parking Policies",
        answer: "Parking for non-UIUC faculty and staff is metered and/or limited to the spaces outlined on this website. Meter payments may be processed by coin, Pay by Phone, or CashKey depending on the outlined instructions. Free weekend and overnight parking lots are listed on this website. Parking is strictly monitored by campus officials and those not adhering to the policies may be subject to ticketing or towing. FACT is not responsible for any parking charges made towards all attendees.",
    },
];

export default function Faqs() {
    const FAQs_col1 = [...FAQs_data].slice(0, FAQs_data.length / 2);
    const FAQs_col2 = [...FAQs_data].slice(FAQs_data.length / 2);
    
    return (
        <PageContainer title="FACT Faqs">
            <div className="flex flex-row flex-wrap justify-between">
                <div className="flex flex-col justify-start lg:w-2/5 gap-3">
                    {FAQs_col1.map((qna, index) => (
                        <div key={index} className="mb-10 text-center lg:text-left">
                            <FAQSection question={qna.question} answer={qna.answer} />   
                        </div>
                    ))}
                </div>
                <div className="flex flex-col justify-start lg:w-2/5 gap-6">
                    {FAQs_col2.map((qna, index) => (
                        <div key={index} className="mb-10 text-center lg:text-left">
                            <FAQSection question={qna.question} answer={qna.answer} />
                        </div>
                    ))}
                </div>
            </div>
            
        </PageContainer>
    );
}
