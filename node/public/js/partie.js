window.onload = function(){
	partie=new Partie();
	partie.ajouterJoueur(document.getElementById('JetonVert'))
	partie.ajouterJoueur(document.getElementById('JetonBleu'))
	partie.ajouterJoueur(document.getElementById('JetonJaune'))
	partie.ajouterJoueur(document.getElementById('JetonRouge'))

	partie.lancerPartie();
}



function Partie() {
	this.encours = false;
	this.tour=0;
	this.joueurs= new Array (4);

	this.lancerPartie = function(){
		if(this.joueurs.length = 4 && !this.encours){
			this.encours = true;
			while(this.encours){
				this.Jouer(this.joueurs[this.tour%this.joueurs.length]);
				this.tour = tour +1;
			}
		}else{
			console.log("Impossible de lancer la partie")
		}
		
	}

	this.ajouterJoueur=function(newPlayer){
		this.joueurs[this.joueurs.length]=newPlayer;
	}

	this.Jouer = function(player){
		fin =false;
		console.log(player +" joue.")
		document.getElementById("tour").value = player+"Joue.";
		while(!fin){
			document.onkeydown = function (_event_){
				var winObj = checkEventObj(_event)
				if(winObj.keyCode == 70){
					fin = true;
				}
			}
		}

	this.JoueurLoose = function remove(looser) {
      for(var i = arr.length; i--;) {
          if(arr[i] === looser) {
              arr.splice(i, 1);
          }
      }
  	}


	}

}