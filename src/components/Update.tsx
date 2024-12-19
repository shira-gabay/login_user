import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
import { useUserContext } from './UserContext';

interface UpdateUserProps {
  onClose: () => void; // פונקציה לסגור את המודל לאחר עדכון
}

const UpdateUser: React.FC<UpdateUserProps> = ({ onClose }) => {
  const { state, dispatch } = useUserContext();
  const [newName, setNewName] = useState(state.firstName);
  const [newLastName, setNewLastName] = useState(state.lastName);

  const handleUpdate = () => {
    dispatch({
      type: 'SET_USER',
      payload: { ...state, firstName: newName, lastName: newLastName },
    });
    localStorage.setItem('user', JSON.stringify({ ...state, firstName: newName, lastName: newLastName }));
    onClose(); // סגירת המודל לאחר עדכון
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>עדכון פרטי משתמש</DialogTitle>
      <DialogContent>
        <TextField
          label="שם פרטי"
          variant="outlined"
          fullWidth
          margin="normal"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <TextField
          label="שם משפחה"
          variant="outlined"
          fullWidth
          margin="normal"
          value={newLastName}
          onChange={(e) => setNewLastName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>ביטול</Button>
        <Button onClick={handleUpdate} variant="contained">שמור</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateUser;
