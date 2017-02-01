import React, { Component } from 'react';

class CountriesList extends Component {
  renderCountries(){
    const countries = this.props.countries;
    return (
      countries.map((country, index) => {
        return(
          <option value={country.code} key={index}>
            {country.name}
          </option>
        )
      })
    )
  }

  render() {
    return (
      <div>
        <select onChange={this.props.onCountryChange} value={this.props.selectedCountry}>
          <option value="-1" key="-1">Select a country</option>
            {this.renderCountries()}
        </select>
      </div>
    )
  }
}

export default CountriesList;
