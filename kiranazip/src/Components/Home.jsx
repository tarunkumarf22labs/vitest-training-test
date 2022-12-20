import React from "react";
import { NavLink } from "react-router-dom";
import Card from "./Card";
import Pagination from "./Pagination";
// import Pagination from "./Pagination";

function Home({ data, postperpage, handleclick, totalpage }) {
  if (data.length === 0) {
    return "loading";
  }
  const val = data.map((e) => {
    return (
      <div key={e.id} className="disabled:bg-slate-500">
        <NavLink to={`store/${e._id}`}>
          <Card value={e} />
        </NavLink>
      </div>
    );
  });

  return (
    <div>
      <section className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3 sm:grid-cols-2   ">
        {val}

        {/* <Pagination totalpost={} postperpage = {} /> */}
      </section>
      <Pagination
        totalpost={totalpage}
        postperpage={postperpage}
        handleclick={handleclick}
      />
    </div>
  );
}

export default Home;
