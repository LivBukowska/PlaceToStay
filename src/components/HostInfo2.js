import React from "react";

export default function App() {
  return (
    <div class="form-container">
      <form class="register-form">
        <header>Place Information</header>
        <input
          id="city"
          class="form-field"
          type="text"
          placeholder="City"
          name="city"
        />
        <div>
        </div>
        <input
          id="surname"
          class="form-field"
          type="text"
          placeholder="Surname"
          name="surname"
        />
        <div>
        </div>
        Photo
        <input
          id="photo"
          class="form-field"
          type="file"
          placeholder="Photo"
          name="photo"
        />
       <div>
       </div>
        <button class="form-field" type="submit">
          Continue
        </button>
      </form>
    </div>
  );
}