import React from "react";
import Affair from "./Affair";
import { AffairType, FilterType } from "./HW2";
import css from "./Affairs.module.css";

type AffairsPropsType = {
  // need to fix any
  data: Array<AffairType>;
  setFilter: (filter: FilterType) => void;
  deleteAffairCallback: (_id: number) => void;
};

function Affairs(props: AffairsPropsType) {
  const mappedAffairs = props.data.map((aff: AffairType) => (
    <Affair // should work
      key={aff._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
      affair={aff}
      deleteAffairCallback={props.deleteAffairCallback}
    />
  ));

  const setAll = () => {
    props.setFilter("all");
  }; // need to fix
  const setHigh = () => {
    props.setFilter("high");
  };
  const setMiddle = () => {
    props.setFilter("middle");
  };
  const setLow = () => {
    props.setFilter("low");
  };

  return (
    <div className={css.allAffairs}>
      {mappedAffairs}
      <div>
        <button onClick={setAll} style={{ backgroundColor: "seashell" }}>
          All
        </button>
        <button onClick={setHigh} style={{ backgroundColor: "red" }}>
          High
        </button>
        <button onClick={setMiddle} style={{ backgroundColor: "orange" }}>
          Middle
        </button>
        <button onClick={setLow} style={{ backgroundColor: "green" }}>
          Low
        </button>
      </div>
    </div>
  );
}

export default Affairs;
