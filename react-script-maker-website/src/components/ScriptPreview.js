import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ScriptPreview = () => {
  const { scriptId } = useParams();
  const [script, setScript] = useState(null);

  useEffect(() => {
    axios.get(`api/scripts/${scriptId}`)
      .then(response => {
        setScript(response.data);
      })
      .catch(error => {
        console.error('Error fetching script:', error);
      });
  }, [scriptId]);

  if (!script) {
    return <div>Loading script...</div>;
  }

  return (
    <div>
      <h2>{script.title}</h2>
      <p>{script.description}</p>
      <p>Price: {script.price}</p>
      <button>Buy Now</button>
    </div>
  );
};

export default ScriptPreview;