import React from "react";
import "./index.css";

export default function App() {
  return (
    <div class="form-container">
      <form class="register-form">
      <h2>Profile Data</h2>
        <header>List of People</header>
        <input
          id="men"
          class="form-field"
          type="number"
          placeholder="Number of Men in Group"
          name="Men"
        />
        <input
          id="women"
          class="form-field"
          type="number"
          placeholder="Number of Women in Group"
          name="women"
        />
         <input
          id="children"
          class="form-field"
          type="number"
          placeholder="Number of Children in Group"
          name="children"
        />
        {/*
                  <header>Please Select the Ages for the Children</header>
        <input
          id="children-0-2"
          class="form-field"
          type="checkbox"
          placeholder="The Children 0-2"
          name="children0-2"
        />
        <label for="children-0-2">0-2 years old</label>
        </div>
        <div>
        <input
          id="children-3-7"
          class="form-field"
          type="checkbox"
          placeholder="The Children 3-7"
          name="children3-7"
        />
        <label for="children-3-7">3-7 years old</label>
        </div>
        <div>
        <input
          id="children-8-10"
          class="form-field"
          type="checkbox"
          placeholder="The Children 8-10"
          name="children8-10"
        />
        <label for="children-8-10">8-10 years old</label>
        </div>
        <div>
        <input
          id="children-11-13"
          class="form-field"
          type="checkbox"
          placeholder="The Children 11-13"
          name="children11-13"
        />
        <label for="children-11-13">11-13 years old</label>
        </div>
        <div>
        <input
          id="children-13"
          class="form-field"
          type="checkbox"
          placeholder="The Children 13+"
          name="children-13"
        />
        <label for="children-13">13+ years old</label>
  </div> */}

        <div>
        <input
          id="bedrooms"
          class="form-field"
          type="number"
          placeholder="Number of Bedrooms"
          name="bedrooms"
        />
        </div>
        <div>
        <input
          id="Minimum-Square-Meters"
          class="form-field"
          type="text"
          placeholder="Minimum Square Meters"
          name="bedrooms"
        />
        </div>
        <div>
        <input
          id="Monthly-Funds"
          class="form-field"
          type="text"
          placeholder="Monthly Funds Available"
          name="monthly-funds"
        />
        </div>
        <div>
        <input
          id="time-before-arrival"
          class="form-field"
          type="number"
          placeholder="Months for Arrival"
          name="time-before-arrival"
        />
        </div>
        
        <button class="form-field" type="submit">
          Continue
        </button>
      </form>
    </div>
  );
}

