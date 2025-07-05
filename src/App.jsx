import './App.css'
import simaLogo from './assets/simaLogo.jpeg';
import simaImg from './assets/sima.jpeg';
import coverImg from './assets/cover.jpeg';
import ashdod1Img from './assets/ashdod1.jpeg';
import levinskiImg from './assets/levinski.jpeg';
import ramlaImg from './assets/ramla.jpeg';
import ToursSection from './components/ToursSection';
import TopBar from './components/TopBar';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import tours from './data/tours';

const whatsappNumber = '0534867244';
const whatsappMsg = encodeURIComponent('היי סימה-לי הגעתי מהאתר ואני מתעניין בסיור');
const whatsappUrl = `https://wa.me/972${whatsappNumber.slice(1)}?text=${whatsappMsg}`;

function Header() {
  return (
    <header className="hero-header">
      <div className="hero-bg" style={{ backgroundImage: `url(${coverImg})` }} />
      <div className="hero-content">
        <h1>לטייל עם סימה-לי</h1>
        <img src={simaLogo} alt="Sima-lee Travel Logo" className="sima-hero-img" />
        <p className="hero-desc">
          ברוכים הבאים לסימה-לי טיולים!<br />
          סיורים חווייתיים, טעימים ומרגשים ברחבי הארץ, בהדרכת מורת דרך מוסמכת.<br />
          הצטרפו אלינו לחוויה בלתי נשכחת!
        </p>
        <a className="hero-cta whatsapp-btn" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <span className="whatsapp-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#fff"/>
              <path d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.464 3.479 1.345 4.991L2.003 22l5.137-1.341a9.96 9.96 0 0 0 4.864 1.241h.004c5.514 0 9.997-4.483 9.997-9.997 0-2.669-1.04-5.178-2.929-7.067-1.89-1.89-4.399-2.929-7.072-2.929zm0 17.995a7.96 7.96 0 0 1-4.062-1.13l-.291-.173-3.047.796.813-2.97-.19-.304A7.963 7.963 0 0 1 4.003 12c0-4.418 3.584-8.002 8.001-8.002 2.137 0 4.146.832 5.656 2.344A7.95 7.95 0 0 1 20.003 12c0 4.418-3.584 8.002-8 8.002z" fill="#fff"/>
            </svg>
          </span>
          צור קשר
        </a>
      </div>
    </header>
  );
}

function AboutSection() {
  return (
    <section className="about-section">
      <h2>אודות סימה-לי</h2>
      <img src={simaImg} alt="סימה קלנג" className="about-img" />
      <p className="about-desc">
        שמי סימה-לי, תושבת אשדוד ומורת דרך מוסמכת. במשך שנים שימשתי בתפקיד המשנה ליועץ המשפטי בעיריית אשדוד, אני ד"ר למשפטים, מרצה ומגשרת, אך האהבה שלי לארץ, לאנשים ולטיולים תמיד בערה בי. מתוך התשוקה הזו נולד הרעיון לשתף אחרים בחוויות, בטעמים ובסיפורים של המקומות המיוחדים בארץ. מה שהתחיל כמפגשים חבריים הפך עם הזמן לסיורים מבוקשים בקרב קבוצות וארגונים מכל הארץ. אני מאמינה שכל טיול הוא הזדמנות להתרגש, להכיר וליצור זיכרונות חדשים – בגובה העיניים, עם חיוך והרבה אהבה. אשמח לצאת איתכם למסע מרתק בארץ ישראל!
      </p>
    </section>
  );
}

function OrganizationsSection() {
  const whatsappNumber = '0534867244';
  const whatsappMsg = encodeURIComponent('שלום סימה-לי, אנחנו ארגון שמעוניין בסדנה/סיור מותאם');
  const whatsappUrl = `https://wa.me/972${whatsappNumber.slice(1)}?text=${whatsappMsg}`;
  return (
    <section className="org-section">
      <h2>סיורים וסדנאות לארגונים</h2>
      <p className="org-desc">
        המומחיות שלי היא עבודה עם ארגונים, התאמת סדנאות וטיולים לכל רעיון – גם הכי מופרך!<br />
        אני אוהבת לאתגר את עצמי ולבנות חוויות ייחודיות שמותאמות בדיוק לאופי, לערכים ולמטרות של כל קבוצה. יש לכם אזור שמעניין אתכם במיוחד? רוצים פעילות מקורית? דברו איתי – יחד נגשים כל חלום!
      </p>
      <a className="org-whatsapp-btn" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        דברו איתי בוואטסאפ
      </a>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "נועה, צוות חינוך",
      text: "הסיור עם סימה היה חוויה מעשירה, מצחיקה ומרגשת. כל הצוות יצא עם חיוך!"
    },
    {
      name: "דנה, משאבי אנוש",
      text: "סימה התאימה לנו סדנה בדיוק לצרכים שלנו. קיבלנו השראה, טעמים וסיפורים שלא נשכח."
    },
    {
      name: "רוני, מנהלת קבוצה",
      text: "הסיור היה מקצועי, מעניין ומלא הפתעות. ממליצה בחום לכל ארגון!"
    }
  ];
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % testimonials.length);
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  return (
    <section className="testimonials-section">
      <h2>מה אומרים עלינו?</h2>
      <div className="testimonial-card">
        <p className="testimonial-text">"{testimonials[idx].text}"</p>
        <div className="testimonial-name">{testimonials[idx].name}</div>
        <div className="testimonial-nav">
          <button onClick={prev} aria-label="הקודם">‹</button>
          <span>{idx + 1} / {testimonials.length}</span>
          <button onClick={next} aria-label="הבא">›</button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer brown-footer">
      <nav className="footer-nav">
        <a href="/" className="footer-link">ראשי</a>
        <a href="/tours" className="footer-link">סיורים</a>
        <a href="#contact" className="footer-link">צור קשר</a>
      </nav>
      <p>© 2024 Sima-lee Travel</p>
    </footer>
  );
}

function ClosingSection() {
  const whatsappNumber = '0534867244';
  const whatsappMsg = encodeURIComponent('היי סימה-לי! הגעתי מהאתר ואני רוצה לדבר על טיול');
  const whatsappUrl = `https://wa.me/972${whatsappNumber.slice(1)}?text=${whatsappMsg}`;
  
  return (
    <section className="closing-section">
      <div className="closing-content">
        <div className="closing-icon">
          <div className="tours-collage">
            <img src={ashdod1Img} alt="סיור אשדוד" className="collage-img collage-img-1" />
            <img src={levinskiImg} alt="סיור לוינסקי" className="collage-img collage-img-2" />
            <img src={ramlaImg} alt="סיור רמלה" className="collage-img collage-img-3" />
          </div>
        </div>
        <h2 className="closing-title">מוכנים לחוויה בלתי נשכחת?</h2>
        <p className="closing-text">
          בואו נצא יחד למסע מרתק בארץ ישראל!<br />
          כל טיול הוא הזדמנות לגלות מקומות חדשים, לטעום טעמים מיוחדים<br />
          וליצור זיכרונות שילוו אתכם לכל החיים 🌟
        </p>
        <a className="closing-cta" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <span className="whatsapp-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#fff"/>
              <path d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.464 3.479 1.345 4.991L2.003 22l5.137-1.341a9.96 9.96 0 0 0 4.864 1.241h.004c5.514 0 9.997-4.483 9.997-9.997 0-2.669-1.04-5.178-2.929-7.067-1.89-1.89-4.399-2.929-7.072-2.929zm0 17.995a7.96 7.96 0 0 1-4.062-1.13l-.291-.173-3.047.796.813-2.97-.19-.304A7.963 7.963 0 0 1 4.003 12c0-4.418 3.584-8.002 8.001-8.002 2.137 0 4.146.832 5.656 2.344A7.95 7.95 0 0 1 20.003 12c0 4.418-3.584 8.002-8 8.002z" fill="#fff"/>
            </svg>
          </span>
          בואו נתחיל את המסע! 🚀
        </a>
      </div>
    </section>
  );
}

function WhatsAppFloatingButton() {
  const whatsappNumber = '0534867244';
  const whatsappMsg = encodeURIComponent('היי סימה-לי הגעתי מהאתר ואני מתעניין בסיור');
  const whatsappUrl = `https://wa.me/972${whatsappNumber.slice(1)}?text=${whatsappMsg}`;
  return (
    <a
      href={whatsappUrl}
      className="whatsapp-fab"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="צור קשר בוואטסאפ"
    >
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#25d366" />
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#fff"/>
        <path d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.464 3.479 1.345 4.991L2.003 22l5.137-1.341a9.96 9.96 0 0 0 4.864 1.241h.004c5.514 0 9.997-4.483 9.997-9.997 0-2.669-1.04-5.178-2.929-7.067-1.89-1.89-4.399-2.929-7.072-2.929zm0 17.995a7.96 7.96 0 0 1-4.062-1.13l-.291-.173-3.047.796.813-2.97-.19-.304A7.963 7.963 0 0 1 4.003 12c0-4.418 3.584-8.002 8.001-8.002 2.137 0 4.146.832 5.656 2.344A7.95 7.95 0 0 1 20.003 12c0 4.418-3.584 8.002-8 8.002z" fill="#fff"/>
      </svg>
    </a>
  );
}

function TourPage() {
  const { tourId } = useParams();
  const tour = tours.find(t => t.id === tourId);
  const navigate = useNavigate();
  if (!tour) return <div style={{textAlign: 'center', margin: '3rem'}}>סיור לא נמצא</div>;
  const whatsappMsg = encodeURIComponent(`היי סימה-לי, אני מתעניין/ת בסיור: ${tour.title}`);
  const whatsappUrl = `https://wa.me/972534867244?text=${whatsappMsg}`;
  return (
    <div className="tourpage-wrapper">
      <div className="tourpage-cover" style={{backgroundImage: `url(${tour.coverImage})`}} />
      <div className="tourpage-content">
        <button className="tourpage-back" onClick={() => navigate(-1)}>חזרה</button>
        <h1 className="tourpage-title">{tour.title}</h1>
        <div className="tourpage-gallery">
          {tour.gallery.map((img, i) => (
            <img src={img} alt={tour.title + ' תמונה ' + (i+1)} key={i} />
          ))}
        </div>
        <div className="tourpage-desc">
          {tour.description.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        {tour.highlights && tour.highlights.length > 0 && (
          <ul className="tourpage-highlights">
            {tour.highlights.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        )}
        {tour.schedule && tour.schedule.length > 0 && (
          <div className="tourpage-schedule">
            <h3>לו"ז מוצע:</h3>
            <ul>
              {tour.schedule.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        )}
        <a className="tourpage-whatsapp-btn" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          דברו איתי בוואטסאפ
        </a>
      </div>
    </div>
  );
}

function ToursListPage() {
  return (
    <section className="tours-list-section">
      <h2>הסיורים של סימה-לי</h2>
      <div className="tours-list">
        {tours.map(tour => (
          <div className="tour-list-card" key={tour.id}>
            <img src={tour.coverImage} alt={tour.title} className="tour-list-img" />
            <div className="tour-list-content">
              <h3>{tour.title}</h3>
              <p>{tour.description?.[0]}</p>
              <button className="tour-details-btn" onClick={() => window.location.href = `/tour/${tour.id}`}>לפרטים</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MainApp() {
  return (
    <main>
      <TopBar />
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <ToursSection />
            <AboutSection />
            <OrganizationsSection />
            <TestimonialsSection />
            <ClosingSection />
          </>
        } />
        <Route path="/tours" element={<ToursListPage />} />
        <Route path="/tour/:tourId" element={<TourPage />} />
      </Routes>
      <Footer />
      <WhatsAppFloatingButton />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}

export default App
