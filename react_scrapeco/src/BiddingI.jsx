import React, { useState } from "react";
import img1 from "./statue2.jpg";
import img2 from "./statue1.jpg";
import img3 from "./statue3.jpg";

const App = () => {
  const [val, setVal] = useState(1000);
  const [last, setLast] = useState();
  const [val1, setVal1] = useState(2000);
  const [last1, setLast1] = useState();
  const [val2, setVal2] = useState(1500);
  const [last2, setLast2] = useState();

  return (
    <>
      <h1 className="text-center mt-8 mb-4 text-3xl font-bold">
        Online Statue Bidding System
      </h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full" src={img1} alt="statue" />
            <div className="p-4">
              <h4 className="text-xl font-semibold mb-2">
                Starting Bid : {val}
              </h4>
              <div className="flex justify-between mb-4">
                <button
                  onClick={() => setVal(val + 500)}
                  className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 focus:outline-none"
                >
                  500
                </button>
                <button
                  onClick={() => setVal(val + 1000)}
                  className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 focus:outline-none"
                >
                  1000
                </button>
                <button
                  onClick={() => setVal(val + 1500)}
                  className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 focus:outline-none"
                >
                  1500
                </button>
              </div>
              <button
                onClick={() => setLast(Highest Bid : ${val})}
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 focus:outline-none"
              >
                Sold
              </button>
              <h5 className="mt-2">{last}</h5>
            </div>
          </div>
          {/* Repeat similar structure for other statues */}
        </div>
      </div>
    </>
  );
};

export default App;