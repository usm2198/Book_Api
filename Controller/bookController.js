const bookDet = require('../Model/book');

// Get Request
exports.getBooks = async(req, res)=>{
    try {
        const data = await bookDet.find();
        return res.json({errors: false, data: data})
    } catch (error) {
        return res.status(400).json({errors: true, data: error.message})
    }
}

// Post Request
exports.postBooks = async(req, res)=>{
    try {
        const data = await bookDet.create(req.body);
        return res.json({erros: false, data: data})
    } catch (error) {
        return res.status(400).json({errors: true, message: error.message})
    }
}

// Put Request
exports.putBooks = async(req, res)=>{
    try {
        const data = await bookDet.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json({errors: false, data: data})
    } catch (error) {
        return res.status(400).json({errors: true, message: error.message})
    }
}

exports.deleteBooks = async(req, res)=>{
    try {
        const data = await bookDet.findByIdAndDelete(req.params.id);
        return res.json({errors: false, data: data})
    } catch (error) {
        return res.status(400).json({errors: true, message: error.message})
    }
}
