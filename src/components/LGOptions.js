import React from 'react';
import {LGs} from "../constants/LGs";

export const LGOptions = () => {

    return (
        <>
            {LGs.map((lg) => {
                    return (<option key={lg} value={lg}>{lg}</option>);
                }
            )}
        </>
    );
}