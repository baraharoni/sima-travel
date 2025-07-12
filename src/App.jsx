import './App.css'
import simaLogo from './assets/simaLogo.jpeg';
import simaImg from './assets/sima.jpeg';
import coverImg from './assets/cover.JPG';
import ashdod1Img from './assets/ashdod1.jpeg';
import levinskiImg from './assets/levinski.jpeg';
import ramlaImg from './assets/ramla.jpeg';
import ToursSection from './components/ToursSection';
import TopBar from './components/TopBar';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, useParams, useNavigate, useLocation } from 'react-router-dom';
import tours from './data/tours';
import { useEffect } from 'react';
import { useCallback } from 'react';
import simavideo from './assets/simavideo.mp4';
import aboutImg from './assets/about.jpeg';

const whatsappNumber = '0534867244';
const whatsappMsg = encodeURIComponent('היי סימה-לי הגעתי מהאתר ואני מתעניין בסיור');
const whatsappUrl = `https://wa.me/972${whatsappNumber.slice(1)}?text=${whatsappMsg}`;

function Header() {
  return (
    <header className="hero-header">
      <div className="hero-bg" style={{ backgroundImage: `url(${coverImg})` }} />
      <div className="hero-content">
        <h1>לטייל עם סימה-לי</h1>
        <img src={simaImg} alt="סימה קלנג" className="sima-hero-img" />
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

function VideoSection() {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', background: 'none', margin: '0 0 1.5rem 0' }}>
      <video
        src={simavideo}
        autoPlay
        muted
        loop
        playsInline
        controls
        style={{ width: '100%', maxWidth: 700, borderRadius: 18, boxShadow: '0 2px 12px #0002', background: '#000' }}
        poster={coverImg}
      />
    </div>
  );
}

function AboutSection() {
  return (
    <section className="about-section">
      <h2>אודות סימה-לי</h2>
      <img src={aboutImg} alt="סימה קלנג" className="about-img" />
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
        המומחיות שלי היא עבודה עם ארגונים, התאמת סדנאות וטיולים לכל רעיון!<br />
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
    { name: "אתי", text: "יום מקסים תודה רבה למדריכה המהממת היה כייף 🥰🩷" },
    { name: "מיכל", text: "היה מושלם אין על סימה ❤️🙏" },
    { name: "אירמה", text: "תודה סימה מדהימה את\nאלופה נעימה וזורמת היה מלא השראה ותוכן\nתודה" },
    { name: "מזל", text: "תודה סימה היה מושלם נתראה בטיולים הבאים❤️" }
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
  const whatsappNumber = '0534867244';
  const whatsappMsg = encodeURIComponent('היי סימה-לי הגעתי מהאתר ואני מתעניין בסיור');
  const whatsappUrl = `https://wa.me/972${whatsappNumber.slice(1)}?text=${whatsappMsg}`;
  return (
    <footer className="footer brown-footer">
      <nav className="footer-nav">
        <a href="/" className="footer-link">ראשי</a>
        <a href="/tours" className="footer-link">סיורים</a>
        <a href={whatsappUrl} className="footer-link" target="_blank" rel="noopener noreferrer">צור קשר</a>
      </nav>
      <div className="footer-social-row">
        <a href="https://www.facebook.com/sima.azogui.klang" className="footer-link" target="_blank" rel="noopener noreferrer" aria-label="פייסבוק">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0z" fill="#fff"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/simaklang1" className="footer-link" target="_blank" rel="noopener noreferrer" aria-label="אינסטגרם">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344c-.98.98-1.213 2.092-1.272 3.374C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.059 1.282.292 2.394 1.272 3.374.98.98 2.092 1.213 3.374 1.272C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.282-.059 2.394-.292 3.374-1.272.98-.98 1.213-2.092 1.272-3.374.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.059-1.282-.292-2.394-1.272-3.374-.98-.98-2.092-1.213-3.374-1.272C15.668.013 15.259 0 12 0zm0 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A3.999 3.999 0 1 1 12 8a3.999 3.999 0 0 1 0 7.999zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" fill="#fff"/>
          </svg>
        </a>
      </div>
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
          לא מצאתם סיור שמתאים בדיוק עבורכם?<br />
          ישנם סיורים רבים נוספים, וניתן להזמין סיור בהתאמה אישית – אשמח לבנות עבורכם חוויה ייחודית ומותאמת במיוחד!
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
        <div className="tourpage-gallery" style={{display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'1.2rem'}}>
          <img
            src={tour.gallery[0]}
            alt={tour.title + ' תמונה ראשית'}
            style={{
              width: '100%',
              maxWidth: '98vw',
              height: 'auto',
              maxHeight: '320px',
              objectFit: tour.id === 'ramla-tasting' ? 'contain' : 'cover',
              borderRadius: '12px',
              boxShadow: '0 2px 8px #0001',
              background: tour.id === 'ramla-tasting' ? '#fff' : undefined
            }}
          />
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
            <VideoSection />
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

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainApp />
    </BrowserRouter>
  );
}

export default App
