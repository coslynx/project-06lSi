import React, { useState, useEffect } from 'react';
import { getScripts } from '../utils/api';

const ScriptList = () => {
  const [scripts, setScripts] = useState([]);

  useEffect(() => {
    const fetchScripts = async () => {
      try {
        const scriptsData = await getScripts();
        setScripts(scriptsData);
      } catch (error) {
        console.error('Error fetching scripts: ', error);
      }
    };

    fetchScripts();
  }, []);

  return (
    <div>
      <h2>Script List</h2>
      <ul>
        {scripts.map((script) => (
          <li key={script.id}>{script.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ScriptList;