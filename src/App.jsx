import Advancehooks from "./components/Advancehooks.jsx";
import Card1 from "./components/Card1.jsx";
import Counter from "./components/Counter.jsx";
import Hooks from "./components/Hooks.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  const btnclicked = () => {
    console.log("button is clicked");
  };

  const inputfn = (elem) => {
    console.log(elem.target.value);
  };
  return (
    <>
      {/* <Navbar />
      <h1 className="text-3xl text-red-800 font-bold underline ">
        Hello world!
      </h1>
      <div className="bg-amber-600 text-2xl p-2 rounded-2xl m-2">
        <h1>Ayush choudhary</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
          doloremque, alias assumenda suscipit ab, magni modi tempore deserunt
          quaerat deleniti dolorem vel? Unde?
        </p>
      </div> */}

      <div>
        {/* <Card1 user="ayush" />

        <h1>hello Ayush</h1>
        <button
          onClick={btnclicked}
          className="bg-gray-500 border-2 p-1 m-2 shadow-xl rounded-2xl text-white"
        >
          Change user
        </button>
        <br />
        <input
          className="bg-gray-800 text-white px-4 py-2"
          onChange={inputfn}
          type="text"
          placeholder="enter name"
        />

        <div className=" h-50 w-80 bg-amber-500 box"></div> */}

        {/* <Hooks /> */}
        {/* <Counter /> */}
        {/* <Advancehooks /> */}
      </div>
    </>
  );
};

export default App;
