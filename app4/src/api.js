// this file represents the all code related to contacting the unsplash API

import axios from "axios";

// this function will turn a search term into an array of image objects.
const searchImages = async (term = 'test') => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {    // options object

        headers : { // we can authorization details here // by which server get to know who is making the request
            Authorization : 'Client-ID _nhInE4jmx9U5TQYxmoU1orex47KpRac1HPy-cltvmA'
        },
        params : {
            query : term
        }
    });
    return response.data.results;
};

export default searchImages;