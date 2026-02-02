import Card1 from "./components/Card1.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
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
        <Card1 user="ayush" />
      </div>
    </>
  );
};

export default App;
