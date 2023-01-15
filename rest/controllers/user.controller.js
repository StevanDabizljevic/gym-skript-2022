const getAll = async (req, res) => {
    try {
        // const users = await User.findAll();
        res.status(200).json([]);
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
}

const getOne = async (req, res) => {
    try {
        const { userId } = req.query; 
        // const user = await model.findOne({ id: userId})
        res.status(200).json({});
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
}

const createOne = async (req, res) => {

}

const updateOne = async (req, res) => {

}

const deleteOne = async (req, res) => {

}


exports.getAll = getAll;
exports.getOne = getOne;
exports.createOne = createOne;
exports.updateOne = updateOne;
exports.deleteOne = deleteOne;

