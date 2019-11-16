import React, {useState} from 'react';
import {LGs} from "../constants/LGs";

export const LGOptions = () => {

    return (
        <>
            {LGs.map((lg) => {
                    return (<option value={lg}>{lg}</option>);
                }
            )}
        </>
    );
}