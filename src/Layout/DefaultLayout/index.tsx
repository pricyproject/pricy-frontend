import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

interface Props {
    children: React.ReactNode;
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default DefaultLayout;
