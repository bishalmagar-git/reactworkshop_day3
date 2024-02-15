import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleBlog from "./pages/SingleBlog";

function App() {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);
  const fetchBlog = async () => {
    try {
      const res = await axios.get(
        "https://65cd9528c715428e8b3e9af4.mockapi.io/blog"
      );
      if (res.status === 200) {
        setLoading(false);
        setData(res.data);
      }
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBlog();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "30px",
                padding: "30px",
              }}
            >
              {loading
                ? "loading..."
                : data.map((row) => {
                    return <Card key={row.id} row={row} />;
                  })}
              {}
            </div>
          }
        />

        <Route path="/:id" element={<SingleBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
