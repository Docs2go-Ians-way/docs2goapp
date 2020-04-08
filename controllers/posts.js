const Post = require('../models/post');

module.exports = {
    // Posts index
    async postIndex(req,res, next) {
        let posts = await Post.find({});
        res.render('posts/index', { posts });
    },
    
    // Posts new
    postNew(req,res, next) {
        res.render('posts/new');
    },

    // Post create
    async postCreate(req, res, next) 
        {
            let post = await Post.create(req.body);
            res.redirect(`/posts/${post.id}`);
        },
    // Post show
    async postShow(req, res, next)
        {
            let post = await Post.findById(req.params.id);
            res.render('../views/posts/show', { post });
        },
        // posts edit
    async postEdit(req,res, next)
        {
            let post = await Post.findById(req.params.id);
            res.render('../views/posts/edit', { post });
        },
        // posts update
    async postUpdate(req,res, next)
        {
             let post = await Post.findByIdAndUpdate(req.params.id, req.body.post, { new: true });
             res.redirect(`/posts/${post.id}`);
        },
        // posts destroy
        async postDestroy(req,res, next) 
        {
            await Post.findByIdAndRemove(req.params.id)
            res.redirect('/posts')
        }
}
