import React from "react";

import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

export default function Showweather() {
  const { country, city } = useParams();
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${country},${city}&appid=40c33632b95cf0a75ba689491a559e71`;
  const { data } = useQuery("Weather-detail", () =>
    fetch(url).then((res) => res.json())
  );

  console.log(data);
  return (
    <div className="bg-blue-900 justify-center items-center flex h-screen">
      <Card className="text-center w-60 ">
        <Card.Header>{"element.list.dt_txt"}</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
}
