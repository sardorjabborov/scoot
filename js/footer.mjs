// public/js/footer.mjs
export function loadFooter() {
    const footerHTML = `
      <footer class="footer">
        <div class="container footer-container">
          <p>Ro‘yxatdan o‘ting va Scoot bilan safarga chiqing</p>
  
          <!-- Ro‘yxatdan o'tish tugmasi -->
          <button id="openSignup" class="btn-signup">Ro‘yxatdan o‘tish</button>
  
          <!-- Aloqa bo‘limi -->
          <div class="contact-section">
            <div class="contact-item">
              <img src="public/img/phone-icon.png" alt="Telefon" class="icon">
              <span>+998993895567</span>
            </div>
            <div class="contact-item">
              <a href="https://t.me/ScootUzBot" target="_blank">
                <img src="public/img/telegram-icon.png" alt="Telegram" class="icon">
              </a>
            </div>
          </div>
        </div>
  
        <!-- Modal (ro‘yxatdan o‘tish formasi) -->
        <div id="signupModal" class="modal">
          <div class="modal-content">
            <span id="closeModal" class="close">&times;</span>
            <h3>Ro‘yxatdan o‘tish</h3>
            <form id="signupForm">
              <input type="text" name="name" placeholder="Ismingiz" required>
              <input type="tel" name="phone" placeholder="Telefon raqamingiz" required>
              <button type="submit" class="btn-submit">Yuborish</button>
            </form>
            <p id="signupMessage"></p>
          </div>
        </div>
      </footer>
    `;
  
    document.body.insertAdjacentHTML("beforeend", footerHTML);
  }
  