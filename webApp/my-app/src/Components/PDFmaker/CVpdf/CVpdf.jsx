import React from 'react'
import parse from 'html-react-parser';
import { createGlobalStyle } from 'styled-components'

export default function CVpdf({html, css}) {

  const [componentHtml, setComponentHtml] = React.useState("");
  const [GlobalStyle, setGlobalStyle] = React.useState(createGlobalStyle``);

  React.useEffect(() => {
    setComponentHtml(parse(html[0].content))
  }, [html]);  

  React.useEffect(() => {
    let cssBuffer = "";

    css.forEach( file => {
      cssBuffer = cssBuffer.concat("\r\n")
      cssBuffer = cssBuffer.concat(file.content)
      cssBuffer = cssBuffer.concat("\r\n")
    })
    
    setGlobalStyle(createGlobalStyle`${cssBuffer}`)
  }, [css]);

  return (
    <div>
      <GlobalStyle />
      {componentHtml}
    </div>
  );
}
