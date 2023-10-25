import React from 'react';
import InputForm from './InputForm';
import Typography from '@mui/material/Typography';

const TaskEdit = ({ task, updateTask }) => {
  return (
    <div>
      <Typography mt={2} align={'center'} component={"h3"} variant={"h3"}>
        Edit Task
      </Typography>
      <InputForm initialData={task} updateTask={updateTask} />
    </div>
  );
};

export default TaskEdit;