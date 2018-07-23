import React, { Component } from 'react';

export const feedService = {
    getTwitterTrends
};

function getTwitterTrends(access_token) {

  console.log("Test: " + access_token);
  
	return fetch('https://api.twitter.com/1.1/trends/place.json?id=1', {
             method: 'GET',
             headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'bearer ' + access_token,
              'Host': 'api.twitter.com'
            }
          }).then((response) => response.json());
}