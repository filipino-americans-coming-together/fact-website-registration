import Link from "next/link";

interface LinkButtonProps {
    text: string;
    url: string;
    newTab?: boolean;
}

/**
 * Link button
 * @param text text to display
 * @param url url to direct to
 * @returns LinkButton
 */
export default function LinkButton({
    text,
    url,
    newTab = false,
}: LinkButtonProps) {
    return (
        <Link href={url} target={newTab ? "_blank" : "_self"} className="m-4">
            <button className="text-center text-text-primary border-solid border-2 w-60 py-4 hover:text-background-primary hover:bg-text-primary">
                {text}
            </button>
        </Link>
    );
}
