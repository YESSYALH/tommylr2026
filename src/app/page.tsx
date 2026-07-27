import Link from "next/link";
import Image from "next/image";
import DirectionHover from "@/components/DirectionHover";

export default function Home() {
  return (
    <>
      {/* Header - Transparent over hero or matching dark background */}
      {/* Luxury Corporate Header (Pure CSS/Inline Styles) */}
      <header className="landing-header" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 5%',
        background: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
        boxShadow: '0 4px 20px -10px rgba(0,0,0,0.1)',
        position: 'fixed',
        width: '100%',
        top: 0,
        left: 0,
        zIndex: 100,
        boxSizing: 'border-box'
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Image 
            src="https://res.cloudinary.com/dr50ioh9h/image/upload/v1784923162/image_vle5mn.png" 
            alt="Tommy Lee Ruff Logo" 
            width={220}
            height={80}
            priority
            style={{ width: '220px', height: 'auto', objectFit: 'contain' }} 
          />
        </Link>

        <nav className="nav-links" aria-label="Main Navigation" style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
          <Link href="#about" style={{ textDecoration: 'none', color: '#64748b', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', transition: 'color 0.3s' }}>
            About
          </Link>
          <Link href="#services" style={{ textDecoration: 'none', color: '#64748b', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', transition: 'color 0.3s' }}>
            Services
          </Link>
          <Link href="#testimonials" style={{ textDecoration: 'none', color: '#64748b', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', transition: 'color 0.3s' }}>
            Testimonials
          </Link>
          
          <Link href="/login" style={{
            background: '#0f172a',
            color: '#fff',
            padding: '0.8rem 2rem',
            borderRadius: '50px',
            textDecoration: 'none',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            boxShadow: '0 4px 15px rgba(15, 23, 42, 0.2)',
            transition: 'all 0.3s ease'
          }}>
            Client Login
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" style={{ 
        position: 'relative',
        textAlign: 'center', 
        padding: '14rem 2rem 8rem 2rem', 
        background: 'linear-gradient(to bottom, #0f172a, #1e293b)', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        minHeight: '100vh', 
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {/* Ambient Light */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          height: '500px',
          background: 'rgba(52, 211, 153, 0.1)',
          filter: 'blur(120px)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '960px', margin: '0 auto' }}>
          <h1 style={{ 
            margin: '0 0 2.5rem 0', 
            fontSize: 'clamp(3rem, 7vw, 5rem)', 
            fontWeight: 800, 
            lineHeight: 1.15, 
            color: '#ffffff', 
            letterSpacing: '-0.02em',
            textShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}>
            Creating Wealth and <br/> Keeping It in the Family.
          </h1>
          <p style={{ 
            margin: '0 auto 3.5rem auto', 
            fontSize: '1.25rem', 
            color: '#94a3b8', 
            lineHeight: 1.8, 
            fontWeight: 300, 
            maxWidth: '800px' 
          }}>
            Strategies the financial industry hopes you never discover — delivered straight to you. <strong style={{ color: '#f8fafc', fontWeight: 500 }}>Protect your wealth, reduce taxes, and eliminate market risk.</strong>
          </p>
          
          <div className="hero-actions" style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '1.5rem', 
            alignItems: 'center', 
            flexWrap: 'wrap' 
          }}>
            <Link href="#contact" style={{ 
              padding: '1.2rem 2.5rem', 
              fontSize: '1.1rem', 
              fontWeight: 700, 
              background: '#34d399', 
              color: '#0f172a', 
              borderRadius: '50px', 
              textDecoration: 'none',
              boxShadow: '0 10px 25px rgba(52,211,153,0.3)',
              transition: 'all 0.3s ease'
            }}>
              Schedule a Free Consultation
            </Link>
            <Link href="#ebook" style={{ 
              padding: '1.2rem 2.5rem', 
              fontSize: '1.1rem', 
              fontWeight: 600,
              color: '#fff', 
              border: '1px solid rgba(255,255,255,0.3)', 
              background: 'transparent',
              borderRadius: '50px', 
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}>
              Download Free eBook
            </Link>
          </div>
          <p className="call-direct" style={{ 
            marginTop: '3.5rem', 
            fontSize: '0.85rem', 
            color: '#cbd5e1', 
            letterSpacing: '0.2em',
            fontWeight: 600,
            textTransform: 'uppercase'
          }}>
            📞 CALL TOMMY DIRECTLY — <span style={{ color: '#34d399' }}>870-715-9007</span>
          </p>
        </div>
      </section>

      {/* Trust Banner / Credentials */}
      <section style={{ background: '#fff', borderBottom: '1px solid #eee', padding: '1.5rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', opacity: 0.7 }}>
          <span style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--primary)' }}>Chartered Life Underwriter (CLU®)</span>
          <span style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--primary)' }}>Chartered Financial Consultant (ChFC®)</span>
          <span style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--primary)' }}>Registered Financial Consultant (RFC®)</span>
          <span style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--primary)' }}>Master Certified Estate Planner (MCEP™)</span>
        </div>
      </section>

      <section className="stats">
        <div className="stat-item">
          <div className="stat-number">40+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">26</div>
          <div className="stat-label">States Licensed</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">$0</div>
          <div className="stat-label">Management Fees</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">100%</div>
          <div className="stat-label">Client-First</div>
        </div>
      </section>

      <section id="about" className="section bg-light">
        <div className="two-col">
          <div>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}><DirectionHover title="About Tommy" textColor="var(--primary)" hoverColor="var(--secondary)" /></h2>
            <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '1.5rem' }}>
              Tommy Ruff began his career in 1984. After decades on the front lines of financial services, he discovered a harder truth: the conventional system was built to benefit Wall Street and Washington — not families.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '1.5rem' }}>
              Since 2002, Tommy has operated completely independent of Wall Street, helping clients build and protect wealth with strategies that carry zero market risk and zero management fees — strategies most advisors have never seen and the industry hopes stay hidden.
            </p>
            <blockquote style={{ fontSize: '1.25rem', fontStyle: 'italic', borderLeft: '4px solid var(--secondary)', paddingLeft: '1rem', color: 'var(--primary)', fontWeight: '600' }}>
              “Make a difference in someone’s life today.”<br/>
              <span style={{ fontSize: '1rem', fontWeight: 'normal', color: '#666' }}>— Tommy L. Ruff</span>
            </blockquote>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <Image 
              src="https://res.cloudinary.com/dr50ioh9h/image/upload/v1784923162/8_tommy_zakp3j.png" 
              alt="Tommy L. Ruff" 
              width={500}
              height={500}
              className="authority-frame"
              style={{ width: 'auto', height: 'auto', maxWidth: '100%', margin: '0 auto', display: 'block' }} 
            />
            <div style={{ background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', textAlign: 'center' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Learn How to Create Tax-Free Retirement Income</h3>
              <p style={{ marginBottom: '2rem', color: '#666' }}>A short video revealing strategies that protect your wealth, reduce taxes, and eliminate market risk — in plain English.</p>
              <button className="btn-primary">▶ Watch Video</button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <h2 className="section-title"><DirectionHover title="Practice Areas" textColor="var(--primary)" hoverColor="var(--secondary)" /></h2>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1.1rem', color: '#666' }}>
            Financial Strategies Built on Certainty, Not Guesses. Every strategy Tommy recommends is grounded in guarantees. Your family deserves a plan that works regardless of what markets, Washington, or inflation do next.
          </p>
          <div className="grid-3">
            <div className="practice-card">
              <h3>Privatized Family Banking</h3>
              <p>Build your own personal bank using dividend-paying whole life insurance. Create tax-free income, liquidity, and generational wealth — completely outside Wall Street’s reach.</p>
            </div>
            <div className="practice-card">
              <h3>Estate Planning</h3>
              <p>Protect your family from the agony of probate, unwanted relatives, and government predators. Your estate should go where you intend — not where the courts decide.</p>
            </div>
            <div className="practice-card">
              <h3>Retirement Protection</h3>
              <p>Shield your 401(k), IRA, or SEP from market losses, hidden fees, and future tax increases. A retirement account that can never lose is not a dream — it is a strategy.</p>
            </div>
            <div className="practice-card">
              <h3>Business Owner Planning</h3>
              <p>Build your own retirement plan free from employees and government interference. Protect against hidden contract risks and tax traps that business owners rarely see coming.</p>
            </div>
            <div className="practice-card">
              <h3>Tax-Free Income Strategies</h3>
              <p>Using IRS codes 7702, TEFRA, DEFRA, and TAMRA — Tommy shows clients how to become tax-free instead of the government’s perfect taxpayer.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Can You Answer These 8 Questions?</h2>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1.1rem', color: '#666' }}>
            If you cannot answer these with confidence, your retirement plan has gaps that could cost your family everything. The free ebook answers every one of these questions in plain English.
          </p>
          <div className="questions-list">
            <div className="question-item">
              <div className="question-num">1</div>
              <div className="question-text">Do you know the exact rate of return you must earn on your investments to sustain your lifestyle after retirement?</div>
            </div>
            <div className="question-item">
              <div className="question-num">2</div>
              <div className="question-text">Do you know how much you need to save right now to fully fund your retirement years?</div>
            </div>
            <div className="question-item">
              <div className="question-num">3</div>
              <div className="question-text">Is your retirement account truly insulated from market losses, fees, and commissions?</div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="#ebook" className="btn-primary">Download the Free Ebook →</Link>
          </div>
        </div>
      </section>

      <section id="testimonials" className="section">
        <div className="container">
          <h2 className="section-title"><DirectionHover title="Client Stories" textColor="var(--primary)" hoverColor="var(--secondary)" /></h2>
          <div className="grid-3">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>“After reading your book, we had to meet with you — which turned out to be the best decision of our financial life. You taught us how to eliminate market losses, fees, commissions, and unnecessary taxes.”</p>
              <div className="testimonial-author">Jim and Beverly Ghan</div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>“He is trustworthy and conscientious. We have never lost a penny or paid a fee. His process eliminates our worry over our finances. He is a godly man. Call him — you will not be disappointed.”</p>
              <div className="testimonial-author">Dr. Joel & Jonell Chaney</div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>“Our dividends have outperformed their projections. You have proven to my family that you are a man of your word, you give great service, and you are a man of integrity.”</p>
              <div className="testimonial-author">Kent Hanson</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner" id="contact">
        <div className="container">
          <h2>Tommy’s Promise to Every Client</h2>
          <p>
            If your current advisor cannot guarantee that your retirement account will never again lose value due to market corrections — and that you will never be charged a management fee or commission — call Tommy at 870-715-9007.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <button className="btn-white" style={{ marginRight: '1rem', marginBottom: '1rem' }}>Schedule a Free Consultation →</button>
            <button className="btn-outline" style={{ color: '#fff', borderColor: '#fff' }}>📞 Call 870-715-9007</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h4>Tommy L. Ruff</h4>
            <p>CLU© ChFC© RFC© MCEP™</p>
            <p>Over 40 Years Experience</p>
            <p style={{ fontStyle: 'italic', marginTop: '1rem', color: '#fff' }}>“Creating Wealth and Keeping It in the Family is My Mission.”</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>📞 870-715-9007</p>
            <p>✉️ tommylruff@gmail.com</p>
            <p>🌐 www.tommylruff.com</p>
          </div>
          <div>
            <h4>Company</h4>
            <p><Link href="#about">About</Link></p>
            <p><Link href="#services">Services</Link></p>
            <p><Link href="#testimonials">Testimonials</Link></p>
            <p><Link href="/login">Client Portal</Link></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>The sponsor of this website is not endorsed by, nor connected with and not approved by any government agency or organization. The sponsor of this website is authorized only to sell insurance products.</p>
          <p style={{ marginTop: '1rem' }}>© Tommy L. Ruff, CLU© ChFC© – Copyright 2026. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
