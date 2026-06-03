
export default function Home() {
  return (
    <main>
      <header style={{position:'sticky',top:0,background:'#0a0a0af0',padding:'20px 0'}}>
        <div className="container" style={{display:'flex',justifyContent:'space-between'}}>
          <h2 style={{color:'#D4AF37'}}>AIEL</h2>
          <nav style={{display:'flex',gap:'24px'}}>
            <a href="#portfolio">Portfolio</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact Us</a>
          </nav>
        </div>
      </header>

      <section className="container" style={{padding:'120px 0',textAlign:'center'}}>
        <h1 style={{fontSize:'72px',marginBottom:'10px'}}>AIEL</h1>
        <p style={{color:'#D4AF37'}}>Accumulate. Invest. Evolve. Legacy.</p>
      </section>

      <section id="portfolio" className="container" style={{padding:'80px 0'}}>
        <h2>Portfolio</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:'16px'}}>
          <div className="card">Digital Assets</div>
          <div className="card">Emerging Technology</div>
          <div className="card">Strategic Allocation</div>
        </div>
      </section>

      <section id="about" className="container" style={{padding:'80px 0'}}>
        <h2>About Us</h2>
        <p>AIEL stands for Accumulate. Invest. Evolve. Legacy.</p>
      </section>

      <section id="contact" className="container" style={{padding:'80px 0'}}>
        <h2>Contact Us</h2>
        <input placeholder="Name" />
      </section>
    </main>
  );
}
