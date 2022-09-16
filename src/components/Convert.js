import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Convert = ({ language, text }) => {
  const [convertedText, setConvertedText] = useState("");
  const url = "https://translation.googleapis.com/language/translate/v2";
  const key = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

  useEffect(() => {
    const timeout = setTimeout(() => {
      const translate = async () => {
        if (!text) {
          setConvertedText("");
          return;
        }
        const data = await axios.post(
          url,
          {},
          {
            params: {
              key,
              q: text,
              target: language.value,
            },
          }
        );

        setConvertedText(data.data.data.translations[0].translatedText);
      };
      translate();
    }, 500);
    return () => clearTimeout(timeout);
  }, [text, language]);
  return <div>{convertedText}</div>;
};
export default Convert;
