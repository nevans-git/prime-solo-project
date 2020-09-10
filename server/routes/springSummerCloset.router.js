const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  let queryText = `SELECT 'Spring/Summer' FROM "seasons "`; // This is selecting the Spring/Summer data from the 

  pool.query(queryText).then((response) => {
      console.log(response.rows);
      
      res.send(response.rows);

  }).catch((error) => {
      console.log('error in GET in springSummerCloset.router.js', error);
      
  })
});