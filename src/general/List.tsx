import React from 'react';
import {List as MuiList, ListItem, Typography as T, withStyles} from "@material-ui/core";

const MuiListStyled = withStyles({
    root: {
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 0,
        paddingRight: 0,

        "& *": {
            marginLeft: 0,
            marginRight: 0,
            paddingLeft: 0,
            paddingRight: 0
        }
    }
})(MuiList);

interface Props {
    values: any;
}
export default function List({values}: Props) {
    return (
        <MuiListStyled dense={true}>
            {values.map((value: any, index: number) => (
                <ListItem key={index}>
                    <T>{value}</T>
                </ListItem>
            ))}
        </MuiListStyled>
    )
};