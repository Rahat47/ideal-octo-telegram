import React from "react";
import { Card, Container } from "semantic-ui-react";
import "./Style.css";

const Statistic = ({ selectedCountry }) => {
    let totalpopulation = 0;
    selectedCountry.forEach(country => {
        totalpopulation = totalpopulation + country.population;
    });
    return (
        <div>
            <Container>
                <Card>
                    <Card.Content>
                        <Card.Header>
                            Country Selected: {selectedCountry.length}
                        </Card.Header>
                        <Card.Description>
                            Total Population: {totalpopulation}
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Container>
        </div>
    );
};

export default Statistic;
