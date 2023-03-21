import { useState, useEffect } from "react";
import axios from "axios";
import TopSearchBar from "./Components/TopSearchBar";
import ListOfCountries from "./Components/ListOfCountries";
import Pagination from "./Components/Pagination";
import "./BasicCSS.css";
import "./Components/Pagination.css";

function App() {
  const [searched, setSearched] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [results, setResults] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [strToSearch, setStrToSearch] = useState("");

  const loadInitialState = () => {
    setSearched("");
    setStrToSearch("");
    setCurrentPage(1);
    axios
      .get("http://localhost:8999/countries")
      .then((response) => {
        setResults(response.data.results);
        setTotalResults(response.data.total);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadInitialState();
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8999/countries", {
        params: { query: searched, page: currentPage, page_size: 10 },
      })
      .then((response) => {
        setResults(response.data.results);
        setTotalResults(response.data.total);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage]);

  const searchHandler = () => {
    setSearched(strToSearch);
    axios
      .get("http://localhost:8999/countries", {
        params: { query: strToSearch, page: 1, page_size: 10 },
      })
      .then((response) => {
        setCurrentPage(1);
        setResults(response.data.results);
        setTotalResults(response.data.total);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <TopSearchBar
        value={strToSearch}
        updateValue={setStrToSearch}
        onSearch={searchHandler}
        onReset={loadInitialState}
      ></TopSearchBar>
      <ListOfCountries data={results}></ListOfCountries>
      <Pagination
        currentPage={currentPage}
        total={totalResults}
        limit={10}
        onPageChange={(page) => setCurrentPage(page)}
      ></Pagination>
    </div>
  );
}

export default App;
