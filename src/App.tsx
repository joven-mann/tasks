import React from "react";
import "./App.css";
import car from "./car.jpg";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Tasks</h1>
            <div>
                <p>Task 1 and 2:</p>
                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload. I am exited to start software
                    engineering - Joven Mann
                </p>
            </div>

            <div>
                <p>Task 3:</p>
                <img src={car} alt="A picture of a car" />
                <ul>
                    <li>This is the first part of my list</li>
                    <li>This is the second part of my list</li>
                    <li>This is the third part of my list</li>
                </ul>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
                <div>
                    <Container>
                        <Row>
                            <Col>
                                <div
                                    style={{
                                        backgroundColor: "red",
                                        width: "100%",
                                        height: "100%",
                                    }}
                                >
                                    This is the second colunm
                                </div>
                            </Col>
                            <Col>
                                <div
                                    style={{
                                        backgroundColor: "red",
                                        width: "100%",
                                        height: "100%",
                                    }}
                                >
                                    This is the second colunm
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default App;
