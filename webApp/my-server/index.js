const PORT = 5000;
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const pathService = require('path');
const multer  = require('multer')
const upload = multer({ dest: "uploads/" });
const fs = require("fs");

app.get('/', (req, res) => {
  return res.status(200).send("It's working");
});
app.listen(PORT, () => {
  console.log('Server Running sucessfully.');
});

app.post("/upload_files", upload.array("files"), uploadFiles);

  function uploadFiles(req, res) {
      console.log(req.body);
      console.log(req.files);
      res.json({ message: "Successfully uploaded files" });
  }
  
app.post('/post', upload.single('file'), function(req, res) {
    console.log(req.file);
   res.send("file saved on server");
});


  app.post("/upload", (req, res, next) => {
    if (!req.files) {
      return res.status(400).send("No files were uploaded.");
    }
    
    const file = req.files.myFile;
    console.log(file)
    const path = __dirname + "/files/" + file.name;
    const extensionName = pathService.extname(file.name);

    console.log(req.body);
    

    const allowedExtension = ['.css','.html'];
    if(!allowedExtension.includes(extensionName)){
        return res.status(422).send("Invalid file format");
    }
  
    var result = ''; 
    multer({
      inMemory: true,
      onFileUploadData: function(file, data) {
        result += data;
      },  
      onFileUploadComplete: function(file) {
        console.log(result); // This is what you want
      }   
    })(req, res, next);

    file.mv(path, (err) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.send({ status: "success", path: path });
    });

    res.send("submit ok");
  });