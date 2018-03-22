   
   var el = document.getElementById('Checkbox1');
   if (el.addEventListener)
   {
      el.addEventListener('touchend', ontouchendCheckbox1);
   }
   function ontouchendCheckbox1(e)
   {
      Toggle('wb_ochki', 'fade', 500);
   }
   