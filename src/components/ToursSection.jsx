import tours from '../data/tours';
import { useNavigate } from 'react-router-dom';

function ToursSection() {
  const navigate = useNavigate();
  return (
    <section className="tours-section">
      <h2>הסיורים של סימה-לי</h2>
      <div className="tours-grid">
        {tours.map(tour => (
          <div
            className="tour-card tour-card-clickable"
            key={tour.id}
            onClick={() => navigate(`/tour/${tour.id}`)}
            tabIndex={0}
            role="button"
            onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && navigate(`/tour/${tour.id}`)}
          >
            <img src={tour.coverImage} alt={tour.title} className="tour-cover" />
            <h3>{tour.title}</h3>
            <p>{tour.description?.[0] || tour.shortDescription}</p>
            <button
              className="tour-details-btn"
              onClick={e => { e.stopPropagation(); navigate(`/tour/${tour.id}`); }}
            >לפרטים</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ToursSection; 