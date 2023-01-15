import React from "react";
import Image from "next/image";
import { Buy, Home, Notification } from "react-iconly";
import HeaderBtn from "../HeaderBtn";
import CategoryList from "../CategoryList";
import SearchField from "../SearchField/SearchField";
import { SectionContainerType1 } from "../SectionContainer";

const sampleCategoryData = [
    {
        id: 1,
        name: "Trending",
        isHighlighted: true,
        url: "/images/icons/Fire.png",
    },
    {
        id: 2,
        name: "Arts & Crafts",
        isHighlighted: false,
        // eslint-disable-next-line sonarjs/no-duplicate-string
        url: "/images/icons/Safety Pin.png",
    },
    {
        id: 3,
        name: "Beauty",
        isHighlighted: false,
        url: "/images/icons/Safety Pin.png",
    },
    {
        id: 4,
        name: "Eat & Drink",
        isHighlighted: false,
        url: "/images/icons/Safety Pin.png",
    },
    {
        id: 5,
        name: "Electronics",
        isHighlighted: false,
        url: "/images/icons/Safety Pin.png",
    },
    {
        id: 6,
        name: "Fashion",
        isHighlighted: false,
        url: "/images/icons/Safety Pin.png",
    },
    {
        id: 7,
        name: "Health",
        isHighlighted: false,
        url: "/images/icons/Safety Pin.png",
    },
    {
        id: 8,
        name: "Kitchen",
        isHighlighted: false,
        url: "/images/icons/Safety Pin.png",
    },
    {
        id: 9,
        name: "Sports",
        isHighlighted: false,
        url: "/images/icons/Safety Pin.png",
    },
    {
        id: 10,
        name: "Stationary",
        isHighlighted: false,
        url: "/images/icons/Safety Pin.png",
    },
    {
        id: 11,
        name: "Tools",
        isHighlighted: false,
        url: "/images/icons/Safety Pin.png",
    },
];

const Navbar: React.FC = () => {
    return (
        <SectionContainerType1 className="bg-neutral-bg2">
            <div className="flex items-center pt-8 pb-12 mobile:pt-4 mobile:pb-6">
                <div className="w-14 h-14 mr-24 xs:mr-12 sm:mr-10 xs:mr-0">
                    <Image
                        priority
                        width={56}
                        height={56}
                        src="/images/logo.png"
                        layout="fixed"
                    />
                </div>
                <span className="w-full mobile:hidden">
                    <SearchField />
                </span>
                <div className="ml-auto flex items-center gap-5">
                    <HeaderBtn Icon={Home} className="xs:hidden" />
                    <HeaderBtn Icon={Notification} indicatorNumber={2} />
                    <HeaderBtn Icon={Buy} indicatorNumber={8} />
                </div>
            </div>
            <span className="hidden mobile:block mobile:mb-6">
                <SearchField />
            </span>
            <CategoryList data={sampleCategoryData} />
        </SectionContainerType1>
    );
};

export default Navbar;
