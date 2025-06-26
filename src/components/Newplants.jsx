import { use, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import PlanstCard from "./PlanstCard";

const Newplants = ({ plants }) => {
  const [tree, setTree] = useState(plants || []);

  const { sort } = use(AuthContext);

  useEffect(() => {
    fetch(`https://plantwarden-b11a10-server.vercel.app/plants?sortBy=${sort}`)
      .then((res) => res.json())
      .then((data) => {

        console.log(data);
        
        setTree(data || []);
      });
  }, [sort, setTree]);



  return (
    <div>
      <div className="my-5">
        <h1 className="text-center text-4xl pt-5 font-bold sylefont">
          Your New Plant Buddies
        </h1>

        <p className="text-center py-4 text-gray-400 w-[80%] mx-auto">
          Our green family just got bigger! These new plants are full of charm
          and character, ready to thrive in <br /> your care. Start your plant
          journey or expand your collection with these fresh faces.,
          <span className="hidden md:block">
            ready to thrive in your care. Start your plant journey or expand
            your collection with these fresh faces.
          </span>
        </p>
      </div>

      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-4 md:gap-10 pt-5 pb-10">
        {tree?.slice(0, 8)?.map((data) => (
          <PlanstCard key={data._id} data={data}></PlanstCard>
        ))}
      </div>
    </div>
  );
};

export default Newplants;
