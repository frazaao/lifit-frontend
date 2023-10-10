import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        brand: {
            green: "#259444",
            purple: "#5748B7",
            background: "#F6F6F6",
            red: "#D14316",
            white: "#FFFFFF",
            text: "rgba(0,0,0,0.6)",
            heading: "rgba(0,0,0,0.85)",
            gray: "#E2E8F0",
        },
    },
    fonts: {
        body: "",
        heading: "",
    },
});

export default theme;
