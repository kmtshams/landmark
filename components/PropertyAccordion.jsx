"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function PropertyAccordion({ property }) {
    const sections = [
        { title: "Overview", content: property.description },
        { title: "Living Room", content: property["Living Room"] },
        { title: "Kitchen & Dining", content: property["Kitchen & Dining"] },
        { title: "Bedroom", content: property.Bedroom },
        { title: "Bathroom", content: property.Bathroom },
        { title: "Guest Access", content: property["Guest Access"] },
        { title: "Amenities", content: property.Amenities },
        { title: "Other things to note", content: property["Other things to note"] }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="space-y-2">
            {sections.map((section, index) => (
                <div key={index} className="border border-[#988f75]/82 rounded-md bg-[#988f75]/82">
                    {/* Header */}
                    <button
                        className="w-full flex justify-between items-center p-3 text-left font-semibold text-[#333]"
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    >
                        {section.title}
                        <FaChevronDown
                            className={`transition-transform ${openIndex === index ? "rotate-180" : ""
                                }`}
                        />
                    </button>

                    {/* Content */}
                    {openIndex === index && (
                        <div className="px-4 pb-3 text-sm text-[#333]">
                            {Array.isArray(section.content) ? (
                                <ul className="list-disc pl-5 space-y-1">
                                    {section.content.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>{section.content}</p>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
