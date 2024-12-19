import React from 'react';
import { useUserContext } from './UserContext'; // Import the context

const Home: React.FC = () => {
  const { state } = useUserContext(); // Access the user from context

  if (!state.firstName) return <p>אין נתונים על המשתמש.</p>;

  return (
    <div>
      <h1>ברוך הבא, {state.firstName} {state.lastName}!</h1>
      <p>Email: {state.email}</p>
      <p>כתובת: {state.address}</p>
      <p>טלפון: {state.phone}</p>
      <button onClick={() => window.location.href = '/update'}>עדכן פרטים</button>
    </div>
  );
};

export default Home;
