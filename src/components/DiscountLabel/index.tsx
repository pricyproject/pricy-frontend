import React from "react";
import { Typography } from "@mui/material";

interface Props {
    discount: number;
}

const DiscountLabel: React.FC<Props> = ({ discount }) => (
    <Typography
        variant="body7"
        component="div"
        className="absolute bg-secondary-1 rounded-full h-6 w-[70px] text-neutral-bg1 flex items-center justify-center text-xs rounded-tl-none right-0 -bottom-2 pt-1"
    >
        -{discount}%
    </Typography>
);

export default DiscountLabel;
