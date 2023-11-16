import React from "react";

const Login = () => {
  const handleSignInSubmit = (event) => {
    event.preventDefault();

    const username = document.getElementById("signin-name").value;
    const password = document.getElementById("signin-password").value;

    if (username === "srujan" && password === "srujan") {
      window.location.href = "/admin.html";
    }
  };

  return (
    <section id="login">
      <div>
        <h1 className="navbar-text text-black m-0 p-0">Plates&Pleasure</h1>

        <div id="signin-popup" className="popup signin-background">
          <div className="signin-form">
            <h2>Sign in</h2>

            <form id="signin-form" onSubmit={handleSignInSubmit}>
              <label htmlFor="signin-name">Username</label>
              <input type="text" id="signin-name" placeholder="Name" required />

              <label htmlFor="signin-password">Password</label>
              <input
                type="password"
                id="signin-password"
                placeholder="Password"
                required
              />

              <div className="complete-signup-button">
                <button type="submit" className="chrome-yellow-button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
