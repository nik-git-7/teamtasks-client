import React, {FC} from 'react';
import {Box, withStyles} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";

const FooterTriangle = withStyles({
    root: {
        width: "0",
        height: "0",
        marginTop: "100px",
        borderLeft: "100vw solid transparent",
        borderRight: "0 solid transparent",
        borderBottom: "50px solid " + grey.A700
    }
})(Box);

const FooterBox = withStyles({
    root: {
        paddingTop: "24px",
        paddingBottom: "24px",
        backgroundColor: grey.A700,
        color: grey.A100,
    }
})(Box);

const FooterContainer = withStyles({
    root: {
        width: "100vw",
        marginTop: "100px",
        position: "relative",
        bottom: 0
    }
})(Box);



interface Props {
}

const Footer: FC<Props> = ({children}) => {
    return (
        <>
            <FooterTriangle />
            <FooterBox>{children}</FooterBox>
        </>
    )
};

export default Footer;
