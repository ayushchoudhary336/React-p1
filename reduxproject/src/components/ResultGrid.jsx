import { useDispatch, useSelector } from "react-redux";
import { fetchphotos, fetchvideos } from "../api/mediaApi.js";
import {
  setquery,
  setloading,
  seterror,
  setresults,
} from "../redux/features/searchslice";
import { store } from "../redux/store.js";
import { useEffect } from "react";

const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );
  const dispatch = useDispatch();

  // let data;

  useEffect(
    function () {
      const getdata = async () => {
        if (activeTab == "photos") {
          let response = await fetchphotos(query);
          // data = response.results;
        }
        if (activeTab == "videos") {
          let response = await fetchvideos(query);
          // data = response.videos;
        }
      };
      getdata();
    },
    [query, activeTab],
  );

  return <div className="m-5"></div>;
};

export default ResultGrid;
