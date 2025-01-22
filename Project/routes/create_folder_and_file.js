const express = require('express');
// const {create_folder_inside_file}=require('../functions/folder_creattion')
const { create_folder_inside_file } = require('../functions/folder_creation_sync');
const router = express.Router();

router.post('/:filename', async (req, res) => {
   const data = req.body;
   //    const result=await create_folder_inside_file(JSON.stringify(data))

   const result = create_folder_inside_file(JSON.stringify(data), req.params.filename);

   console.log(result);
   res.status(200).send(result);
});

module.exports = router;