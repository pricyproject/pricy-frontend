import React from "react";
import { Button, Typography } from "@mui/material";
import { alertComingSoon } from "../../utils/helper";

interface Props {
    children: React.ReactNode;
    className?: string | undefined;
    title?: string | undefined;
    buttonText?: string | undefined;
    handleClickButton?: void;
    full?: boolean;
}

const SectionContainerType1: React.FC<Props> = ({
    children,
    className = "",
    title = "",
    buttonText = "",
    handleClickButton = alertComingSoon,
    full = false,
}) => {
    return (
        <div className={`${full ? "" : "px-4"} ${className}`}>
            <div className={`${full ? "" : "max-w-container"} mx-auto`}>
                <ContainerHeading
                    title={title}
                    buttonText={buttonText}
                    handleClickButton={handleClickButton}
                />
                {children}
            </div>
        </div>
    );
};
export default SectionContainerType1;

const ContainerHeading = ({ title, buttonText, handleClickButton }: any) => (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
        {title || buttonText ? (
            <div className="flex items-center">
                {title ? (
                    <Typography variant="title2" component="div">
                        {title}
                    </Typography>
                ) : null}
                {buttonText ? (
                    <Button
                        variant="text"
                        onClick={handleClickButton}
                        className="ml-auto text-xl text-primary-2"
                    >
                        <Typography
                            component="span"
                            variant="title3"
                            className="pt-1"
                        >
                            {buttonText}
                        </Typography>
                    </Button>
                ) : null}
            </div>
        ) : null}
    </>
);
