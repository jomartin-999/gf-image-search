/*
Copyright 2019 - 2021 VMware, Inc.
SPDX-License-Identifier: Apache-2.0
*/

import React, {useState} from 'react';
import ImageSearchForm from "./components/ImageSearchForm";
import SearchResults from "./components/SearchResults";
import './styles/main.css';


const App = () => {
    const [searchResults, setSearchResults] = useState([]);

    const handleClearResults = () => {
         setSearchResults([]);
    };


    return (
         <div className="App">
                <h1>GemFire Image Search</h1>
                <ImageSearchForm setSearchResults={setSearchResults} onClearResults={handleClearResults}/>
                <SearchResults results={searchResults} onClearResults={handleClearResults} />
         </div>
    );

};

export default App;
