import React, { useState } from 'react';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from './UserContext';

interface LoginProps {
  onLoginSuccess: () => void; // פרופ שיתקבל לאחר התחברות מוצלחת
}

export const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { dispatch } = useUserContext();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      const user = { firstName: 'SHIRA', lastName: 'GABAY', email: 'SHIRA.doe@example.com', password, address: '', phone: '' };
      dispatch({ type: 'SET_USER', payload: user });
      localStorage.setItem('user', JSON.stringify(user));
      onLoginSuccess(); // סגירת המודל של התחברות לאחר התחברות מוצלחת
      navigate('/home');
    } else {
      setError('שם משתמש או סיסמה אינם נכונים');
    }
  };

  return (
    <Dialog open={true}>
      <DialogTitle>התחבר</DialogTitle>
      <DialogContent>
        <TextField
          label="שם משתמש"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="סיסמה"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          style={{ marginTop: '20px' }}
        >
          התחבר
        </Button>
        {error && <Typography color="error" variant="body2" style={{ marginTop: '10px' }}>{error}</Typography>}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onLoginSuccess()}>סגור</Button>
      </DialogActions>
    </Dialog>
  );
};
