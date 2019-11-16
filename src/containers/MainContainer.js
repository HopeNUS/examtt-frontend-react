import React from 'react';
import {GlobalStyle} from "../styles/GlobalStyle";
import { EntryForm } from "../components/EntryForm";

export const MainContainer = () => {
    return (
        <>
            <GlobalStyle />
            <h1>Exam HQ Timetable</h1>
            <EntryForm />
        </>
    )
}