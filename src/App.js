import React from 'react'
import {AppState} from "./context/AppState";
import {OpenFile} from "./components/OpenFile";
import {Editor} from "./components/Editor";
import {PalindromeResult} from "./components/PalindromeResult";
import {PalindromeInfo} from "./components/PalindromeInfo";
import {Header} from "./components/Header";

function App() {
    return (
        <AppState>
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <Header/>
                <div className="inner cover">
                    <OpenFile/>
                    <div className="row justify-content-md-center">
                        <Editor/>
                        <PalindromeResult/>
                    </div>
                    <PalindromeInfo/>
                </div>
            </div>
        </AppState>
    );
}

export default App;
