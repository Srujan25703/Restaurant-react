import { useState } from "react";
import Bookform from "./Bookform";
import Gallery from "./Gallery";
import Axios from "axios";
function BookTable() {
  const [arr, setArr] = useState([]);
  const getState = (childData) => {
    setArr(childData);
  };

  const handleSubmit = () => {
    const data = {
      name: arr[0],
      email: arr[1],
      phone: arr[2],
      date: new Date(arr[3]),
      noOfPeople: arr[4],
    };
    Axios.post("http://localhost:4000/bookRoute/create-booking", data)
      .then((res) => {
        if (res.status === 200) {
          alert("Record added successfully");
        } else {
          alert("Unexpected status code: " + res.status);
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("An error occurred while submitting the form");
      });
  };
  return (
    <form id="BookTabel" onSubmit={handleSubmit}>
      <Bookform getState={getState} />
      <Gallery />
    </form>
  );
}

export default BookTable;
