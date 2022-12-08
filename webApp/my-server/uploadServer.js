const express = require('express');
const app = express();
const pathService = require('path');
const fs = require("fs");
const puppeteer = require('puppeteer');

app.get("/", (req, res) => {  
   res.send("hello world");
});
app.listen(5000, () => { 
    console.log('Started on port 5000');
});

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
const multer = require('multer');
const diskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'files')
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname)
    }
})
const memoryStorage = multer.memoryStorage()

function fileFilter (req, file, cb) {    
    const filetypes = /css|html|jpeg|jpg|png|gif/;
    const extname =  filetypes.test(pathService.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
  
   if(mimetype && extname){
       return cb(null,true);
   } else {
       cb('Error: Images Only!');
   }
}
const uploadSaveFile = multer({
    inMemory: true,
    storage: diskStorage,
    fileFilter: fileFilter,
    limits : {fileSize : 2000000} 
});
const uploadMemoryFile = multer({ 
  storage: memoryStorage,
  fileFilter: fileFilter,
  limits : {fileSize : 2000000} 
})

app.post("/saveFile", uploadSaveFile.single("name"), (req, res) => {
  const file = req.file;
  res.send(file);
}, (error, req, res, next) => {
  res.sendStatus(400).send({ error: error.message })
})

app.post("/saveFiles", uploadSaveFile.array("files", 8), (req, res) =>{
  try {
      const files = req.files;
      // console.log(files)
      // console.log(files[0])
      // let data = fs.createReadStream(files.path,'utf8');
      // console.log(data)
      // console.log(String(files[0].buffer))

      res.send(files);
    } catch (error) {
      console.log(error);
      res.sendStatus(400).send({ error: error.message })
    }
});

app.post("/memoryFiles", uploadMemoryFile.array("files", 8), (req, res) =>{
  try {
      const filesData = req.files.map(file =>{
        return {
          name: file.originalname,
          content: String(file.buffer)
        }
      })

      res.send(filesData);
    } catch (error) {
      console.log(error);
      res.sendStatus(400).send({ error: error.message })
    }
});

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
app.post("/pdf", uploadMemoryFile.array("files", 8), (req, res) =>{
  let serverCssBuffer = [];
  let serverHtmlBuffer = [];

  const filesData = req.files.map(file =>{
    return {
      name: file.originalname,
      content: String(file.buffer)
    }
  })

    // console.log(filesData)

  filesData.map(file => {
    const ext= file.name.split('.').pop();
    if(ext === "css") serverCssBuffer = [...serverCssBuffer, file]
    if(ext === "html") serverHtmlBuffer = [...serverHtmlBuffer, file];
  })

  // console.log(filesData)
  filesData.map(e=>console.log(e.name));
  // serverCssBuffer.map(e=>console.log(e.name));
  // console.log("lel")
  // serverHtmlBuffer.map(e=>console.log(e.name));

    (async () => {
      // Create a browser instance
      const browser = await puppeteer.launch({
          args: ['--disable-dev-shm-usage', '--no-sandbox', '--headless', '--disable-gpu'],
      });
      // Create a new page
      const page = await browser.newPage();

        // const html_path = './CVpdf/CVpdf.html';
        // const css_path = './CVpdf/CVpdf.css';
        // const jcolacoLogo = fs.readFileSync('./CVpdf/jcolaco-white.png').toString('base64');
      
        // const html_content = fs.existsSync(html_path) ? fs.readFileSync(html_path, 'utf8') : '';
        // console.log(html_content.replace(/div/g, "red"));

    let cssBuffer = "";

    serverCssBuffer.forEach( css => {
      cssBuffer = cssBuffer.concat("\r\n")
      cssBuffer = cssBuffer.concat(css.content)
      cssBuffer = cssBuffer.concat("\r\n")
    })

    // serverCssBuffer.map(e=>{
    //   console.log(e.content)
    // });
    // 
    
    // console.log(cssBuffer)
    // console.log(serverHtmlBuffer[0].content)

    await page.setContent(serverHtmlBuffer[0].content, { waitUntil: 'domcontentloaded' });
    await page.addStyleTag({content: `${cssBuffer}`})

    
    // await page.setContent(html_content, { waitUntil: 'domcontentloaded' });
      // await page.addStyleTag({path: './CVpdf/reset.css'})
      // await page.addStyleTag({path: './CVpdf/CVpdf.css'})
      // await page.addStyleTag({path: './CVpdf/jcolacoLogo_image.css'})
      // await page.addStyleTag({path: './CVpdf/qrCode_image.css'})
      // await page.addStyleTag({path: './CVpdf/fontLato.css'})
      // await page.addStyleTag({path: './CVpdf/fontBlinker.css'})

      // To reflect CSS used for screens instead of print
      await page.emulateMediaType('screen');
      // Downlaod the PDF
      const pdf = await page.pdf({
        path: `result_file.pdf`,
        printBackground: true,
        format: 'A4',
      });
      // Close the browser instance
      await browser.close();
    })();

    res.send(filesData);
});