export default function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = `
         <section class="page" id="contact">
            <div class="contact-container">
                <div class="contact-info">
                    <h2>Visit Us</h2>
                    <p><i class="fas fa-map-marker-alt"></i> 123 Tea Lane, Beverage City, BC 12345</p>
                    <p><i class="fas fa-phone"></i> (123) 456-7890</p>
                    <p><i class="fas fa-envelope"></i> info@serenitea.com</p>
                    
                    <h3>Hours</h3>
                    <p>Monday - Friday: 8am - 7pm</p>
                    <p>Saturday: 9am - 8pm</p>
                    <p>Sunday: 10am - 6pm</p>
                    
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
                
                <div class="contact-form">
                    <h2>Send Us a Message</h2>
                    <form id="messageForm">
                        <div class="form-group">
                            <input type="text" id="name" placeholder="Your Name" required>
                        </div>
                        <div class="form-group">
                            <input type="email" id="email" placeholder="Your Email" required>
                        </div>
                        <div class="form-group">
                            <textarea id="message" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" class="btn">Send Message</button>
                    </form>
                </div>
            </div>
            
           
        </section>
    </main>

    <footer>
        <div class="footer-content">
            
            <div class="footer-section">
                <h4>Shop Policies</h4>
                <ul>
                    <li><a href="#">Shipping</a></li>
                    <li><a href="#">Returns</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Newsletter</h4>
                <p>Subscribe for updates and special offers</p>
                <form id="newsletterForm">
                    <input type="email" placeholder="Your Email" required>
                    <button type="submit" class="btn">Subscribe</button>
                </form>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 . All rights reserved.</p>
        </div>
    </footer>
    `;
}