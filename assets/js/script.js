  //Evento listener del DOM.
  document.addEventListener("DOMContentLoaded", function() {
    //Clase multimedia.
    class Multimedia {
      constructor(url) {
          this._url = url;
        }
  
      //Getter 
      get url() {
          return this._url;
        }
  
      // Método para establecer el inicio del video (no implementado)
      setInicio(tiempo) {
          return `${this._url}?start=${tiempo}`;
        }
    }
  
    // Clase Reproductor (herencia).
    class Reproductor extends Multimedia {
      constructor(url, id) {
          super(url);
          this._id = id;
        }
      //Getter.
      get id(){
          return this._id;
        }
  
      // Método para reproducir video.
        playMultimedia() {
          document.getElementById(this._id).setAttribute("src", this.url);
        }
  
    }
  
    //Instancias.
    let playMusica = new Reproductor(
      "https://www.youtube.com/embed/WpQPeHxQFts?si=LTVJI0H-SIdOeFMG",
      "musica"
    );
    playMusica.playMultimedia();
    
    let playPelicula = new Reproductor(
      "https://www.youtube.com/embed/kA244xewjcI?si=fHHoEK0OVb0g_oE0",
      "peliculas"
    );
    playPelicula.playMultimedia();
  
    let playSerie = new Reproductor(
      "https://www.youtube.com/embed/JOsZVmVPn4E?si=5okJEOAwwYvbi8iW",
      "series"
    );
    playSerie.playMultimedia();
  
});