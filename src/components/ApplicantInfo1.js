import React from "react";

export default function App() {
  return (
    <div class="form-container">
      <form class="register-form">
        <header>Applicant Information</header>
        <input
          id="name"
          class="form-field"
          type="text"
          placeholder="Name"
          name="Name"
        />
        <input
          id="surname"
          class="form-field"
          type="text"
          placeholder="Surname"
          name="surname"
        />
        Photo
        <input
          id="photo"
          class="form-field"
          type="file"
          placeholder="Photo"
          name="photo"
        />
        <input
          id="country"
          class="form-field"
          type="text"
          placeholder="Country"
          name="country"
        />
        
        <button class="form-field" type="submit">
          Continue
        </button>
      </form>
    </div>
  );
}
