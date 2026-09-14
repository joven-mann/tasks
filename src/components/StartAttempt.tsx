import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function start(): void {
        setAttempt(attempt - 1);
        setProgress(true);
    }

    function stop(): void {
        setProgress(false);
    }

    function mulligan(): void {
        setAttempt(attempt + 1);
    }

    return (
        <div>
            Number of Attempts: {attempt}
            <Button onClick={start} disabled={progress || attempt <= 0}>
                Start Quiz
            </Button>
            <Button onClick={mulligan} disabled={progress}>
                Mulligan
            </Button>
            <Button onClick={stop} disabled={!progress}>
                Stop Quiz
            </Button>
        </div>
    );
}
