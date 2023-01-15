import React from "react";
import Image from "next/image";
import { Button, IconButton, Typography } from "@mui/material";
import { Star } from "react-iconly";
import DiscountLabel from "../DiscountLabel";
import FavoriteBtn from "../FavoriteBtn";
import Link from "../Link";

interface Props {
    name: string;
    price: number;
    discount?: number | undefined;
    stars: number;
    isFavorite?: boolean;
    imgSrc: string;
    href: string;
}

const ProductCardType1 = React.memo(
    ({
        name,
        price,
        discount,
        stars,
        isFavorite = false,
        imgSrc,
        href,
    }: Props) => {
        return (
            <div className="w-[188px] rounded-[10px] shadow-1 px-[6px] py-[5px] mx-auto">
                <div className="relative h-[126px] w-full bg-other-1 rounded-[10px]">
                    <Image
                        src={imgSrc}
                        layout="fill"
                        className="rounded-[10px]"
                    />
                    <IconButton className="absolute top-2 left-2 w-8 h-8 rounded-full bg-neutral-bg1/70 flex items-center justify-center">
                        <FavoriteBtn />
                    </IconButton>
                    {discount ? <DiscountLabel discount={discount} /> : null}
                </div>
                <div className="mt-3 px-2">
                    <Typography component="div" variant="body4">
                        {name}
                    </Typography>
                    <div className="flex justify-between mt-0.5">
                        <Typography
                            component="div"
                            variant="body5"
                            className="font-medium"
                        >
                            ${price}
                        </Typography>
                        <span className="text-xs self-end">
                            <span className="flex items-center mb-1">
                                <Star
                                    set="two-tone"
                                    filled
                                    size={14}
                                    primaryColor="#ECD56F"
                                />
                                <Typography
                                    component="span"
                                    variant="body7"
                                    className="font-medium ml-1 pt-1 font-normal"
                                >
                                    {stars}
                                </Typography>
                            </span>
                        </span>
                    </div>
                    <Link href={href} className="block w-fit mx-auto">
                        <Typography variant="body6">
                            <Button
                                className="block mt-4 mb-2 h-auto pt-1 pb-1"
                                variant="contained"
                                color="secondary"
                                type="button"
                            >
                                Show More
                            </Button>
                        </Typography>
                    </Link>
                </div>
            </div>
        );
    }
);

export default ProductCardType1;
