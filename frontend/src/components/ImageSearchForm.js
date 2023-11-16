/*
 * Copyright 2019 - 2021 VMware, Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import React, {Component} from 'react';
import imageService from "./ImageService";
import propTypes from "prop-types";

class ImageSearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {image: ''};
    }

    searchImages = async (event) => {
        event.preventDefault();
        await imageService.searchImages(this.state.image.valueOf());
        this.setState({image: ''});
        await this.props.getImages();

    };

    onImageSearchInputChange = (event) => {
        this.setState({image: event.target.value});
    };

    render() {
        return (
            <form className="ImagesForm" onSubmit={this.searchImages}>
                <label className="ImagesForm__image-label">Enter Image Search Query:</label>
                <input
                    className="ImagesForm__image-input"
                    data-qa="ImagesForm__image-input"
                    type='text'
                    value={this.state.image}
                    onChange={this.onImageSearchInputChange}
                />
                <button
                    className="ImagesForm__submit-button"
                    data-qa="ImagesForm__submit-button"
                    type="submit">Search</button>
            </form>
        );
    }
}

export default ImageSearchForm;

ImageSearchForm.propTypes = {
    getImages: propTypes.func
};