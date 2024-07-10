import React, { useState, useEffect } from 'react';
import { getUserPurchasedScripts } from '../utils/api';
import ScriptCard from './ScriptCard';

const UserDashboard = () => {
  const [purchasedScripts, setPurchasedScripts] = useState([]);

  useEffect(() => {
    const fetchUserPurchasedScripts = async () => {
      try {
        const data = await getUserPurchasedScripts();
        setPurchasedScripts(data);
      } catch (error) {
        console.error('Error fetching user purchased scripts: ', error);
      }
    };

    fetchUserPurchasedScripts();
  }, []);

  return (
    <div>
      <h1>User Dashboard</h1>
      {purchasedScripts.map(script => (
        <ScriptCard key={script.id} script={script} />
      ))}
    </div>
  );
};

export default UserDashboard;