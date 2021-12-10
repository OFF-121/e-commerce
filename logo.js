import React from 'react'

export default function Logo(props) {
    return (
      <React.Fragment>
        <div className="headText">
          <span className="pravin" style={props.style}>{props.name1}</span> <span>{props.name2}</span>
        </div>
      </React.Fragment>
    );
}
