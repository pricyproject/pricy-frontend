// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper";
import React from "react";
import { ProductCardType1 } from "../../components/ProductCard";

const ProductsSlide = () => {
    return (
        <div className="-mx-4">
            <Swiper
                breakpoints={{
                    350: {
                        slidesPerView: 1,
                    },
                    500: {
                        slidesPerView: 2,
                    },
                    600: {
                        slidesPerView: 3,
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
                        <ProductCardType1
                            imgSrc="/images/sample/boot.png"
                            name="Kiwi"
                            discount={50}
                            price={29}
                            stars={4.2}
                            href="/"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
export default ProductsSlide;
