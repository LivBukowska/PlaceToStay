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
        <input
          id="Numb"
          class="form-field"
          type="number"
          placeholder="Number of Rooms"
          name="surname"
        />
        </div>
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
