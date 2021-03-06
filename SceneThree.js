


class SceneThree extends Phaser.Scene{
    constructor(){
        super("SceneThree");
    }
    init(data){
      
        
    }
    preload(){
        
        
         // Décors //
        this.load.image('background','assets/background.png');
        this.load.image('trouH','assets/trouH.png');
        this.load.image('trouV','assets/trouV.png');
        this.load.image('Mur','assets/Mur.png');
        this.load.image('passage','assets/passage.png');
        this.load.image('blocDangereux','assets/obstacleD.png');
        this.load.image('plateformeOuverturePorte','assets/plateforme.png');
        this.load.image('plateformePiece','assets/platformePiece.png');
		this.load.image('plateformeVictoire','assets/plateformeVictoire.png');
        
        
        
        // HUD //
        this.load.image('pdv','assets/coeur.png');
		this.load.image('pdv0','assets/Tete0PV.png');
        this.load.image('pdv1','assets/Tete1PV.png');
        this.load.image('pdv2','assets/Tete2PV.png');
        this.load.image('pdv3','assets/Tete3PV.png');
        this.load.image('x0','assets/x0.png');
        this.load.image('x1','assets/x1.png');
        this.load.image('x2','assets/x2.png');
        this.load.image('x3','assets/x3.png');
        this.load.image('dashTrue','assets/DashTrue.png');
        this.load.image('shotTrue','assets/ShotTrue.png');
		
		this.load.image('victory','assets/EcranVictoire.png');
        this.load.image('defeat','assets/EcranGameOver.png');
        
        // Collectibles
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
		
		// Ennemis de la scene 3 //
		this.load.image('killG','assets/BlocKillInstantG.png');
        this.load.image('killD','assets/BlocKillInstantD.png');
    }
    
    create(){
        
        this.cameras.main.setBounds(0, 0, 1950, 3000);
        this.physics.world.setBounds(0, 0, 1950, 3000);
        
        this.add.image(0, 0, 'background').setOrigin(0); 
		
		
        
        mur = this.physics.add.staticGroup();
       
        plateformeOuverturePorte = this.physics.add.staticGroup();
        plateformePiece = this.physics.add.staticGroup();
        plateformeVictoire = this.physics.add.staticGroup();
        
       

 	
       	kill1 = this.physics.add.group();
        kill2 = this.physics.add.group();
        kill3 = this.physics.add.group();
        kill4 = this.physics.add.group();
  
        mur = this.physics.add.staticGroup();
        coeurCollectible= this.physics.add.staticGroup();
        blocDangereux = this.physics.add.staticGroup();
        passage = this.physics.add.staticGroup();
        trouH = this.physics.add.staticGroup();
        trouV = this.physics.add.staticGroup();
        itemTir = this.physics.add.staticGroup();
        ennemi = this.physics.add.group();
        itemclef = this.physics.add.staticGroup();
        itempiece = this.physics.add.staticGroup();
        itemDash = this.physics.add.staticGroup();
        // murs haut
        
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
        
        // murs bas
        mur.create(225,2550, 'Mur');
        mur.create(375,2550, 'Mur');
        mur.create(525,2550, 'Mur');
        mur.create(675,2550, 'Mur');
        mur.create(825,2550, 'Mur');
        mur.create(975,2550, 'Mur');
      
        mur.create(1125,2550, 'Mur');
        mur.create(1275,2550, 'Mur');
        mur.create(1425,2550, 'Mur');
        mur.create(1575,2550, 'Mur');
        mur.create(1725,2550, 'Mur');
        
        // murs gauche
        mur.create(1875,150, 'Mur');
        mur.create(1875,450, 'Mur');
        mur.create(1875,750, 'Mur');
        mur.create(1875,1050, 'Mur');
        mur.create(1875,1350, 'Mur');
        mur.create(1875,1650, 'Mur');
        mur.create(1875,1950, 'Mur');
        mur.create(1875,2250, 'Mur');
        mur.create(1875,2550, 'Mur');
        
        // murs droite
        mur.create(75,150, 'Mur');
        mur.create(75,450, 'Mur');
        mur.create(75,750, 'Mur');
        mur.create(75,1050, 'Mur');
        mur.create(75,1350, 'Mur');
        mur.create(75,1650, 'Mur');
        mur.create(75,1950, 'Mur');
        mur.create(75,2250, 'Mur');
        mur.create(75,2550, 'Mur');
        
        
        trouV.create(340,1350, 'trouV').setScale(2.5).setSize(375,1500).setOffset(-115,-450);
        trouV.create(710,1350, 'trouV').setScale(2.5).setSize(375,1500).setOffset(-115,-450);
        trouV.create(1240,1350, 'trouV').setScale(2.5).setSize(375,1500).setOffset(-115,-450);
        trouV.create(1610,1350, 'trouV').setScale(2.5).setSize(375,1500).setOffset(-115,-450);
        
		plateformePiece.create (250, 450, 'plateformePiece');
		
		plateformeVictoire.create (960, 2200, 'plateformeVictoire');
        
       
      
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
		
		
        
        
        
        
        
        player = this.physics.add.sprite(975, 375, 'dude').setAlpha(1);
        this.cameras.main.startFollow(player, true);

        player.setCollideWorldBounds(true);
        this.physics.add.collider(player, mur);
        this.physics.add.collider(player, murDestructible);
        this.physics.add.overlap(player, plateformeOuverturePorte, OuvrePorte, null, this);
        this.physics.add.overlap(player, plateformePiece, AchatPowerUp, null, this);
        this.physics.add.collider(player, trouH);
        this.physics.add.collider(player, trouV);
        this.physics.add.collider(player, blocDangereux);
        this.physics.add.collider(player,passage, changementZone, null, this);
        this.physics.add.collider(player,coeurCollectible, Soin, null, this);
        this.physics.add.collider(player,itemclef, recupClef, null, this);
        this.physics.add.collider(player,itempiece, recupPiece, null, this);
        this.physics.add.collider(player,itemDash, recupDash, null, this);
        
       
        
      
        kill1 = this.physics.add.image(750, 850, 'killG');
		kill1.setCollideWorldBounds(true);
		kill1.body.setAllowGravity(false);
		
		this.tweens.add({
            targets: kill1,
                props: {
                x: { value: 900, duration: 700 },
            },
            yoyo: true,
                repeat: -1
        });
		kill2 = this.physics.add.image(1200, 850, 'killD');
		kill2.setCollideWorldBounds(true);
		kill2.body.setAllowGravity(false);
		
		this.tweens.add({
            targets: kill2,
                props: {
                x: { value: 1050, duration: 700 },
            },
            yoyo: true,
                repeat: -1
        });
		kill3 = this.physics.add.image(750, 1450, 'killG');
		kill3.setCollideWorldBounds(true);
		kill3.body.setAllowGravity(false);
		
		this.tweens.add({
            targets: kill3,
                props: {
                x: { value: 900, duration: 700 },
            },
            yoyo: true,
                repeat: -1
        });
		
		kill4 = this.physics.add.image(1200, 1450, 'killD');
		kill4.setCollideWorldBounds(true);
		kill4.body.setAllowGravity(false);
		
		this.tweens.add({
            targets: kill4,
                props: {
                x: { value: 1050, duration: 700 },
            },
            yoyo: true,
                repeat: -1
        });
        this.physics.add.overlap(player,kill1, KillInstant, null, this);
        this.physics.add.overlap(player,kill2, KillInstant, null, this);
        this.physics.add.overlap(player,kill3, KillInstant, null, this);
        this.physics.add.overlap(player,kill4, KillInstant, null, this);
    
         tirJoueur = this.physics.add.group();    
        this.physics.add.overlap(tirJoueur,ennemi, degatEnnemi, null, this);    
        
        
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
        
        
         keys = this.input.keyboard.addKeys({

            left: Phaser.Input.Keyboard.KeyCodes.LEFT,

            right: Phaser.Input.Keyboard.KeyCodes.RIGHT,

            up : Phaser.Input.Keyboard.KeyCodes.UP,

            down: Phaser.Input.Keyboard.KeyCodes.DOWN,

            space: Phaser.Input.Keyboard.KeyCodes.SPACE,

            shift: Phaser.Input.Keyboard.KeyCodes.SHIFT,
			 
			a: Phaser.Input.Keyboard.KeyCodes.A
            });
        
        
        function KillInstant(player, kill1){
		pdv = 0;
			  if (pdv == 0){
            PDV3.setAlpha(0);
            PDV2.setAlpha(0);
            PDV1.setAlpha(0);
            gameOver = true;
        }
		
	}    
         ecranDefaite = this.add.sprite(960,540, 'defeat').setScrollFactor(0).setAlpha(0);
		ecranVictoire = this.add.sprite(960,540, 'victory').setScrollFactor(0).setAlpha(0);
		this.physics.add.collider(player,plateformeVictoire, Victoire, null, this);  
    
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
        
        function changementZone(){
            this.scene.start("SceneOne"/*, {pdv: this.pdv}*/); 
         }
        
   
    }
    
    update(){
        
        
        
            
            if (gameOver){
                
				gameOver = false;
				this.physics.pause();
				player.setAlpha(0);
				ecranDefaite.setAlpha(1);

				if (keys.a.isDown){
				canDash = false;
				player.setAlpha(1);
				ecranDefaite.setAlpha(0);
					
				
				pdv = 3;
				clef = 0;
				piece = 3;
                this.scene.start("SceneThree"/*, {pdv: this.pdv}*/);}
             	
            }
            
			if (keys.shift.isDown && canDash == true){
				vitesseDash = 2;
				
				setTimeout(function (){vitesseDash = 1}, 1000);
			}
		
		
            if (keys.right.isUp && keys.left.isUp && keys.up.isUp && keys.down.isUp){
                player.setVelocityY(0);
                player.anims.play('turn', true);
            }
        	
            if (keys.right.isDown){
                if (keys.up.isDown){
                    player.setVelocityX(250*(vitesseDash/2));
                    player.setVelocityY(-250*(vitesseDash/2));
                    player.anims.play('up', true);
                }
                else if (keys.down.isDown){
                    player.setVelocityX(250*(vitesseDash/2));
                    player.setVelocityY(250*(vitesseDash/2));
                    player.anims.play('down', true);
                }
					
                else{
                    player.setVelocityX(500*vitesseDash);
                    player.anims.play('right', true);
                }
            }
            else if (keys.left.isDown){
                if (keys.up.isDown){
                    player.setVelocityX(-250*(vitesseDash/2));
                    player.setVelocityY(250*(vitesseDash/2));
                    player.anims.play('up', true);
                }
                else if (keys.down.isDown){
                    player.setVelocityX(-250*(vitesseDash/2));
                    player.setVelocityY(-250*(vitesseDash/2));
                    player.anims.play('down', true);
                }
				
                else{
                    player.setVelocityX(-500*vitesseDash);
                    player.anims.play('left', true);
                }
    
            }
            else if (keys.right.isUp && keys.left.isUp){
                player.setVelocityX(0);
            }
            if (keys.up.isDown){
                player.setVelocityY(-500*vitesseDash);
                player.anims.play('up', true);
				
            }
            else if (keys.down.isDown){
                player.setVelocityY(500*vitesseDash);
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
        
        if (canShot == true){
            imageShotTrue.setAlpha(1);
        }
        
        if (piece >= 3){
            possede3Pieces = true;
        }
		
		if (canDash == true){
            imageDashTrue.setAlpha(1);
		}
         
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
    
 function Soin(player, coeurCollectible){
            console.log("ah");
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
        
    function attaque(x, y){

    newTirJoueur = tirJoueur.create(player.x + x, player.y + y, 'tir');

    }

    function recupDash(player, itemDash){
            itemDash.destroy();
            canDash = true;
        }
    
    function recupTir(player, itemTir){
            itemTir.destroy();
            canShot = true;
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
    function AchatPowerUp(player, plateformePiece){
        if (possede3Pieces == true){
           itemDash.create (1500,450, 'itemDash');
			piece -=3;
			possede3Pieces = false;
        }
    }
    function OuvrePorte(player, platformeOuverturePorte){
            if (possedeClef == true){
                murDestructible.destroy();
                coeurCollectible.setAlpha(1);
                passage.setAlpha(1);
                clef -=1;
               
            }
	

	
}
function Victoire (player, plateformeVictoire){
		this.physics.pause();
		ecranVictoire.setAlpha(1);
	}