import Image from "next/image";
import React from "react";
import { Typography } from "@mui/material";
import Link from "../Link";

interface Props {
    imgSrc: string;
    description: string;
    href?: string | undefined;
}

const ProductCardType4: React.FC<Props> = ({ imgSrc, description, href }) => (
    <Link
        href={href}
        className="ProductCardType4 relative block w-full h-full rounded-[20px] overflow-hidden"
    >
        <Image src={imgSrc} layout="fill" className="" />
        <Typography component="div" variant="title1" className="indicatorBox">
            {description}
        </Typography>
    </Link>
);

export default ProductCardType4;
