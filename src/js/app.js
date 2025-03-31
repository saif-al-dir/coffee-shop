document.addEventListener('DOMContentLoaded', function () {
  // Register Handlebars partials
  Handlebars.registerPartial('products', document.getElementById('products-partial').innerHTML);
  Handlebars.registerPartial('about', document.getElementById('about-template').innerHTML);

  const app = document.getElementById('app');

  // Function to render Handlebars templates
  function renderTemplate(templateId, data = {}) {
    const templateSource = document.getElementById(templateId).innerHTML;
    const template = Handlebars.compile(templateSource);
    app.innerHTML = template(data);
  }

  // Load Home Page by default
  renderTemplate('home-template', { showAbout: true });

  // Attach event listeners dynamically
  document.body.addEventListener('click', function (e) {
    if (e.target.matches('#home-btn')) {
      e.preventDefault();
      renderTemplate('home-template', { showAbout: true });
    }
    if (e.target.matches('#products-btn')) {
      e.preventDefault();
      renderTemplate('products-template');
    }
    if (e.target.matches('#contact-btn')) {
      e.preventDefault();
      renderTemplate('contact-template');
    }
  });
});
