import React from "react";
import {PriceList} from "./modules/pricelist";
import {Header, MainContent} from "./components/layout";
import './index.scss';

function App() {
    return (
        <div className="App">
            <Header/>
            <MainContent>
                <PriceList/>
            </MainContent>
        </div>
    );
}

export default App;
