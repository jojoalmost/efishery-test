import React from "react";
import {PriceList} from "./modules/pricelist";
import {Header, MainContent} from "./components/layout";
import PriceListContextProvider from "./modules/pricelist/context/PriceListContext";
import './index.scss';

function App() {
    return (
        <div className="App">
            <Header/>
            <MainContent>
                <PriceListContextProvider>
                    <PriceList/>
                </PriceListContextProvider>
            </MainContent>
        </div>
    );
}

export default App;
