import { useState } from 'react';
import simaLogo from '../assets/simaLogo.jpeg';

const whatsappNumber = '0534867244';
const whatsappMsg = encodeURIComponent('היי סימה-לי הגעתי מהאתר ואני מתעניין בסיור');
const whatsappUrl = `https://wa.me/972${whatsappNumber.slice(1)}?text=${whatsappMsg}`;

function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="topbar">
      <div className="topbar-inner">
        <a href="/" className="topbar-logo" style={{textDecoration: 'none'}}>
          <img src={simaLogo} alt="Sima-lee Travel Logo" />
          <span className="topbar-title">Sima-lee Travel</span>
        </a>
        <button className="hamburger" onClick={() => setMenuOpen((v) => !v)} aria-label="תפריט" aria-expanded={menuOpen}>
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>
        <ul className={`topbar-nav${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(false)}>
          <li><a href="/" className="active">ראשי</a></li>
          <li><a href="/tours">סיורים</a></li>
          <li>
            <a href="#contact" className="topbar-contact-link">
              צור קשר
              <span style={{display:'inline-block',verticalAlign:'middle',marginRight:'0.4em'}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="#8B4513" />
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#fff"/>
                  <path d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.464 3.479 1.345 4.991L2.003 22l5.137-1.341a9.96 9.96 0 0 0 4.864 1.241h.004c5.514 0 9.997-4.483 9.997-9.997 0-2.669-1.04-5.178-2.929-7.067-1.89-1.89-4.399-2.929-7.072-2.929zm0 17.995a7.96 7.96 0 0 1-4.062-1.13l-.291-.173-3.047.796.813-2.97-.19-.304A7.963 7.963 0 0 1 4.003 12c0-4.418 3.584-8.002 8.001-8.002 2.137 0 4.146.832 5.656 2.344A7.95 7.95 0 0 1 20.003 12c0 4.418-3.584 8.002-8 8.002z" fill="#fff"/>
                </svg>
              </span>
            </a>
          </li>
        </ul>
        {menuOpen && <div className="topbar-backdrop" onClick={() => setMenuOpen(false)} />}
      </div>
    </nav>
  );
}

export default TopBar; 