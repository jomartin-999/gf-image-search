/*
 * Copyright 2019 - 2021 VMware, Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import propTypes from "prop-types";
import imageService from "./ImageService";

const ImageDisplay = (props) => {
    const images = Array.from(props.images).map((image, index) => {
        return <p key={`image${index}`} data-qa="ImagesDisplay__image">{image}</p>});

    const destroySession = async () => {
        await imageService.destroySession();
        await props.getImages();
    };

    if (images.length > 0) {
        return (
                <div>
                    <div className="ImagesDisplay__header-wrapper">
                        <h2 data-qa="ImagesDisplay__header">Search Results</h2>
                        <button className="ImagesDisplay__destroy-session-button"
                                data-qa="ImagesDisplay__destroy-session-button"
                                onClick={destroySession}>
                            CLEAR RESULTS
                        </button>
                    </div>
                    {/*{images}*/}
                </div>
            );
    }

    return null;
};

export default ImageDisplay;

ImageDisplay.propTypes = {
    images: propTypes.array,
    getImages: propTypes.func,
};