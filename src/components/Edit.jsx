import React, { useState } from 'react';
import axios from 'axios';

const UpdateDeleteUser = () => {
  const [userId, setUserId] = useState('');
  const [updatedName, setUpdatedName] = useState('');
  const [updatedEmail, setUpdatedEmail] = useState('');
  const [updatedPhone, setUpdatedPhone] = useState('');

  const handleDeleteUser = async () => {
    try {
      const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
      console.log('User deleted:', res.data);
      // You can update the user list here if needed.
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleUpdateUser = async () => {
    try {
      const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        name: updatedName,
        email: updatedEmail,
        phone: updatedPhone,
      });
      console.log('User updated:', res.data);
      // You can update the user list here if needed.
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div>
      <h2>Update/Delete User</h2>
      <div>
        <label>User ID:</label>
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
      </div>
      <div>
        <label>Updated Name:</label>
        <input type="text" value={updatedName} onChange={(e) => setUpdatedName(e.target.value)} />
      </div>
      <div>
        <label>Updated Email:</label>
        <input type="text" value={updatedEmail} onChange={(e) => setUpdatedEmail(e.target.value)} />
      </div>
      <div>
        <label>Updated Phone:</label>
        <input type="text" value={updatedPhone} onChange={(e) => setUpdatedPhone(e.target.value)} />
      </div>

      <button onClick={handleDeleteUser}>Delete User</button>
      <button onClick={handleUpdateUser}>Update User</button>
    </div>
  );
};

export default UpdateDeleteUser;
