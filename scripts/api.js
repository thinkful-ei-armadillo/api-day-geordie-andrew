'use strict';

const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/andrew';
  function getItems(){
    return fetch(`${BASE_URL}/items`);
  }
    
  function createItem(name){
    const newItem = JSON.stringify({
      name
    });

    const options = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: newItem
    };
        

        
    return fetch(`${BASE_URL}/items`, options);
  }

  function updateItem(id, updateData) {
    const newData = JSON.stringify({
      updateData
    });

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
	  },
      body: JSON.stringify(updateData)
    };
    console.log(updateData);
    return fetch(`${BASE_URL}/items/${id}`, options);
  }


  return {
    getItems,
    createItem,
    updateItem,
    
  };
}());