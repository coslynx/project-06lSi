import React, { useState, useEffect } from 'react';
import { fetchScripts } from '../utils/api';
import ScriptList from '../components/ScriptList';

const Home = () => {
  const [scripts, setScripts] = useState([]);

  useEffect(() => {
    const getScripts = async () => {
      try {
        const scriptsData = await fetchScripts();
        setScripts(scriptsData);
      } catch (error) {
        console.error('Error fetching scripts: ', error);
      }
    };

    getScripts();
  }, []);

  return (
    <div>
      <h1>Welcome to Script Maker Website</h1>
      <ScriptList scripts={scripts} />
    </div>
  );
};

export default Home;