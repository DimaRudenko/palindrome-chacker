import React, {useContext} from 'react'
import {AppContext} from "../context/appContext";


export const PalindromeResult = () => {
    const {searchPalindromeResult} = useContext(AppContext);
    return (
        <div className="col">
            <div className="card">
                <div className="card-header">
                    <span>Результат</span>
                </div>
                <div className="card-body bg-light">
                    <div className="form-group">
                        {searchPalindromeResult.map((result, i) => {
                            return result.length ?
                                <p key={i} className="card-text" dangerouslySetInnerHTML={{__html: result.palindromeHighlightText}}></p>
                                : <p key={i} className="card-text">{result.originalText}</p>
                        })}
                    </div>
                </div>
            </div>
        </div>

    )
};