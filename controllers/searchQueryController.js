const axios = require('axios');

/*
This code uses serpstack custom search API. For more information
refer their API documentation : https://serpstack.com/documentation#example_php
Configure the access key using a .env file.
*/

const searchQuery = async (req, res) => {
    if (!req?.body?.query) {
        return res.status(400).json({ 'message': 'query string required' })
    }

    const params = {
        access_key: process.env.SERPSTACK_ACCESS_KEY,
        query: req.body.query,
        gl: 'in'
    };

    axios.get('http://api.serpstack.com/search', { params })
        .then(response => {
            const apiResponse = response.data;
            if (!apiResponse.request.success) {
                return res.status(500).json({ 'message': 'search failed' });
            }

            const results = apiResponse.organic_results.map((result) => {
                const info = {
                    'title': result.title,
                    'url': result.url
                };
                return info;
            })

            res.json(results);
        }).catch(error => {
            console.log(error);
        })
}

module.exports = searchQuery;