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
import ResultCard from "./ResultCard.jsx";

const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );
  const dispatch = useDispatch();

  let data = [];

  useEffect(
    function () {
      if (!query) return;
      const getdata = async () => {
        try {
          dispatch(setloading());
          if (activeTab == "photos") {
            let response = await fetchphotos(query);
            data = response.results.map((item) => ({
              id: item.id,
              type: "photo",
              title: item.alt_description,
              thumbnail: item.urls.small,
              src: item.urls.full,
              url: item.links.html,
            }));
          }
          if (activeTab == "videos") {
            let response = await fetchvideos(query);
            data = response.videos.map((item) => ({
              id: item.id,
              type: "video",
              title: item.user.name || "video",
              thumbail: item.image,
              src: item.video_files[0].link,
              url: item.url,
            }));
          }

          dispatch(setresults(data));
          console.log(data);
        } catch (err) {
          dispatch(seterror(err.message));
        }
      };
      getdata();
    },
    [query, activeTab],
  );

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="flex  w-full flex-wrap justify-between  gap-6 overflow-auto  px-10">
      {results.map((item, idx) => {
        return (
          <div key={idx}>
            <a href={item.url}>
              <ResultCard item={item} />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default ResultGrid;
