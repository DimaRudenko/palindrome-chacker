import {UPDATE_TEXT} from "./actionTypes";

export const appReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_TEXT:
            return {
                ...state,
                currentText: action.payload.currentText,
                searchPalindromeResult: action.payload.searchPalindromeResult,
                bestPalindrome:  action.payload.bestPalindrome
            };
        default:
            return state
    }

};