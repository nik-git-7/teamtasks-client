import React from 'react';
import TaskView from "./page-project-tasks/TaskView";
import Task from "./model/Task";
import {Container, createMuiTheme, IconButton, ThemeProvider} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from "./general/AppBar";
import AppBarMenuItem from "./general/AppBarMenuItem";
import {Add, ArrowBack, Delete, Edit, Router} from "@material-ui/icons";
import 'typeface-nunito';
import ProjectTasks from "./page-project-tasks/ProjectTasks";
import TaskDetails from "./page-task-details/TaskDetails";
import ProjectsView from "./page-projects/ProjectsView";
import ProjectsContainer from "./page-projects/ProjectsContainer";
import { Route } from 'react-router-dom';
import ProjectTasksContainer from "./page-project-tasks/ProjectTasksContainer";

function App() {
    let task = new Task(2, 'Mein Task', 'Meine Beschreibung', null, 3, 'todo', [], []);

    const theme = createMuiTheme({
        palette: {

        },
        typography: {
            fontFamily: "Nunito, sans-serif",
            body2: {
                color: "textSecondary",
                fontSize: '0.7em'
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            {/*<Router>
                <Route path={"/"} exact component={ProjectsContainer}/>
                <Route path={"/project-tasks"} component={ProjectTasksContainer}/>
                <Route path={"/project-tasks"} component={ProjectTasksContainer}/>
            </Router>*/}
            <ProjectTasksContainer projectId={123} />
            <br />
        </ThemeProvider>
    );
}

export default App;
