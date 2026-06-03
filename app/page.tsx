
export default function Home() {
  return (
    <main>
      <header style={{position:'sticky',top:0,background:'#0a0a0add',backdropFilter:'blur(10px)',padding:'20px 0'}}>
        <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <h2 className="gold">AIEL</h2>
          <nav style={{display:'flex',gap:'24px'}}>
            <a href="#portfolio">Portfolio</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact Us</a>
          </nav>
        </div>
      </header>

      <section className="section container" style={{textAlign:'center'}}>
        <h1 style={{fontSize:'72px'}}>AIEL</h1>
        <p className="gold">Accumulate. Invest. Evolve. Legacy.</p>
        <p>Building long-term wealth through disciplined investment and strategic thinking.</p>
      </section>

      <section id="portfolio" className="section container">
        <h2>Portfolio</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:'20px'}}>
          <div className="card"><h3>Digital Assets</h3><p>Research-driven exposure.</p></div>
          <div className="card"><h3>Emerging Technology</h3><p>Long-term opportunities.</p></div>
          <div className="card"><h3>Strategic Allocation</h3><p>Capital preservation focus.</p></div>
        </div>
      </section>

      <section id="about" className="section container">
        <h2>About Us</h2>
        <p>AIEL stands for Accumulate. Invest. Evolve. Legacy.</p>
      </section>

      <section id="contact" className="section container">
        <h2>Contact Us</h2>
        <form style={{display:'flex',flexDirection:'column',gap:'12px',maxWidth:'500px'}}>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <textarea placeholder="Message" rows={5}></textarea>
          <button type="submit">Send Inquiry</button>
        </form>
      </section>
    </main>
  );
}
