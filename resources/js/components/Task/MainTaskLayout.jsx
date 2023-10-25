import React, { useState, useEffect } from 'react';
import InputForm from './InputForm';
import TaskList from './TaskList';
import TaskDetail from './TaskDetail';
import TaskEdit from './TaskEdit';
import user from "../../models/user";
import {Typography} from "@mui/material";

function MainTaskLayout() {
    const baseURL = "http://127.0.0.1:8000/api/v1/tasks";
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);

    // Fetch tasks on component mount
    useEffect(() => {
        fetchTasks();
    }, []);

    // Fetch tasks from API
    const fetchTasks = async () => {
        try {
            const response = await fetch(
                    baseURL, 
                    {
                        headers: {
                            'Authorization': `Bearer ${user.getToken()}`,
                        },
                    }
                );

            const data = await response.json();
            setTasks(data.data);
        } catch (error) {
        console.error('Error fetching tasks:', error);
        }
    };

    // Create a new task
    const addTask = async (taskData) => {
        try {
            console.log(taskData);
            const response = await fetch(baseURL, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.getToken()}`,
                },
                body: JSON.stringify(taskData),
            });
            const data = await response.json();
            setTasks([...tasks, data.data]);
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    // Update an existing task
    const updateTask = async (taskData) => {
        try {
            const response = await fetch(`${baseURL}/${taskData.id}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.getToken()}`,
                },
                body: JSON.stringify(taskData),
            });
            const updatedTask = await response.json();
            
            const updatedTasks = tasks.map((task) =>
                task.id === updatedTask.data.id ? updatedTask.data : task
            );

            setTasks(updatedTasks);
            setSelectedTask(null);
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    // Delete a task
    const deleteTask = async (taskId) => {
        try {
            await fetch(`${baseURL}/${taskId}`, {
                method: 'DELETE',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.getToken()}`,
                },
            });
            const updatedTasks = tasks.filter((task) => task.id !== taskId);
            setTasks(updatedTasks);
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <div>

        <Typography align={'center'} component={"h1"} variant={"h2"}>
            Task CRUD Operations
        </Typography>

        <InputForm addTask={addTask} updateTask={updateTask} initialData={{ id: '', title: '', description: '', dueDate: '' }} />
        <TaskList tasks={tasks} viewTask={setSelectedTask} editTask={setSelectedTask} deleteTask={deleteTask} />
        {selectedTask ? (
            <div>
            <TaskDetail task={selectedTask} />
            <TaskEdit task={selectedTask} updateTask={updateTask} />
            </div>
        ) : null}
        </div>
    );
}

export default MainTaskLayout;