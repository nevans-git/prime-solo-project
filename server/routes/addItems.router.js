const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  console.log(req.body);
  
  let queryText = `INSERT INTO "items" ("user_id", "type", "seasons_id", "item_description", "last_worn", "item_value", "item_condition")
  VALUES ($1, $2, $3, $4, $5, $6, $7);`;

  pool.query(queryText, [req.user.id, req.body.type, req.body.season_id, req.body.item_description, req.body.last_worn, req.body.item_value, req.body.item_condition] ).then((response) => {
      console.log(response.rows);

      res.send(response.rows);
      
  }).catch((error) => {
      console.log('error in POST in addItems.router.js', error);
      
  })
});

module.exports = router;
