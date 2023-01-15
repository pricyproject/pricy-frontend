import React from "react";
import { Typography, useMediaQuery } from "@mui/material";
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper";
import ProductCardType3 from "../../components/ProductCard/Type3";
import ProductCardType4 from "../../components/ProductCard/Type4";
import ProductCardType5 from "../../components/ProductCard/Type5";

// eslint-disable
const data = {
    1: {
        // eslint-disable-next-line sonarjs/no-duplicate-string
        imgSrc: "/images/sample/boot.png",
        href: "/",
        additionalStyles: "col-span-1 row-span-1 lowerLg:hidden",
    },
    2: {
        imgSrc: "/images/sample/boot.png",
        title: "Boot",
        rate: 3.4,
        href: "/",
        price: 49.99,
        discount: 40,
        name: "boot",
        additionalStyles: "col-span-1 row-span-2",
    },
    3: {
        imgSrc: "/images/sample/boot.png",
        description: "Buy gifts for your loved ones.",
        href: "/",
        additionalStyles: "col-span-2 row-span-3",
    },
    4: {
        imgSrc: "/images/sample/boot.png",
        href: "/",
        additionalStyles: "lowerLg:h-full col-span-1 lowerLg:hidden",
    },
    5: {
        imgSrc: "/images/sample/boot.png",
        title: "Boot",
        rate: 3.4,
        href: "/",
        price: 49.99,
        discount: 40,
        name: "boot",
        additionalStyles: "col-span-1 row-span-2",
    },
    6: {
        imgSrc: "/images/sample/boot.png",
        title: "Boot",
        rate: 3.4,
        href: "/",
        price: 49.99,
        discount: 40,
        name: "boot",
        additionalStyles: "col-span-1 row-span-2",
    },
    7: {
        imgSrc: "/images/sample/boot.png",
        href: "/",
        additionalStyles: "col-span-1 lowerLg:hidden",
    },
};
// eslint-enable

const BestSelling = () => {
    const isLowerLg = useMediaQuery("(max-width:1200px)");

    const customClasses = "relative";

    return isLowerLg ? (
        <div className="flex h-64 mt-12 -mx-4">
            <Swiper
                slidesPerView="auto"
                spaceBetween={16}
                modules={[Navigation, Mousewheel]}
                className="mySwiper no-1 px-4"
                navigation
            >
                <SwiperSlide className="w-auto !w-16 flex h-full">
                    <TextBanner />
                </SwiperSlide>
                <SwiperSlide className="w-auto !w-72 box-border">
                    <div className="">
                        <ProductCardType3
                            href={data[2].href}
                            imgSrc={data[2].imgSrc}
                            rate={data[2].rate}
                            name={data[2].name}
                            price={data[2].price}
                            discount={data[2].discount}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-auto !w-96 box-border">
                    <div className="h-full">
                        <ProductCardType4
                            href={data[3].href}
                            imgSrc={data[3].imgSrc}
                            description={data[3].description}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-auto !w-72 box-border">
                    <div className="">
                        <ProductCardType3
                            href={data[5].href}
                            imgSrc={data[5].imgSrc}
                            rate={data[5].rate}
                            name={data[5].name}
                            price={data[5].price}
                            discount={data[5].discount}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-auto !w-72 box-border">
                    <div className="">
                        <ProductCardType3
                            href={data[6].href}
                            imgSrc={data[6].imgSrc}
                            rate={data[6].rate}
                            name={data[6].name}
                            price={data[6].price}
                            discount={data[6].discount}
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    ) : (
        <div className="flex h-96 mt-12">
            <span className="mr-5 flex">
                <TextBanner />
            </span>
            <div className="w-full grid grid-flow-col gap-6">
                <div className={`${customClasses} ${data[1].additionalStyles}`}>
                    <ProductCardType5
                        href={data[1].href}
                        imgSrc={data[1].imgSrc}
                    />
                </div>
                <div className={`${customClasses} ${data[2].additionalStyles}`}>
                    <ProductCardType3
                        href={data[2].href}
                        imgSrc={data[2].imgSrc}
                        rate={data[2].rate}
                        name={data[2].name}
                        price={data[2].price}
                        discount={data[2].discount}
                    />
                </div>
                <div className={`${customClasses} ${data[3].additionalStyles}`}>
                    <ProductCardType4
                        href={data[3].href}
                        imgSrc={data[3].imgSrc}
                        description={data[3].description}
                    />
                </div>
                <div className={`${customClasses} ${data[4].additionalStyles}`}>
                    <ProductCardType5
                        href={data[4].href}
                        imgSrc={data[4].imgSrc}
                    />
                </div>
                <div className={`${customClasses} ${data[5].additionalStyles}`}>
                    <ProductCardType3
                        href={data[5].href}
                        imgSrc={data[5].imgSrc}
                        rate={data[5].rate}
                        name={data[5].name}
                        price={data[5].price}
                        discount={data[5].discount}
                    />
                </div>
                <div className={`${customClasses} ${data[6].additionalStyles}`}>
                    <ProductCardType3
                        href={data[6].href}
                        imgSrc={data[6].imgSrc}
                        rate={data[6].rate}
                        name={data[6].name}
                        price={data[6].price}
                        discount={data[6].discount}
                    />
                </div>
                <div className={`${customClasses} ${data[7].additionalStyles}`}>
                    <ProductCardType5
                        href={data[7].href}
                        imgSrc={data[7].imgSrc}
                    />
                </div>
            </div>
        </div>
    );
};
export default BestSelling;

const TextBanner = () => {
    return (
        <div className=" w-24 bg-other-4  rounded-[20px] flex items-center">
            <Typography
                variant="title5"
                component="div"
                style={{ writingMode: "vertical-rl" }}
                className="rotate-180 h-full mx-auto text-center max-h-[50%] lowerLg:max-h-[80%]"
            >
                This month’s best selling
            </Typography>
        </div>
    );
};
