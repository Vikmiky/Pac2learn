const hamburger = document.getElementById('hamburger');
  const sidebar   = document.getElementById('sidebar');
  const overlay   = document.getElementById('overlay');
 
 
  hamburger.addEventListener('click', () => {
    sidebar.classList.add('open');
    overlay.classList.add('visible');
  });
 
  
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('visible');
  });
 
  
 document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
  

      document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      sidebar.classList.remove('open');
      overlay.classList.remove('visible');
    });
  });