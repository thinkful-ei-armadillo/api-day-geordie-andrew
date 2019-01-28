/* global Item */

// eslint-disable-next-line no-unused-vars
'use strict';

const store = (function(){
  const addItem = function(item) {
    this.items.push(item);
  };

  const findById = function(id) {
    console.log(id);
    return this.items.find(item => item.id === id);
  };


  const findAndDelete = function(id) {
    this.items = this.items.filter(item => item.id !== id);
  };


  function findAndUpdate(id, newData) {
    const item = this.findById(id);
    console.log(item);
    Object.assign(item, newData);
  }


  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setItemIsEditing = function(id, isEditing) {
    const item = this.findById(id);
    item.isEditing = isEditing;
  };

  const setSearchTerm = function(term) {
    this.searchTerm = term;
  };

  const setError = function(message) {
    if(this.error === true){
      return message;
    }
  };

  return {
    items: [],
    hideCheckedItems: false,
    searchTerm: '',
    findAndUpdate,
    addItem,
    findById,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm,
    setItemIsEditing,
    error: null,
    setError,
  };
  
}());
