import {UPDATE_TEXT, UPDATE_FILE_NAME, CLEAR_ALL} from "./actionTypes";

export const appReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_TEXT:
            return {
                ...state,
                currentText: action.payload.currentText,
                searchPalindromeResult: action.payload.searchPalindromeResult,
                bestPalindrome: action.payload.bestPalindrome
            };
        case UPDATE_FILE_NAME:
            return {
                ...state,
                fileName: action.payload
            };

        case CLEAR_ALL:
            return {
                ...state,
                fileName: 'Выберете файл',
                currentText: '',
                searchPalindromeResult: [],
                bestPalindrome: {}
            };
        default:
            return state
    }

};