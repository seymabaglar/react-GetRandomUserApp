import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBirthdayCake,
  faMailBulk,
  faMapLocation,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const User = () => {
  const [userData, setUserData] = useState("");

  const getUser = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUserData(data.results[0]))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // fetch("https://randomuser.me/api/")
    //   .then((res) => res.json())
    //   .then((data) => setUserData(data.results[0]))
    //   .catch((err) => console.log(err));
    getUser();
  }, []);

  console.log(userData);

  return (
    <div className="container">
      {/* Optional Chaining */}
      <img src={userData?.picture?.large} className="rounded-circle" alt="" />

      <h4>Hi, My name is</h4>

      <h1>
        <FontAwesomeIcon icon={faUser} /> {userData?.name?.first}{" "}
        {userData?.name?.last}
      </h1>
      <h3>
        <FontAwesomeIcon icon={faMailBulk} /> {userData?.email}
      </h3>
      <h4>
        <FontAwesomeIcon icon={faBirthdayCake} />{" "}
        {new Date(userData?.dob?.date).toLocaleDateString("tr-TR")}
      </h4>
      <h5>
        <FontAwesomeIcon icon={faPhone} /> {userData?.phone}
      </h5>
      <h6>
        <FontAwesomeIcon icon={faMapLocation} /> {userData?.location?.city}
      </h6>
      <br />
      <button className="button-56" role="button" onClick={getUser}>
        Get Random User
      </button>
    </div>
  );
};

export default User;
