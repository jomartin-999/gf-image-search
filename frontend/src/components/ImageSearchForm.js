/*
 * Copyright 2019 - 2021 VMware, Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import React, {useState} from 'react';


const ImageSearchForm = ({setSearchResults, onClearResults}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = async (event) => {
        event.preventDefault();
        onClearResults();

        try {
            const response = await fetch('/searchImages',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({searchQuery})
            });

            const result = await response.json();

            setSearchResults(result)

        } catch(error){
            console.error('Error fetching images: ', error);
        }

        setSearchQuery('');

};

return (
   <form className="ImagesForm" onSubmit={handleSearch}>

         <input
             className="ImagesForm__image-input"
             type='text'
              value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
             placeholder="Enter your search"
         />
         <button
          className="ImagesForm__submit-button"
          type="submit">Search Images
         </button>
   </form>
);

}

export default ImageSearchForm;