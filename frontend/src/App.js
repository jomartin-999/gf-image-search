/*
Copyright 2019 - 2021 VMware, Inc.
SPDX-License-Identifier: Apache-2.0
*/

import React, {Component} from 'react';
import ImageSearchForm from "./components/ImageSearchForm";
import ImageService from "./components/ImageService";
import ImageDisplay from "./components/ImageDisplay";
import './styles/main.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {images: []};
    }

    getImages = async () => {
        const images = await ImageService.getImages();
        this.setState({images})
    };

    async componentDidMount() {
        await this.getImages();
    }

    render() {
        return (
            <div className="App" data-qa="App">
                <h1>GemFire Image Search</h1>
                <ImageSearchForm getImages={this.getImages}/>
                <ImageDisplay getImages={this.getImages} images={this.state.images}/>
            </div>
        );
    }
}

export default App;
