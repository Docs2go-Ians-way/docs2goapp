// higher end function which takes anomous function as perameter
module.exports = {
    asyncErrorHandler: (fn) =>
        (req, res, next) => {
            Promise.resolve(fn(req, res, next))
                         .catch(next);
        },
}