import React from 'react';

interface User {
  firstName: string;
  lastName: string;
}

interface UserNameAvatarProps {
  user: User;
  onUpdate: () => void;
}

const UserNameAvatar: React.FC<UserNameAvatarProps> = ({ user, onUpdate }) => {
  const avatarLetter = user.firstName.charAt(0).toUpperCase();
  return (
    <div>
      <div
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: '#007bff',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '20px',
        }}
      >
        {avatarLetter}
      </div>

      <h3>{user.firstName} {user.lastName}</h3>

      {/* כפתור לעדכון */}
      <button onClick={onUpdate}>עדכן פרטים</button>
    </div>
  );
};

export default UserNameAvatar;
