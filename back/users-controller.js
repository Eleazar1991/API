const _UPDATE_DEFAULT_CONFIG = {
    new: true,
    runValidators: true
}

module.exports = {
  createUser: createUser
}

function createUser(req, res) {
    console.log(req);
}


function handdleError(err, res){
    return res.status(400).json(err);
}