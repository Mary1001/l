/*Nivel=prompt('Ingrese el Nivel (1,2,3):   ','');   */

var NUM_IMAGENES=0;
n=0

Nivel=1;
if (localStorage.clickcount == 0)
{
    Nivel=1;
}
if (localStorage.clickcount >= 5)
 {
    Nivel=2;     
        window.onload=inicio;
            function inicio(){
        document.getElementById("star1").style="display";
}
}
if (localStorage.clickcount >= 10)
 {
    Nivel=3;
        document.getElementById("star2").style="display";
 }
if (localStorage.clickcount >= 15)
 { 
    Nivel=3;
        document.getElementById("star3").style="display";
 }

if (localStorage.clickcount >= 16)
 {
    localStorage.clickcount = 0; 
    window.location = "video/fel.mp4" 
}

if ((Nivel==1))
{
    op=3
}
if ((Nivel==2))
{
    op=6
}
if ((Nivel==3))
{
    op=9         
}

op=op;

function VecImagenes()
{
n=0;
this[n++]="img/1.png";
this[n++]="img/2.png";
this[n++]="img/3.png";
this[n++]="img/4.png";
this[n++]="img/5.png";
this[n++]="img/6.png";
this[n++]="img/7.png";
this[n++]="img/8.png";
this[n++]="img/9.png";
this.N=n;
}

var Imagenes=new VecImagenes();
var indice_=0;
do {
      indice_ = Math.floor((Math.random()) * Imagenes.N);
} while (indice_ == 0);

src= Imagenes[indice_] ;
cant=0;

posi = Math.ceil(Math.random()*op);
NUM_IMAGENES = posi;
for (var i = 0; i < posi; i++) 
{
   n += i;
document.write("<IMG SRC="+src+">");
cant+=i;
}




