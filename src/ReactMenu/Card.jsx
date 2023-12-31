import React from 'react'
// import web from "../images/dices/dal-bati-churma-720x620.jpg";
import { NavLink } from "react-router-dom";

const card = (props) => {
  return (
    <>
     <div className="col-md-4 col-12 mx-auto cali">
                <div className="card">
                  <img src={props.imgsrc} className="card-img-top wit" alt={props.imgsrc} />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">{props.title}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <NavLink to="/" className="btn btn-primary">
                      Go somewhere
                    </NavLink>
                  </div>
                </div>
              </div>
    </>
  )
}

export default card