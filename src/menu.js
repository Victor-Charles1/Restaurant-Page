export default function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <section class="menu-section">
            <h2>Tea Selection</h2>
            
            <div class="tea-category">
                <h3>Black Teas</h3>
                
                <div class="tea-item">
                    <div class="tea-name">Earl Grey Supreme</div>
                    <div class="tea-price">$8.99</div>
                    <div class="tea-description">Classic black tea with natural bergamot oil</div>
                </div>
                
                <div class="tea-item">
                    <div class="tea-name">Ceremonial Matcha</div>
                    <div class="tea-price">$12.99</div>
                    <div class="tea-description">Premium Indian tea with delicate muscatel notes</div>
                </div>
                
                <div class="tea-item">
                    <div class="tea-name">Organic Chamomile</div>
                    <div class="tea-price">$7.99</div>
                    <div class="tea-description">Robust blend perfect for mornings</div>
                </div>
            </div>
            
    `;

    
  }

