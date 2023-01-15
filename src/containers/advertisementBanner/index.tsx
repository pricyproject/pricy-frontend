import React from "react";
import { Typography } from "@mui/material";
import Image from "next/image";

const AdvertisementBanner = () => {
    return (
        <>
            <Typography
                variant="title2"
                component="div"
                className="uppercase text-center my-7"
            >
                ONLINE SHOPPING MADE EASY WITH OUR PRICE COMPARISON WEBSITE
            </Typography>
            <div className="relative h-[500px] w-full bg-other-6">
                <Image
                    src="/images/ads-banner-big.png"
                    layout="fill"
                    objectFit="contain"
                    className="!py-10 !px-5"
                />
            </div>
        </>
    );
};
export default AdvertisementBanner;
