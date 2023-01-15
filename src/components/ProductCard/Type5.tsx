import Image from "next/image";
import React from "react";
import Link from "../Link";

interface Props {
    imgSrc: string;
    href?: string | undefined;
}

const ProductCardType5: React.FC<Props> = ({ imgSrc, href = "/" }) => (
    <Link
        href={href}
        className="ProductCardType5 relative block w-full h-full cursor-pointer rounded-[20px] overflow-hidden"
    >
        <Image src={imgSrc} layout="fill" className="rounded-[20px]" />
        <div className="indicatorBox" />
    </Link>
);

export default ProductCardType5;
