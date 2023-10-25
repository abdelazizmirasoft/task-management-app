import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const TaskDetail = ({ task }) => {
  return (
    <div>
      <Typography mt={2} align={'center'} component={"h3"} variant={"h3"}>
        Task Detail
      </Typography>
      <Card sx={{ display: 'flex' }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Title
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {task.title}
          </Typography>
          <Typography variant="h5" component="div">
            Description
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {task.description}
          </Typography>
          <Typography variant="h5" component="div">
            Due date
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {task.dueDate}
          </Typography>
          <Typography variant="h5" component="div">
            Status
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {task.status}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default TaskDetail;