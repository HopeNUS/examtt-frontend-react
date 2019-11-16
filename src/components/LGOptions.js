import React, { useState } from 'react';
import {LGs} from "../data/LGs";

export const LGOptions = () => {
    const LGOptions = useState(LGs);

    function generateLGOptions(lg) {
        return (
            <option>{lg}</option>
        )
    }

    console.log(LGs);

    return (
        <>
            {LGOptions.map(lg => {
                return generateLGOptions(lg);
            })}
        </>
    )
}