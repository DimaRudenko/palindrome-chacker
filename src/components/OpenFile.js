import React, {useContext} from 'react'
import {AppContext} from "../context/appContext";

export const OpenFile = () => {
    const {updateText} = useContext(AppContext);

    const handleFileSelect = async (event) => {
        event.preventDefault();
        const reader = new FileReader();
        reader.onload = async (e) => {
            updateText(e.target.result)
        };
        reader.readAsText(event.target.files[0])
    };

    return (
        <div>
            <label className="" htmlFor="customFile">Выберите файл:
                <input type="file" id="customFile"
                       accept=".txt"
                       onChange={(e) => handleFileSelect(e)}/>
            </label>
        </div>

    )
};
