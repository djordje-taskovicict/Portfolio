/* VEŠTINE
   Procenti su demonstracioni, nisu izvedeni iz ocena.
   Promeni percent (0 do 100) nakon lične procene znanja.
   Za novu veštinu kopiraj jedan objekat u nizu.
   JavaScript mapiranje na predmete tek treba potvrditi.
*/
const skills = [
  { name: 'HTML & CSS', icon: '</>', percent: 95, description: 'Struktura stranica i responzivni dizajn' },
  { name: 'JavaScript', icon: 'JS', percent: 80, description: 'Interakcije na web stranicama i AJAX' },
  { name: 'SQL & baze podataka', icon: 'DB', percent: 90, description: 'MySQL i Microsoft SQL Server: upiti, modelovanje i administracija' },
  { name: 'C# & OOP', icon: 'C#', percent: 80, description: 'Objektno orijentisano programiranje' },
  { name: 'Android / .NET MAUI', icon: 'MA', percent: 90, description: 'Razvoj mobilnih aplikacija' },
  { name: 'Vue.js', percent: 70, description: 'Frontend razvoj uz Vue.js' },
  { name: 'ASP.NET', percent: 65, description: 'Razvoj web aplikacija u .NET okruženju' },
  { name: 'Git & GitHub', percent: 90, description: 'Verzionisanje koda i upravljanje repozitorijumima' },
  { name: 'PHP', icon: '<?', percent: 70, description: 'Serverska logika web aplikacija' }
];

// Kartice se generišu iz podataka iznad. Tekst unosimo bez HTML interpretacije.
const grid = document.getElementById('skills-grid');
skills.forEach((skill) => {
  const card = document.createElement('article');
  card.className = 'skill-card';
  card.innerHTML = '<div class="skill-heading"><h3></h3></div><div class="skill-value"><strong></strong></div><progress max="100"></progress><p></p>';
  card.querySelector('h3').textContent = skill.name;
  const percent = Math.min(100, Math.max(0, skill.percent));
  card.querySelector('strong').append(String(percent));
  const unit = document.createElement('span');
  unit.textContent = '%';
  card.querySelector('strong').append(unit);
  const progress = card.querySelector('progress');
  progress.value = percent;
  progress.setAttribute('aria-label', skill.name + ': primer procene ' + percent + '%');
  card.querySelector('p').textContent = skill.description;
  grid.append(card);
});
document.getElementById('year').textContent = new Date().getFullYear();
