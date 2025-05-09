import React from "react";
import Nav from "./Nav";
import Card from "react-bootstrap/Card";
import icon_1 from "./img/icon_store/water-melon.png";
import icon_2 from "./img/icon_store/groceries.png";
import icon_3 from "./img/icon_store/groceries_2.png";
import icon_4 from "./img/icon_store/shop.png";
import icon_5 from "./img/icon_store/shelf-talker.png";
import icon_6 from "./img/icon_store/grocery-bag.png";
import icon_7 from "./img/icon_store/online-shopping-store.png";
import icon_8 from "./img/icon_store/online-store.png";
import icon_9 from "./img/icon_store/wine.png";
import store_text from "./img/icon_store/store_text.png";

const Store = () => {
  return (
    <div>
      <Nav />
      <br />
      <hr class="divider" />
      <div className="store1">
        <div className="storebox">
          <div className="store_text">
            <div className="card_title">Stores</div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <img src={store_text} />
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="store">
        {/* section 1 */}
        <div className="store_con">
          <div
            style={{
              display: "grid",
              gridColumn: "1/2 ",
              gridRow: "1/2",
              height: "200px",
            }}
          >
            <Card className="card_store">
              <Card.Body>
                <div style={{ display: "grid", gridColumn: "1/2 " }}>
                  <img src={icon_1} className="icon_size" />
                </div>
                <div style={{ display: "grid", gridColumn: "2/3 " }}>
                  <Card.Title>E-Grocery Super Market</Card.Title>
                  <Card.Text className="card_text">
                    Delivery
                    <br />
                    Pickup available
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div
            style={{
              display: "grid",
              gridColumn: "2/3",
              gridRow: "1/2",
              height: "200px",
            }}
          >
            <Card className="card_store">
              <Card.Body>
                <div style={{ display: "grid", gridColumn: "1/2 " }}>
                  <img src={icon_2} className="icon_size" />
                </div>
                <div style={{ display: "grid", gridColumn: "2/3 " }}>
                  <Card.Title>DealShare Mart</Card.Title>
                  <Card.Text className="card_text">
                    Delivery
                    <br />
                    Pickup available
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </div>
          <br />
          <div
            style={{
              display: "grid",
              gridColumn: "3/4 ",
              gridRow: "1/2",
              height: "200px",
            }}
          >
            <Card className="card_store">
              <Card.Body>
                <div style={{ display: "grid", gridColumn: "1/2 " }}>
                  <img src={icon_3} className="icon_size" />
                </div>
                <div style={{ display: "grid", gridColumn: "2/3 " }}>
                  <Card.Title>DMart</Card.Title>
                  <Card.Text className="card_text">
                    Delivery
                    <br />
                    Pickup available
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
        <br />
      </div>

      <div className="store">
        {/* section 2 */}
        <div className="store_con">
          <div
            style={{
              display: "grid",
              gridColumn: "1/2 ",
              gridRow: "1/2",
              height: "200px",
            }}
          >
            <Card className="card_store">
              <Card.Body>
                <div style={{ display: "grid", gridColumn: "1/2 " }}>
                  <img src={icon_4} className="icon_size" />
                </div>
                <div style={{ display: "grid", gridColumn: "2/3 " }}>
                  <Card.Title>Blinkit Store</Card.Title>
                  <Card.Text className="card_text">
                    Delivery
                    <br />
                    Pickup available
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </div>
          <br />
          <div
            style={{
              display: "grid",
              gridColumn: "2/3",
              gridRow: "1/2",
              height: "200px",
            }}
          >
            <Card className="card_store">
              <Card.Body>
                <div style={{ display: "grid", gridColumn: "1/2 " }}>
                  <img src={icon_5} className="icon_size" />
                </div>
                <div style={{ display: "grid", gridColumn: "2/3 " }}>
                  <Card.Title>StoreFront Super Market</Card.Title>
                  <Card.Text className="card_text">
                    Delivery
                    <br />
                    Pickup available
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </div>
          <br />
          <div
            style={{
              display: "grid",
              gridColumn: "3/4 ",
              gridRow: "1/2",
              height: "200px",
            }}
          >
            <Card className="card_store">
              <Card.Body>
                <div style={{ display: "grid", gridColumn: "1/2 " }}>
                  <img src={icon_6} className="icon_size" />
                </div>
                <div style={{ display: "grid", gridColumn: "2/3 " }}>
                  <Card.Title>BigBasket</Card.Title>
                  <Card.Text className="card_text">
                    Delivery
                    <br />
                    Pickup available
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
        <br />
      </div>
      <div className="store">
        {/* section 3 */}
        <div className="store_con">
          <div
            style={{
              display: "grid",
              gridColumn: "1/2 ",
              gridRow: "1/2",
              height: "200px",
            }}
          >
            <Card className="card_store">
              <Card.Body>
                <div style={{ display: "grid", gridColumn: "1/2 " }}>
                  <img src={icon_7} className="icon_size" />
                </div>
                <div style={{ display: "grid", gridColumn: "2/3 " }}>
                  <Card.Title>Swiggy Instamart</Card.Title>
                  <Card.Text className="card_text">
                    Delivery
                    <br />
                    Pickup available
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </div>
          <br />
          <div
            style={{
              display: "grid",
              gridColumn: "2/3",
              gridRow: "1/2",
              height: "200px",
            }}
          >
            <Card className="card_store">
              <Card.Body>
                <div style={{ display: "grid", gridColumn: "1/2 " }}>
                  <img src={icon_8} className="icon_size" />
                </div>
                <div style={{ display: "grid", gridColumn: "2/3 " }}>
                  <Card.Title>Online Grocery Mart</Card.Title>
                  <Card.Text className="card_text">
                    Delivery
                    <br />
                    Pickup available
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </div>
          <br />
          <div
            style={{
              display: "grid",
              gridColumn: "3/4 ",
              gridRow: "1/2",
              height: "200px",
            }}
          >
            <Card className="card_store">
              <Card.Body>
                <div style={{ display: "grid", gridColumn: "1/2 " }}>
                  <img src={icon_9} className="icon_size" />
                </div>
                <div style={{ display: "grid", gridColumn: "2/3 " }}>
                  <Card.Title>Spencers</Card.Title>
                  <Card.Text className="card_text">
                    Delivery
                    <br />
                    Pickup available
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Store;
