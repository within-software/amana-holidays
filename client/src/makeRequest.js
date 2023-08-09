import axios from "axios";
import config from './config';

// Use the variables from the config.js file
const apiUrl = config.API_URL;
const apiToken = config.API_TOKEN;
const uploadUrl = config.UPLOAD_URL;

export const makeRequest = axios.create({
  baseURL: apiUrl, // Use the value from config.API_URL
  headers: {
    Authorization: "bearer " + apiToken, // Use the value from config.API_TOKEN
  },
});

//  baseURL: "http://62.72.6.51:1337/api",
//71b3ccf29df45a9ffd589d44ea97793f19f7c05b094afeb6089cc4445c9b92b0cc25f6ffe7b23bc96a00eb29353bc80de5178a9d8c2b4167610ff6413f54b35cd4f8e84dc794578c9c72a2f594f3b52ea6f5665de27ad186a10b4253281bc0a7b1e8228c190afb3cdb3bcdca45524830b75f0ae83f04cb679a6cb21049266cb2


//a4bc0de4796ad3d7fca133bc238674abfda78572e8ff7b35715707e9c979a0f9fa4d3d3486fb843d6b469afe5d20da5456f9a10a3adef17e8806cc6e323e24f458396e5a9f99ac2dc51ca7f6e912bbe7cd19dee70f916e9a2e3238c34a2d168ae64ea3127f68f71d022f7527a5ff4b7b4f967f213887ca327e462d42bc4313ba