import React, { useState } from 'react';
import { coursesData, courseCategories } from '../data/coursesData';
import { 
  Search, 
  ArrowRight, 
  Filter, 
  X,
  BookOpen
} from 'lucide-react';

export function Courses({ onOpenCounselling }) {
  const [selectedCategory, setSelectedCategory] = useState('All Programs');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCourseModal, setActiveCourseModal] = useState(null);

  const filteredCourses = coursesData.filter((course) => {
    const matchesCategory = selectedCategory === 'All Programs' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.stream.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categoriesOverview = [
    {
      title: "Bachelor's Programs",
      subtitle: 'For students who have completed Class 12 or an equivalent qualification.',
      areas: ['Computer Science', 'Data Science', 'Engineering', 'Business Administration', 'Management', 'Information Technology', 'Nursing', 'Healthcare', 'Economics'],
      btnText: "Find a Bachelor's Program",
      action: () => setSelectedCategory("Bachelor's")
    },
    {
      title: "Master's Programs",
      subtitle: 'For graduates looking to specialise or advance their academic qualifications.',
      areas: ['Computer Science', 'Data Science', 'Artificial Intelligence', 'Information Sciences', 'Engineering', 'Business Analytics', 'Management', 'Finance', 'International Business'],
      btnText: "Find a Master's Program",
      featured: true,
      action: () => setSelectedCategory("Master's")
    },
    {
      title: 'MBA & Management',
      subtitle: 'Explore international business and management programs designed for students interested in global careers.',
      areas: ['MBA', 'International Business', 'Marketing', 'Finance', 'Business Analytics', 'Entrepreneurship', 'Management'],
      btnText: 'Explore Management',
      action: () => setSelectedCategory('MBA & Management')
    },
    {
      title: 'Engineering & Technology',
      subtitle: "Build your future in some of the world's most innovative study environments.",
      areas: ['Mechanical Engineering', 'Electrical Engineering', 'Electronics', 'Computer Engineering', 'Software Engineering', 'AI', 'Data Science', 'Robotics'],
      btnText: 'Explore Engineering',
      featured: true,
      action: () => setSelectedCategory('Engineering & Technology')
    },
    {
      title: 'Computer Science & IT',
      subtitle: 'Explore the rapidly expanding world of digital technology.',
      areas: ['Computer Science', 'Information Technology', 'Data Science', 'Artificial Intelligence', 'Cybersecurity', 'Software Development', 'Information Systems'],
      btnText: 'Explore Tech & IT',
      action: () => setSelectedCategory('Computer Science & IT')
    },
    {
      title: 'Nursing & Healthcare',
      subtitle: 'Explore academic and career-oriented opportunities in nursing and healthcare.',
      areas: ['Nursing', 'Healthcare Management', 'Public Health', 'Health Sciences', 'Nursing Master’s Programs'],
      btnText: 'Explore Healthcare',
      action: () => setSelectedCategory('Nursing & Healthcare')
    },
    {
      title: 'Germany Ausbildung',
      subtitle: 'For students interested in vocational education and training in Germany.',
      areas: ['Nursing / Pflege', 'Healthcare', 'Mechatronics', 'Electronics', 'Electrical', 'IT / Fachinformatiker', 'Automotive', 'Logistics', 'Hospitality', 'Culinary', 'Retail', 'Office Administration'],
      btnText: 'Explore Ausbildung 🇩🇪',
      highlight: true,
      action: () => setSelectedCategory('Germany Ausbildung')
    }
  ];

  return (
    <div>
      {/* 1. HERO HEADER */}
      <section style={{
        background: 'linear-gradient(180deg, #eff6ff 0%, #ffffff 100%)',
        padding: '54px 0 44px 0',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <span className="badge-pill badge-primary">
            <BookOpen size={14} /> Programs &amp; Study Areas
          </span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            Find Your Course
          </h1>
          <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#d97706', marginBottom: '16px' }}>
            Choose a Course That Builds Your Future
          </div>
          <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: 1.65, marginBottom: '28px' }}>
            The right course can shape your academic journey and future career. At <strong>FREIE ADMITS</strong>, 
            we help students explore programs based on their previous education, interests and career objectives.
          </p>

          {/* Search Box */}
          <div style={{
            position: 'relative',
            background: '#ffffff',
            borderRadius: '16px',
            border: '2px solid #bfdbfe',
            boxShadow: '0 6px 20px rgba(37, 99, 235, 0.08)',
            display: 'flex',
            alignItems: 'center',
            padding: '6px 14px'
          }}>
            <Search size={22} color="#1d4ed8" style={{ marginLeft: '6px' }} />
            <input
              type="text"
              placeholder="Search by course title, discipline, or university (e.g. AI, Mechatronics, Ausbildung)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                border: 'none',
                outline: 'none',
                padding: '12px 14px',
                fontSize: '0.98rem',
                color: '#0f172a',
                fontFamily: 'inherit'
              }}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}>
                <X size={18} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 2. CATEGORY PILLS FILTER */}
      <section style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '16px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#475569', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '6px', marginRight: '6px' }}>
              <Filter size={15} color="#1d4ed8" /> Category:
            </span>
            {courseCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '7px 14px',
                  borderRadius: '8px',
                  border: selectedCategory === cat ? '1px solid #1d4ed8' : '1px solid #e2e8f0',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  background: selectedCategory === cat ? '#1d4ed8' : '#ffffff',
                  color: selectedCategory === cat ? '#ffffff' : '#334155',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COURSES GRID */}
      <section className="section-py" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="grid-3" style={{ marginBottom: '56px' }}>
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="card-white"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: course.category === 'Germany Ausbildung' ? '2px solid #fde68a' : course.featured ? '1.5px solid #bfdbfe' : '1px solid #e2e8f0',
                  background: course.category === 'Germany Ausbildung' ? '#fffbeb' : '#ffffff'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{
                      background: course.category === 'Germany Ausbildung' ? '#fef3c7' : '#eff6ff',
                      color: course.category === 'Germany Ausbildung' ? '#92400e' : '#1d4ed8',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      fontSize: '0.74rem',
                      fontWeight: 700
                    }}>
                      {course.category}
                    </span>
                    <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#64748b' }}>
                      📍 {course.country}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px', lineHeight: 1.35 }}>
                    {course.title}
                  </h3>

                  <div style={{ fontSize: '0.88rem', color: '#1d4ed8', fontWeight: 600, marginBottom: '14px' }}>
                    🏛️ {course.university}
                  </div>

                  <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.55, marginBottom: '16px' }}>
                    {course.overview}
                  </p>

                  <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '10px', fontSize: '0.82rem', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span style={{ color: '#64748b' }}>Tuition:</span>
                      <strong style={{ color: '#0f172a' }}>{course.tuition}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#64748b' }}>Duration:</span>
                      <strong>{course.duration}</strong>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <button
                    onClick={() => setActiveCourseModal(course)}
                    className="btn btn-secondary btn-sm"
                    style={{ borderRadius: '8px' }}
                  >
                    View Criteria
                  </button>
                  <button
                    onClick={onOpenCounselling}
                    className="btn btn-primary btn-sm"
                    style={{ borderRadius: '8px' }}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 4. EXPLORE ALL STUDY DISCIPLINES IN DETAIL */}
          <div className="section-header">
            <span className="badge-pill badge-amber">Field Directory</span>
            <h2 className="section-title">
              Explore All <span className="text-gold">Program Categories</span>
            </h2>
            <p className="section-desc">
              Understand the diverse pathways available across Bachelor's, Master's, Management, Engineering and Germany Ausbildung.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
            {categoriesOverview.map((item, idx) => (
              <div
                key={idx}
                className="card-white program-spec-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 1fr',
                  gap: '32px',
                  alignItems: 'center',
                  padding: '32px',
                  border: item.highlight ? '2px solid #f59e0b' : '1px solid #e2e8f0',
                  background: item.highlight ? '#fffbeb' : '#ffffff'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '20px' }}>
                    {item.subtitle}
                  </p>
                  <button onClick={item.action} className="btn btn-primary">
                    <span>{item.btnText}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>

                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '10px' }}>
                    Areas Include:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {item.areas.map((a, i) => (
                      <span key={i} style={{ background: '#f1f5f9', color: '#1e293b', padding: '4px 10px', borderRadius: '6px', fontSize: '0.84rem', fontWeight: 500 }}>
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 5. NEED HELP CHOOSING A COURSE? */}
          <div style={{
            background: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)',
            borderRadius: '20px',
            padding: '40px',
            color: '#ffffff',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
            boxShadow: '0 16px 32px rgba(29, 78, 216, 0.25)'
          }}>
            <div style={{ maxWidth: '640px' }}>
              <span style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '50px', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Counsellor Support
              </span>
              <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ffffff', margin: '14px 0 8px 0' }}>
                Need Help Choosing a Course?
              </h3>
              <p style={{ color: '#dbeafe', fontSize: '1.02rem', lineHeight: 1.6, margin: 0 }}>
                You don't need to know everything before contacting us. Share your academic background and career interests with our counsellors.
              </p>
            </div>
            <button onClick={onOpenCounselling} className="btn btn-gold btn-lg" style={{ borderRadius: '12px' }}>
              <span>Book Free Counselling</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Course Detail Modal */}
      {activeCourseModal && (
        <div className="modal-overlay" onClick={() => setActiveCourseModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px' }}>
            <button className="modal-close" onClick={() => setActiveCourseModal(null)}>
              <X size={20} />
            </button>

            <div style={{ padding: '36px 32px' }}>
              <span style={{ background: '#eff6ff', color: '#1d4ed8', padding: '3px 10px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 700 }}>
                {activeCourseModal.category}
              </span>
              <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0f172a', margin: '10px 0 4px 0' }}>
                {activeCourseModal.title}
              </h2>
              <div style={{ color: '#1d4ed8', fontWeight: 600, fontSize: '0.94rem', marginBottom: '18px' }}>
                🏛️ {activeCourseModal.university} ({activeCourseModal.country})
              </div>

              <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '20px' }}>
                {activeCourseModal.overview}
              </p>

              <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '20px' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1d4ed8', marginBottom: '4px' }}>
                  ELIGIBILITY &amp; ADMISSION CRITERIA
                </div>
                <div style={{ color: '#334155', fontSize: '0.88rem', lineHeight: 1.55 }}>
                  {activeCourseModal.eligibility}
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                  Target Career Roles:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {activeCourseModal.targetRoles.map((role, i) => (
                    <span key={i} style={{ background: '#ecfdf5', color: '#065f46', border: '1px solid #a7f3d0', padding: '4px 10px', borderRadius: '6px', fontSize: '0.82rem', fontWeight: 600 }}>
                      ✓ {role}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setActiveCourseModal(null);
                  onOpenCounselling();
                }}
                className="btn btn-primary btn-lg"
                style={{ width: '100%', borderRadius: '10px' }}
              >
                <span>Inquire About This Course</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 960px) {
          .program-spec-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
