import React from "react";

function ImagesBox({ apiData }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        marginTop: "40px",
        alignItems:"center",
        justifyContent:"space-around"
      }}
    >

      
      {apiData.map((data,index) => {
        return (

          <div
             key={index}            
          >
            <img src={data.urls.regular} style={{width:"250px", height:"250px"}} alt="Images" />
          </div>
        );
      })}
    </div>
  );
}

export default ImagesBox;
