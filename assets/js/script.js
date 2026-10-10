/**
 * Kaushlendra Pratap Singh - Dynamic Portfolio Management Engine
 * Updates applied: Synced image assets to matching folder extensions (.png)
 */

// 1. Dynamic Portfolio Array Configuration
const projects = [
  [
    '01',
    'Telecom Customer Churn Analysis',
    'telecom-dashboard.png', // Updated from .svg to folder screenshot file name
    ['SQL', 'Python', 'Power BI', 'ML'],
    'End-to-end churn analytics identifying churn drivers, customer risk segments, revenue exposure and retention opportunities.',
    'https://github.com/Kaushlendra242/telecom-customer-churn-analysis'
  ],
  [
    '02',
    'GlycoTrack — Diabetes Risk Prediction',
    'glycotrack.png', // Updated from .svg to folder screenshot file name
    ['Python', 'XGBoost', 'SMOTE', 'Streamlit'],
    'Predictive ML application covering preprocessing, feature engineering, class-imbalance handling, model evaluation and deployment.',
    'https://github.com/Kaushlendra242/Netflix-DataScience-Project' // Dynamic reference to repository tree
  ],
  [
    '03',
    'Supermart Grocery Sales Analytics',
    'supermart.png', // Updated from .svg to folder screenshot file name
    ['Python', 'CatBoost', 'Retail', 'Streamlit'],
    'Retail analytics covering EDA, feature engineering, predictive modeling and a deployed sales prediction application.',
    'https://github.com/Kaushlendra242/supermart-grocery-sales-analytics'
  ],
  [
    '04',
    'Customer Satisfaction Prediction',
    'customer-satisfaction.png', // Updated from .svg to folder screenshot file name
    ['Python', 'ML', 'Customer Analytics'],
    'Prediction of customer satisfaction ratings using structured and unstructured support-ticket data.',
    'https://github.com/Kaushlendra242/customer-satisfaction-prediction'
  ],
  [
    '05',
    'Netflix Data Science & Recommendation',
    'netflix.png', // Updated from .svg to folder screenshot file name
    ['Python', 'NLP', 'TF-IDF'],
    'Content analysis and content-based recommendation using TF-IDF and similarity techniques.',
    'https://github.com/Kaushlendra242/Netflix-DataScience-Project'
  ],
  [
    '06',
    'Road Accident Prediction — India 2020',
    'road-accident.png', // Updated from .svg to folder screenshot file name
    ['Python', 'CatBoost', 'Streamlit'],
    'Accident-pattern analysis and predictive modeling using the India 2020 accident dataset.',
    'https://github.com/Kaushlendra242/road-accident-prediction-2020'
  ]
];

// 2. DOM Rendering Engine Injection Pipeline
const projectGridElement = document.getElementById('projectGrid');
if (projectGridElement) {
  projectGridElement.innerHTML = projects.map(p => `
    <article class="project-card">
      <a class="project-img" href="${p[5]}" target="_blank" rel="noopener">
        <img src="assets/images/${p[2]}" alt="${p[1]}">
      </a>
      <div class="project-body">
        <div class="label">${p[0]}</div>
        <h3>${p[1]}</h3>
        <div class="tags">${p[3].map(x => `<span>\${x}</span>`).join('')}</div>
        <p>${p[4]}</p>
        <div class="project-links">
          <a href="${p[5]}" target="_blank" rel="noopener">GitHub ↗</a>
          <a href="#contact">Discuss →</a>
        </div>
      </div>
    </article>
  `).join('');
}

// 3. Global Scroll Reading Mechanics (Reading Tracker Progress Indicator)
const progressBar = document.getElementById('progress');
if (progressBar) {
  window.addEventListener('scroll', () => {
    const scrollCalculation = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = scrollCalculation + '%';
  });
}

// 4. Mobile Navigation State Matrix Management
const menuButton = document.getElementById('menu');
const linksContainer = document.getElementById('links');

if (menuButton && linksContainer) {
  menuButton.onclick = () => linksContainer.classList.toggle('open');
  
  document.querySelectorAll('#links a, .links a').forEach(anchorLink => {
    anchorLink.onclick = () => linksContainer.classList.remove('open');
  });
}

// 5. System UI Theme Custom Toggle Configuration
const themeToggleButton = document.getElementById('theme');
if (themeToggleButton) {
  themeToggleButton.onclick = () => {
    document.body.classList.toggle('dark');
    localStorage.theme = document.body.classList.contains('dark') ? 'dark' : 'light';
  };
}

