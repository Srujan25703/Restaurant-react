import React, { useEffect } from "react";
import axios from "axios";

const Admin = () => {
  // Simulate login by setting a token in sessionStorage
  sessionStorage.setItem("adminToken", "yourAuthToken");

  const isLoggedIn = () => {
    return sessionStorage.getItem("adminToken") !== null;
  };

  const logout = () => {
    sessionStorage.removeItem("adminToken");
    sessionStorage.clear();

    // Use replaceState to modify the browser history
    const baseUrl = window.location.origin + window.location.pathname;
    window.history.replaceState(null, "", baseUrl + "?loggedOut=true");
    window.location.replace("login.html"); // Assuming you have a login route in your React app
  };

  const BookingsList = async () => {
    try {
      const response = await axios.get("your_booking_api_endpoint"); // Replace with your actual API endpoint
      const bookingsData = response.data;

      // Render bookingsData in a table
      const tableContent = (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Date</th>
              <th>Number of People</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through bookingsData and render each booking row */}
            {bookingsData.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.name}</td>
                <td>{booking.email}</td>
                <td>{booking.phoneNumber}</td>
                <td>{booking.date}</td>
                <td>{booking.numberOfPeople}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );

      // Set the content of the section
      document.querySelector("section").innerHTML = (
        <>
          <h2>Bookings</h2>
          {tableContent}
        </>
      );
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const showQueries = () => {
    if (!isLoggedIn()) {
      alert("Please login first.");
      return;
    }

    // Sample queries data (replace with actual data from your API)
    const queriesData = [
      {
        name: "Alice Johnson",
        email: "alice@example.com",
        message: "Query about menu options.",
      },
      {
        name: "Bob Williams",
        email: "bob@example.com",
        message: "Inquiry regarding reservation process.",
      },
      // Add more data as needed
    ];

    // Render queriesData in a table
    const tableContent = (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through queriesData and render each query row */}
          {queriesData.map((query, index) => (
            <tr key={index}>
              <td>{query.name}</td>
              <td>{query.email}</td>
              <td>{query.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );

    // Set the content of the section
    document.querySelector("section").innerHTML = (
      <>
        <h2>Queries</h2>
        {tableContent}
      </>
    );
  };

  useEffect(() => {
    // Check authentication on component mount
    const isLoggedOut = new URLSearchParams(window.location.search).get(
      "loggedOut"
    );

    if (isLoggedOut) {
      alert("You have been logged out.");
      window.location.replace("login.html"); // Assuming you have a login route in your React app
      return;
    }

    if (!isLoggedIn()) {
      alert("Please login first.");
      window.location.replace("login.html"); // Assuming you have a login route in your React app
    }
  }, []);

  return (
    <>
      <header>
        <h1>Plates&Pleasure</h1>
      </header>

      <nav>
        <button onClick={BookingsList}>Bookings</button>
        <button onClick={showQueries}>Queries</button>
        <button onClick={logout}>Logout</button>
      </nav>

      <section>{/* Content will be dynamically loaded here */}</section>
    </>
  );
};

export default Admin;
