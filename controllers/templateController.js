const path = require('path')
const fs = require('fs-extra')
const dirname = path.resolve()

//REGISTER
exports.createTemplateController = async (req, res) => {
  //  res.send('start  create template');

  const {shopName, template} = req.body

  const sourceDir = () => {
    if (template === '1'){
      return (dirname + '/templates/ecommerce_mern-main')
    } else{
      return (dirname + '/templates/techequipper-main')
    }
  }
  
   const dir = dirname + '/shops/';
  const destination = dir + 'test'
  // if (!fs.existsSync(dir)){
  //     fs.mkdirSync(dir, { recursive: true });
  // }
  // let dir = dirname + '/shops' + req.body.shopName
//   if (!fs.existsSync(dir)){
//     fs.mkdirSync(dir, { recursive: true });
// }
fs.mkdir(path.join(dir, 'test'),
  { recursive: true }, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('Directory created successfully!');
  });
  // let destination = dirname + '/shops'
  // fs.mkdirSync(destination, { recursive: true })
//   console.log(dirname);

  fs.copy(sourceDir(), destination, function (err) {
      if (err){
          res.send('An error occured while copying the folder.')
          return res.send(err)
      }
      res.send('Copy completed!')
  });

}

