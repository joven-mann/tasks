import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎅" | "🕯️" | "👻" | "🎆" | "♥️";

const byYear: Record<Holiday, Holiday> = {
    "♥️": "🕯️",
    "🕯️": "👻",
    "👻": "🎅",
    "🎅": "🎆",
    "🎆": "♥️",
};

const byAlp: Record<Holiday, Holiday> = {
    "🕯️": "🎅",
    "🎅": "👻",
    "👻": "🎆",
    "🎆": "♥️",
    "♥️": "🕯️",
};

export function CycleHoliday(): React.JSX.Element {
    const [state, setState] = useState<Holiday>("♥️");

    function changealp(): void {
        const foo = byAlp[state];
        setState(foo);
    }

    function changeyear(): void {
        const bar = byYear[state];
        setState(bar);
    }
    return (
        <div>
            <div>Holiday: {state}</div>
            <Button onClick={changealp}>Advance by Alphabet</Button>
            <Button onClick={changeyear}>Advance by Year</Button>
        </div>
    );
}
