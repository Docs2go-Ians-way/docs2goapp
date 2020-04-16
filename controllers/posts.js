const Post = require('../models/post');
const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name:'dwhbett1t',
    api_key: '562967313584434',
    api_secret: process.env.CLOUDINARY_SECRET
});

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

    // Posts create
    async postCreate(req, res, next) 
        {
            req.body.post.images = [];

            for(const file of req.files) {
           
               let image = await cloudinary.v2.uploader.upload(file.path);
                    req.body.post.images.push({
                            url: image.secure_url,
                            public_id: image.public_id
                    });
            }
            let post = await Post.create(req.body.post);
            res.redirect(`/posts/${post._id}`);
        },

        // app.post('/profile', function (req, res) {
        //     upload(req, res, function (err) {
        //       if (err instanceof multer.MulterError) {
        //         // A Multer error occurred when uploading.
        //       } else if (err) {
        //         // An unknown error occurred when uploading.
        //       }
          
        //       // Everything went fine.
        //     })
        //   })

        // posts show
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
            await Post.findByIdAndRemove(req.params.id);
            res.redirect('/posts');
        }
}
