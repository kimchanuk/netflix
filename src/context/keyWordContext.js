import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const keywordContext = createContext();

export const KeywordContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState('');

  const onchangeKeyword = e => {
    setKeyword(e.target.value);
  };

  return (
    <keywordContext.Provider value={{ keyword, setKeyword, onchangeKeyword }}>
      {children}
    </keywordContext.Provider>
  );
};
