import Image from "next/image";
import React from "react";

const FavoriteBtn = () => (
    <div className="w-[15px] h-[17px]">
        <Image
            src="/images/icons/favorite.png"
            width={15}
            height={17}
            layout="responsive"
            className=""
        />
    </div>
);
export default FavoriteBtn;
