import React, { useState } from "react";
import { X } from "lucide-react";

const Notesapplication = () => {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");

  const [task, settask] = useState([]);

  let deletenote = (id) => {
    settask(task.filter((note) => note.id !== id));
  };

  let submithandler = (e) => {
    e.preventDefault();

    let copytask = [...task];
    // console.log(task);
    copytask.push({
      id: Date.now(),
      title,
      content,
    });
    settask(copytask);

    settitle("");
    setcontent("");
  };
  return (
    <div className="min-h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(elem) => {
          submithandler(elem);
        }}
        className=" flex flex-col lg:w-1/2 items-start gap-4 "
      >
        <h1 className="text-4xl font-bold">Add notes</h1>
        <div className="flex flex-col items-start mb-3">
          {/* // heading input */}
          <input
            className=" border-2 border-yellow-100 p-3  mb-4 w-100 outline-none font-medium"
            type="text"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
            placeholder="Enter your Heading"
          />
          {/* // detailed input */}
          <textarea
            type="text"
            value={content}
            onChange={(e) => {
              setcontent(e.target.value);
            }}
            placeholder="Write details....."
            className=" h-60  p-3  mb-4 w-100 outline-none border-2 border-pink-400 b text-white font-medium"
          />
          <button className="bg-white text-black px-2 py-2 rounded-2xl w-70 outline-none active:bg-gray-500 hover:scale-95">
            Add notes
          </button>
        </div>
      </form>

      <div className="flex p-10">
        <h1 className="mb-3 p-5 text-3xl">Recent notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 h-full">
          {task.map(function (elem) {
            return (
              <div
                key={elem.id}
                className="h-60 w-58 relative   bg-cover rounded-2xl bg-[url('data:image/jpeg;base64,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')]"
              >
                <h1 className="absolute top-5 mt-4 right-2 bg-red-600  p-0.5 rounded-2xl">
                  <X size={10} />
                </h1>
                <h3 className="text-black p-4 text-2xl font-semibold mt-4 ml-0.5">
                  {elem.title}
                </h3>
                <p className="text-gray-800 px-8 leading-tight">
                  {elem.content}
                </p>
                <button
                  onClick={() => {
                    deletenote(elem.id);
                  }}
                  className="bg-red-500 hover:bg-red-700 w-25 active:scale-95 px-2 py-0.5 rounded-xl ml-10 mt-10 mb-2 text-white "
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notesapplication;
