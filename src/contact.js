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

    const style = document.createElement('style');
    style.innerHTML = `.contact-container {
    display: flex;
    gap: 3rem;
    margin-bottom: 3rem;
}

.contact-info, .contact-form {
    flex: 1;
    background: var(--white);
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.contact-info h2, .contact-form h2 {
    color: var(--primary-color);
    margin-bottom: 1.5rem;
}

.contact-info p {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
}

.contact-info i {
    margin-right: 0.5rem;
    color: var(--secondary-color);
}

.social-links {
    margin-top: 2rem;
}

.social-links a {
    display: inline-block;
    margin-right: 1rem;
    font-size: 1.5rem;
    color: var(--primary-color);
    transition: color 0.3s ease;
}

.social-links a:hover {
    color: var(--secondary-color);
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-family: inherit;
}

.form-group textarea {
    height: 150px;
    resize: vertical;
}



/* Footer Styles */
footer {
    background: var(--dark-color);
    color: var(--white);
    padding: 3rem 5% 1rem;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer-section {
    flex: 1;
    min-width: 250px;
}

.footer-section h4 {
    color: var(--accent-color);
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 0.8rem;
}

.footer-section ul li a {
    color: var(--light-color);
    transition: color 0.3s ease;
}

.footer-section ul li a:hover {
    color: var(--accent-color);
}

.footer-section input[type="email"] {
    width: 100%;
    padding: 0.8rem;
    margin-bottom: 1rem;
    border: none;
    border-radius: 5px;
}

.footer-bottom {
    text-align: center;
    padding-top: 1.5rem;
    border-top: 1px solid #444;
}
`;
document.head.appendChild(style);
  }