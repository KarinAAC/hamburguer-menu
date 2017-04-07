window.addEventListener("load", function (event) {
  var alumnas = ["Fiorella Quispe","Lourdes Vilchez","Rossmery Maldonado","Yessenia Huaman","Miriam Mendoza","Elizabeth Condori",
"Arantza Burga","Grecia Rayme","Janine Vega","Rosario Felix","Daguiana Revoredo","Jenny Velasquez","Nadia Cuadros",
"Michell More","Marilu Llamocca","Mariel Garcia","Fiorella Cisneros","Geraldine Chauca","Yellitza Rivera","Stephanie Hiyagon",
"Emma Tapia","Danna Franco","Flor Retamozo","Nathaly Pacheco","Ericka Vidal","Katherine Ortega","Brilly Majuan","Flor Tello",
"Leslie Avendaño","Cindy Mendoza","Annia Flores","Betsi Loayza","Aida Sulca","Milagros Gutierrez","Nakarid Jave","Angie Condor",
"Maia Rojas","Ariadna Cabana","Flor Condori","Mitch Rodriguez","Naomi Villanueva","Mary Castillo","Miriam Peralta",
"Karin Alejo","Liliana Peña","Ruth Salvador","Maribel","Wendy Reyes","Cinthia","Grecia Cutipa","Ana Durand",
"Glisse Jorge","Neiza Nuñez","Sandra Solorzano"];

  for (var i = 1; i < 55; i++) {

    var img = document.createElement("img");
    img.setAttribute("src", "img/" + i + ".png");
    img.setAttribute("class", "tamaños");

    var figure = document.createElement("figure");
    figure.appendChild(img);
    figure.setAttribute("class", "contenedor");

    var span = document.createElement("span");
    span.setAttribute("class", "span");
    span.innerText="karin";

    var figcaption = document.createElement("figcaption");
    figcaption.appendChild(span);
    figcaption.setAttribute("class","contenedor-span");


    var div = document.createElement("div");
    div.appendChild(figure);
    div.appendChild(figcaption);

   var li = document.createElement("li");
   li.appendChild(div);

    divGeneral = document.getElementById("div-general");
    divGeneral.appendChild(li);
  }
})

document.getElementById("toggle").addEventListener("click", function(event){
  event.preventDefault();
  document.getElementById("nav-header").classList.toggle("open");
  document.getElementById('body').classList.toggle("overflow-hidden");
});
var lastScrollTop = 0;
window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll > lastScrollTop){
     document.getElementById('nav-background').style.display="none";
     document.getElementById("nav-header").classList.remove("header-in");
     document.getElementById("nav-header").style.opacity = 0;
   } else {
     document.getElementById('nav-background').style.display="table";
     document.getElementById("nav-header").classList.add("header-in");
     document.getElementById("nav-header").classList.add("solid");
     document.getElementById("nav-header").style.opacity = 1;
     if(currentScroll<=3){
       document.getElementById("nav-header").classList.remove("solid");
       document.getElementById("nav-header").classList.remove("header-in");
     }
   }
   lastScrollTop = currentScroll;
}, false);
