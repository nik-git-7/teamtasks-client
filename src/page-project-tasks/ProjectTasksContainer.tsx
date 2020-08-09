import React, {useEffect, useState} from 'react'
import axios from "axios";

import ProjectTasks from "./ProjectTasks";
import {PROJECT_TASKS, SERVER} from "../const";
import Task from "../model/Task";

interface Props {
    projectId: number;
}

function ProjectTasksContainer({projectId}: Props) {
    const [data, setData] = useState<Task[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get(SERVER + PROJECT_TASKS + '/' + projectId);
            setData(data);
        }
    });
    const tasks = [
        new Task(1, 'Mein Task', 'Meine Beschreibung', null, 3, 'todo', [], []),
        new Task(2, 'Mein Task', 'Meine Beschreibung', null, 3, 'todo', [], []),
        new Task(3, 'Mein Task', 'Meine Beschreibung', null, 3, 'todo', [], []),
        new Task(4, 'Mein Task', 'Meine Beschreibung', null, 3, 'todo', [], []),
    ]

    return (
        <ProjectTasks tasks={data} />
    )
}

export default ProjectTasksContainer;