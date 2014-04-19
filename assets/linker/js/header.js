var i = Math.floor(Math.random() * 5) + 1;
$("#headercopy").hide();
switch(i) {
case 1:
  $("#header-text").html('<h1 class="text-center" id="header-text" style="font-family: pt-sans-narrow, sans-serif;"><i class="fa fa-anchor" style="margin-right:5px"></i> Our <strong>devs</strong> are smarter than your honor roll student.</h1>');
break;
case 2:
  $("#header-text").html('<h1 class="text-center" id="header-text" style="font-family: pt-sans-narrow, sans-serif;"><i class="fa fa-anchor" style="margin-right:5px"></i> Our projects are built <strong>API-first</strong>. Is yours?</h1>');
break;
case 3:
  $("#header-text").html('<h1 class="text-center" id="header-text" style="font-family: pt-sans-narrow, sans-serif;"><i class="fa fa-anchor" style="margin-right:5px"></i> Our design is <strong>forward-thinking</strong>. Is yours?</h1>');
break;
case 4:
  $("#header-text").html('<h1 class="text-center" id="header-text" style="font-family: pt-sans-narrow, sans-serif;"><i class="fa fa-anchor" style="margin-right:5px"></i> Our projects are built <strong>API-first</strong>. Is yours?</h1>');
break;
case 5:
  $("#header-text").html('<h1 class="text-center" id="header-text" style="font-family: pt-sans-narrow, sans-serif;"><i class="fa fa-anchor" style="margin-right:5px"></i> Our design is <strong>forward-thinking</strong>. Is yours?</h1>');					break;
};
$("#headerh2").html('<h4 class="text-center" id="headerh2" style="font-family: pt-sans-narrow, sans-serif;">We build future-conscious applications and beautiful experiences for the web.</h4>');
$("#headercopy").fadeIn(900);
