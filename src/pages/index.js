import { none } from "ol/centerconstraint"
import * as React from "react"
import styled from "styled-components"

// styles
const pageStyles = {
  boxSizing:"border-box",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  color: "#020e37",
}
const headingStyles = {
  position:"relative"
}
const subHeadingStyles = {
  padding:"10px 0px 30px 0px"
}

const titleContainerStyles = {
  height:500,
  display:"flex",
  textAlign:"center",
  marginTop:"50vh",
  justifyContent:"center",
  padding:20
}

const titleWrapperStyles = {
  marginTop:"-250px",
  maxWidth:1000,
  padding:20,
  boxSizing:"border-box",
  width:"100%"
}

const SubmitButton = styled.button`
  border:none;
  color:white;
  background-color:#e2573b;
  height:50px;
  font-size:20px;
  min-width:100px;
  max-width:150px;
  cursor:pointer;
  flex:"1";
  flex-grow:2;
  display:inline-block;

  &:hover{
    background-color:#fe8269;
  }
`

const inputStyle = {
  borderRadius:0,
  fontSize:20,
  height:46,
  paddingLeft:20,
  border:"solid 1px #eee",
  flex:"1 1 auto",
  width: "100%",
  maxWidth:"400px"
}

const updates = [
  {
    date:"06/04/21",
    updates:[
      "Create static landing page",
      "Setup android project"
    ],
  },
  {
    date:"05/04/21",
    updates:[
      "Buy domain name \"getsquad.org\""
    ]
  }
]

const HorizontalLine = styled.div`
  height:2px;
  border-bottom:solid 1px #eee;
`


// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Welcome to Squad</title>
      <div style={titleContainerStyles}>
        <div style={titleWrapperStyles}>
          <h1 style={headingStyles}>
            <span >Take control of your life with like-minded people! </span>
            <span role="img" aria-label="Party popper emojis">
              ✊
            </span>
          </h1>
          <h2 style={subHeadingStyles}>
            Comming to android
          </h2>
          <form name="email" method="POST" data-netlify="true" style={{width:"100%", boxSizing:"border-box"}}>
            <p>
              <label style={{display:"flex", boxSizing:"border-box", justifyContent:"center"}}>
                <input style={inputStyle} type="text" name="email" placeholder="Your email"/>
                <SubmitButton type="submit">Invite me</SubmitButton>
              </label>
            </p>
          </form>
          <p style={{textAlign:"left", paddingTop:"100px"}}>
          <b>All updates ✨</b>
          {
            updates.map(item => 
              <div>
              <div style={{fontSize:"14px",paddingTop:"20px", paddingBottom:"5px"}}>{item.date}</div>
              <HorizontalLine/>
              <ul>
                {
                  item.updates.map(update => <li style={{paddingBottom:"5px"}}>{update}</li>)
                }
              </ul>
            </div>)
          }
          </p>
          </div>
        </div>
    </main>
  )
}

export default IndexPage