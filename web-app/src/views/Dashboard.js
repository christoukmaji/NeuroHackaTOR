import React from "react";
import ChartistGraph from "react-chartist";
import NotificationAlert from 'react-notification-alert';
import "react-notification-alert/dist/animate.css";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";


function Dashboard() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="7">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <img src = "/checkmark.jpg" width = "50" length = "50"></img>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Currently</p>
                      <Card.Title as="h4">FOCUSED</Card.Title>

                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Updated Now
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">EEG Signals</Card.Title>
                <p className="card-category">Per minute average for the last 10 minutes</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={{
                      labels: [
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "10",
                      ],
                      series: [
                        [287, 124, 153, 385, 490, 492, 554, 586, 769,695],
                        [234, 115, 412, 231, 356, 635, 345, 543, 15,123],
                        [712, 841, 321, 71, 264, 413, 652, 521, 123,421],
                      ],
                    }}
                    type="Line"
                    options={{
                      low: 0,
                      high: 800,
                      showArea: false,
                      height: "245px",
                      axisX: {
                        showGrid: false,
                      },
                      lineSmooth: true,
                      showLine: true,
                      showPoint: true,
                      fullWidth: true,
                      chartPadding: {
                        right: 50,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Alpha
                  <i className="fas fa-circle text-danger"></i>
                  Beta 
                  <i className="fas fa-circle text-warning"></i>
                  Gamma
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-history"></i>
                  Updated now
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
