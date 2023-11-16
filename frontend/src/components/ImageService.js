/*
 * Copyright 2019 - 2021 VMware, Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import axios from 'axios';

const instance = axios.create();

const searchImages = async (imageSearchQuery) => {
    await instance.post('/searchImages', imageSearchQuery,{
        headers: { 'Content-Type': 'text/plain' }
    });
};

const getImages = async () => {
    const response = await instance.get('/getImages');
    return response.data;
};

const destroySession = async () => {
    await instance.post('/invalidateSession');
};

const imageServiceMethods = {
    searchImages,
    getImages,
    destroySession,
};

export default imageServiceMethods;