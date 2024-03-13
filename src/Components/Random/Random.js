import React, { useEffect, useState } from "react";

function RandomUser() {
  const [RandomUser, setUser] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => {
        // console.log(res);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        return setUser(data.results);
      });
  }, []);

  return (
    <>
      <br />
      <h1 style={{ textAlign: "center" }}>Random User</h1>
      <button
        onClick={RandomUser}
        style={{
          margin: "50px 500px",
          backgroundColor: "green",
          zoom: "100%",
          fontSize: "30px",
          border: "70px",
          color: "white",
        }}
      >
        Clickhere
      </button>

      {RandomUser.map((singleUser, i) => {
        let vidId = singleUser.name.first;
        let vidLink = `https://randomuser.me/api${vidId}`;
        let videoWrapper = (
          <div className="videWrapper" key={i}>
            <a href={vidLink} target="_blank" rel="noreferrer">
              <img src={singleUser.picture.large} alt="thumbnails" />{" "}
            </a>
          </div>
        );
        return videoWrapper;
      })}
    </>
  );
}

export default RandomUser;
