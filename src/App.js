import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navbar, Container } from "react-bootstrap";

import Headline from "./Lifecycle/News/Headline";

const App = () => {
  const [headline, setHeadline] = useState([]);
  const [find, setFindKey] = useState("");

  useEffect(() => {
    const getData = async () => {
      const get = await axios(
        "https://newsapi.org/v2/top-headlines?country=id&apiKey=2ce3391dc00c4c4395e8ba75f6384d25"
      );
      console.log(get.data.articles);
      setHeadline(get.data.articles);
    };
    getData();
  }, []);

  console.log(find);

  return (
    <div className="pt-5">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React News</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <input
        type="text"
        className="form-control"
        placeholder="Cari Berita"
        aria-label="Search"
        onChange={(e) => setFindKey(e.target.value)}
      />
      <Headline headline={headline} find={find} />
      <div className="row mt-5" id="card-container"></div>
    </div>
  );
};

export default App;
