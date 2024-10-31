import { ReactNode, useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";

interface SearchableSelectProps {
    options: { label: string; value: string; selectable?: boolean }[];
    id: string;
    label: string;
    setState: (state: Object) => void;
    placeholder: string;
    defaultValue?: string;
    required?: boolean;
}

/**
 * Searchable select menu
 * @param id html id
 * @param label label text
 * @param setState function to call on input change
 * @param defaultValue default value id
 * @param required is required
 * @param children options
 * @returns
 */
function SearchableSelect<T>({
    id,
    label,
    setState,
    defaultValue,
    required = true,
    options,
    placeholder,
}: SearchableSelectProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const [query, setQuery] = useState("");
    const [showOptions, setShowOptions] = useState(false);
    const [selected, setSelected] = useState<String>();

    function handleInputFocused() {
        setShowOptions(true);
        setSelected(undefined);
        setQuery("");
        setState((prevState: Object) => ({
            ...prevState,
            [id]: undefined,
        }));
    }

    useEffect(() => {
        setState((prevState: Object) => ({
            ...prevState,
            [id]: defaultValue,
        }));

        setSelected(
            options.find((option) => option.value === defaultValue)?.label
        );
    }, [defaultValue, id, setState]);

    function handleClickOutside(event: MouseEvent) {
        if (
            containerRef.current &&
            !containerRef.current.contains(event.target as Node)
        ) {
            setShowOptions(false);
        }
    }

    useEffect(() => {
        if (showOptions) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showOptions]);

    return (
        <div ref={containerRef} className="relative flex flex-col w-full">
            {/* label */}
            <div>
                {label} {required && <span className="text-red-600">*</span>}
            </div>

            {selected ? (
                <button
                    className="px-2 py-1 bg-white rounded text-background-primary divide-y border flex justify-between items-center hover:cursor-pointer"
                    onClick={handleInputFocused}
                    onFocus={handleInputFocused}
                    type="button"
                >
                    {selected}
                    <FaAngleDown />
                </button>
            ) : (
                <input
                    placeholder={placeholder}
                    autoComplete="off"
                    className="py-1 px-2 rounded border w-full min-w-40 text-background-primary"
                    onChange={(event) => {
                        const value = event.currentTarget.value;
                        setQuery(value);
                    }}
                    required={false}
                    onClick={handleInputFocused}
                    onFocus={handleInputFocused}
                />
            )}

            {showOptions && (
                <div
                    className="absolute w-full top-14 z-20 max-h-[40vh] overflow-y-scroll bg-white text-background-primary divide-y border flex flex-col"
                    id={id}
                >
                    {options
                        .filter((option) => {
                            // TODO make query more malleable > split by spaces and check each word
                            const toTest = new RegExp(query, "i");

                            return toTest.test(option.label);
                        })
                        .map((option) => {
                            // if selectable doesn't exist, assume selectable
                            if (option.selectable === undefined ? true : option.selectable) {
                                return (
                                    <button
                                        className="px-2 py-1 text-left hover:bg-slate-100 hover:cursor-pointer"
                                        key={option.value}
                                        onClick={() => {
                                            setShowOptions(false);
                                            setState((prevState: Object) => ({
                                                ...prevState,
                                                [id]: option.value,
                                            }));
                                            setSelected(option.label);
                                        }}
                                        type="button"
                                    >
                                        <input
                                            type="radio"
                                            name={label}
                                            value={option.value}
                                            id={label + option.value.toString()}
                                            checked={option.label === selected}
                                            hidden
                                            readOnly
                                        />
                                        <label
                                            htmlFor={
                                                label + option.value.toString()
                                            }
                                            className="pointer-events-none"
                                        >
                                            {option.label}
                                        </label>
                                    </button>
                                );
                            } else {
                                return (
                                    <div
                                        className="px-2 py-1 text-left bg-slate-200 text-slate-600"
                                        key={option.value}
                                    >
                                        <div className="pointer-events-none">
                                            {option.label} - FULL
                                        </div>
                                    </div>
                                );
                            }
                        })}
                </div>
            )}
        </div>
    );
}

export default SearchableSelect;
