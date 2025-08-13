const skills = document.querySelectorAll('.skill');

function animateProgress() {
  skills.forEach(skill => {
    const fill = skill.querySelector('.progress-fill');
    const percent = skill.getAttribute('data-percent');
    fill.style.width = percent + '%';
  });
}

window.addEventListener('load', animateProgress);

