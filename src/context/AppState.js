import React, {useReducer, useEffect} from 'react';
import {AppContext} from './appContext';
import {appReducer} from './appReducer';
import {UPDATE_TEXT, UPDATE_FILE_NAME, CLEAR_ALL} from './actionTypes'
import {searchPalindromes} from "../util/util";

export const AppState = ({children}) => {
    const initialState = {
        fileName: 'Выберете файл',
        currentText: '',
        searchPalindromeResult: [{  // just for structure info
            originalText: '',
            palindromeText: '',
            position: [0, 0],
            length: 0
        }],
        bestPalindrome: {}
    };
    const [state, dispatch] = useReducer(appReducer, initialState);

    const updateText = (text) => {
        const {palindromes, bestPalindrome} = searchPalindromes(text);
        dispatch({
            type: UPDATE_TEXT,
            payload: {
                currentText: text,
                searchPalindromeResult: palindromes,
                bestPalindrome
            }
        });
    };

    const updateFileName = (fileName) => {
        dispatch({
            type: UPDATE_FILE_NAME,
            payload: fileName
        });
    };

    const clearAll = ()=>{
        dispatch({
            type: CLEAR_ALL
        });
    };

    const {currentText, searchPalindromeResult, bestPalindrome, fileName} = state;

    useEffect(() => {
        updateText(`казак
- Do geese see God? Others tell a story.
- A man, a plan, a canal: Panama.
- Still others are silly and rather nonsensical.
Amore, Roma.
А роза упала на лапу Азора.`);
    }, []);

    return (
        <AppContext.Provider value={{
            currentText, updateText, searchPalindromeResult, bestPalindrome,
            fileName, updateFileName, clearAll
        }}>
            {children}
        </AppContext.Provider>
    )

};