import { useEffect, useState } from "react";
import axios from "axios";
import MovesCards from "./MovesCards";

const MyMoves = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://test.api.boxigo.in/sample-data/")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex-1">
      {data.Customer_Estimate_Flow.map((item) => {
        return <MovesCards key={item.estimate_id} item={item} />;
      })}
    </div>
  );
};

export default MyMoves;
