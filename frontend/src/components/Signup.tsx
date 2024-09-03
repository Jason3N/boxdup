import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext';


function Signup() {
  // State management for username and password inputs
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();  
  const { login } = useUser();  // Use the context to log in the user

  // Function to handle login
  const tryLogin = async (username: string, password: string): Promise<void> => {
    try {
      const response = await axios.get(`http://localhost:8080/users/login/${username}/${password}`);
      // Handle successful response here, if needed
      console.log(response.data);
      login(response.data);
      navigate('/profile', { state: { userData: response.data } });  // Redirect to profile with response data
    } catch (error) {
      // Handle error
      console.error('Error logging in:', error);
    }
  };

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();  // Prevent default form submission behavior
    tryLogin(username, password);  // Call tryLogin with the current state values
  };

  return (
    <>
      <div>
        <div className="ml-10">
          sign up here!
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-24">
              <input
                type="text"
                placeholder="username"
                className="mt-3 mb-5 border-2 border-black"
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
              />
              <input
                type="password"
                placeholder="password"
                className="border-2 border-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}  
              />
            </div>
            <button type="submit" className="mt-3">log In</button>
          </form>
        </div>
        <div>
            already have an account? log in <a href="/login">here</a>
        </div>
      </div>
    </>
  );
}

export default Signup;
