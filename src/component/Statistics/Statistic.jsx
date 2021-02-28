import React from "react";
import { Card, Container } from "semantic-ui-react";
import "./Style.css";

const Statistic = ({ selectedCountry }) => {
    return (
        <div>
            <Container>
                <Card>
                    <Card.Content>
                        <Card.Header>
                            Country Selected: {selectedCountry.length}
                        </Card.Header>
                        <Card.Meta>
                            <span className="date">Joined in 2015</span>
                        </Card.Meta>
                        <Card.Description>
                            Matthew is a musician living in Nashville.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra></Card.Content>
                </Card>
            </Container>
        </div>
    );
};

export default Statistic;
