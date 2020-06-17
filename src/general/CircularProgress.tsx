import React from "react";
import {Box as MuiBox, CircularProgress as MuiCircularProgress, withStyles} from "@material-ui/core";

const FlexBox = withStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
})(MuiBox)

export default function CircularProgress() {
    return <FlexBox><MuiCircularProgress /></FlexBox>
};