import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export function GiveAttempts(): React.JSX.Element {
    const [userattempts, setuserattempts] = useState<number>(3);
    const [reattempts, setreattempts] = useState<string>("");
    const parsed = parseInt(reattempts) || 0;

    return (
        <div>
            <h3>Number of attempts left : {userattempts}</h3>
            <Form.Group>
                <Form.Label>Input Number</Form.Label>
                <Form.Control
                    type="number"
                    value={reattempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setreattempts(event.target.value);
                    }}
                />
            </Form.Group>
            <Button
                onClick={() => {
                    setuserattempts(userattempts - 1);
                }}
                disabled={userattempts <= 0}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    setuserattempts(userattempts + parsed);
                }}
            >
                gain
            </Button>
        </div>
    );
}
