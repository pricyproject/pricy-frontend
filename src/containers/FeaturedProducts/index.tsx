// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper";
import React from "react";
import ProductCardType2 from "../../components/ProductCard/Type2";
import { ProductCardType6 } from "../../components/ProductCard";

const FeaturedProducts = () => {
    return (
        <div className="-mx-4">
            <Swiper
                breakpoints={{
                    350: {
                        slidesPerView: 1,
                    },
                    700: {
                        slidesPerView: 2,
                    },
                    900: {
                        slidesPerView: "auto",
                    },
                }}
                spaceBetween={16}
                modules={[Navigation, Mousewheel]}
                className="mySwiper no-1 py-5 px-4"
                navigation
            >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(a => (
                    <SwiperSlide key={a} className="w-auto">
                        {a !== 2 && a !== 6 ? (
                            <ProductCardType2
                                href="/"
                                imgSrc="/images/sample/FeaturedProducts/4.png"
                                categoryName="Game"
                            />
                        ) : (
                            <ProductCardType6
                                productList={[
                                    {
                                        href: "/",
                                        imgSrc: "/images/sample/FeaturedProducts/4.png",
                                    },
                                    {
                                        href: "/",
                                        imgSrc: "/images/sample/FeaturedProducts/4.png",
                                    },
                                    {
                                        href: "/",
                                        imgSrc: "/images/sample/FeaturedProducts/4.png",
                                    },
                                    {
                                        href: "/",
                                        imgSrc: "/images/sample/FeaturedProducts/4.png",
                                    },
                                ]}
                            />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
export default FeaturedProducts;
