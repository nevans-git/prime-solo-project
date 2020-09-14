const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  let queryText = `SELECT * FROM "items"
  WHERE "seasons_id" = 1
  AND "user_id" = $1;`; // This is selecting the Fall season

  pool.query(queryText, [req.user.id]).then((response) => {
      console.log(response.rows);
      
      res.send(response.rows);

  }).catch((error) => {
      console.log('error in GET in fallCloset.router.js', error);
      
  })
});

//router.post('/,')

// Might need to add a post route here to get the data to post to the DOM

module.exports = router;