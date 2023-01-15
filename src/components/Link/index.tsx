import NextLink from "next/link";
import React from "react";

type Props = {
    href: string;
    children: React.ReactNode;
} & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

const Link: React.FC<Props> = ({ href, children, ...props }) => (
    <NextLink href={href}>
        {/* @ts-ignore */}
        <a {...props}>{children}</a>
    </NextLink>
);

export default Link;
