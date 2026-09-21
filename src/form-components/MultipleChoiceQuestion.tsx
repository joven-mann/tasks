import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);
    return (
        <div>
            <h3>Multiple Choice Question</h3>

            <Form.Select
                value={choice}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setChoice(e.target.value);
                }}
            >
                {options.map((val: string) => (
                    <option key={val} value={val}>
                        {val}
                    </option>
                ))}
            </Form.Select>

            <div>{choice === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
