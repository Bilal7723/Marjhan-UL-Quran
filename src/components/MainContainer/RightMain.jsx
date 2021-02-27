import {React,useState} from "react";
import { Tabs, Tab, OverlayTrigger, Container,Popover} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft,faChevronCircleRight} from "@fortawesome/free-solid-svg-icons";
import { useSelector} from 'react-redux';
// import popover_Tooltip from '../Component/Popover'
import Frametop from "../../assets/Images/TopImg.jpg";
import FrameBottom from "../../assets/Images/bottomImg.jpg";

function Middiv() {
  const RadioButton = useSelector((state) => state.radioReducer.radiovalue);  //Display/Browse Tab Font Size Error Display
  const checkAlign = useSelector((state) => state.displayOptCheckReducer.check);//Display check box for Align
  const sizeButton = useSelector((state) => state.displayOptButtonReducer.number); //Trans Tab Radio Button
  console.log("From Right>>>"+sizeButton);
  const [selected,setselected] = useState({surah:1,aya:2}); //By Default First Aya Selected
  const tarjama = "اللہ کے نام سے شروع جو نہایت مہربان ، رحمت والاہے";
  const tarjamaArray = [
    {surahName:"سورة الفاتحة",surahNo: 1, aya: 2, arabic: "سب تعریفیں اللہ کے لئے ہیں جو تمام جہان والوں کاپالنے والا ہے" },
    {surahName:"سورة الفاتحة",surahNo: 1, aya: 2, arabic: "بہت مہربان رحمت والا" },
    {surahName:"سورة الفاتحة",surahNo: 1, aya: 3, arabic: "جزا کے دن کامالک" },
    {surahName:"سورة الفاتحة",surahNo: 1, aya: 4, arabic: "ہم تیری ہی عبادت کرتے ہیں اور تجھ ہی سے مدد چاہتے ہیں" },
    {surahName:"سورة الفاتحة",surahNo: 1, aya: 5, arabic: "ہمیں سیدھے راستے پر چلا" },
    {surahName:"سورة الفاتحة",surahNo: 1, aya: 6, arabic: "ان لوگوں کا راستہ جن پر تو نے احسان کیا" },
    {surahName:"سورة الفاتحة",surahNo: 1, aya: 7, arabic: "نہ کہ ان کا راستہ جن پر غضب ہوا اور نہ بہکے ہوؤں کا"},
  ];

  const Array = [
    {surahName:"سورة الفاتحة",surahNo: 1,aya: 1, arabic: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ" },
    {surahName:"سورة الفاتحة",surahNo: 1, aya: 2, arabic: "الْحَمْدُ لِلَّـهِ رَبِّ الْعَالَمِينَ" },
    {surahName:"سورة الفاتحة",surahNo: 1, aya: 3, arabic: "الرَّحْمَـٰنِ الرَّحِيمِ" },
    {surahName:"سورة الفاتحة",surahNo: 1, aya: 4, arabic: "مَالِكِ يَوْمِ الدِّينِ" },
    {surahName:"سورة الفاتحة",surahNo: 1, aya: 5, arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ" },
    {surahName:"سورة الفاتحة",surahNo: 1, aya: 6, arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ" },
    {surahName:"سورة الفاتحة",surahNo: 1, aya: 7, arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ "},
    {surahName:"سورة البقرة",surahNo: 2, aya: 1, arabic: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ" },
    {surahName:"سورة البقرة",surahNo: 2, aya: 2, arabic: "الم" },
    {surahName:"سورة البقرة",surahNo: 2, aya: 3, arabic: "ذَلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِلْمُتَّقِينَ" },
    {surahName:"سورة البقرة",surahNo: 2, aya: 4, arabic: "الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنْفِقُونَ" },
    {surahName:"سورة البقرة",surahNo: 2, aya: 5, arabic: "وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنْزِلَ إِلَيْكَ وَمَا أُنْزِلَ مِنْ قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ" },
    {surahName:"سورة البقرة",surahNo: 2, aya: 6, arabic: "أُولَئِكَ عَلَى هُدًى مِنْ رَبِّهِمْ وَأُولَئِكَ هُمُ الْمُفْلِحُونَ" },
  ];
    const popover_Tooltip = (      
  <Popover id="popover-basic">
  <Popover.Title as="h3">
    Translation
    <button
      type="button" onClick={() => document.body.click()} className="close" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </Popover.Title>
  <Popover.Content>
   Translation Coming Soon!!
  </Popover.Content>
</Popover>);
  const pageicon = { color: `#007bff`, cursor: `pointer`, fontSize: `1rem` };
  function ayaClick(surahNumber,ayaNumber) {
    setselected({surah:surahNumber,aya:ayaNumber});
  }
  return (
    <Container style={{ paddingRight: `0px` }}>
      <Tabs defaultActiveKey="quran" className="TabCover" id="Tabs">
        <Tab eventKey="quran" className="homeMain" title="Quran">
          <div className=" row  homeHeader">
            <div className="col" lg={4} md={4} sm={2}>
              <span id="suraName">سورة الفاتحة</span>
            </div>
            <div className="col" lg={4} md={4} sm={2}>
              <FontAwesomeIcon style={pageicon} icon={faChevronCircleLeft} />
              &nbsp;<span className="pageNumber">١</span>&nbsp;
              <FontAwesomeIcon style={pageicon} icon={faChevronCircleRight} />
            </div>
            <div className="col" lg={4} md={4} sm={2}>
              <span id="juzName">الجزء الاول</span>{" "}
            </div>
          </div>
          <div className="row">
            <div className=" frameUp">
              <img
                src={Frametop}
                border="0"
                className="responsive-image"
                alt="Null"
              />
            </div>
            <span className={checkAlign === true ? "aya-wrapper" :  "aya-wrapperAlign"}>
            {Array.map(function(element, i) {  // key warning rise in console Error 22/2/21
                if(element.aya === 1) return(
                  <div key={i}>
                  <div className="suraHeaderFrame responsive-image">
                    <div className="suraHeaderText">{element.surahName}</div>
                  </div><br />
                  <div className="BismilahHeader">{element.arabic}</div></div> 
                );
                if (selected['surah'] === element.surahNo && selected['aya'] === element.aya) 
                return(
                  <OverlayTrigger key={i.toString()} trigger={RadioButton === 'mouseHover' ? ['hover', 'focus'] : RadioButton === 'fixed' ? 'click' : ''} placement='auto' overlay={(popover_Tooltip)} rootClose={true}>
                  <span key={i.toString()}  onClick={()=>{ayaClick(element.surahNo,element.aya)}} id={element.aya}  style={ sizeButton.tabName === "Display Options" ? {fontSize:sizeButton.number}: {fontSize:20} } className="ayaTextSelected">
                    {element.arabic}
                    <span className="ayaNumber">&nbsp;﴿{element.aya - 1}﴾&nbsp;</span>
                  </span>
                </OverlayTrigger>
                 ); else return(
                  <OverlayTrigger key={i.toString()} trigger={RadioButton === 'mouseHover' ? ['hover', 'focus'] : RadioButton === 'fixed' ? 'click' : ''} placement='auto' overlay={(popover_Tooltip)} rootClose={true}>
                  <span key={i.toString()}  onClick={()=>{ayaClick(element.surahNo,element.aya)}} id={element.aya} style={ sizeButton.tabName === "Display Options" ? {fontSize:sizeButton.number}: {fontSize:20} } className="ayaText">
                    {element.arabic}
                    <span className="ayaNumber">&nbsp;﴿{element.aya - 1}﴾&nbsp;</span>
                  </span>
                </OverlayTrigger> 
                 );
              })}
            </span>
            <div className="frameDown">
              <img
                src={FrameBottom}
                border="0"
                className="responsive-image"
                alt="Null"
              />
            </div>
            {/* <div lg={12} md={8} sm={2} className="homeHeader">
            <a href="https://github.com"> ◄</a>
              &nbsp;<span className="pageNumber">١</span>&nbsp;
              <a href="https://github.com">►</a>
            </div> */}
          </div>
        </Tab>
        <Tab eventKey="translation" title="Translation" className="homeMain">
          <div className=" row  homeHeader">
            <div className="col" lg={4} md={4} sm={2}>
              <span id="suraName">سورة الفاتحة</span>
            </div>
            <div className="col" lg={4} md={4} sm={2}>
              <FontAwesomeIcon style={pageicon} icon={faChevronCircleLeft} />
              &nbsp;<span className="pageNumber">١</span>&nbsp;
              <FontAwesomeIcon style={pageicon} icon={faChevronCircleRight} />
            </div>
            <div className="col" lg={4} md={4} sm={2}>
              <span id="juzName">الجزء الاول</span>{" "}
            </div>
          </div>
          <div className="row">
            <div className=" frameUp">
              <img
                src={Frametop}
                border="0"
                className="responsive-image"
                alt="Null"
              />
            </div>
            <div className="suraHeaderFrame responsive-image">
              <div className="suraHeaderText">سورة الفاتحة</div>
            </div>
            <span className="aya-wrapper">
              <div className="BismilahHeader">{tarjama}</div>
              {tarjamaArray.map(function(element, i) {
                if (selected['surah'] === element.surahNo && selected['aya'] === element.aya) 
                return(
                  <span key={element.aya.toString()}  onClick={()=>{ayaClick(element.surahNo,element.aya)}} style={ sizeButton.tabName === "Display Options" ? {fontSize:sizeButton.number}: {fontSize:20} } id={element.aya} className="ayaTextSelected">
                    {element.arabic}
                    <span className="ayaNumber">&nbsp;﴿{element.aya}﴾&nbsp;</span>
                  </span>

                 ); else return(
                  <span key={element.aya.toString()}  onClick={()=>{ayaClick(element.surahNo,element.aya)}} style={ sizeButton.tabName === "Display Options" ? {fontSize:sizeButton.number}: {fontSize:20} } id={element.aya} className="ayaText">
                    {element.arabic}
                    <span className="ayaNumber">&nbsp;﴿{element.aya}﴾&nbsp;</span>
                  </span>

                 );
              })}
            </span>
            <div className="frameDown">
              <img
                src={FrameBottom}
                border="0"
                className="responsive-image"
                alt="Null"
              />
            </div>
          </div>
        </Tab>
        <Tab eventKey="theme" title="Theme"></Tab>
      </Tabs>
    </Container>
  );
}

export default Middiv;
