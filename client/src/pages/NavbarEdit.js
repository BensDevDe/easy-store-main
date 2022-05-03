import {Container, Navbar, Nav, NavDropdown} from "react-bootstrap"
import logo from "../assets/images/cube.png";
import styled from 'styled-components'
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import {colors,fontSizes} from "./colors";



const Header = () => {

  console.log(fontSizes);

  console.log(colors);

  const [properties,setProperties] = useState({
    color: "",
    logo: "",
    category: "",
    font: ""
  });


  const [switchTxtArea, setSwitchTxtArea] = useState(false);

  const [color,setColor] = useState(`#c2f4c2`);
  const [fontSize,setFontSize] = useState(`16px`);
  const [category, setCategory] = useState("");
  const [newlogo,setNewLogo] = useState("");

  let StyledNavbar = styled(Navbar)`
  background-color: #c2f4c2;
  position: unset !important;
  `;

  let StyledContainer = styled(Container)`
  height:100px;
  `;

  let txtareaStyle = {
    marginTop:"50px"
  };

 

  let styleColor = {
    backgroundColor: color
  }

  let styleFontSize = {
    fontSize: fontSize
  };

 

  const submitApply = () => {
    setSwitchTxtArea(true);
    if(properties.color){
      setColor(`${properties.color}`);
    }

    if(properties.font){
      const fontToSet = fontSizes[properties.font]
      setFontSize(`${fontToSet}`)
    }

    if(properties.category){
      if(properties.category.split("").filter(x=>x===",").length>0){
        let table = properties.category.split(",");
        setCategory(table);
      }else{
        setCategory([`${properties.category}`])
      }
    }

    if(properties.logo){
      setNewLogo(`${properties.logo}`)
    }
  };

  const submitReset = () => {
    setSwitchTxtArea(false);
    setColor(`#c2f4c2`)
    setFontSize(`16px`)
    setCategory("")
    setNewLogo("")
    setProperties({
      color: "",
      logo: "",
      category: "",
      font: ""
    })
  };


return ( 
  <>
    <header>
        <StyledNavbar style={styleColor} className="py-4 antonis" expand="lg" collapseOnSelect fixed="top">
            <StyledContainer>
                
                <Navbar.Brand ><img className="myLogo" src={newlogo?newlogo:logo} alt="this is a nice logo"></img></Navbar.Brand>
               
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                      {category &&
                      (
                        category.map(x=>(
                          <Nav.Link key={uuidv4()} style={styleFontSize} ><i className="fas fa-shopping-cart"></i>{x}</Nav.Link>
                        ))
                      )}
                      {/* {category && <Nav.Link style={styleFontSize} ><i className="fas fa-shopping-cart"></i>{category}</Nav.Link>} */}
                      <Nav.Link style={styleFontSize} ><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                      <Nav.Link style={styleFontSize}><i className="fas fa-user"></i>  Sign In</Nav.Link>
                      <NavDropdown style={styleFontSize} title="Admin" id="adminmenu">            
                        <NavDropdown.Item style={styleFontSize}>Users</NavDropdown.Item>
                        <NavDropdown.Item style={styleFontSize}>Products</NavDropdown.Item>
                        <NavDropdown.Item style={styleFontSize}>Orders</NavDropdown.Item>    
                    </NavDropdown>       
                    </Nav>
                </Navbar.Collapse>
            </StyledContainer>
        </StyledNavbar>
    </header>

  {!switchTxtArea &&
      <div style={txtareaStyle} className="textareas">
        <select value={properties.color} onChange={(e)=>setProperties({...properties, color: e.target.value})}>
          {
            colors.map(x=>(
              <option key={uuidv4()}>{x}</option>
            ))
          }
        </select>          
          <textarea onChange={(e)=>setProperties({...properties, logo: e.target.value})}  placeholder="change the logo"></textarea>
          <textarea onChange={(e)=>setProperties({...properties, category: e.target.value})} value={properties.category} placeholder="add a category"></textarea>
          {/* <textarea onChange={(e)=>setProperties({...properties, font: e.target.value})}  placeholder="change the font size"></textarea> */}

          <select value={properties.font} onChange={(e)=>setProperties({...properties, font: e.target.value})}>
            {Object.keys(fontSizes).map(x=>(
              <option key={uuidv4()}>{x}</option>
            ))}
          </select>

      </div>
  }

   
  


    <div className="apply-changes">
      <button onClick={submitApply} id="apply">Apply</button>
      <button onClick={submitReset} id="reset">Reset</button>
    </div>

    </>
  );
}
 
export default Header;