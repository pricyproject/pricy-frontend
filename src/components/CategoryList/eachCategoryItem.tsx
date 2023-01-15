import Image from "next/image";
import { IconButton, Typography } from "@mui/material";
import React from "react";
import { alertComingSoon } from "../../utils/helper";

interface Props {
    name: string;
    isHighlighted: boolean;
    imgSrc: string;
}

const EachCategoryItem: React.FC<Props> = ({ name, isHighlighted, imgSrc }) => {
    return (
        <IconButton
            className={`flex items-center whitespace-nowrap mx-1 rounded-full px-2 py-2 h-10 text-black text-base ${
                isHighlighted ? "bg-primary-1" : "bg-neutral-bg1"
            }`}
            component="div"
            aria-label={name}
            onClick={alertComingSoon}
        >
            <span
                className={`mr-2 rounded-full w-8 h-8 flex items-center justify-center p-1 ${
                    isHighlighted ? "bg-other-1" : "bg-other-2"
                }`}
            >
                <Image src={imgSrc} width={20} height={20} layout="fixed" />
            </span>
            <Typography className="text-secondary-1 pt-1" variant="title4">
                {name}
            </Typography>
        </IconButton>
    );
};
export default EachCategoryItem;
