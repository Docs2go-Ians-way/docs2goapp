//Remember Etienne route filenames are always PLURAL, and yes it was you who put this here Etienne.
// And MODEL files are always singular.

const express = require('express');
const router = express.Router();

/* Get reviews index /reviews  */
router.get('/', (req, res, next) => {
    res.send('INDEX /reviews');
  });

/* Get reviews index /reviews/new  */
router.get('/new', (req, res, next) => {
  res.send('NEW /reviews/new');
});

/* Post reviews create /reviews  */
  router.post('/', (req, res, next) => {
    res.send('CREATE /reviews/new');
  });

/* Get reviews show /reviews/:id  */
router.get('/:id', (req, res, next) => {
  res.send('SHOW /reviews/new');
});

/* Get reviews edit /reviews/:id/edit  */
  router.get('/:id/edit', (req, res, next) => {
    res.send('EDIT /reviews/:id/edit ');
  });
/* PUT reviews update /reviews/:id  */
router.put('/:id', (req, res, next) => {
  res.send('UPDATE /reviews/:id');
});

  /* DELETE reviews destroy /reviews/:id  */
  router.delete('/:id', (req, res, next) => {
    res.send('DELETE /reviews/:id');
  });
  

module.exports = router;

// 7 RESTFUL ROUTES
// GET index                    /posts 
// GET new                      /posts/new 
// POST create                  /posts 
// GET show                     /posts/:id 
// GET edit                     /posts/:id/edit 
// PUT update                   /posts/:id
// DELETE destroy               /posts/:id
