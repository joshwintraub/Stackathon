const yelp = require('yelp-fusion');

import React, { Component, Text } from 'react';

export default class MapScreen extends Component {
  constructor() {
    super();
    this.state = {
      temp: null
    }
  }
  componentDidMount() {
    const apiKey = process.env.YELP_API_KEY;

    const searchRequest = {
      term: 'Four Barrel Coffee',
      location: 'san francisco, ca'
    };

    const client = yelp.client(apiKey);

    client.search(searchRequest).then(response => {
      const firstResult = response.jsonBody.businesses[0];
      const prettyJson = JSON.stringify(firstResult, null, 4);
      console.log(prettyJson);
    }).catch(e => {
      console.log(e);
    });
  }
  render() {
    return (
      <Text> My first yelp authentication request </Text>
    )
  }

}
