import React, {useState} from 'react';
import {
    GlobalStyle,
    MainContainerWrapper
} from "../styles/GlobalStyle";
import {
    Jumbotron,
    ButtonToolbar,
    ToggleButtonGroup,
    ToggleButton
} from "react-bootstrap";
import { EntryForm } from "../components/EntryForm";
import { PWForm } from "../components/PWForm";

export const MainContainer = () => {
    const [userType, setUserType] = useState("participant");

    const handleChange = change => {
        setUserType(change);
    }

    function RenderForm() {
        switch (userType) {
            case "participant" :
                return (<EntryForm/>);
            case "prayerWarrior" :
                return (<PWForm/>);
            default :
        }
    }

    return (
        <>
            <GlobalStyle />
            <MainContainerWrapper>
                <Jumbotron>
                    <h1>Exam HQ Timetable</h1>
                </Jumbotron>
                <ButtonToolbar>
                    <ToggleButtonGroup
                        type="radio"
                        name="options"
                        defaultValue={"participant"}
                        onChange={handleChange}
                    >
                        <ToggleButton value={"participant"}>Participant</ToggleButton>
                        <ToggleButton value={"prayerWarrior"}>Prayer Warrior</ToggleButton>
                    </ToggleButtonGroup>
                </ButtonToolbar>
                <RenderForm />
            </MainContainerWrapper>
        </>
    )
}