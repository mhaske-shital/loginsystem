exports.errorHandler = (error, req, res, next) => {
    console.log("from middleware"+error);
    res.status(res.statusCode === 200 ? 400 : 500).json({
        success: false,
        error: error.Error|| error.message || "something went wrong"
    })
}
exports.error404 = (req, res, next) => {

    const err = new Error("Route do not match Please recheck your route")
    res.status(404)
    next(err)
}