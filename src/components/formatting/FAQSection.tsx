interface FAQProps {
    question: string;
    answer: string;
}

export default function FAQSection({question, answer}: FAQProps) {
    return (
        <>
            <div className="text-3xl lg:text-4xl font-bold mb-6">{question}</div>
            <div className="">{answer}</div>
        </>
    )
}