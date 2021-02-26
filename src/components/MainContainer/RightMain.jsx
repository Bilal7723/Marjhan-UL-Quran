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
    And here's some <strong>amazing</strong> content. It's very engaging.
    right?
  </Popover.Content>
</Popover>);
  const tarjama = "اللہ کے نام سے شروع جو نہایت مہربان ، رحمت والاہے";
  const tarjamaArray = [
    { surah: 1, aya: 1, arabic: "سب تعریفیں اللہ کے لئے ہیں جو تمام جہان والوں کاپالنے والا ہے" },
    { surah: 1, aya: 2, arabic: "بہت مہربان رحمت والا" },
    { surah: 1, aya: 3, arabic: "جزا کے دن کامالک" },
    { surah: 1, aya: 4, arabic: "ہم تیری ہی عبادت کرتے ہیں اور تجھ ہی سے مدد چاہتے ہیں" },
    { surah: 1, aya: 5, arabic: "ہمیں سیدھے راستے پر چلا" },
    { surah: 1, aya: 6, arabic: "ان لوگوں کا راستہ جن پر تو نے احسان کیا" },
    { surah: 1, aya: 7, arabic: "نہ کہ ان کا راستہ جن پر غضب ہوا اور نہ بہکے ہوؤں کا"},
  ];

  const Array = [
    {N100:1,surahName:"سورة الفاتحة",surahNo: 1,aya: 1, arabic: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ" },
    {N100:2,surahName:"سورة الفاتحة",surahNo: 1, aya: 2, arabic: "الْحَمْدُ لِلَّـهِ رَبِّ الْعَالَمِينَ" },
    {N100:3,surahName:"سورة الفاتحة",surahNo: 1, aya: 3, arabic: "الرَّحْمَـٰنِ الرَّحِيمِ" },
    {N100:4,surahName:"سورة الفاتحة",surahNo: 1, aya: 4, arabic: "مَالِكِ يَوْمِ الدِّينِ" },
    {N100:5,surahName:"سورة الفاتحة",surahNo: 1, aya: 5, arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ" },
    {N100:6,surahName:"سورة الفاتحة",surahNo: 1, aya: 6, arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ" },
    {N100:7,surahName:"سورة الفاتحة",surahNo: 1, aya: 7, arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ "},
    {N100:8,surahName:"سورة البقرة",surahNo:2,aya: 1, arabic: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ" },
    {N100:9,surahName:"سورة البقرة",surahNo: 2, aya: 2, arabic: "الم" },
    {N100:10,surahName:"سورة البقرة",surahNo: 2, aya: 3, arabic: "ذَلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِلْمُتَّقِينَ" },
    {N100:11,surahName:"سورة البقرة",surahNo: 2, aya: 4, arabic: "الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنْفِقُونَ" },
    {N100:12,surahName:"سورة البقرة",surahNo: 2, aya: 5, arabic: "وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنْزِلَ إِلَيْكَ وَمَا أُنْزِلَ مِنْ قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ" },
    {N100:13,surahName:"سورة البقرة",surahNo: 2, aya: 6, arabic: "أُولَئِكَ عَلَى هُدًى مِنْ رَبِّهِمْ وَأُولَئِكَ هُمُ الْمُفْلِحُونَ" },
    // {N100:14,surahName:"سورة البقرة",surahNo: 2, aya: 7, arabic: "إِنَّ الَّذِينَ كَفَرُوا سَوَاءٌ عَلَيْهِمْ أَأَنْذَرْتَهُمْ أَمْ لَمْ تُنْذِرْهُمْ لَا يُؤْمِنُونَ" },
    // {N100:15,surahName:"سورة البقرة",surahNo: 2, aya: 8, arabic: "خَتَمَ اللَّهُ عَلَى قُلُوبِهِمْ وَعَلَى سَمْعِهِمْ وَعَلَى أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ"},
    // {N100:16,surahName:"سورة البقرة",surahNo: 2, aya: 9, arabic: "وَمِنَ النَّاسِ مَنْ يَقُولُ آمَنَّا بِاللَّهِ وَبِالْيَوْمِ الْآخِرِ وَمَا هُمْ بِمُؤْمِنِينَ"},
    // {N100:17,surahName:"سورة البقرة",surahNo: 2, aya: 10, arabic: "يُخَادِعُونَ اللَّهَ وَالَّذِينَ آمَنُوا وَمَا يَخْدَعُونَ إِلَّا أَنْفُسَهُمْ وَمَا يَشْعُرُونَ"},
    // {N100:18,surahName:"سورة البقرة",surahNo: 2, aya: 11, arabic: "فِي قُلُوبِهِمْ مَرَضٌ فَزَادَهُمُ اللَّهُ مَرَضًا وَلَهُمْ عَذَابٌ أَلِيمٌ بِمَا كَانُوا يَكْذِبُونَ"},
    // {N100:19,surahName:"سورة البقرة",surahNo: 2, aya: 12, arabic: "وَإِذَا قِيلَ لَهُمْ لَا تُفْسِدُوا فِي الْأَرْضِ قَالُوا إِنَّمَا نَحْنُ مُصْلِحُونَ"},
  ];
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
                  <span key={element.aya.toString()}  onClick={()=>{ayaClick(element.surahNo,element.aya)}} id={element.aya} className="ayaTextSelected">
                    {element.arabic}
                    <span className="ayaNumber">&nbsp;﴿{element.aya}﴾&nbsp;</span>
                  </span>

                 ); else return(
                  <span key={element.aya.toString()}  onClick={()=>{ayaClick(element.surahNo,element.aya)}} id={element.aya} className="ayaText">
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
