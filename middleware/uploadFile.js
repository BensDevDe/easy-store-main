const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.join(__dirname, '../../easy-store-main/client/public/uploads'))
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})

exports.uploadFile = multer({ storage })

// const multer = require('multer')

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'Uploads')
//   },
//   filename(req, file, cb) {
//     cb(
//       null,
//       new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname
//     )
//   },
// })

// const fileFilter = (req, file, cb) => {
//   if (
//     file.mimetype === 'image/png' ||
//     file.mimetype === 'image/jpg' ||
//     file.mimetype === 'image/jpeg'
//   ) {
//     cb(null, true)
//   } else {
//     cb(null, false)
//   }
// }

// const upload = multer({ storage: storage, fileFilter: fileFilter })

// module.exports = { upload }
