import Form from "react-bootstrap/Form";
import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [edit, setedit] = useState<boolean>(false);
    const [name, setname] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    return (
        <div>
            <Form.Check
                type="switch"
                label="Edit Mode"
                checked={edit}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setedit(e.target.checked);
                }}
            />

            {edit ?
                <div>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>,
                            ) => {
                                setname(e.target.value);
                            }}
                        />
                    </Form.Group>

                    <Form.Check
                        type="checkbox"
                        label="Is Student"
                        id="student-checkbox"
                        checked={student}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setStudent(e.target.checked);
                        }}
                    />
                </div>
            :   <div>
                    {name} {student ? "is a student" : "is not a student"}
                </div>
            }
        </div>
    );
}
