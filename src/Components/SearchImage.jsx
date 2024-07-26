import React from "react";

function SearchImage({ handleChange, Input, handleSubmit }) {
  const onChangeInput = (event) => {
    handleChange(event.target.value);
  };

  return (
    <div className="Search-app">
      <h3>Image Generation App</h3>
      <input
        type="text"
        value={Input}
        id="inputbox"
        placeholder="Enter text..."
        onChange={onChangeInput}
      />
      <button
        onClick={handleSubmit}
        style={{
          color: "white",
          background: "black",
          marginLeft: "4px",
          padding: "10px",
          border: "none",
          cursor: "pointer",
          width: "60px",
        }}
      >
        Click
      </button>
    </div>
  );
}

export default SearchImage;
