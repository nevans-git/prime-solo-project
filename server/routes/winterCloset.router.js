const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  let queryText = `SELECT 'Winter' FROM "seasons"`; // This is selecting the Fall data from the 

  pool.query(queryText).then((response) => {
      console.log(response.rows);
      
      res.send(response.rows);

  }).catch((error) => {
      console.log('error in GET in winterCloset.router.js', error);
      
  })
});