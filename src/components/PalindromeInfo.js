import React, {useContext} from 'react'
import {AppContext} from "../context/appContext";

export const PalindromeInfo = () => {
    const {bestPalindrome} = useContext(AppContext);
    return (
        <div className="row">
            <div className="col bg-info">
                <dt className="col-sm-9">Самый длинный палиндром:</dt>
                <dd className="col-sm-9"><p>{bestPalindrome.palindromeText}</p></dd>
            </div>
        </div>
    )
};