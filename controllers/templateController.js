const path = require('path')
const fs = require('fs-extra')
const dirname = path.resolve()

//REGISTER
exports.createTemplateController = async (req, res) => {
  //  res.send('start  create template');

  const {shopName, template} = req.body

  const sourceDir = () => {
    if (template === 1){
      return (dirname + '/templates/ecommerce_mern-main')
    } else{
      return (dirname + '/templates/techequipper-main')
    }
  }

  const destination = dirname + '/shops'
  console.log(dirname);

  fs.copy(sourceDir(), destination, function (err) {
      if (err){
          res.send('An error occured while copying the folder.')
          return res.send(err)
      }
      res.send('Copy completed!')
  });
  
}

