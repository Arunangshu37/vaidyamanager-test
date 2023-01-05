import React, { useState, useEffect } from 'react';
// import en from './locales/en.json';
// import sa from './locales/sa.json';
import translate from 'translate';

const SearchSymptom = () => {
  // const [language, setLanguage] = useState('en');

  // const handleLanguageChange = () => {
  //   setLanguage(language === 'en' ? 'sa' : 'en');
  // };
  const [englishText, setEnglishText] = useState('Hello, world!');
  const [sanskritText, setSanskritText] = useState('');

  useEffect(() => {
    translate(englishText, { to: 'sa' }).then(res => {
      setSanskritText(res.text);
    }).catch(err => {
      console.error(err);
    });
  }, [englishText]);


  return (
    <div style={{ marginTop: "50px" }}>

      {/* <Translate content="greeting" />
      <button onClick={handleLanguageChange}>
        Change language
      </button> */}

      {/* <select onChange={handleLanguageChange} value={language}>
        <option value="en">English</option>
        <option value="sa">Sanskrit</option>
      </select>
      <Translate content="greeting" /> */}
      <p>{englishText}</p>
      <p>{console.log("sanskritText",sanskritText)}</p>
    </div>
  );
};

export default SearchSymptom;

