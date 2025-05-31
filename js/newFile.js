<script>
  const menuBtn = document.getElementById('menuBtn');
  const menuNav = document.getElementById('menuNav');

  // Quand on clique sur le bouton, on ajoute ou enlève la classe 'active'
  menuBtn.addEventListener('click', () => {
    menuNav.classList.toggle('active');
  });
</script>
