n = 0;
var res=G_IMAGEN;
var r=0;

do
{
  prc=Math.floor(Math.random() * 3.75);   
}while(prc==0);


  function VecImagenes() {
    n = 0;
    this[n++] = "img/r1.png";
    this[n++] = "img/r2.png";
    this[n++] = "img/r3.png";
		this[n++] = "img/r4.png";
    this[n++] = "img/r5.png";
    this[n++] = "img/r6.png";
		this[n++] = "img/r7.png";
    this[n++] = "img/r8.png";
    this[n++] = "img/r9.png";
		this[n++] = "img/r10.png";
    this[n++] = "img/r11.png";
    this[n++] = "img/r12.png";
		this[n++] = "img/r13.png";
    this[n++] = "img/r14.png";
    this[n++] = "img/r15.png";
		this[n++] = "img/r16.png";
    this[n++] = "img/r17.png";
    this[n++] = "img/r18.png";
		this[n++] = "img/r19.png";
    this[n++] = "img/r20.png";
    this.N = n;
  }

  var Imagenes = new VecImagenes();
  
  for (var i = 0; i < 3; i++) {   
    if(i+1 == prc)
    {
     src = Imagenes[res-1];
     r=src;
    }
    else
    {
      if(r=src)
        {
        src = Imagenes[res-1];
        
      }

      src = Imagenes[Math.floor(Math.random() * Imagenes.N)];
    }
  
    document.write("<IMG SRC=" + src + " custom=" + NUM_IMAGENES + " id=" + src.substr(src.length - 5, 1) + " onclick=EventoClicImagen(this)>");
    
}
