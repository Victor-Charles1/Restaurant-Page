export default function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = `
      <section class="page active" id="home">
            <div class="hero">
                <div class="hero-content">
                    <h2>Discover the Art of Tea</h2>
                    <p>Premium loose-leaf teas from around the world</p>
                    
            </div>

            <div class="about">
                <div class="about-image">
                    
                </div>
                <div class="about-content">
                    <h3>Our Story</h3>
                    <p>Founded in 2010, SereniTea has been dedicated to bringing the finest teas from traditional tea-growing regions to tea enthusiasts worldwide. We carefully select each tea for its quality, flavor, and sustainable production methods.</p>
                    <p>Visit our cozy tea shop to experience our full selection or order online for delivery to your home.</p>
                </div>
            </div>

            <div class="featured-teas">
                <h3>Featured Teas</h3>
                <div class="tea-grid">
                    <div class="tea-card">
                        
                        <h4>Earl Grey Supreme</h4>
                        <p>A classic black tea with bergamot oil</p>
                    </div>
                    <div class="tea-card">
                        
                        <h4>Ceremonial Matcha</h4>
                        <p>Premium shade-grown green tea powder</p>
                    </div>
                    <div class="tea-card">
                        
                        <h4>Organic Chamomile</h4>
                        <p>Calming herbal infusion</p>
                    </div>
                </div>
            </div>
        </section>
    `;












  }