import React from 'react'
import { Bookmark } from "lucide-react";
const Card = (props) => {

  console.log(props.company)
  return (
     <div className="card">
        <div className="top">
          <img
            src={props. brandLogo} alt=""className="logo" />

          {/* Save button: text + little boxed icon on the right */}
          <button className="save-btn">
            <span className="save-text">Save</span>
            <span className="save-icon-box">
              <Bookmark size={12} />
            </span>
          </button>
        </div>

        <div className="center">
          <h3>
            {props.company} <span>{props.posted}</span>
          </h3>

          <h2>{props.post}</h2>

          <div className="tags">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>

        <div className="buttom">
          <div className="price-wrap">
            <div>
              <h3>{props.pay}</h3>
              <p>{props.location}</p>
            </div>

            <button className="apply-btn">Apply Now</button>
          </div>
        </div>
      </div>
  )
}

export default Card
