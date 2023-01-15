import React from "react";
import Image from "next/image";
import Link from "../Link";

interface Props {
    productList: { imgSrc: string; href: string }[];
}

const ProductCardType6 = React.memo(({ productList }: Props) => {
    return (
        <div className="grid grid-flow-col grid-cols-2 grid-rows-2 gap-2 h-[260px] w-[260px] rounded-[20px] shadow-1 px-[6px] py-[5px] ">
            {productList.map(({ href, imgSrc }) => (
                <div className="col-span-1 row-span-1 relative">
                    <Link href={href}>
                        <div className="w-full h-full rounded-[20px]">
                            <div className="relative w-full h-full rounded-[20px]">
                                <Image
                                    src={imgSrc}
                                    layout="fill"
                                    className="rounded-[20px]"
                                />
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
});

export default ProductCardType6;
