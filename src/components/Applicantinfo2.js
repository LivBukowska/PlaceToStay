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
          id="Number"
          class="form-field"
          type="number"
          placeholder="Number of Rooms"
          name="number"
        />
        </div>
        <div></div>
        
        <div>
        <input
          id="totalroom"
          class="form-field"
          type="number"
          placeholder="Total Area of Rooms"
          name="totalroom"
        />
        </div>

        <div>
        <input
          id="Numberofbedrooms"
          class="form-field"
          type="number"
          placeholder="Number of Bedrooms"
          name="bedrooms"
        />
        </div>

        <div>
        <input
          id="totalbedrooms"
          class="form-field"
          type="number"
          placeholder="Total Area of Bedrooms"
          name="totalbedroom"
        />
        </div>
        
        <div>
        <input
          id="rentprice"
          class="form-field"
          type="text"
          placeholder="Rent Price"
          name="rentprice"
        />
        </div>

        <div>
        <input
          id="monthsforrental"
          class="form-field"
          type="number"
          placeholder="Number of Months for Rental"
          name="monthsforrental"
        />
        </div>

        <p>Preferred Sex of the Adult</p>
        <div>
          <select name="adults" id="adults">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="both">Both</option>
        </select>
        </div>


        <button class="form-field" type="submit">
          Submit
        </button>
        <div>
          
        </div>
      </form>
    </div>
  );
}

