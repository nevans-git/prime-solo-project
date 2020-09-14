const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  let queryText = `SELECT * FROM "seasons "
                    WHERE "season_name" = 'Spring/Summer'`; // This is selecting the Spring/Summer season

  pool.query(queryText).then((response) => {
      console.log(response.rows);
      
      res.send(response.rows);

  }).catch((error) => {
      console.log('error in GET in springSummerCloset.router.js', error);
      
  })
});

module.exports = router;