import React, { useState } from 'react';
import {
    Container,
    TextField,
    CssBaseline, 
    Button, 
    Box
} from '@mui/material';

const InputForm = ({ addTask, updateTask, initialData }) => {
  const [formData, setFormData] = useState(initialData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.id) {
      updateTask(formData);
    } else {
      addTask(formData);
    }
  };

  return (
    <Container maxWidth={"md"}>
      <CssBaseline/>
      <Box
        component={"form"} 
        onSubmit={handleSubmit} 
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
      >
        <Box 
          sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
          }}
        >
          <TextField 
            label="Title" 
            name="title" 
            id="title" 
            onChange={handleInputChange} 
            defaultValue={formData.title} 
            margin="normal"
            autoFocus
            required
          />

          <TextField 
            label="Description" 
            name="description" 
            defaultValue={formData.description} 
            onChange={handleInputChange} 
            margin="normal"
            required
          />

          <TextField 
            label="Due date" 
            name="dueDate" 
            defaultValue={formData.dueDate} 
            onChange={handleInputChange} 
            margin="normal"
            required
          />
        </Box>
        <Button
          variant={"outlined"}
          type={"submit"}
          sx={{mt: 3, mb: 2}}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default InputForm;