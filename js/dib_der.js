var G_IMAGEN=0;

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
      G_IMAGEN = indice_ = Math.floor((Math.random()) * Imagenes.N);
} while (indice_ == 0);

src= Imagenes[indice_] ;
cant=0;

posi = Math.ceil(Math.random()*9);
NUM_IMAGENES1 = posi;
for (var i = 0; i < posi; i++) 
{
   n += i;
document.write("<IMG SRC="+src+">");
cant+=i;
}




