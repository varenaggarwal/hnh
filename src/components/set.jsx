import "./../css/modal.css";
import React, { useEffect, useState } from "react";
import { getDatafromServer } from "../serverRequest";
import TweetContainer from "./TweetContainer";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [state, setState] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = await getDatafromServer();
      setState(data.data[0]);
    }
    fetchData();
  }, []);

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        {/* <button className="close_modal" type="button" onClick={handleClose}>
          Close
        </button>
        </button> */}
        {console.log(state)}
        {state.hasOwnProperty("trends") &&
          state.trends.map((item, index) => {
            return (
              <div key={index}>
                <p>{item.category}</p>
                <p>{item.name}</p>
                <section>
                </section>
              </div>
            );
          })}
          <TweetContainer id={"1482383366607765507"} />
        <div className="close_modal close-icon"  onClick={handleClose}>
          <span><img src="close.png"></img></span>
        </div>
      </section>
    </div>
  );
};

export default Modal;
