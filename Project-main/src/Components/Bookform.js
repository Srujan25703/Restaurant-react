import { useState } from "react";

function Bookform(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [noOfPeople, setPeople] = useState("");

  const arr = [name, email, phone, date, noOfPeople];

  const handleClick = () => {
    props.getState(arr);
  };

  return (
    <section id="book-a-table" className="book-a-table">
      <h4>Reservation</h4>
      <h2>Book Your table</h2>
      <form className="php-email-form" data-aos="fade-up" data-aos-delay="100">
        <div className="input-group">
          <input
            onChange={(event) => setName(event.target.value)}
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
          />

          <input
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
          />

          <input
            onChange={(event) => setPhone(event.target.value)}
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone"
          />
        </div>
        <div className="input-group">
          <input
            onChange={(event) => setDate(event.target.value)}
            type="date"
            id="date"
            name="date"
            placeholder="Date"
          />

          <input
            onChange={(event) => setPeople(event.target.value)}
            type="number"
            id="people"
            name="noOfPeople"
            placeholder="No. of people"
          />
        </div>

        <button onClick={handleClick} type="submit">
          Book a Table
        </button>
      </form>
    </section>
  );
}

export default Bookform;
