import React, { useState, useEffect } from 'react';
import { fetchPurchaseHistory } from '../utils/api';

const PurchaseHistory = () => {
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  useEffect(() => {
    const getPurchaseHistory = async () => {
      try {
        const history = await fetchPurchaseHistory();
        setPurchaseHistory(history);
      } catch (error) {
        console.error('Error fetching purchase history: ', error);
      }
    };

    getPurchaseHistory();
  }, []);

  return (
    <div>
      <h2>Purchase History</h2>
      <ul>
        {purchaseHistory.map((purchase, index) => (
          <li key={index}>
            <p>{purchase.scriptName}</p>
            <p>{purchase.purchaseDate}</p>
            <p>{purchase.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PurchaseHistory;