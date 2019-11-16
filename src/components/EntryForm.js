import React from 'react';
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import {LGOptions} from "./LGOptions";

export const EntryForm = () => {
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter name" />
            </Form.Group>

            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">LG</label>
                <select className="form-control" id="selectLG">
                    <LGOptions/>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Timetable</label>
                <textarea className="form-control" id="timeTableInput" rows="3"></textarea>
            </div>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};
