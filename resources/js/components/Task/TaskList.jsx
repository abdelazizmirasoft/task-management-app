import React from 'react';
import {Button} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Typography} from "@mui/material";

const TaskList = ({ tasks, viewTask, editTask, deleteTask }) => {
  
    return (
    <div>
      <Typography mt={2} align={'center'} component={"h3"} variant={"h3"}>
        Tasks List
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}  size="small"  aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ color: 'blue' }}>Title</TableCell>
              <TableCell style={{ color: 'blue' }}>Description</TableCell>
              <TableCell style={{ color: 'blue' }}>Due date</TableCell>
              <TableCell style={{ color: 'blue' }}>Status</TableCell>
              <TableCell style={{ color: 'blue' }}>Operations</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task)  => (
              <TableRow
                key={task.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {task.title}
                </TableCell>
                <TableCell align="left">{task.description}</TableCell>
                <TableCell align="left">{task.dueDate}</TableCell>
                <TableCell align="left">{task.status}</TableCell>
                <TableCell align="center">
                    <Button 
                      color={'info'}
                      onClick={() => viewTask(task)}
                    >
                        View
                    </Button>
                    <Button 
                        color={'warning'} 
                        onClick={() => editTask(task)}
                    >
                        Edit
                    </Button>
                    <Button 
                        color={'error'} 
                        onClick={() => deleteTask(task.id)}
                    >
                        Delete
                    </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
    </div>
  );
};

export default TaskList;