import React from "react";

export function Child(props) {
    return (
      <input
        value={props.value}
        onChange={props.onChangeValue}
      />
    );
}

