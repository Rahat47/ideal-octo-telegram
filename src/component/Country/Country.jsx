import React from "react";
import { Button, Header } from "semantic-ui-react";

import "./Country.css";

const Country = ({ country, selectCountry }) => {
    return (
        <div>
            <Header size="huge">{country.name}</Header>
            <div id="main-container">
                <div id="flag-container">
                    <img src={country.flag} alt={country.name} />
                </div>
                <div id="info-container">
                    <p>Capital: {country.capital} </p>
                    <p>Dialing Code: {country.callingCodes} </p>
                    <p>Population: {country.population} </p>
                    <p>Currencies: {country.currencies[0].code} </p>
                    <p>Region: {country.region}</p>
                    <p>Subregion: {country.subregion}</p>
                    <Button
                        positive
                        content="Select"
                        onClick={() => selectCountry(country)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Country;
