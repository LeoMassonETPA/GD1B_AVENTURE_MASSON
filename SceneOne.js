// Les controles se font avec les touche directionelles, le tir s'effectue en se déplaçant et en appuyant sur la touche ESPACE, idem pour le dash mais avec SHIFT //
// J'ai commenté ce que je pouvais sur la scene 1 et ce qu'il y a de nouveau sur la scène 2 et 3 //





// var décor //

var trouH;
var trouV;
var passage;
var mur;
var murL;
var CoinG;
var CoinD;

// var evenements //
var murDestructible;
var plateformeOuverturePorte;
var plateformeVictoire;
var plateformePiece;
var possedeClef = false;
var possede3Pieces = false;
var gameOver = false;
var ecranVictoire;
var ecranDefaite;

//var collectibles // 
var coeurCollectible;
var itemTir;
var itemDash;
var itemclef;
var itempiece;


// var player //
var player;
var clef = 0;
var piece = 0;
var pdv=3;


//var HUD //
var PDV0;
var PDV1;
var PDV2;
var PDV3;

var imageShotTrue;
var imageDashTrue;

var x0C;
var x1C;
var x2C;
var x3C;

var x0P;
var x1P;
var x2P;
var x3P;

var affichagePiece;
var affichageClef;


// var ennemis //
var ennemi;
var pdvEnnemi = 3;

var blocDangereux;
var tir;
var tir2;
var tir3;

var kill1;
var kill2;
var kill3;
var kill4;

var scie;
var scie2;

// var tirs/powerUps //
var tirJoueur;
var newTirJoueur;
var canShot = false;
var canDash = false;
var vitesseDash = 1;

// var compteur d'invulné //
var compteurInvincible = 150;
var compteurFrames = 150;
var invincible = false;
var compteurInvincibleEnnemi = 75;
var compteurFramesEnnemi = 75;
var invincibleEnnemi = false;


// var controles claviers //
var keys;

class SceneOne extends Phaser.Scene{
    constructor(){
        super("SceneOne");
       
    }
    init(data){
    }
    preload(){
        
        // Décors //
        this.load.image('background','assets/background.png');
        this.load.image('trouH','assets/TrouH.png');
        this.load.image('trouV','assets/trouV.png');
        this.load.image('Mur','assets/Mur.png');
        this.load.image('MurL','assets/Mur2.png');
        this.load.image('CoinG','assets/CoinHautGauche.png');
        this.load.image('CoinD','assets/CoinHautDroit.png');
        this.load.image('passage','assets/passage.png');
        this.load.image('blocDangereux','assets/ObstacleD.png');
        this.load.image('plateformeOuverturePorte','assets/plateforme.png');
        this.load.image('plateformePiece','assets/platformePiece.png');
        this.load.image('plateformeVictoire','assets/plateformeVictoire.png');
        
        
        
        // HUD //
        
        this.load.image('pdv0','assets/Tete0PV.png');
        this.load.image('pdv1','assets/Tete1PV.png');
        this.load.image('pdv2','assets/Tete2PV.png');
        this.load.image('pdv3','assets/Tete3PV.png');
        this.load.image('dashTrue','assets/DashTrue.png');
       
        this.load.image('shotTrue','assets/ShotTrue.png');
    
        this.load.image('x0','assets/x0.png');
        this.load.image('x1','assets/x1.png');
        this.load.image('x1','assets/x2.png');
        this.load.image('x3','assets/x3.png');
		
        this.load.image('victory','assets/EcranVictoire.png');
        this.load.image('defeat','assets/EcranGameOver.png');
        
        // Collectibles
		this.load.image('pdv','assets/coeur.png');
        this.load.image('itemTir','assets/itemTir.png');
        this.load.image('itemDash','assets/itemDash.png');
        this.load.image('clef','assets/clef.png');
        this.load.image('piece','assets/piece.png');
       
        // tirs //
        this.load.image('tir','assets/tir.png');
        
        // Personnage //
        this.load.spritesheet('dude','assets/SpritesheetPerso.png',{ frameWidth: 122, frameHeight: 150 });
        
        // Ennemis //
        this.load.image('ennemi1','assets/ennemi.png');
        this.load.image('scie','assets/scie.png');
        this.load.image('kill1','assets/blocKillInstantG.png');
        this.load.image('kill2','assets/blocKillInstantD.png');
    }
    
    create(){
        
		// Caméra //
        this.cameras.main.setBounds(0, 0, 1950, 1500);
        this.physics.world.setBounds(0, 0, 1950, 1500);
        
		//Background //
        this.add.image(0, 0, 'background').setOrigin(0);        
        
		// Groupes collectibles//
		coeurCollectible= this.physics.add.staticGroup();
 		itemTir = this.physics.add.staticGroup();
		itemDash = this.physics.add.staticGroup();
		itemclef = this.physics.add.staticGroup();
        itempiece = this.physics.add.staticGroup();
        
		// Groupes Décors //
        mur = this.physics.add.staticGroup();
        blocDangereux = this.physics.add.staticGroup();
        passage = this.physics.add.staticGroup();
        trouH = this.physics.add.staticGroup();
        trouV = this.physics.add.staticGroup();
       	plateformeOuverturePorte = this.physics.add.staticGroup();
        
		// Groupe ennemi //
        ennemi = this.physics.add.group();
        
        
        
    
        // murs haut //
        
        mur.create(225,150, 'Mur');
        mur.create(375,150, 'Mur');
        mur.create(525,150, 'Mur');
        mur.create(675,150, 'Mur');
        mur.create(825,150, 'Mur');
        mur.create(975,150, 'Mur');
        mur.create(1125,150, 'Mur');
        mur.create(1275,150, 'Mur');
        mur.create(1425,150, 'Mur');
        mur.create(1575,150, 'Mur');
        mur.create(1725,150, 'Mur');
        
        // murs bas //
        mur.create(225,1350, 'Mur');
        mur.create(375,1350, 'Mur');
        mur.create(525,1350, 'Mur');
        mur.create(675,1350, 'Mur');
        mur.create(825,1350, 'Mur');
        mur.create(975,1350, 'Mur');
        mur.create(1125,1350, 'Mur');
        mur.create(1275,1350, 'Mur');
        mur.create(1425,1350, 'Mur');
        mur.create(1575,1350, 'Mur');
        mur.create(1725,1350, 'Mur');
        
        // murs droit
        mur.create(1875,150, 'CoinD');
        mur.create(1875,450, 'MurL');
        mur.create(1875,750, 'MurL');
        mur.create(1875,1050, 'MurL');
        mur.create(1875,1350, 'CoinG');
        
        // murs gauche
        mur.create(75,150, 'CoinG');
        mur.create(75,450, 'MurL');
        mur.create(75,750, 'MurL');
        mur.create(75,1050, 'MurL');
        mur.create(75,1350, 'CoinD');
		
		// Collectibles //
        coeurCollectible = this.physics.add.sprite(ennemi.x, ennemi.y, 'pdv').setAlpha(0);
        itemTir.create(1725,750, 'itemTir');
		
		
        // Ennemi & Tir ennemi
        blocDangereux.create(1725,370, 'blocDangereux');  
		
		tir = this.physics.add.image(1725 , 385, 'tir');
        tir.setCollideWorldBounds(true);
        tir.body.setAllowGravity(false);
		
		ennemi = this.physics.add.image(448 , 1033, 'ennemi1');
        ennemi.setCollideWorldBounds(true);
        ennemi.body.setAllowGravity(false); 
		
		// Passage vers scene 2 //
        passage.create(225,1075, 'passage');
       
    
     
       // Obstacles vide //
       	trouH.create(450,705, 'trouH');
       	trouH.create(1050,705, 'trouH');
       	trouH.create(1500,740, 'trouH').setScale(0.5).setSize(300,75).setOffset(150,37.5);
       	trouV.create(712,625, 'trouV').setScale(0.5).setSize(75,300).setOffset(37.5,150);
		
        
       
		
		
        
        
		// Création du Joueur //
        player = this.physics.add.sprite(400, 450, 'dude').setAlpha(1);
		
        this.cameras.main.startFollow(player, true);
        player.setCollideWorldBounds(true);
		
		// Colliders, overlaps et fonctions //
        this.physics.add.collider(player, mur);
        this.physics.add.collider(player, trouH);
        this.physics.add.collider(player, trouV);
        this.physics.add.collider(player, blocDangereux);
        this.physics.add.collider(player,passage, changementZone, null, this);
        this.physics.add.collider(player,itemTir, recupTir, null, this);
        this.physics.add.overlap(player,coeurCollectible, Soin, null, this);  
        this.physics.add.collider(player,itemclef, recupClef, null, this);
        this.physics.add.collider(player, murDestructible);
        this.physics.add.overlap(player, plateformeOuverturePorte, OuvrePorte, null, this);
        this.physics.add.overlap(player, tir, HitTir, null, this);
     
        
       	
       
        
        
        
  	// Tween du tir //
        this.tweens.add({
            targets: tir,
                props: {
                y: { value: 900, duration: 1000 },
            },
            yoyo: false,
                repeat: -1
        });
		
	// Tween de l'ennemi //
        
        this.tweens.add({
            targets: ennemi,
                props: {
                x: { value: 733, duration: 500 },
            },
            yoyo: true,
            flipX:true,
                repeat: -1
        });
     
	// Tir du joueur //
   	tirJoueur = this.physics.add.group();
  
    this.physics.add.overlap(tirJoueur, ennemi, degatEnnemi, null, this);    
   
		// HUD //   
    	ecranDefaite = this.add.sprite(960,540, 'defeat').setScrollFactor(0).setAlpha(0);
		ecranVictoire = this.add.sprite(960,540, 'victory').setScrollFactor(0).setAlpha(0);
	 
        PDV0 = this.add.sprite(300,100, 'pdv0').setScrollFactor(0).setAlpha(0);   
        PDV1 = this.add.sprite(300,100, 'pdv1').setScrollFactor(0).setAlpha(0);   
        PDV2 = this.add.sprite(300,100, 'pdv2').setScrollFactor(0).setAlpha(0);   
        PDV3 = this.add.sprite(300,100, 'pdv3').setScrollFactor(0).setAlpha(0);   
        
        x0C = this.add.sprite(500,100, 'x0').setScrollFactor(0).setAlpha(1);
        x1C = this.add.sprite(500,100, 'x1').setScrollFactor(0).setAlpha(0);
        x2C = this.add.sprite(500,100, 'x2').setScrollFactor(0).setAlpha(0);
        x3C = this.add.sprite(500,100, 'x3').setScrollFactor(0).setAlpha(0);
        
        x0P = this.add.sprite(700,100, 'x0').setScrollFactor(0).setAlpha(1);
        x1P = this.add.sprite(700,100, 'x1').setScrollFactor(0).setAlpha(0);
        x2P = this.add.sprite(700,100, 'x2').setScrollFactor(0).setAlpha(0);
        x3P = this.add.sprite(700,100, 'x3').setScrollFactor(0).setAlpha(0);
        affichageClef = this.add.sprite(400,100, 'clef').setScrollFactor(0).setAlpha(1);
        affichagePiece = this.add.sprite(600,100, 'piece').setScrollFactor(0).setAlpha(1);
        
  
        imageDashTrue = this.add.sprite(1730,100, 'dashTrue').setScrollFactor(0).setAlpha(0);
      
        imageShotTrue = this.add.sprite(1500,100, 'shotTrue').setScrollFactor(0).setAlpha(0);
         
		
		// Annimations du joueur //
        this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 1 }),
        frameRate: 5,
        repeat: -1
        });
   
        this.anims.create({
        key: 'down',
        frames: this.anims.generateFrameNumbers('dude', { start: 2, end: 3 }),
        frameRate: 5,
        repeat: -1
       
        });
        
        this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
        });
        
        this.anims.create({
        key: 'up',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 6 }),
        frameRate: 5,
        repeat: -1
       
        });
        
        this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 7, end: 8 }),
        frameRate: 5,
        repeat: -1
        });
        
        // Controles //
         keys = this.input.keyboard.addKeys({

            left: Phaser.Input.Keyboard.KeyCodes.LEFT,

            right: Phaser.Input.Keyboard.KeyCodes.RIGHT,

            up : Phaser.Input.Keyboard.KeyCodes.UP,

            down: Phaser.Input.Keyboard.KeyCodes.DOWN,

            space: Phaser.Input.Keyboard.KeyCodes.SPACE,

            shift: Phaser.Input.Keyboard.KeyCodes.SHIFT,
			 
			a: Phaser.Input.Keyboard.KeyCodes.A
            });
        
        
        
            
    	// Fonction HitTir (je ne sais pas ce qu'elle fout là mais ça ne marchait pas autrement) //
         function HitTir(){ 
            if (invincible == false){
                invincible = true;
                pdv -=1;   
        if (pdv == 3){
            PDV3.setAlpha(1);
            PDV2.setAlpha(0);
            PDV1.setAlpha(0);
            PDV0.setAlpha(0);
		}
                
        if (pdv == 2){
            PDV3.setAlpha(0);
            PDV2.setAlpha(1);
            PDV1.setAlpha(0);
            PDV0.setAlpha(0);
        }
        if (pdv == 1){
            PDV3.setAlpha(0);
            PDV2.setAlpha(0);
            PDV1.setAlpha(1);
            PDV0.setAlpha(0);
        }
        if (pdv == 0){
            PDV3.setAlpha(0);
            PDV2.setAlpha(0);
            PDV1.setAlpha(0);
            PDV0.setAlpha(1);
            gameOver = true;
        }
            }
             


        }
        
		// Fonction changement de zone //	 
        function changementZone(){
            this.scene.start("SceneTwo"); 
         }
        
   
    }
    
    update(){
        
        
        // Fonction game over //
            
            if (gameOver){
                
				gameOver = false;
				canShot = false;
				ecranDefaite.setAlpha(1);
				this.physics.pause();
				player.setAlpha(0);
				if (keys.a.isDown){
				player.setAlpha(1);
				ecranDefaite.setAlpha(0);
				
				pdv = 3;
				clef = 0;
				piece = 0;
                this.scene.start("SceneOne"/*, {pdv: this.pdv}*/);}
             	
            }
		
		
            // Controles et animations du personnage (touches directionelles, espace et shift)  // 
            if (keys.right.isUp && keys.left.isUp && keys.up.isUp && keys.down.isUp){
                player.setVelocityY(0);
                player.anims.play('turn', true);
            }
        
            if (keys.right.isDown){
                if (keys.up.isDown){
                    player.setVelocityX(250);
                    player.setVelocityY(-250);
                    player.anims.play('up', true);
                }
                else if (keys.down.isDown){
                    player.setVelocityX(250);
                    player.setVelocityY(250);
                    player.anims.play('down', true);
                }
                else {
                    player.setVelocityX(500);
                    player.anims.play('right', true);
                }
            }
            else if (keys.left.isDown){
                if (keys.up.isDown){
                    player.setVelocityX(-250);
                    player.setVelocityY(250);
                    player.anims.play('up', true);
                }
                else if (keys.down.isDown){
                    player.setVelocityX(-250);
                    player.setVelocityY(-250);
                    player.anims.play('down', true);
                }
                else {
                    player.setVelocityX(-500);
                    player.anims.play('left', true);
                }
    
            }
            else if (keys.right.isUp && keys.left.isUp){
                player.setVelocityX(0);
            }
            if (keys.up.isDown){
                player.setVelocityY(-500);
                player.anims.play('up', true);
            }
            else if (keys.down.isDown){
                player.setVelocityY(500);
                player.anims.play('down', true); 
            } 
            else if (keys.up.isUp && keys.down.isUp){
                player.setVelocityY(0);
            }
        
        if (keys.right.isDown && keys.space.isDown && canShot == true){
            canShot = false;
            attaque(61,0);
            newTirJoueur.setVelocityX(1000);
            setTimeout(function (){canShot = true}, 1000);
            setTimeout(function (){newTirJoueur.destroy()}, 1000);
            
        }
          if (keys.up.isDown && keys.space.isDown && canShot == true){
            canShot = false;
            attaque(0,-75);
            newTirJoueur.setVelocityY(-1000);
            setTimeout(function (){canShot = true}, 1000);
            setTimeout(function (){newTirJoueur.destroy()}, 1000);
            
            
        }
          if (keys.left.isDown && keys.space.isDown && canShot == true){
            canShot = false;
            attaque(-61,0);
            newTirJoueur.setVelocityX(-1000);
            setTimeout(function (){canShot = true}, 1000);
            setTimeout(function (){newTirJoueur.destroy()}, 1000);
              
            
        }
          if (keys.down.isDown && keys.space.isDown && canShot == true){
            canShot = false;
            attaque(0,75);
            newTirJoueur.setVelocityY(1000);
            setTimeout(function (){canShot = true}, 1000);
            setTimeout(function (){newTirJoueur.destroy()}, 1000);   
        }
      
        if (keys.right.isDown && keys.shift.isDown && canDash == true){
            canDash = false;
           
            player.setVelocityX(1000);
            setTimeout(function (){canDash = true}, 1000);

            
        }
          if (keys.up.isDown && keys.shift.isDown && canDash == true){
            canDash = false;
            
            player.setVelocityY(-1000);
            setTimeout(function (){canDash = true}, 1000);

            
            
        }
          if (keys.left.isDown && keys.shift.isDown && canDash == true){
            canDash = false;
            
            player.setVelocityX(-1000);
            setTimeout(function (){canDash = true}, 1000);

              
            
        }
          if (keys.down.isDown && keys.shift.isDown && canDash == true){
            canDash = false;
           
            player.setVelocityY(1000);
            setTimeout(function (){canDash = true}, 1000);
          
        }
        // Affichage pv perso //
       if (pdv == 3){
            PDV3.setAlpha(1);
            PDV2.setAlpha(0);
            PDV1.setAlpha(0);
            PDV0.setAlpha(0);
	   }
                
        if (pdv == 2){
            PDV3.setAlpha(0);
            PDV2.setAlpha(1);
            PDV1.setAlpha(0);
            PDV0.setAlpha(0);
        }
        if (pdv == 1){
            PDV3.setAlpha(0);
            PDV2.setAlpha(0);
            PDV1.setAlpha(1);
            PDV0.setAlpha(0);
        }
        if (pdv == 0){
            PDV3.setAlpha(0);
            PDV2.setAlpha(0);
            PDV1.setAlpha(0);
            PDV0.setAlpha(1);
            gameOver = true;
        }
        
		// Affichage piece //
        if (piece == 0){
            x0P.setAlpha(1);
            x1P.setAlpha(0);
            x2P.setAlpha(0);
            x3P.setAlpha(0);
            
        }
         if (piece == 1){
            x0P.setAlpha(0);
            x1P.setAlpha(1);
            x2P.setAlpha(0);
            x3P.setAlpha(0);
           
        }
         if (piece == 2){
            x0P.setAlpha(0);
            x1P.setAlpha(0);
            x2P.setAlpha(1);
            x3P.setAlpha(0);
          
        }
         if (piece == 3){
            x0P.setAlpha(0);
            x1P.setAlpha(0);
            x2P.setAlpha(0);
            x3P.setAlpha(1);
       
        }
        
		//Affichage clefs //
         if (clef == 0){
            x0C.setAlpha(1);
            x1C.setAlpha(0);
            x2C.setAlpha(0);
            x3C.setAlpha(0);
         
        }
         if (clef == 1){
            x0C.setAlpha(0);
            x1C.setAlpha(1);
            x2C.setAlpha(0);
            x3C.setAlpha(0);
       
        }
         if (clef == 2){
            x0C.setAlpha(0);
            x1C.setAlpha(0);
            x2C.setAlpha(1);
            x3C.setAlpha(0);
       
        }
         if (clef == 3){
            x0C.setAlpha(0);
            x1C.setAlpha(0);
            x2C.setAlpha(0);
            x3C.setAlpha(1);
   
        }
        
		//Affichage du tir //
        if (canShot == true){
      
            imageShotTrue.setAlpha(1);
        }
        
		
		// Invulnérabilité du joueur et de l'ennemi //
        if(invincible == true){
            
            compteurInvincible-- ;
            compteurFrames --;
            if (compteurFrames ==125){
                player.setAlpha(0);
            }
            if (compteurFrames ==100){
                player.setAlpha(1);
            }
            if (compteurFrames ==75){
                player.setAlpha(0);
            }
            if (compteurFrames ==50){
                player.setAlpha(1);
            }
            if (compteurFrames ==25){
                player.setAlpha(0);
            }
         
                
            if (compteurFrames <= 0){
                player.setAlpha(1);    
                compteurFrames = 150;            
            }   
    
           
            if(compteurInvincible == 0){
                compteurInvincible = 150;
                invincible = false ;
            }
        }
        if(invincibleEnnemi == true){
            
            compteurInvincibleEnnemi-- ;
            compteurFramesEnnemi --;
            if (compteurFramesEnnemi ==60){
                ennemi.setAlpha(0);
            }
            if (compteurFramesEnnemi ==45){
                ennemi.setAlpha(1);
            }
            if (compteurFramesEnnemi ==30){
                ennemi.setAlpha(0);
            }
            if (compteurFramesEnnemi ==15){
                ennemi.setAlpha(1);
            }
            if (compteurFramesEnnemi ==7){
                ennemi.setAlpha(0);
            }
         
                
            if (compteurFramesEnnemi <= 0){
                ennemi.setAlpha(1);    
                compteurFramesEnnemi = 75;            
            }   
    
           
            if(compteurInvincibleEnnemi == 0){
                compteurInvincibleEnnemi = 75;
                invincibleEnnemi = false ;
            }
        }
       
    }
}
  
// Fonction pour ramasser un coeur et se soigner //
 function Soin(player, coeurCollectible){
          
            pdv +=1;
            coeurCollectible.destroy()
			
            if (pdv == 3){
            PDV3.setAlpha(1);
            PDV2.setAlpha(0);
            PDV1.setAlpha(0);
            PDV0.setAlpha(0);
			}
                
        if (pdv == 2){
            PDV3.setAlpha(0);
            PDV2.setAlpha(1);
            PDV1.setAlpha(0);
            PDV0.setAlpha(0);
        }
        if (pdv == 1){
            PDV3.setAlpha(0);
            PDV2.setAlpha(0);
            PDV1.setAlpha(1);
            PDV0.setAlpha(0);
        }
        if (pdv == 0){
            PDV3.setAlpha(0);
            PDV2.setAlpha(0);
            PDV1.setAlpha(0);
            PDV0.setAlpha(1);
            gameOver = true;
        }
            }
     
       function degatEnnemi(tirJoueur, Ennemi){
       if (invincibleEnnemi == false){
           invincibleEnnemi = true;
           pdvEnnemi -=1;   
       
       if (pdvEnnemi <=0){
           ennemi.destroy();
           coeurCollectible.setAlpha(1);
           coeurCollectible.setX(ennemi.x);
           coeurCollectible.setY(ennemi.y);
                
        }
                
        
    
        }
            }
    
// Fonction du tir du joueur //
    function attaque(x, y){

    newTirJoueur = tirJoueur.create(player.x + x, player.y + y, 'tir');

    }

// Fonctions de ramassages de collectibles & Evenements //
   function AchatPowerUp(player, plateformePiece){
        if (possede3Pieces == true){
           itemDash.create (600,400, 'itemDash');
			piece -=3;
			possede3Pieces = false;
        }
    }
    
    function recupTir(player, itemTir){
            itemTir.destroy();
            canShot = true;
        }
  function recupDash(player, itemDash){
            itemDash.destroy();
            canDash = true;
        }
    function recupClef(player, itemclef){
        itemclef.destroy();
        clef +=1;
        if (clef > 0){
            possedeClef = true;
        }
    }
    function recupPiece(player, itempiece){
           itempiece.destroy();
            piece +=1;
            if (piece >= 3){
            possede3Pieces = true;
            }
    }
    function OuvrePorte(player, platformeOuverturePorte){
            if (possedeClef == true){
                murDestructible.destroy();
            }
}