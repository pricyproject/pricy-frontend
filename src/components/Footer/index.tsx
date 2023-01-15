import React from "react";
import { Buy, Home, Notification } from "react-iconly";
import { Typography } from "@mui/material";
import HeaderBtn from "../HeaderBtn";
import Link from "../Link";

const Dots = () => (
    <div className="rounded-full w-1 h-1 bg-secondary-1 mx-[6px]" />
);

const Footer: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-neutral-bg2 py-11 text-center">
            <div className="flex items-center justify-center gap-2">
                <HeaderBtn Icon={Home} />
                <HeaderBtn Icon={Notification} />
                <HeaderBtn Icon={Buy} />
            </div>

            <Typography
                component="div"
                variant="body3"
                className="flex justify-center items-center flex-wrap pt-5 pb-3"
            >
                <Link href="/">Info</Link>
                <Dots />
                <Link href="/">Support</Link>
                <Dots />
                <Link href="/">Help Center</Link>
                <span className="basis-full h-2" />
                <Link href="/">Terms of Use</Link>
                <Dots />
                <Link href="/">Privacy Policy</Link>
            </Typography>
            <Typography variant="body7" className="mr-1">
                <span className="mr-1">©</span>
                <span><script>new Date().getFullYear();</script> Pricy C, Inc.</span>
            </Typography>
        </div>
    );
};
export default Footer;
