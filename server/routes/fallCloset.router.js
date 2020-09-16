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
      console.log('error in GET fallCloset.router.js', error);

      res.sendStatus(500);
      
  })
});

// console.log(req.body in here )
router.delete('/:id', (req, res) => {
  console.log(req.body);

  let id = req.params.id;
  console.log('deleted route with id of: ', id);
  
  
  let queryText = `DELETE FROM "items" WHERE "id" = $1`;

  pool.query(queryText, [id]).then((response) => {
    console.log(response.rows);

    res.sendStatus(200);
    
  }).catch((error) => {
    console.log('error in DELETE in fallCloset.router.js', error);

    res.sendStatus(500);
    
  })
});


//router.post('/,')

// Might need to add a post route here to get the data to post to the DOM

module.exports = router;