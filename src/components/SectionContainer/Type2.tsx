import React from "react";

interface Props {
    children: React.ReactNode;
    className?: string | undefined;
}

const SectionContainerType2: React.FC<Props> = ({ children, className }) => {
    return (
        <div className="relative w-full h-full ml-[10px] mb-[10px]">
            <div className="relative w-full h-full p-8 z-10 rounded-[20px] shadow-2 bg-neutral-bg1">
                {children}
            </div>
            <div className="absolute top-[10px] -left-[10px] z-0 w-full h-full rounded-[20px] bg-neutral-bg1/60" />
        </div>
    );
};
export default SectionContainerType2;
