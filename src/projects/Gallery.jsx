import axios from "axios";
import { useEffect, useState } from "react";

const Gallery = () => {
  const [userdata, setuserdata] = useState([]);
  const [index, setindex] = useState(1);
  let getdata = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );
    setuserdata(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getdata();
  }, [index]);

  let printuserdata = (
    <h3 className="text-gray-400 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading........
    </h3>
  );
  if (userdata.length > 0) {
    printuserdata = userdata.map(function (elem, idx) {
      return (
        <div key={idx}>
          <a href={elem.url} target="_blank">
            <div className="h-50 w-50 overflow-hidden rounded-xl">
              <img
                className="h-full w-full object-cover"
                src={elem.download_url}
                alt=""
              />
            </div>
            <h2 className="font-semibold ">{elem.author}</h2>
          </a>
        </div>
      );
    });
  }
  return (
    <div className="text-white  p-4 bg-black h-screen overflow-auto">
      <div className=" flex flex-wrap gap-5">{printuserdata}</div>
      <div className="flex justify-center items-center gap-5 mt-4">
        <button
          onClick={() => {
            if (index > 1) setindex(index - 1);
            setuserdata([]);
          }}
          className="bg-amber-400 text-black text-sm cursor-pointer active:scale-95 px-4 py-2 font-semibold rounded"
        >
          Prev
        </button>
        <h2>Page {index}</h2>
        <button
          onClick={() => {
            setuserdata([]);
            setindex(index + 1);
          }}
          className="bg-amber-400  text-black text-sm cursor-pointer active:scale-95 px-4 py-2 font-semibold rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Gallery;
