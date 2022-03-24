import React from "react";
import { AffairType } from "./HW2";
import css from "./Affairs.module.css";

type AffairPropsType = {
  // key не нужно типизировать
  affair: AffairType; // need to fix any
  deleteAffairCallback: (_id: number) => void; // need to fix any
};

function Affair({ affair, deleteAffairCallback }: AffairPropsType) {
  const deleteCallback = () => {
    deleteAffairCallback(affair._id);
  }; // need to fix
  let style = "";
  if (affair.priority === "high") {
    style = "preorityHigh";
  }
  if (affair.priority === "middle") {
    style = "preorityMiddle";
  }
  if (affair.priority === "low") {
    style = "preorityLow";
  }
  debugger;
  return (
    <div>
      <div className={css.affair}>
        <div className={css.id}>{affair._id}</div>
        <div className={css.name}>{affair.name}</div>
        <div className={style}>{affair.priority}</div>
        <button onClick={deleteCallback}>X</button>
      </div>
    </div>
  );
}

export default Affair;
