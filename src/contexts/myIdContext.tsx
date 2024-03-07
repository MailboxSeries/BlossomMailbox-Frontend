// src/contexts/UserIdContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const myIdContext = createContext(null);

export const useUserId = () => useContext(myIdContext);

export const myIdProvider = ({ children }) => {
  const [myId, setMyId] = useState(null);

  // 컴포넌트 마운트 시 사용자 ID를 조회
  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const response = await axios.get('/api/v1/users');
        setMyId(response.data.id);
      } catch (error) {
        console.error('Failed to fetch user ID', error);
      }
    };

    fetchUserId();
  }, []);

  return (
    <myIdContext.Provider value={myId}>
      {children}
    </myIdContext.Provider>
  );
};
