import React, { useState, useEffect } from "react";
import { Link,Navigate } from "react-router-dom";

function Contact() {
  const [res, setRes] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  function handlesubmit(evt) {
    evt.preventDefault();
    if (name == "" || age == "") {
      setRes("Plzz Fill The Name & Age");
    } else {
      fetch("http://127.0.0.1:8500/contact", {
        method: "POST",
        body: JSON.stringify({
          name,
          age,
        }),
        mode: "same-origin",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          // "X-CSRFToken": csrftoken,
        },
      }).then((response) => {
        if (response.status == 200) {
          setRes("Successfully Submit");
          <Navigate to="/about" replace={true} />
        } else {
          setRes("Something went wrong");
        }
      });
    }
  }

  return (
    <>
    <div className="bg-light">
      <div className="container py-5">
        <div className="row h-100 align-items-center py-5">
          <div className="col-lg-6">
            <h1 className="display-4">Contact us</h1>
            <p className="lead text-muted mb-0">iCode Provides you better code .</p>
            <p className="lead text-muted"><Link to="/" className="text-muted">Back to Home </Link>
            </p>
          </div>
          <div className="col-lg-6 d-none d-lg-block"><img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" className="img-fluid"/></div>
        </div>
      </div>
    </div>

      <div className="container m-4">
        <h2>Contact Us</h2>
        <hr/>
        <form onSubmit={handlesubmit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Age
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputPassword1"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <div className="alert alert-secondary my-3" role="alert">
          {res}
        </div>
      </div>
    </>
  );
}

export default Contact;
