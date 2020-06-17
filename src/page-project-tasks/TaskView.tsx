import React from 'react';
import Task from "../model/Task";
import {Card as MuiCard, CardActionArea, CardContent, Grid, Typography as T, withStyles} from "@material-ui/core";
import Card from "../general/Card";

interface Props {
    task: Task;
    showTaskDetails: (taskId: number) => void;
}

export default function TaskView({task, showTaskDetails}: Props) {
    return (
        <Card onClick={() => {showTaskDetails(task.id)}}>
            <CardActionArea>
                <CardContent>
                    <T gutterBottom variant="h5" component="h5">
                        {task.title}
                    </T>
                    <Grid container spacing={1}>
                        <Grid item xs={9}>
                            <T component="p">
                                {task.description}
                            </T>
                        </Grid>
                        <Grid item xs={3}>
                            <T color="textSecondary" variant={"body2"}>Priority: {task.priority}</T>
                            <T color="textSecondary" variant={"body2"}>Deadline: {task.deadline == null ? '-' : task.deadline}</T>
                            <T color="textSecondary" variant={"body2"}>Solutions: {task.solutions.length}</T>
                            <T color="textSecondary" variant={"body2"}>Status:</T>
                            <T color="textSecondary" variant={"body2"}>{task.status} {task.doingPersons && (task.doingPersons)}</T>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    )
};