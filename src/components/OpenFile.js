import React, {useContext, useEffect, useRef} from 'react'
import {AppContext} from "../context/appContext";

export const OpenFile = () => {
    const {updateText, fileName, updateFileName} = useContext(AppContext);
    const inputEl = useRef(null);

    const handleFileSelect = async (event) => {
        event.preventDefault();
        const reader = new FileReader();
        reader.onload = async (e) => {
            updateText(e.target.result);
            updateFileName(inputEl.current.value.replace(/^.*[\\\/]/, ''))
        };
        reader.readAsText(event.target.files[0])
    };

    const clearFileInput = () => {
        inputEl.current.value = '';
    };

    return (<div className="row pb-3">
            <div className="col col-md-auto">
                <div className="custom-file">
                    <input type="file" className="custom-file-input"
                           ref={inputEl}
                           id="customFile"
                           accept=".txt"
                           onChange={(e) => handleFileSelect(e)}
                           onClick={clearFileInput}
                    />
                    <label className="custom-file-label" htmlFor="customFile">{fileName}</label>
                </div>
            </div>
        </div>
    )
};
