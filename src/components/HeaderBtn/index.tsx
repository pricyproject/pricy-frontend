import React from "react";
import { IconButton } from "@mui/material";
import { IconProps } from "react-iconly";
import Link from "../Link";

interface HeaderIconProps {
    Icon: React.ComponentType<IconProps>;
    indicatorNumber?: number;
    className?: string | undefined;
    href?: string;
}

const HeaderBtn: React.FC<HeaderIconProps> = ({
    Icon,
    indicatorNumber = 0,
    className,
    href = "/",
}) => {
    return (
        <Link className={className} href={href}>
            <IconButton className="bg-neutral-bg1  h-14 w-14 relative">
                {indicatorNumber ? (
                    <div className="absolute top-[-4px] right-0 w-5 h-5 text-xs rounded-full bg-primary-1 flex items-center justify-center text-xs font-medium">
                        {indicatorNumber}
                    </div>
                ) : null}
                <Icon size={30} primaryColor="#130F26" />
            </IconButton>
        </Link>
    );
};
export default HeaderBtn;
