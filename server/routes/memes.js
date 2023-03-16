const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.json([
    {id: 1, img: 'https://picsum.photos/id/237/536/354'},
    {id: 2, img: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80'},
    {id: 3, img: 'https://cdn.cnn.com/cnnnext/dam/assets/141216183300-simpsons-25-anniversary-image-4-horizontal-large-gallery.jpg'}
  ]);
});

module.exports = router;
