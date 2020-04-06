//Remember Etienne route filenames are always PLURAL, and yes it was you who put this here Etienne.
// And MODEL files are always singular.

const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware');
const { getPosts, newPost } = require('../controllers/posts');

/* Get posts index /posts  */
router.get('/', asyncErrorHandler(getPosts));

/* Get posts index /posts/new  */
router.get('/new', newPost);

/* POST posts create /posts  */
  router.post('/', (req, res, next) => {
    res.send('CREATE /posts/new');
  });

/* Get posts show /posts/:id  */
router.get('/:id', (req, res, next) => {
  res.send('SHOW /posts/new');
});

/* Get posts edit /posts/:id/edit  */
  router.get('/:id/edit', (req, res, next) => {
    res.send('EDIT /posts/:id/edit ');
  });
/* PUT posts update /posts/:id  */
router.put('/:id', (req, res, next) => {
  res.send('UPDATE /posts/:id');
});

  /* DELETE posts destroy /posts/:id  */
  router.delete('/:id', (req, res, next) => {
    res.send('DELETE /posts/:id');
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
