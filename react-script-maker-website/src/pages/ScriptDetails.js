import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../utils/api';

const ScriptDetails = () => {
  const [script, setScript] = useState(null);
  const { scriptId } = useParams();

  useEffect(() => {
    const fetchScriptDetails = async () => {
      try {
        const response = await api.get(`/scripts/${scriptId}`);
        setScript(response.data);
      } catch (error) {
        console.error('Error fetching script details: ', error);
      }
    };

    fetchScriptDetails();
  }, [scriptId]);

  return (
    <div>
      {script ? (
        <div>
          <h2>{script.title}</h2>
          <p>{script.description}</p>
          <p>Price: ${script.price}</p>
          <button>Buy Now</button>
        </div>
      ) : (
        <p>Loading script details...</p>
      )}
    </div>
  );
};

export default ScriptDetails;