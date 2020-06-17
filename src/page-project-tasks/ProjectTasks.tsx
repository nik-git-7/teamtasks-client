import React from 'react';
import AppBar from "../general/AppBar";
import {Container, ThemeProvider} from "@material-ui/core";
import TaskView from "./TaskView";
import AppBarMenuItem from "../general/AppBarMenuItem";
import {Add, ArrowBack, Delete, Edit} from "@material-ui/icons";
import Task from "../model/Task";

function ProjectTasks() {

    const menu = [
        new AppBarMenuItem(<ArrowBack />, 'Go Back', () => {}, 'left'),
        new AppBarMenuItem(<Add />, 'Add', () => {}, 'right'),
        new AppBarMenuItem(<Edit />, 'Bearbeiten', () => {}, 'hidden'),
        new AppBarMenuItem(<Delete />, 'Löschen', () => {}, 'hidden'),
    ];
    const tasks = [
        new Task(1, 'Mein Task', 'Meine Beschreibung', null, 3, 'todo', [], []),
        new Task(2, 'Mein Task', 'Meine Beschreibung', null, 3, 'todo', [], []),
        new Task(3, 'Mein Task', 'Meine Beschreibung', null, 3, 'todo', [], []),
        new Task(4, 'Mein Task', 'Meine Beschreibung', null, 3, 'todo', [], []),

    ]

    return (
        <>
            <AppBar title={"Team Tasks"} menu={menu} titleClick={() => {}} />
            <Container>
                {}
                {tasks.map((task, index) => (
                    <TaskView key={index} task={task} showTaskDetails={id => {}} />
                ))}
            </Container>
        </>
    )
}

export default ProjectTasks;