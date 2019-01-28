'use strict';

const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/andrew';
  function getItems(){
    return listApiFetch(`${BASE_URL}/items`);
  }

  function listApiFetch(...args) {
    let error = false;
    return fetch(...args)
      .then(res => {
        if (!res.ok) {
          error = true;
        }
        return res.json();
      })
      .then(data => {
        if (error) throw new Error(data.message);
        return data;
      });
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
    return listApiFetch(`${BASE_URL}/items`, options);
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
    return listApiFetch(`${BASE_URL}/items/${id}`, options);
  }

  function deleteItem(id) {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return listApiFetch(`${BASE_URL}/items/${id}`, options);
  }


  return {
    getItems,
    createItem,
    updateItem,
    deleteItem
  };
}());