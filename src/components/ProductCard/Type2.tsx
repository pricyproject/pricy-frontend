import React from "react";
import Image from "next/image";
import { Typography } from "@mui/material";
import Link from "../Link";

interface Props {
    categoryName: string;
    imgSrc: string;
    href: string;
}

const ProductCardType2 = React.memo(({ href, categoryName, imgSrc }: Props) => {
    return (
        <Link href={href}>
            <div className="h-[260px] w-[260px] rounded-[20px] shadow-1 px-[6px] py-[5px] mx-auto">
                <div className="relative h-[260px] w-[260px] rounded-[20px]">
                    <Image
                        src={imgSrc}
                        layout="fill"
                        className="rounded-[20px]"
                    />
                    <div className="absolute top-2 right-2 h-8 px-5 flex items-center justify-center bg-neutral-bg1/50 backdrop-blur-[4px] rounded-full border-2 border-solid border-neutral-bg1">
                        <Typography
                            variant="title3"
                            component="span"
                            className="pt-1"
                        >
                            {categoryName}
                        </Typography>
                    </div>
                </div>
            </div>
        </Link>
    );
});

export default ProductCardType2;
