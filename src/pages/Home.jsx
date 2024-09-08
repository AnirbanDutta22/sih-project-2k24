import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <div style={styles.navbar}>
        <div style={styles.title}>MyApp</div>
        <button style={styles.loginButton} onClick={handleLoginClick}>
          Login
        </button>
      </div>
      <div style={styles.content}>
        <h1>Welcome to MyApp!</h1>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#282c34',
    color: 'white',
  },
  title: {
    fontSize: '24px',
  },
  loginButton: {
    backgroundColor: '#61dafb',
    border: 'none',
    borderRadius: '4px',
    color: 'white',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  content: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
};

export default Home;
