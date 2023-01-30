//@desc Get all books
//@route GET /api/v1/books
//@access Public
exports.getBooks = (req,res,next)=>{
    res.status(200).json({success:true, msg:"Show all books"});
};

//@desc Get single book
//@route GET /api/v1/books/:id
//@access Public
exports.getBook = (req,res,next)=>{
    res.status(200).json({success:true, msg:`Show Book ${req.params.id}`});
};

//@desc Create new books
//@route Create /api/v1/books/:id
//@access Private
exports.createBook = (req,res,next)=>{
    res.status(200).json({success:true, msg:`Show Create New Book`});
};

//@desc Update single book
//@route Update /api/v1/books/:id
//@access Private
exports.updateBook = (req,res,next)=>{
    res.status(200).json({success:true, msg:`Update Book ${req.params.id}`});
};

//@desc Delete single book
//@route Delete /api/v1/books/:id
//@access Private
exports.deleteBook = (req,res,next)=>{
    res.status(200).json({success:true, msg:`Delete Book ${req.params.id}`});
};

