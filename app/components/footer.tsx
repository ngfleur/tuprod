import Link from "next/link";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface FooterProps {
    previoustitle: string;
    previousLink: string;
    previousVisible: boolean;
    nexttitle: string;
    nextLink: string;
    nextVisible: boolean;
}

export const Footer: React.FC<FooterProps> = ({ previoustitle, previousLink, nexttitle, nextLink, previousVisible, nextVisible }) => {
    return (
        <footer className=" bg-black relative text-zinc-100">
            <div className={`z-50  duration-200 border-t ${previousVisible || nextVisible ? "bg-zinc-900/0 border-transparent" : "bg-zinc-900/500 border-zinc-800"}`}>
                <div className="bottom-24 left-0 right-0 flex justify-between px-24">
                    {previousVisible && (
                        <div className="bg-black p-2 flex items-center">
                            <Link href={previousLink} className="text-sm duration-500 hover:text-zinc-300 flex items-center" style={{ fontSize: "2.15rem", fontFamily: "Phonk" }}>
                                <ChevronLeft size={50} /> {previoustitle}
                            </Link>
                        </div>
                    )}
                    <div className="flex-grow"></div>
                    {nextVisible && (
                        <div className="bg-black p-2 rounded-md flex items-center">
                            <Link href={nextLink} className="text-sm duration-500 hover:text-zinc-300 flex items-center" style={{ fontSize: "2.15rem", fontFamily: "Phonk" }}>
                                {nexttitle} <ChevronRight size={50} />
                            </Link>
                        </div>
                    )}
                </div>

                <div className="w-screen flex flex-col items-center justify-center px-24 h-24 bg-black text-zinc-500">

                </div>
            </div>
        </footer>
    );
};
