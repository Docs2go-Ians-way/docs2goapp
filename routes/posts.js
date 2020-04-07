//Remember Etienne route filenames are always PLURAL, and yes it was you who put this here Etienne.
// And MODEL files are always singular.

const express       = require('express');
const router        = express.Router();
const { asyncErrorHandler } = require('../middleware');
const { getPosts, 
        newPost, 
        createPost,
        showPost,
        editPost
      }             = require('../controllers/posts');

/* Get posts index /posts  */
router.get('/', asyncErrorHandler(getPosts));

/* Get posts index /posts/new  */
router.get('/new', newPost);

/* POST posts create /posts  */
  router.post('/', asyncErrorHandler(createPost));

/* Get posts show /posts/:id  */
router.get('/:id', asyncErrorHandler(showPost));

/* Get posts edit /posts/:id/edit  */
  router.get('/:id/edit', asyncErrorHandler(editPost));
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
