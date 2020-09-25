const express = require('express');

const index = function(request, response) {
    response.send("home page");
}

// const find = function(req, res) {
    
// }
module.exports = {index};
