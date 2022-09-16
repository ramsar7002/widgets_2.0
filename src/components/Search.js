import React, { useState, useEffect } from "react";
import axios from "axios";
const url = "https://en.wikipedia.org/w/api.php";

const Search = () => {
  const [term, setTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!term) return;
      const data = await axios.get(url, {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setSearchResults(data.data.query.search);
    };
    const timeOut = setTimeout(() => {
      fetchData();
    }, 500);

    return () => clearTimeout(timeOut);
  }, [term]);

  const onTermChange = (e) => {
    setTerm(e.target.value);
  };

  const renderResults = searchResults.map((item) => {
    if (term) {
      return (
        <div className="item" key={item.pageid}>
          <div className="right floated content">
            <a
              className="ui button"
              href={`https://en.wikipedia.org?curid=${item.pageid}`}
              target="blank"
            >
              Go
            </a>
          </div>
          <div className="content">
            <div className="header">{item.title}</div>
            <span dangerouslySetInnerHTML={{ __html: item.snippet }} />
          </div>
        </div>
      );
    } else {
      setSearchResults([]);
      return "";
    }
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            type="text"
            value={term}
            onChange={onTermChange}
          />
        </div>
      </div>
      <div className="ui divided relaxed list">{renderResults}</div>
    </div>
  );
};

export default Search;
