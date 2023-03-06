import React from "react";
import "./app.css";
const options = [
  {
    value: "India",
    label: "India",
  },
  {
    value: "",
    label: "-- Select Country--",
  },
  {
    value: "Finland",
    label: "Finland",
  },
  {
    value: "Sweden",
    label: "Sweden",
  },
  {
    value: "Norway",
    label: "Norway",
  },
  {
    value: "Denmark",
    label: "Denmark",
  },
];
const selectOptions = options.map(({ value, label }) => (
  <option key={value}> {label}</option>
));
class App extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    dateOfBirth: "",
    weight: "",
    height: "",
    country: "",
    gender: "",
    movies: {
      thriller: false,
      family: false,
      biography: false,
    },
    bio: "",
    file: "",
  };
  handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    if (type === "checkBox") {
      this.setState({
        movies: { ...this.state.movies, [name]: checked },
      });
    } else if (type === "file") {
      this.setState({
        [name]: e.target.files[0],
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      weight,
      height,
      country,
      gender,
      movies,
      bio,
      file,
    } = this.state;
    const formattedMovies = [];
    for (const key in movies) {
      if (movies[key]) {
        formattedMovies.push(key.toUpperCase());
      }
    }
    const data = {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      weight,
      height,
      country,
      gender,
      movies: formattedMovies,
      bio,
      file,
    };
    console.log(data);
  };
  render() {
    const {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      weight,
      height,
      gender,
      bio,
    } = this.state;
    return (
      <div className="app-container">
        <h1>Customer Details</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-container">
            <div className="input-container">
              <label htmlFor="firstName">FirstName</label>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={this.handleChange}
                placeholder="First Name"
              />
            </div>
            <div className="input-container">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={this.handleChange}
                placeholder="Last Name"
              />
            </div>
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                placeholder="Email"
              />
            </div>
            <div className="input-container">
              <label htmlFor="tel">Phone Number</label>
              <input
                type="tel"
                name="tel"
                value={tel}
                onChange={this.handleChange}
                placeholder="Phone Number"
              />
            </div>
            <div className="input-container">
              <label htmlFor="dateOfBirth">DOB</label>
              <input
                type="date"
                name="dateOfBirth"
                value={dateOfBirth}
                onChange={this.handleChange}
                placeholder="Date Of Birth"
              />
            </div>
            <div className="input-container">
              <label htmlFor="weight">Weight</label>
              <input
                type="weight"
                name="weight"
                value={weight}
                onChange={this.handleChange}
                placeholder="Weight in KG"
              />
            </div>
            <div className="input-container">
              <label htmlFor="height">Height</label>
              <input
                type="height"
                name="height"
                value={height}
                onChange={this.handleChange}
                placeholder="Height in ft"
              />
            </div>
            <div className="select-container">
              <label htmlFor="country">Country</label>
              <select name="country" onChange={this.handleChange} id="country">
                {selectOptions}
              </select>
            </div>
            <div className="radio-container">
              <label htmlFor="gender">Gender</label>
              <div className="male-radio">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={this.handleChange}
                  checked={gender === "male"}
                />
                <label htmlFor="male">Male</label>
              </div>
              <div className="female-radio">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={this.handleChange}
                  checked={gender === "female"}
                />
                <label htmlFor="female">Female</label>
              </div>
              <div className="other-radio">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  onChange={this.handleChange}
                  checked={gender === "other"}
                />
                <label htmlFor="other">Other</label>
              </div>
            </div>
            <div className="checkBox-container">
              <fieldset>
                <legend>What Type Of Movies Do You Like?</legend>

                <input
                  type="checkbox"
                  name="thriller"
                  value="thriller"
                  onChange={this.handleChange}
                />
                <label htmlFor="animation">Thriller Movies</label>

                <input
                  type="checkbox"
                  name="family"
                  value="family"
                  onChange={this.handleChange}
                />
                <label htmlFor="family">Family Movies</label>

                <input
                  type="checkbox"
                  name="biography"
                  value="biography"
                  onChange={this.handleChange}
                />
                <label htmlFor="biography">Biography Movies</label>
              </fieldset>
            </div>
            <div className="text-container">
              <label htmlFor="bio">About yourself</label> <br />
              <textarea
                id="bio"
                name="bio"
                value={bio}
                onChange={this.handleChange}
                cols="120"
                rows="10"
                placeholder="Write about yourself ..."
              />
            </div>
            <div className="file-container">
              <input type="file" name="file" onChange={this.handleChange} />
            </div>
            <div class="btn-container">
              <button>Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default App;
