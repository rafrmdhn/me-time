import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MusicCard from './musiccard'; // Assuming your MusicCard component is in the same directory

const MusicCardWrapper = () => {
  const history = useHistory();

  useEffect(() => {
    const localStorageKey = localStorage.getItem('UserKey');
    if (!localStorageKey) {
      history.push('/login');
    }
  }, [history]);

  return <MusicCard />;
};

export default MusicCardWrapper;
