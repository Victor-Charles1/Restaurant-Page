export default function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = `
      <h1>Our Menu</h1>
      <ul>
        <li>Pizza - $10</li>
        <li>Pasta - $12</li>
      </ul>
    `;
  }