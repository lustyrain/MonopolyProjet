function Pion(color, joueur,img) {
	this.position = 0;
	this.joueur = joueur;
	this.pion = img;

	this.deplacer = function (des){
		while(des != 0){
			if (this.position =40){
				this.position = 0;
			}else{
				this.position ++;
			}
			des--;
		}
	}

	this.goTo = function (position){
		while(this.position != position){
			this.deplacer(1);
		}
	}

	this.goPrison = function(){
		this.position = 10;
	}

}

function deplacement(jeton, sommeDes){ //jeton sous la forme de JetonXxxx Xxxx represent la couleur du jeton
    var positionActuelle = $('#'+jeton).parent().attr('id');
    positionActuelle = parseInt(positionActuelle);
    
    var positionFinal = positionActuelle+sommeDes;
    console.log(positionActuelle+" pA som "+sommeDes);
    console.log(positionFinal+" pF");
    while(positionActuelle <= positionFinal){
        var jetonPositionDepart = $('#'+jeton);
        $('#'+jeton).remove();
        jetonPositionDepart.appendTo($('#'+positionActuelle));
  	
        positionActuelle++;
    }
}
