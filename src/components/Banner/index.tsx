import React from "react";
import Link from "../Link";

interface Props {
    imgSrc: string;
    href: string;
    alt?: string | undefined;
}

const Banner: React.FC<Props> = ({ imgSrc, href, alt = "" }) => (
    <div className="relative w-full max-w-[540px] mx-auto">
        <Link href={href}>
            <img className="select-none" src={imgSrc} width="100%" alt={alt} />
        </Link>
    </div>
);
export default Banner;
