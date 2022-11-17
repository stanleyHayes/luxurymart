import {createTheme} from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: "TTSquares"
    },
    shape: {
        borderRadius: 0
    },
    palette: {
        mode: "dark"
    }
});

export const THEMES = {theme};
