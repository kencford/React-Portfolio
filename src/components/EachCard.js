import React from 'react';
// import NBAImage from "../images/NBA-Team-Stats.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const EachCard = (props) => {




    return (
        <Card className="m-2 m-auto text-center d-grid aline-content-between" style={{ width: "18rem" }}>
            <Card.Img className="card-img-top" src={props.image} alt={props.name} />
            <Card.Body className="card-body">
                <Card.Title>{props.name}</Card.Title>
                {/* <Card.Text className="card-text">{props.description}</Card.Text> */}
                <Button href={props.githubUrl} target="_blank" className="btn mb-2 btn-primary">Go to Repository</Button>
                <Button href={props.url} target="_blank" className="btn btn-info">Go to website</Button>
            </Card.Body>
        </Card>
    )
};

export default EachCard;
