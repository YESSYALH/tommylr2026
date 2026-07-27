import Link from "next/link";
import Image from "next/image";
import DirectionHover from "@/components/DirectionHover";

export default function Home() {
  return (
    <>
      <header className="landing-header">
        <Link href="/" className="brand-logo">
          Tommy L. Ruff
          <span>CLU® · ChFC® · RFC® · MCEP™</span>
        </Link>
        <nav className="nav-links" aria-label="Main Navigation">
          <Link href="#about" className="nav-link">About</Link>
          <Link href="#services" className="nav-link">Services</Link>
          <Link href="#testimonials" className="nav-link">Testimonials</Link>
          <Link href="/login" className="btn-primary" style={{ padding: '0.5rem 1.25rem' }}>Client Login</Link>
        </nav>
      </header>

      <section className="hero" style={{ textAlign: 'left' }}>
        <div className="container" style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 10 }}>
          <div style={{ flex: '1 1 500px' }}>
            <h1 style={{ margin: '0 0 1.5rem 0' }}>Creating Wealth and Keeping It in the Family</h1>
            <p style={{ margin: '0 0 2.5rem 0' }}>
              Strategies the financial industry hopes you never discover — delivered straight to you. Protect your wealth, reduce taxes, and eliminate market risk.
            </p>
            <div className="hero-actions" style={{ justifyContent: 'flex-start' }}>
              <Link href="#contact" className="btn-primary">Schedule a Free Consultation</Link>
              <Link href="#ebook" className="btn-outline" style={{ color: '#fff', borderColor: '#fff' }}>Download Free eBook</Link>
            </div>
            <p className="call-direct">📞 Call Tommy directly — 870-715-9007</p>
          </div>
          <div style={{ flex: '1 1 500px', textAlign: 'center' }}>
            <Image 
              src="https://res.cloudinary.com/dr50ioh9h/image/upload/v1784923162/image_vle5mn.png" 
              alt="Book Cover or Financial Resource" 
              width={500}
              height={500}
              priority
              style={{ width: '100%', maxWidth: '500px', height: 'auto', borderRadius: '8px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', animation: 'levitate 6s ease-in-out infinite' }} 
            />
          </div>
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
