import React from "react";
import {Button, Form} from "react-bootstrap";
import {LGOptions} from "./LGOptions";

export const PWForm = () => {
    const handleSubmit = form => {
        console.log(form);
    }

    return (
        <>
            <Form method="post" onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label class="font-weight-bolder text-monospace">Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter name" />
                </Form.Group>
                <Form.Group controlId="formLG">
                    <Form.Label class="font-weight-bolder text-monospace">LG</Form.Label>
                    <Form.Control as="select">
                        <LGOptions/>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="TimetableInput">
                    <Form.Label class="font-weight-bolder text-monospace">Timetable</Form.Label>
                    <Form.Control as="textarea" rows="5" />
                </Form.Group>
                <Button type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}