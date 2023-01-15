import React from "react";
import Image from "next/image";
import { IconButton, Typography } from "@mui/material";
import StarsTogether from "../StarsTogether";
import FavoriteBtn from "../FavoriteBtn";
import DiscountLabel from "../DiscountLabel";
import Link from "../Link";

interface Props {
    imgSrc: string;
    name: string;
    price: number;
    discount?: number | undefined;
    rate: number;
    isFavorite?: boolean | undefined;
    href?: string | undefined;
}

const ProductCardType3: React.FC<Props> = ({
    imgSrc,
    name,
    price,
    discount,
    rate,
    isFavorite,
    href,
}) => {
    return (
        <Link href={href}>
            <Image src={imgSrc} layout="fill" className="rounded-[20px]" />
            <div className="bg-neutral-bg1/50 backdrop-blur-lg absolute w-full rounded-t-[20px] py-3 px-5">
                <Typography component="div" variant="body4">
                    {name}
                </Typography>
                <Typography
                    component="div"
                    variant="body5"
                    className="font-medium"
                >
                    ${price}
                </Typography>
                <StarsTogether rate={rate} />
                <IconButton className="absolute top-2 right-2 w-8 h-8 rounded-full bg-neutral-bg1/70 flex items-center justify-center">
                    <FavoriteBtn />
                </IconButton>
                {discount ? <DiscountLabel discount={discount} /> : null}
            </div>
        </Link>
    );
};
export default ProductCardType3;
