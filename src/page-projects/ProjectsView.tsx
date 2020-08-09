import React from 'react';
import AppBar from "../general/AppBar";
import {
    Container,
    List,
    ListItem, ListItemText
} from "@material-ui/core";
import Divider from "../general/Divider";
import {Add, Group} from "@material-ui/icons";

import AppBarMenuItem from "../general/AppBarMenuItem";
import Project from "../model/Project";

function ProjectsView() {
    const menu = [
        new AppBarMenuItem(<Group />, 'Icon', null, 'left'),
        new AppBarMenuItem(<Add />, 'Erstellen', () => {}, 'right')
    ];

    const projects = [
        new Project(1, 'Mein Projekt', 'Dies ist das erste Projekt. Dies ist das erste Projekt.'),
        new Project(2, 'Mein Projekt', 'Dies ist das zweite Projekt. Dies ist das zweite Projekt. Dies ist das zweite Projekt.'),
        new Project(3, 'Mein Projekt', 'Dies ist das dritte Projekt'),
        new Project(4, 'Mein Projekt', 'Dies ist das vierte Projekt. Dies ist das vierte Projekt. Dies ist das vierte Projekt. Dies ist das vierte Projekt. Dies ist das vierte Projekt. Dies ist das vierte Projekt. Dies ist das vierte Projekt. Dies ist das vierte Projekt. '),
        new Project(5, 'Mein Projekt', 'Dies ist das fünfte Projekt.'),
    ];


    return (
        <>
            <AppBar title={"Team Tasks"} menu={menu} titleClick={null}/>
            <Container>
                <List>
                    {projects.map((project) => (
                        <>
                            <ListItem button key={project.id}>
                                <ListItemText primary={project.title} secondary={project.description} />
                            </ListItem>
                            <Divider />
                        </>
                    ))}
                </List>
            </Container>
        </>
    )
}

export default ProjectsView;