import ReactAudioPlayer from 'react-audio-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle,faMinusCircle,faSearch,faWrench,faChevronCircleDown} from '@fortawesome/free-solid-svg-icons';
import {Tabs,Tab,Button,Accordion,Card,Form,Col,Row,Nav} from 'react-bootstrap';
import { connect,useSelector,useDispatch} from 'react-redux';
import {Radio,displayoption,AlignCheck} from '../../storeJS/action/index';
import Combo from '../Component/ListCombo';
import { useState } from 'react';

function  LeftMain (props) {
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false); ///Check Box Display Setting 
    const TransRadioButton = useSelector((state) => state.radioReducer.radiovalue); //Trans Tab Radio Button
    const sizeButton = useSelector((state) => state.displayOptButtonReducer.number.number); //Trans Tab Radio Button
    console.log("From Left>>>>"+sizeButton);
    const [error, setError] = useState(""); //Error msg for Trans Tab Font Size
    const [text, setText] = useState(sizeButton); //Value for Trans Tab Font Size
    const displayOptions = { 
        tabName: props.name,
        number : text,
        error : error
        }
    function handleOnChange(event) {  //Radio Button change for Trans Tab
        const radiovalues  = event.target.value;
        const Tab = { 
        tabname: props.name,
        radio : radiovalues
        }
        dispatch(Radio(Tab));
      }
      function Increment() {  //Increment button For font size in Dipslay/Browse Tab
        if (error.trim() !== "") {
            setError("");
          }
            setText(text+1);
            dispatch(displayoption(displayOptions));
      }
      function Decrement() { //Decrement button For font size in Dipslay/Browse Tab
        if (text > 1 ) {
            setText(text-1);
            dispatch(displayoption(displayOptions));
          }
        else{
            setError("Page Cannot less then zero!"); 
            dispatch(displayoption(displayOptions));
          return;
          }
      }
      function checkAlign(e) {
        setChecked(!checked);
        dispatch(AlignCheck(checked));
      }
        let body,head;
        let Recitationcombo = {marginTop: "2px",marginLeft:"4px"};
        let Search_rootcombo = {marginTop:"23px"};
        if(props.name === 'Search'){
            head =  <div>{props.name}<FontAwesomeIcon style={{float:`right`}} icon={faChevronCircleDown}/> </div> ;
            body = <div className="mb-2">
                    <Tabs defaultActiveKey="quran" style={{background:`#ffe4b5`,padding:0}} className="TabCover" id="uncontrolled-tab-example">
                    <Tab  eventKey="quran" title="Quran" style={{ padding: `6px 3px 9px 0px`, margin: `0px 2px 0px -6px`}}>
                      <Row>
                      <Col sm={6} md={4} lg={8} style={{ padding: `4px`}}>
                      <input style={{ marginTop: `18px`}} className="" type="text"></input></Col>
                      <Col sm={3} md={4} lg={4}><Button size="sm" className="btnsearch" variant="primary"><FontAwesomeIcon icon={ faSearch}/></Button>
                      </Col>
                      </Row >
                      <Row style={{float:`right`}}><Nav.Link style={{ margin: `0px`,padding: `0px`}} href="#link">Tips</Nav.Link></Row>
                    </Tab>
                    <Tab eventKey="roots" title="Roots">
                    <Row>
                      <Col lg={9}><Combo size="sm" stylesheet={Search_rootcombo} tab="Search"></Combo></Col>
                      <Col lg={3}><Button size="sm" className="root" variant="primary"><FontAwesomeIcon icon={ faSearch}/></Button></Col>
                      </Row >
                      {/* <Row style={{marginTop: `-17px`}}>
                      <div class="menu-row" id="charList"><a class="" href="javascript:initRootMenu('آ')">آ</a> <a class="" href="javascript:initRootMenu('ا')">ا</a> <a class="" href="javascript:initRootMenu('ب')">ب</a> <a class="" href="javascript:initRootMenu('ت')">ت</a> <a class="" href="javascript:initRootMenu('ث')">ث</a> <a class="" href="javascript:initRootMenu('ج')">ج</a> <a class="" href="javascript:initRootMenu('ح')">ح</a> <a class="" href="javascript:initRootMenu('خ')">خ</a> <a class="" href="javascript:initRootMenu('د')">د</a> <a class="" href="javascript:initRootMenu('ذ')">ذ</a> <a class="" href="javascript:initRootMenu('ر')">ر</a> <a class="" href="javascript:initRootMenu('ز')">ز</a> <a class="" href="javascript:initRootMenu('س')">س</a> <a class="current-char" href="javascript:initRootMenu('ش')">ش</a> <a class="" href="javascript:initRootMenu('ص')">ص</a> <a class="" href="javascript:initRootMenu('ض')">ض</a> <a class="" href="javascript:initRootMenu('ط')">ط</a> <a class="" href="javascript:initRootMenu('ظ')">ظ</a> <a class="" href="javascript:initRootMenu('ع')">ع</a> <a class="" href="javascript:initRootMenu('غ')">غ</a> <a class="" href="javascript:initRootMenu('ف')">ف</a> <a class="" href="javascript:initRootMenu('ق')">ق</a> <a class="" href="javascript:initRootMenu('ك')">ك</a> <a class="" href="javascript:initRootMenu('ل')">ل</a> <a class="" href="javascript:initRootMenu('م')">م</a> <a class="" href="javascript:initRootMenu('ن')">ن</a> <a class="" href="javascript:initRootMenu('ه')">ه</a> <a class="" href="javascript:initRootMenu('و')">و</a> <a class="" href="javascript:initRootMenu('ي')">ي</a> </div>
                      </Row> */}
                    </Tab>
                    <Tab  eventKey="goto" title="Goto" style={{ padding: `6px 3px 9px 0px`, margin: `0px 2px 0px -6px`}}>
                    <Row>
                      <Col sm={8} md={8} lg={8} style={{ padding: `4px`}}>
                      <input style={{ marginTop: `18px`}} className="" type="text"></input></Col>
                      <Col sm={8} md={8} lg={4}><Button size="sm" className="btnsearch" variant="primary"><FontAwesomeIcon icon={ faSearch}/></Button>
                      </Col>
                      </Row >
                      <Row style={{float:`right`}}><Nav.Link style={{ margin: `0px`,padding: `0px`}} href="#link">Tips</Nav.Link></Row>
                    </Tab>
                    </Tabs>
            </div>
        }
        if(props.name === 'Browse'){
            head =  <div> {props.name} <FontAwesomeIcon style={{float:`right`}} icon={faChevronCircleDown}/>   </div> ;
            body = <div>
                <Row>
                    <Col><Combo name="Aya:"  size="sm" tab="Browser"></Combo></Col>
                </Row>
                <Row>
                    <Col><Combo name="Sura:" tab="Browser" size="sm"></Combo></Col>
                </Row>
                <Row>
                    <Col> <Combo name="Juzz:" tab="Browser" size="sm"></Combo></Col>
                </Row>
                <Row>
                    <Col style={{padding:`0px`, marginTop:`2px`}}> Page:<input style={{width:`68px`}}  placeholder={("Page No.").toString()} id="Pageinput" value={text} readOnly className="mr-1" type ="text" pattern="[0-9]*"></input>
                    <Button  variant="primary" className="mr-2 cornor" onClick={Increment}  size="sm"><FontAwesomeIcon icon={ faPlusCircle}/></Button>
                    <Button  variant="primary" className="cornor" onClick={Decrement} size="sm"> <FontAwesomeIcon icon={ faMinusCircle}/></Button>           
                    </Col>
                </Row>
                
            </div>
            
        }
        if(props.name === 'Recitation'){
            head =  <div>
                <Row>
                <Col lg={9}> {props.name} <FontAwesomeIcon style={{float:`right`}} icon={faChevronCircleDown}/> </Col>
                <Col lg={3} className=""><FontAwesomeIcon icon={ faWrench  }/></Col></Row>
            </div>;
            body = <div className="mb-2">
                   <Combo  size="sm" name="Lang:" tab="Recitation" stylesheet={Recitationcombo}></Combo>
                   <ReactAudioPlayer  src="my_audio_file.ogg" controls />
            </div>
        }
        if(props.name === 'Quran'){
            head =  <div> {props.name} <FontAwesomeIcon style={{float:`right`}} icon={faChevronCircleDown}/> </div> ;
            body = <div className="mb-2">
                <Combo name="Text:" size="sm" tab="Quran"></Combo>
                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Show Pause Marks" />
                    <Form.Check type="checkbox" label="Show Small-Alef" />
                </Form.Group>
            </div>
        }
        if(props.name === 'Display Options'){
            head =  <div> {props.name} <FontAwesomeIcon style={{float:`right`}} icon={faChevronCircleDown}/> </div> ;
            body = <div className="mb-2">
                <Row>
                    <Col> <Combo name="Font:" size="sm" tab="Display Options"></Combo></Col>
                </Row>
                <Row>
                    <Col style={{padding:`0px`, marginTop:`2px`}}> Page:<input style={{width:`68px`}}  placeholder={("Font Size").toString()} id="FontSize" value={text} readOnly className="mr-1" type ="text" pattern="[0-9]*"></input>
                    <Button  variant="primary" className="mr-2 cornor" onClick={Increment}  size="sm"><FontAwesomeIcon icon={ faPlusCircle}/></Button>
                    <Button  variant="primary" className="cornor" onClick={Decrement} size="sm"> <FontAwesomeIcon icon={ faMinusCircle}/></Button>           
                    </Col>
                </Row>
                <Row>
                <Form.Check className="mr-2"  checked={checked}  onChange={checkAlign} type="checkbox" label="Align Text" />
                </Row>
            </div>
        }
        if(props.name === 'Translation')
        {
            head =  <div>{props.name} <FontAwesomeIcon style={{float:`right`}} icon={faChevronCircleDown}/></div> ;
            body =  <div>
                 <Combo size="sm" name="Trans:" tab="Translation" stylesheet={Recitationcombo}></Combo>
                    <Form.Group as={Row}>
                   
                        <Col sm={12} md={12} lg={12}>
                            <Form.Check type="radio" label="Fixed Translation Box" checked={TransRadioButton === 'fixed'}  onChange={handleOnChange} value="fixed" name="Radio" id="Fixed"  /><br />
                            <Form.Check type="radio" label="Translation on Mouse over" checked={TransRadioButton === 'mouseHover'}  onChange={handleOnChange} value="mouseHover" name="Radio" id="Mouseover" /><br />
                            <Form.Check type="radio" label="None" value="none" checked={TransRadioButton === 'none'}  onChange={handleOnChange} name="Radio" id="none"/>
                        </Col>
                    </Form.Group>
                    </div>
        }

      return (         
            <Accordion defaultActiveKey="0" lg={12} md={12} sm={12} className="accordianSize" style={{}} >
            <Card className="sub-menu">
                <Accordion.Toggle as={Card.Header}  className="Cardhead" eventKey="0">
                    {head}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                    {body}
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>
      );
  }

  export default connect()(LeftMain);

