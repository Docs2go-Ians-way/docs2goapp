//Remember Etienne route filenames are always PLURAL, and yes it was you who put this here Etienne.
// And MODEL files are always singular.

const express       = require('express');
const router        = express.Router();
const multer        = require('multer');
const upload        = multer({'dest': 'uploads/'});
const { asyncErrorHandler } = require('../middleware');
const { 
        postIndex, 
        postNew, 
        postCreate,
        postShow,
        postEdit,
        postUpdate,
        postDestroy
      }             = require('../controllers/posts');

/* Get posts index /posts  */
router.get('/', asyncErrorHandler(postIndex));

/* Get posts index /posts/new  */
router.get('/new', postNew);

/* POST posts create /posts  */
router.post('/', upload.array('images', 4), asyncErrorHandler(postCreate));

/* Get posts show /posts/:id  */
router.get('/:id', asyncErrorHandler(postShow));

/* Get posts edit /posts/:id/edit  */
router.get('/:id/edit', asyncErrorHandler(postEdit));

/* PUT posts update /posts/:id  */
router.put('/:id', asyncErrorHandler(postUpdate));

/* DELETE posts destroy /posts/:id  */
router.delete('/:id', asyncErrorHandler(postDestroy));
  

module.exports = router;

// 7 RESTFUL ROUTES
// GET index                    /posts 
// GET new                      /posts/new 
// POST create                  /posts 
// GET show                     /posts/:id 
// GET edit                     /posts/:id/edit 
// PUT update                   /posts/:id
// DELETE destroy               /posts/:id
