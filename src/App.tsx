import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { useUserContext } from './components/UserContext';
import { Login } from './components/Login';
import Home from './components/HomePage';
import UpdateUser from './components/Update';
import UserNameAvatar from './components/UserName_Avatar'; // הצגת שם משתמש + אובייקט Avatar

const App: React.FC = () => {
  const { state } = useUserContext(); // מצב המשתמש מהקונטקסט
  const [showLogin, setShowLogin] = useState(false); // מתי להציג את המודל של התחברות
  const [showUpdate, setShowUpdate] = useState(false); // מתי להציג את המודל של עדכון פרטי משתמש

  useEffect(() => {
    if (!state.firstName) {
      setShowLogin(true); // אם אין פרטי משתמש, נציג את מודל הלוגין
    }
  }, [state]); // תתעדכן כאשר state משתנה (אם המשתמש מתחבר)

  const handleLoginSuccess = () => {
    setShowLogin(false); // לאחר התחברות מוצלחת, נסגור את המודל של הלוגין
  };

  const handleUpdateSuccess = () => {
    setShowUpdate(false); // לאחר עדכון פרטי המשתמש, נסגור את המודל של עדכון
  };

  return (
    <div>
      {showLogin && <Login onLoginSuccess={handleLoginSuccess} />}
      
      {state.firstName ? (
        <div>
          <Home />
          <UserNameAvatar user={state} onUpdate={() => setShowUpdate(true)} />
        </div>
      ) : (
        <div>
          <Button onClick={() => setShowLogin(true)} variant="contained">התחבר</Button>
        </div>
      )}

      {showUpdate && <UpdateUser onClose={handleUpdateSuccess} />}
    </div>
  );
};

export default App;
