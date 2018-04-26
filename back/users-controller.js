const formidable = require('formidable');
const path = require('path');

const _UPDATE_DEFAULT_CONFIG = {
  new: true,
  runValidators: true,
};


function createUser(req, res) {
  console.log(req);
  res.send('works?');
}


const uploadDir = path.join(__dirname, '/..', '/..', '/..', '/uploads/');
// const _UPDATE_DEFAULT_CONFIG = {
//   new: true,
//   runValidators: true,
// };
function uploadFile(req, res) {
  const form = new formidable.IncomingForm();
  form.multiples = true;
  form.keepExtensions = true;
  form.uploadDir = uploadDir;
  form.parse(req, (err, fields, files) => {
    if (err) return res.status(500).send('la cagaste wey');
    return res.status(200).json({
      uploaded: true,
    });
  });
  form.on('fileBegin', (name, file) => {
    const [fileName, fileExt] = file.name.split('.');
    file.path = path.join(uploadDir, `${fileName}_${new Date().getTime()}.${fileExt}`);
  });
}

function handleError(err, res) {
  return res.status(400).send('la cagaste wey 2');
}
module.exports = {
  uploadFile,
  handleError,
};
