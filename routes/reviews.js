// REVIEWS BELONG TO A POST
// Remember Etienne route filenames are always PLURAL, and yes it was you who put this here Etienne.
// MODEL files are always singular.

const express = require('express');
const router = express.Router({ mergeParams: true });
// Remember that /post/:id/reviews is taken care of in the app.js file



/* Get reviews index /posts/:id/reviews  */
router.get('/', (req, res, next) => {
    res.send('INDEX /posts/:id/reviews');
  }); 

/* Post reviews create /posts/:id/reviews  */
  router.post('/', (req, res, next) => {
    res.send('CREATE /posts/:id/reviews/new');
  });

/* Get reviews edit /posts/:id/:review_id/edit  */
  router.get('/:review_id/edit', (req, res, next) => {
    res.send('EDIT /posts/:id/reviews/:review_id/edit ');
  });

/* PUT reviews update /posts/:id/reviews/:id  */
router.put('/:review_id', (req, res, next) => {
  res.send('UPDATE /posts/:id/reviews/:review_id');
});

  /* DELETE reviews destroy /reviews/:id  */
  router.delete('/:review_id', (req, res, next) => {
    res.send('DELETE /posts/:id/reviews/:review_id');
  });
  

module.exports = router;

// 7 RESTFUL ROUTES
// GET index                    /posts/:id/reviews
// GET new                      not used here
// POST create                  /posts/:id/reviews/new
// GET show                     not used here
// GET edit                     /posts/:id/reviews/:review_id/edit
// PUT update                   /posts/:id/reviews/:review_id
// DELETE destroy               /posts/:id/reviews/:review_id
