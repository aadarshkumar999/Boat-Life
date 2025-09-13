import React from "react";
import { Link } from "react-router-dom";

const MorePage = () => {
  return (
    <div>
      <div className="text-center mt-5 font-bold text-green-600 text-4xl">
        MorePage will appear here
        <span className="text-yellow-400">:)</span>
      </div>
      <div className="flex items-center justify-center content-center mt-5 cursor-pointer">
        <Link to="/">
          <button className="bg-red-500 px-4 py-2 rounded-sm">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default MorePage;
