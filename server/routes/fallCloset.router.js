const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  let queryText = `SELECT * FROM "seasons"
                    WHERE "season_name" = 'Fall'`; // This is selecting the Fall season

  pool.query(queryText).then((response) => {
      console.log(response.rows);
      
      res.send(response.rows);

  }).catch((error) => {
      console.log('error in GET in fallCloset.router.js', error);
      
  })
});

// Might need to add a post route here to get the data to post to the DOM