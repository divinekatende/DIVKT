<script>
     // Script pour toggler le menu sur mobile
    document.addEventListener("DOMContentLoaded", () => {
      const menuBtn = document.getElementById('menuBtn');
      const menuNav = document.getElementById('menuNav');
      menuBtn.addEventListener('click', () => {
        menuNav.classList.toggle('active'); // active affiche ou cache le menu
      });
    });
  </script>
