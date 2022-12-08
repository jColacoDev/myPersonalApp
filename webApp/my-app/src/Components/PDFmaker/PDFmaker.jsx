import "./PDFmaker.scss";
import React from 'react';
import { useRef } from 'react';
import CVpdf from "./CVpdf/CVpdf.jsx";
import HTMLReactParser from 'html-react-parser';
import DragAndDrop from "../DragAndDrop/DragAndDrop";

export default function PDFmaker() {
    const [selectedFiles, setSelectedFiles] = React.useState([]);
    const [serverFiles, setServerFiles] = React.useState([]);
    const [serverHtml, setServerHtml] = React.useState([]);
    const [serverCss, setServerCss] = React.useState([]);
	
	const reportTemplateRef = useRef(null);
	const pdfMakerRef = useRef(null);

	React.useEffect(() => {
		// console.log(CVpdf);
  	}, []);

	React.useEffect(() => {
		// Array.from(selectedFiles).forEach(file => {
		// 	console.log(file)
		// });

		// console.log(selectedFiles);
  	}, [selectedFiles]);

	React.useEffect(() => {
		let serverCssBuffer = [];
		let serverHtmlBuffer = [];

		serverFiles.forEach(file => {
			const ext= file.name.split('.').pop();
			if(ext === "css") serverCssBuffer = [...serverCssBuffer, file]
			if(ext === "html") serverHtmlBuffer = [...serverHtmlBuffer, file];
		})

		setServerCss(serverCssBuffer);
		setServerHtml(serverHtmlBuffer);

  	}, [serverFiles]);

	function onFilesChange(files){
		setSelectedFiles(files);
	}

	function onSubmit(e){
        e.preventDefault();

		const formData = new FormData();
		Array.from(selectedFiles).forEach(file => {
			formData.append("files", file);
		});

		fetch("http://localhost:5000/memoryFiles", {
			method: 'POST',
			body: formData
		})
			.then((res) => {
				res.json().then(filesData => {
					setServerFiles(filesData);
				});
			})
			.catch((err) => (`Error occured: ${err}`));
	}

	function onDownload(e){
        e.preventDefault();

		const formData = new FormData();
		Array.from(selectedFiles).forEach(file => {
			formData.append("files", file);
			console.log(file);
		});

		fetch("http://localhost:5000/pdf", {
			method: 'POST',
			body: formData
		})
			.then((res) => {
				console.log(res)
			})
			.catch((err) => (`Error occured: ${err}`));
	}
	
	
	const content = 
	`
		<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="bGKOjPr" data-editable="true" data-user="jcolacodev" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
		<span>See the Pen 
		<a href="https://codepen.io/jcolacodev/pen/bGKOjPr" target="_blank" rel="noreferrer">
		CV template1 by <strong>@jColacoDev</strong>
		on <em>CodePen</em></a>.</span>
		</p>
		<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

	` 
	const isSSR = typeof document === 'undefined'
	/* we need to append the CodePen script only once  */
	let codePenScriptIsAppended = false
	const options = {
	  replace: (node) => {
		if (
		  node.name === 'script' &&
		  node.attribs &&
		  node.attribs.src === 'https://cpwebassets.codepen.io/assets/embed/ei.js'
		) {
		  if (isSSR) {
			return
		  }
		  if (!codePenScriptIsAppended) {
			const script = document.createElement('script')
			script.src = node.attribs.src
			script.setAttribute('async', "")
			document.head.appendChild(script)
			codePenScriptIsAppended = true
		  }
		  return <React.Fragment />
		}
	  }
	}

	return (
		<div ref={pdfMakerRef} className="PDFmaker">
			<h1>HTML + CSS to A4 sized PDF generator</h1>
			<ul>
				<li>Create one HTML file with the PDF structure</li>
				<li>Create one or more CSS files for styling the PDF</li>
				<li>The component is sized width:840px & height:1187px for A4 output</li>
			</ul>
			<h3>HTML + CSS CV Template in Code Pen</h3>

			{HTMLReactParser(content, options)}

			<DragAndDrop onDownload={onDownload} onSubmit={onSubmit} onFilesChange={onFilesChange}></DragAndDrop>

			<h2>Preview</h2>
			<div className="CVwrapper" ref={reportTemplateRef}>
				{serverHtml[0] &&
					<CVpdf html={serverHtml} css={serverCss}></CVpdf>
				}
			</div>
			
		</div>
	);
}
