import React from 'react';

export function Services() {

  React.useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const target = document.getElementById(id);
        if (target) {
          setTimeout(() => {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      }
    };

    handleHashScroll();
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, []);

  const academicServices = [
    {
      id: "counselling",
      title: "Counselling",
      subtitle: "Clarity before commitment.",
      desc: "A university is chosen once and lived in for years. We begin with unhurried conversation about a student's strengths, interests, circumstances and means, because the soundest decisions are made with a clear view of all four.\n\nWe do not steer students towards fashionable destinations or familiar names. We help them reason towards a path that is honest, achievable and worthy of their effort.",
      quote: "The right question, asked early, saves years."
    },
    {
      id: "course-selection",
      title: "Course Selection",
      subtitle: "The right discipline, rightly chosen.",
      desc: "A degree shapes how a person thinks long after the lectures end. We help students look beyond titles and rankings to the substance of a programme: its curriculum, its teaching, its standing in the field and it’s fit with their intellectual strengths.\n\nEach recommendation is reasoned, comparative and candid, so that the course a student enters is one they can commit to fully.",
      quote: "Choose the subject. Then choose the institution."
    },
    {
      id: "applications",
      title: "Applications",
      subtitle: "Precision in every submission.",
      desc: "An application is a student's first piece of scholarship. It should be accurate, coherent, and entirely their own.\n\nWe review each component with care, from academic records and personal statements to references and supporting documents, and refine them with the student, never for them. The result is a submission that speaks plainly, withstands scrutiny, and reflects genuine purpose.",
      quote: "Your voice, presented at its best."
    },
    {
      id: "visa-guidance",
      title: "Visa Guidance",
      subtitle: "Order and assurance.",
      desc: "Immigration requirements are exacting, and small oversights carry real consequences. We bring structure to the process: the documents required, the evidence to be assembled and the timelines to be observed.\n\nStudents are prepared for each stage with clarity, so they approach the visa process informed and composed rather than uncertain.",
      quote: "Every requirement understood. Every document in order."
    },
    {
      id: "test-preparation",
      title: "Test Preparation",
      subtitle: "Readiness through discipline.",
      desc: "Examination results are often the threshold to admission. We prepare students for them through structured instruction, regular practice and honest assessment of progress.\n\nThe aim is not to teach shortcuts but to build real command of language and reasoning, so that performance on the day reflects true ability.",
      quote: "Preparation is the quietest form of confidence."
    },
    {
      id: "scholarships",
      title: "Scholarships",
      subtitle: "Merit, recognised.",
      desc: "Many awards go unclaimed because they are never discovered, or are poorly presented. We help students identify the scholarships, bursaries and grants for which they may rightfully compete.\n\nWe then assist in presenting their achievements, character and promise with clarity and economy, in the manner such committees value.",
      quote: "Excellence deserves to be seen."
    }
  ];

  const beyondServices = [
    {
      id: "education-finance",
      title: "Education Finance",
      subtitle: "Ambition, responsibly funded.",
      desc: "Studying abroad is a significant financial undertaking. We guide families through the available means of financing it, explaining the commitments involved and the documentation required.\n\nOur concern is prudence: that a student begins their studies with a plan they understand and obligations they can manage.",
      quote: "Plan the cost before the journey."
    },
    {
      id: "travel-arrangements",
      title: "Travel Arrangements",
      subtitle: "A considered departure.",
      desc: "The journey to a new country should not distract from the purpose of making it. We help students arrange their travel with attention to timing, routes, and the practicalities of arrival.\n\nIt is a small service with a simple aim: that attention remains on what lies ahead.",
      quote: "Depart with nothing left to chance."
    },
    {
      id: "accommodation",
      title: "Accommodation",
      subtitle: "A place to think and to rest.",
      desc: "Where a student lives shapes how well they study. We help secure lodging that is safe, suitable and well situated, whether within the university or beyond it, and arranged before arrival wherever possible.\n\nA settled home makes for a steadier mind.",
      quote: "A settled home makes for a steadier mind."
    },
    {
      id: "pre-departure-briefing",
      title: "Pre-Departure Briefing",
      subtitle: "Prepared in mind and manner.",
      desc: "Every country has its customs, expectations and unwritten rules. Before departure, we brief students on academic conduct, daily life, cultural norms and practical matters, so that the first weeks abroad are met with understanding rather than surprise.",
      quote: "To arrive informed is to arrive at ease."
    },
    {
      id: "arrival-and-settlement",
      title: "Arrival and Settlement",
      subtitle: "Welcomed on arrival.",
      desc: "The first days in a new country matter. We support students on landing and through the early period of settling in, so that unfamiliar surroundings become familiar quickly and studies can begin well.",
      quote: "The journey ends. The scholarship begins."
    }
  ];

  const renderServiceCard = (service) => (
    <div key={service.id} id={service.id} className="service-pure-card">
      <div className="service-pure-header">
        <h3 className="service-pure-title">{service.title}</h3>
        <p className="service-pure-subtitle">{service.subtitle}</p>
      </div>

      <div className="service-pure-desc">
        {service.desc.split('\n\n').map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="service-pure-quote">
        "{service.quote}"
      </div>
    </div>
  );

  return (
    <div className="services-page-wrap">
      {/* 1. MAIN TITLE */}
      <section style={{
        background: '#ffffff',
        padding: '70px 0 30px 0',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '3.4rem',
            fontWeight: 700,
            color: '#1c2a4f',
            margin: 0,
            letterSpacing: '-0.01em'
          }}>
            Our Services
          </h1>
        </div>
      </section>

      {/* 2. CATEGORY I: ACADEMIC GUIDANCE */}
      <section id="academic-guidance" className="section-py" style={{ background: '#ffffff', paddingTop: '20px' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="service-section-title-wrap">
            <h2 className="service-section-title">I. Academic Guidance</h2>
          </div>

          <div className="services-pure-stack">
            {academicServices.map((service) => renderServiceCard(service))}
          </div>
        </div>
      </section>

      {/* 3. CATEGORY II: BEYOND ADMISSION */}
      <section id="beyond-admission" className="section-py" style={{ background: '#ffffff', borderTop: '1px solid #e2e8f0', paddingTop: '50px', paddingBottom: '80px' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="service-section-title-wrap">
            <h2 className="service-section-title">II. Beyond Admission</h2>
          </div>

          <div className="services-pure-stack">
            {beyondServices.map((service) => renderServiceCard(service))}
          </div>
        </div>
      </section>

      <style>{`
        .service-section-title-wrap {
          margin-bottom: 32px;
          padding-bottom: 16px;
          border-bottom: 2px solid #1c2a4f;
        }

        .service-section-title {
          font-family: var(--font-heading);
          font-size: 2.3rem;
          font-weight: 700;
          color: #1c2a4f;
          margin: 0;
          letter-spacing: -0.01em;
        }

        .services-pure-stack {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .service-pure-card {
          scroll-margin-top: 100px;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 16px;
          padding: 36px 40px;
          box-shadow: 0 4px 16px rgba(28, 42, 79, 0.03);
          transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
        }

        .service-pure-card:hover {
          transform: translateY(-3px);
          border-color: #1c2a4f;
          box-shadow: 0 16px 36px rgba(28, 42, 79, 0.08);
        }

        .service-pure-header {
          margin-bottom: 16px;
        }

        .service-pure-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: #1c2a4f;
          margin: 0 0 6px 0;
          letter-spacing: -0.01em;
        }

        .service-pure-subtitle {
          font-family: var(--font-heading);
          font-style: italic;
          font-size: 1.25rem;
          color: #475569;
          margin: 0;
        }

        .service-pure-desc {
          font-size: 1.05rem;
          color: #475569;
          line-height: 1.75;
          margin-bottom: 20px;
        }

        .service-pure-desc p {
          margin: 0 0 14px 0;
        }

        .service-pure-desc p:last-child {
          margin-bottom: 0;
        }

        .service-pure-quote {
          font-family: var(--font-heading);
          font-style: italic;
          font-size: 1.2rem;
          color: #1c2a4f;
          padding-top: 16px;
          border-top: 1px solid #f1f5f9;
        }

        @media (max-width: 640px) {
          .service-pure-card {
            padding: 24px;
          }
          .service-pure-title {
            font-size: 1.45rem;
          }
          .service-section-title {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
}
