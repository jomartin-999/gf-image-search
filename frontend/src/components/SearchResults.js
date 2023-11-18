/*
 * Copyright 2019 - 2021 VMware, Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

const SearchResults = ({results, onClearResults}) => {
    return (
        <div>
            <div className="ImagesDisplay__header-wrapper">
                <h2 data-qa="ImagesDisplay__header">Search Results</h2>
                <button className="ImagesDisplay__destroy-session-button"
                        onClick={onClearResults}>
                    Clear Results
                </button>
            </div>
            <div className="search-results">
            {results.length > 0 ? (
                results.map((imageUrl, index) => (
                    <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
                ))
            ) : (
                <p>No Results</p>
            )}
            </div>
        </div>
    );

};

export default SearchResults;

