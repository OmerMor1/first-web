import React from 'react';
import './home.scss';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";





function Home() {
    const [activeContent, setActiveContent] = useState("במידה ואתם מתמודדים עם הפסקת חשמל, כדאי לבדוק האם הפסקת החשמל היא גם אצל השכנים או רק בבתיכם. במידה וההפסקת חשמל היא גם אצל השכנים כנראה שחברת החשמל דואגת לכך שהחשמל ישוב לפעול בהקדם. במידה והפסקת החשמל היא רק בביתכם, אשמח להגיע ולסייע בפתרון הבעיה.");
    const [activeBox, setActiveBox] = useState(1);


    const handleBoxClick = (boxNumber, content) => {
        setActiveContent(content);
        setActiveBox(boxNumber);
    };

    const boxStyle = (boxNumber) => ({
      //  border: "1px solid black",
        cursor: "pointer",
        backgroundColor: activeBox === boxNumber ? "#FF4500" : "white", 
        color: activeBox === boxNumber ? "white" : "black", 
    });

    return (
        <div className="home">
            <div className="heading">
                <h1>קובי מור - חשמלאי ראשי</h1>
                <h1>עבודות חשמל, אחזקה ובית חכם</h1>
            </div>
            <div className="container">
                <div className="top">
                    <h2>שירותי תיקון נפוצים</h2>
                </div>
                <div className="bottom">
                    <div className="left">
                        {/* Content for the left side */}
                        <div className="text">
                            <p>{activeContent}</p>
                        </div>
                    </div>
                    <div className="right">
                        <ul className="list"> 
                            <li className="item" style={boxStyle(1)} onClick={() => handleBoxClick(1,"במידה ואתם מתמודדים עם הפסקת חשמל, כדאי לבדוק האם הפסקת החשמל היא גם אצל השכנים או רק בבתיכם. במידה וההפסקת חשמל היא גם אצל השכנים כנראה שחברת החשמל דואגת לכך שהחשמל ישוב לפעול בהקדם. במידה והפסקת החשמל היא רק בביתכם, אשמח להגיע ולסייע בפתרון הבעיה.")}>
                            <ElectricBoltIcon className='icon'/>
                            <p>הפסקות חשמל</p>
                            </li>
                            <li className="item" style={boxStyle(2)} 
                            onClick={() => handleBoxClick
                            (2,"תפקידו של מפסק הפחת במערכת החשמל חשוב ביותר והוא למנוע התחשמלות על ידי זיהוי זליגת חשמל מאחד המכשירים. במצב כזה, מפסק הפחת מנתק אוטומטית את אספקת החשמל ללוח וכך מונע תקלות חשמליות. אם משהו השתבש בחשמל בביתכם, המקום הראשון שיש לבדוק הוא את מפסק הפחת שנמצא בלוח החשמל. להמשך טיפול והתייעצות בנושא ניתן לפנות אליי.")}>
                            <ElectricBoltIcon className='icon'/>
                            <p>מפסקי פחת</p>
                            </li>
                            <li className="item" style={boxStyle(3)} onClick={() => handleBoxClick(3,
                            "לוח חשמל תקין הינו פריט חיוני היכול להציל חיי אדם במקרה של התחשמלות, כאשר מעוניינים להתקין לוח חשמל או לערוך תחזוקת לוחות חשמל בכל מבנה, חובה להזמין חשמלאי מוסמך, בעל ניסיון עשיר בכדי שיבצע את התקנת הלוח וחלוקה נכונה באופן המקצועי ביותר. כאשר מכשירי החשמל אינם פועלים בקיבולת מלאה, או כאשר האורות שלך מהבהבים באופן בלתי צפוי, ישנם מספר סימנים נוספים לכך שייתכן שתזדקקו לתיקון לוח החשמל שלכם. לעתים נגלה כי מדובר בתיקון נקודתי בלבד אשר יוכל לפתור את התקלה. במקרים אחרים, ייתכן ומצבו של לוח החשמל כמו גם היותו מיושן, יצריך החלפה כללית מלאה.")}>
                            <ElectricBoltIcon className='icon'/>
                            <p>תיקון לוחות חשמל</p>
                            </li>
                            <li className="item" style={boxStyle(4)} onClick={() => handleBoxClick(4,'מתגים ושקעי חשמל חיוניים לתפקוד הבית, דרכם נוכל להדליק ולכבות את מכשירי החשמל שלנו. כאשר יש לך מתגים ושקעים לא תקינים בביתך, אנו מציעים מתגי חשמל ושירותי תיקון שקעים כדי לספק אספקת חשמל בטוחה ופונקציונלית.')}>
                            <ElectricBoltIcon className='icon'/>
                            <p>מתגים חשמליים ותיקון שקעים</p>
                            </li>
                            <li className="item" style={boxStyle(5)} onClick={() => handleBoxClick(5,'על מנת שנוכל להתאים את הבית שלנו לטכנולוגיה המתקדמת, בזמן בניית מבנה חדש או שדרוג הבית ניתן להכין תשתית שמתאימה לבית חכם. בית חכם הוא בית שפועל על ידי מערכת המאפשרת לשלוט על מספר מוצרי חשמל בו זמנית באמצעות מפסק אחד. את מערכת הבית החכם ניתן להפעיל אפילו כאשר אתם מחוץ לבית והיא תאפשר לכם נוחות מתקדמת. מעוניינים לשמוע פרטים נוספים? חייגו אלי ואשמח לסייע.')}>
                            <ElectricBoltIcon className='icon'/>
                            <p>התקנת תשתיות לבית חכם</p>
                            </li>
                            <li className="item" style={boxStyle(6)} onClick={() => handleBoxClick(6,'רכבים חשמליים מקנים לנו יתרונות רבים וביניהם את היתרון המרכזי- להטעין את הרכב בעמדה ממש מחוץ לבית או לבניין. מה שמאפשר טעינה מלאה של הרכב בכל חזרה הביתה ובין היתר טעינה ביתית היא משמעותית כלכלית יותר מאשר טעינה של מטענים חשמליים בחוץ. על מנת שנוכל ליצור עמדה טעינה לרכב החשמלי שלך, ראשית עלינו להבין את צרכיך ובהתאם לכך נוכל לתכנן תשתית ולפרוס אותה. להתייעצות בנושא ניתן לחייג אלי ואשמח לסייע.')}>
                            <ElectricBoltIcon className='icon'/>
                            <p>עמדות טעינה לרכב חשמלי</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="recommendations">
                <div className="top">
                    <h2>לקוחות ממליצים</h2>
                </div>

                                

             </div>
             </div>
    );
}

export default Home;