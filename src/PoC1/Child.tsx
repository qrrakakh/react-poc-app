import React from "react";

export function Child(props) {
    return (
      <input
        className="form-control"
        value={props.value}
        onChange={props.onChangeValue}
      />
    );
}

