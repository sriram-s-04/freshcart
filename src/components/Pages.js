import React from "react";
import Nav from "./Nav";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.css";
const Pages = () => {
  let card = [
    {
      Title: "Harissa Chickpeas with Whipped Feta",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat, diam dui malesuada nu...",
      date: "22 April 2023",
      img: "1.jpg",
      read_time: "12",
    },
    {
      Title: "Almond Butter Chocolate Chip Zucchini Bars",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat, diam dui malesuada nu...",
      date: "20 April 2023",
      img: "2.jpg",
      read_time: "8",
    },
    {
      Title: "Spicy Shrimp Tacos Garlic Cilantro Lime Slaw",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat, diam dui malesuada nu...",
      date: "18 April 2023",
      img: "3.jpg",
      read_time: "5",
    },
    {
      Title: "Red Chile Chicken Tacos with Creamy Corn",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat, diam dui malesuada nu...",
      date: "16 April 2023",
      img: "4.jpg",
      read_time: "9",
    },
    {
      Title: "Basic + Awesome Broccoli Cheese Soup",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat, diam dui malesuada nu...",
      date: "14 April 2023",
      img: "5.jpg",
      read_time: "12",
    },
    {
      Title: "No-Boil Baked Penne with Meatballs",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat, diam dui malesuada nu...",
      date: "12 April 2023",
      img: "6.jpg",
      read_time: "6",
    },
    {
      Title: "Simple Homemade Tomato Soup",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat, diam dui malesuada nu...",
      date: "10 April 2023",
      img: "7.jpg",
      read_time: "6",
    },
    {
      Title: "Garlic Cream Bucatini with Peas and Asparagus",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat, diam dui malesuada nu...",
      date: "8 April 2023",
      img: "8.jpg",
      read_time: "6",
    },
    {
      Title: "Cheese Garlic Cream Soup",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat, diam dui malesuada nu...",
      date: "6 April 2023",
      img: "9.jpg",
      read_time: "6",
    },
  ];

  return (
    <div>
      <Nav />
      <br />
      <hr class="divider" />
      <div>
        <div></div>
        <div></div>
        <div className="store1">
          <Row xs={1} sm={2} md={3} className="g-4">
            {card.map((dtal) => (
              <Col key={dtal.Title}>
                <Card>
                  <Card.Img variant="top" src={`/pages_imgs/${dtal.img}`} />
                  <Card.Body className="pages_card">
                    <Card.Title style={{ display: "grid", gridColumn: "1/3" }}>
                      {dtal.Title}
                    </Card.Title>
                    <Card.Text style={{ display: "grid", gridColumn: "1/3" }}>
                      {dtal.discription}
                    </Card.Text>
                    <Card.Text style={{ display: "grid", gridColumn: "1/3" }}>
                      {dtal.date}
                    </Card.Text>  
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Pages;
