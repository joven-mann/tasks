import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
];

export function ChangeColor(): React.JSX.Element {
    const [color, setcolor] = useState<string>("red");

    return (
        <div>
            {COLORS.map((val: string) => (
                <Form.Check
                    key={val}
                    inline
                    type="radio"
                    label={val}
                    name="color"
                    value={val}
                    checked={color === val}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setcolor(e.target.value);
                    }}
                />
            ))}

            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                }}
            >
                {color}
            </div>
        </div>
    );
}
