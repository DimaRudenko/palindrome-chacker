import React, {useContext} from 'react'
import {AppContext} from "../context/appContext";

export const Editor = () => {
    const {currentText, updateText} = useContext(AppContext);

    return (
        <div className="col">
            <div className="card">
                <div className="card-header">
                    <span>Введите или отредактируйте текст</span>
                    <button type="button" className="btn btn-primary float-right" onClick={() => updateText('')}>Очистить</button>
                </div>
                <div className="card-body p-0">
                    <div className="form-group m-0">
                    <textarea autoFocus className="form-control bg-light border-0" id="PalindromeTextarea" rows="10"
                              value={currentText}
                              onChange={(event) => updateText(event.target.value)}/>
                    </div>
                </div>
            </div>
        </div>
    )
};