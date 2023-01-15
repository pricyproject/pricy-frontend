import type { NextPage } from "next";
import React from "react";
// eslint-disable-next-line import/no-unresolved
import { useMediaQuery } from "@mui/material";
import { SectionContainerType1 } from "../components/SectionContainer";
import BestSelling from "../containers/BestSelling";
import ProductsSlide from "../containers/ProductsSlide";
import Banner from "../components/Banner";
import FeaturedProducts from "../containers/FeaturedProducts";
import AdvertisementBanner from "../containers/advertisementBanner";

const Home: NextPage = () => {
    const isLowerSm = useMediaQuery("(max-width:1200px)");

    return (
        <div>
            <SectionContainerType1>
                <BestSelling />
            </SectionContainerType1>

            {isLowerSm && (
                <SectionContainerType1>
                    <div className="mt-7">
                        <Banner imgSrc="/images/sample/banner.png" href="/" />
                    </div>
                </SectionContainerType1>
            )}

            <SectionContainerType1
                className="mt-7"
                title="Fruits Sale"
                buttonText="More"
            >
                <ProductsSlide />
            </SectionContainerType1>

            {isLowerSm && (
                <SectionContainerType1>
                    <div className="mt-7">
                        <Banner imgSrc="/images/sample/banner.png" href="/" />
                    </div>
                </SectionContainerType1>
            )}

            {!isLowerSm && (
                <SectionContainerType1>
                    <div className="grid grid-cols-3 gap-10 md:gap-4 mt-7">
                        <Banner imgSrc="/images/sample/banner.png" href="/" />
                        <Banner imgSrc="/images/sample/banner.png" href="/" />
                        <Banner imgSrc="/images/sample/banner.png" href="/" />
                    </div>
                </SectionContainerType1>
            )}

            <SectionContainerType1
                title="Featured Products"
                buttonText="More"
                className="mt-7"
            >
                <FeaturedProducts />
            </SectionContainerType1>

            {isLowerSm && (
                <SectionContainerType1>
                    <div className="mt-7">
                        <Banner imgSrc="/images/sample/banner.png" href="/" />
                    </div>
                </SectionContainerType1>
            )}

            <SectionContainerType1 className="mt-7" full>
                <AdvertisementBanner />
            </SectionContainerType1>
        </div>
    );
};

export default Home;
