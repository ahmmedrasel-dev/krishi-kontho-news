import React from "react";
import SectionTitle from "../../components/SectionTitle";

const NationalSection = () => {
  return (
    <section className="my-5">
      <div className="grid grid-cols-1 desktop:grid-cols-4 gap-4">
        <div className="col-span-3 border p-2 rounded">
          <SectionTitle title={"জাতীয়"} />

          <div className="grid grid-col-1 desktop:grid-cols-3">
            <div>Cols One</div>
            <div>Cols Two</div>
            <div>Cols Three</div>
          </div>
        </div>
        <div className="grid grid-cols-1 bg-red-400"></div>
      </div>
    </section>
  );
};

export default NationalSection;
