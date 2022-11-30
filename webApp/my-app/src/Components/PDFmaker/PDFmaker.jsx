import "./PDFmaker.scss"
import React from 'react'
import jsPDF from 'jspdf';
import { useRef } from 'react';
import CVpdf from "./CVpdf/CVpdf";


export default function PDFmaker() {

	const reportTemplateRef = useRef(null);

	const handleGeneratePdf = () => {
		const doc = new jsPDF({
			format: 'a4',
			unit: 'px',
		});

		// Adding the fonts.
		doc.setFont('Inter-Regular', 'normal');

		doc.html(reportTemplateRef.current, {
			async callback(doc) {
				await doc.save('document');
			},
		});
	};

	return (
		<div className="PDFmaker">
			<button className="button" onClick={handleGeneratePdf}>
				Generate PDF
			</button>
			<div ref={reportTemplateRef}>
				<CVpdf />
			</div>
		</div>
	);
}
