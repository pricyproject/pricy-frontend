module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    important: "#__next",
    corePlugins: {
        preflight: false,
    },
    theme: {
        screens: {
            xs: { min: "0px", max: "600px" },
            sm: { min: "600px", max: "900px" },
            mobile: { min: "0px", max: "900px" },
            upperSm: { min: "900px" },
            lowerSm: { max: "900px" },
            md: { min: "900px", max: "1200px" },
            lg: { min: "1200px", max: "1536px" },
            upperLg: { min: "1200px" },
            lowerLg: { max: "1200px" },
            xl: { min: "1536px" },
        },
        colors: {
            primary: {
                1: "#ECD56F",
                2: "#59ADC5",
            },
            secondary: {
                1: "#000000",
            },
            neutral: {
                bg1: "#FFFFFF",
                bg2: "#F5F4F4",
                primaryText1: "#FFFFFF",
                primaryText2: "#000000",
                primaryText3: "#626262",
            },
            status: {
                success: "#11AE50",
                warning: "#F28142",
                error: "#F84960",
            },
            other: {
                1: "#F5E7AB",
                2: "#EFEFEF",
                3: "#ACACAC",
                4: "#F2F3F7",
                5: "#777777",
                6: "#FFFADA",
            },
        },
        extend: {
            maxWidth: {
                container: "1700px",
            },
            boxShadow: {
                1: "0px 3px 15px rgba(0, 0, 0, 0.1)",
                2: "0px 2px 30px rgba(0, 0, 0, 0.06)",
            },
        },
    },
    plugins: [],
};
