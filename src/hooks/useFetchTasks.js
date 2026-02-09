import { useEffect, useState } from "react";

const useFetchTasks = (url) => {

  const [data, setData] = useState([]);

  useEffect(() => {

    fetch(url)
      .then(res => res.json())
      .then(json => setData(json));

  }, [url]);

  return data;
};

export default useFetchTasks;
