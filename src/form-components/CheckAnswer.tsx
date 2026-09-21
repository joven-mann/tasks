import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [given, setGiven] = useState<string>("");
    return (
        <div>
            <Form.Group controlId="FormCheckAnswer">
                <Form.Label>Type in Answer</Form.Label>
                <Form.Control
                    value={given}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setGiven(event.target.value);
                    }}
                ></Form.Control>
            </Form.Group>
            {given === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
