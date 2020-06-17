import React from 'react';
import AppBarMenuItem from "../general/AppBarMenuItem";
import {Add, ArrowBack, Delete, Edit, ThumbUp, ThumbDown} from "@material-ui/icons";
import Task from "../model/Task";
import AppBar from "../general/AppBar";
import {Button, CardContent, Container, Fab, Grid, IconButton, Switch, Typography as T} from "@material-ui/core";
import Card from "../general/Card";
import Solution from "../model/Solution";
import Divider from "../general/Divier";

function TaskDetails() {

    const menu = [
        new AppBarMenuItem(<ArrowBack/>, 'Go Back', () => {
        }, 'left'),
        new AppBarMenuItem(<Edit/>, 'Bearbeiten', () => {
        }, 'right'),
    ];

    const solutions = [
        new Solution(1, "Erste Lösung", "Das ist eine Lösung. Das ist eine Lösung. Das ist eine Lösung. Das ist eine Lösung. Das ist eine Lösung. ",
            5, 2
        ),
        new Solution(2, "Zweite Lösung", "Das ist eine Lösung. Das ist eine Lösung. Das ist eine Lösung. Das ist eine Lösung. Das ist eine Lösung. ",
            1, 3
        )
    ]
    const task: Task = new Task(2, 'Mein Task', 'Das ist eine Beschreibung. Das ist eine Beschreibung. Das ist eine Beschreibung. Das ist eine Beschreibung. Das ist eine Beschreibung. Das ist eine Beschreibung. Das ist eine Beschreibung. Das ist eine Beschreibung. Das ist eine Beschreibung. Das ist eine Beschreibung. ',
        null, 3, 'doing', [1, 2, 3], []);

    return (
        <>
            <AppBar title={task.title} menu={menu} titleClick={() => {
            }}/>
            <Container>
                <Card>
                    <CardContent>
                        <T>{task.description}</T>
                        <Divider/>
                        <Grid container>
                            <Grid item xs={6}><T>Deadline: {task.deadline == null ? '-' : task.deadline}</T></Grid>
                            <Grid item xs={6}><T>Priorität: {task.priority}</T></Grid>
                        </Grid>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Grid container>
                            <Grid item xs={9}>
                                <T component={"p"}>Ich arbeite an diesem Task</T>
                                <T variant={"body2"} component={"p"}>Informieren dein Team, damit es sich um andere
                                    Tasks kümmert.</T>
                                {task.status == "doing" && (
                                    <T variant={"body2"} component={"p"}>Es arbeiten
                                        bereits {task.doingPersons.length} Personen an dem Task.</T>
                                )}
                            </Grid>
                            <Grid item container xs={3} justify={"flex-end"}>
                                <Switch
                                    color={"primary"}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
                {solutions.map((solution) => (
                    <Card key={solution.id}>
                        <CardContent>
                            <T variant={"h6"}>{solution.title}</T>
                            <T>{solution.content}</T>
                            <IconButton><ThumbUp/></IconButton><T component={"span"}>{solution.likes}</T>
                            <IconButton><ThumbDown/></IconButton><T component={"span"}>{solution.dislikes}</T>
                        </CardContent>
                    </Card>
                ))}
                <Grid container justify={"center"}>
                    <Button variant={"contained"} color={"primary"}>Lösung</Button>
                </Grid>
            </Container>
        </>
    )
}

export default TaskDetails;