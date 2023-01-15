import React from "react";
import { Category } from "react-iconly";
import { Divider, Typography } from "@mui/material";
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper";
import EachCategoryItem from "./eachCategoryItem";

interface Props {
    data: {
        id: string | number;
        name: string;
        isHighlighted: boolean;
        url: string;
    }[];
}

const CategoryList: React.FC<Props> = ({ data }) => {
    return (
        <div className="pb-6 -mx-4">
            <Swiper
                slidesPerView="auto"
                mousewheel
                modules={[Navigation, Mousewheel]}
                className="mySwiper no-1 no-2 px-4"
                navigation
            >
                <SwiperSlide className="w-auto">
                    <div className="flex items-center">
                        <div className="flex items-center gap-1">
                            <Category size={24} filled />
                            <Typography variant="title3" className="pt-1">
                                Categories
                            </Typography>
                        </div>
                        <Divider
                            className="mx-4 my-auto h-8 bg-secondary-1"
                            orientation="vertical"
                            flexItem
                        />
                    </div>
                </SwiperSlide>
                {data.map(({ id, name, isHighlighted, url }) => (
                    <SwiperSlide key={id} className="w-auto">
                        <EachCategoryItem
                            name={name}
                            isHighlighted={isHighlighted}
                            imgSrc={url}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
export default CategoryList;
