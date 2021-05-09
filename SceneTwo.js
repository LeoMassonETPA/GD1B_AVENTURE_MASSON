



class SceneTwo extends Phaser.Scene{
    constructor(){
        super("SceneTwo");
    }
    init(data){
        //this.pdv = data.pdv
        
    }
    preload(){
        
        
         // Décors //
        this.load.image('background','assets/background.png');
        this.load.image('trouH','assets/trouH.png');
        this.load.image('trouV','assets/trouV.png');
        this.load.image('Mur','assets/Mur.png');
        this.load.image('passage','assets/passage.png');
        this.load.image('blocDangereux','assets/ObstacleD.png');
        this.load.image('plateformeOuverturePorte','assets/plateforme.png');
        
        
        
        // HUD //
        this.load.image('pdv','assets/coeur.png');
        this.load.image('x0','assets/x0.png');
        this.load.image('x1','assets/x1.png');
        this.load.image('x2','assets/x2.png');
        this.load.image('x3','assets/x3.png');
        this.load.image('dashTrue','assets/DashTrue.png');
        this.load.image('dashFalse','assets/DashFalse.png');
        this.load.image('shotTrue','assets/ShotTrue.png');
        this.load.image('shotFalse','assets/ShotFalse.png');
		
		this.load.image('victory','assets/EcranVictoire.png');
        this.load.image('defeat','assets/EcranGameOver.png');
        
        // Collectibles
        this.load.image('itemTir','assets/itemTir.png');
        this.load.image('clef','assets/clef.png');
        this.load.image('piece','assets/piece.png');
       
        // tirs //
        this.load.image('tir','assets/tir.png');
        
        // Personnage //
        this.load.spritesheet('dude','assets/SpritesheetPerso.png',{ frameWidth: 122, frameHeight: 150 });
        
        // Ennemis //
        this.load.image('ennemi1','assets/ennemi.png');
        this.load.image('scie','assets/scie.png');
    }
    
    create(){
        
        this.cameras.main.setBounds(0, 0, 1950, 1650);
        this.physics.world.setBounds(0, 0, 1950, 1650);
        
        this.add.image(0, 0, 'background').setOrigin(0);        
        
        mur = this.physics.add.staticGroup();
       
        plateformeOuverturePorte = this.physics.add.staticGroup();
        
        

 
       
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
        mur.create(225,1350, 'Mur');
        mur.create(375,1350, 'Mur');
        mur.create(525,1350, 'Mur');
        mur.create(675,1350, 'Mur');
        mur.create(825,1350, 'Mur');
        murDestructible=this.physics.add.sprite(975,1350, 'Mur');
        murDestructible.body.immovable=true;
        mur.create(1125,1350, 'Mur');
        mur.create(1275,1350, 'Mur');
        mur.create(1425,1350, 'Mur');
        mur.create(1575,1350, 'Mur');
        mur.create(1725,1350, 'Mur');
        
        // murs gauche
        mur.create(1875,150, 'Mur');
        mur.create(1875,450, 'Mur');
        mur.create(1875,750, 'Mur');
        mur.create(1875,1050, 'Mur');
        mur.create(1875,1350, 'Mur');
        
        // murs droite
        mur.create(75,150, 'Mur');
        mur.create(75,450, 'Mur');
        mur.create(75,750, 'Mur');
        mur.create(75,1050, 'Mur');
        mur.create(75,1350, 'Mur');
        
        
        trouH.create(1500,800,'trouH');
        trouH.create(900,800,'trouH');
        

        
        itemclef.create(1700, 400, 'clef');
        
        itempiece.create(350, 500, 'piece');
        itempiece.create(780, 500, 'piece');
        itempiece.create(1230, 500, 'piece');
        
        coeurCollectible.create(975,1250,'pdv').setAlpha(0);
        
        passage.create(975,1450,'passage').setAlpha(0);
        
        
        plateformeOuverturePorte.create(225, 1125, 'plateformeOuverturePorte');
        
       // trouH.create(500,1200, 'trouH');
       // trouV.create(500,700, 'trouV');
        
        PDV1 = this.add.sprite(100,100, 'pdv').setScrollFactor(0).setAlpha(1);   
        PDV2 = this.add.sprite(200,100, 'pdv').setScrollFactor(0).setAlpha(1);   
        PDV3 = this.add.sprite(300,100, 'pdv').setScrollFactor(0).setAlpha(1);   
        
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
        
        imageDashFalse = this.add.sprite(1730,100, 'dashFalse').setScrollFactor(0).setAlpha(1);
        imageDashTrue = this.add.sprite(1730,100, 'dashTrue').setScrollFactor(0).setAlpha(0);
        imageShotFalse = this.add.sprite(1500,100, 'shotFalse').setScrollFactor(0).setAlpha(1);
        imageShotTrue = this.add.sprite(1500,100, 'shotTrue').setScrollFactor(0).setAlpha(0);
		
		
        
        player = this.physics.add.sprite(1550, 1075, 'dude').setAlpha(1);
        this.cameras.main.startFollow(player, true);

        player.setCollideWorldBounds(true);
        this.physics.add.collider(player, mur);
        this.physics.add.collider(player, murDestructible);
        this.physics.add.overlap(player, plateformeOuverturePorte, OuvrePorte, null, this);
        this.physics.add.collider(player, trouH);
        this.physics.add.collider(player, trouV);
        this.physics.add.collider(player, blocDangereux);
        this.physics.add.collider(player,passage, changementZone, null, this);
        this.physics.add.collider(player,coeurCollectible, Soin, null, this);
        this.physics.add.collider(player,itemclef, recupClef, null, this);
        this.physics.add.collider(player,itempiece, recupPiece, null, this);
        
        blocDangereux.create(975, 200, 'blocDangereux');
        blocDangereux.create(1425, 200, 'blocDangereux');
        blocDangereux.create(525, 200, 'blocDangereux');
        
        tir = this.physics.add.image(975 , 300, 'tir');
        tir.setCollideWorldBounds(true);
        tir.body.setAllowGravity(false);
        this.physics.add.overlap(player, tir, HitTir, null, this);
        
        tir2 = this.physics.add.image(1425 , 300, 'tir');
        tir2.setCollideWorldBounds(true);
        tir2.body.setAllowGravity(false);
        this.physics.add.overlap(player, tir2, HitTir, null, this);
        
        tir3 = this.physics.add.image(525 , 300, 'tir');
        tir3.setCollideWorldBounds(true);
        tir3.body.setAllowGravity(false);
        this.physics.add.overlap(player, tir3, HitTir, null, this);
        

        
        
          this.tweens.add({
            targets: tir,
                props: {
                y: { value: 700, duration: 1000 },
            },
            yoyo: false,
                repeat: -1
        });
        this.tweens.add({
            targets: tir2,
                props: {
                y: { value: 700, duration: 1000 },
            },
            yoyo: false,
                repeat: -1
        });
        this.tweens.add({
            targets: tir3,
                props: {
                y: { value: 700, duration: 1000 },
            },
            yoyo: false,
                repeat: -1
        });

        scie = this.physics.add.image(200 , 650, 'scie');
        scie.setCollideWorldBounds(true);
        scie.body.setAllowGravity(false);
        this.physics.add.overlap(player, scie, HitTir, null, this);
        
        scie2 = this.physics.add.image(1725 , 650, 'scie');
        scie2.setCollideWorldBounds(true);
        scie2.body.setAllowGravity(false);
        this.physics.add.overlap(player, scie2, HitTir, null, this);
        
        this.tweens.add({
            targets: scie,
                props: {
                x: { value: 500, duration: 1000 },
                y: { value: 950, duration: 1000 },
            },
            yoyo: true,
                repeat: -1
             });
        
        this.tweens.add({
            targets: scie2,
                props: {
                
                y: { value: 350, duration: 1000 },
            },
            yoyo: true,
                repeat: -1
             });
        
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
        
        
        
            
    
         function HitTir(){ 
            if (invincible == false){
                invincible = true;
                pdv -=1;   
        if (pdv == 3){
            PDV3.setAlpha(1);
            PDV2.setAlpha(1);
            PDV1.setAlpha(1);
       }
                
        if (pdv == 2){
            PDV3.setAlpha(0);
            PDV2.setAlpha(1);
            PDV1.setAlpha(1);
        }
        if (pdv == 1){
            PDV3.setAlpha(0);
            PDV2.setAlpha(0);
            PDV1.setAlpha(1);
        }
        if (pdv == 0){
            PDV3.setAlpha(0);
            PDV2.setAlpha(0);
            PDV1.setAlpha(0);
            gameOver = true;
        }
            }
             
		ecranDefaite = this.add.sprite(960,540, 'defeat').setScrollFactor(0).setAlpha(0);
		ecranVictoire = this.add.sprite(960,540, 'victory').setScrollFactor(0).setAlpha(0);

        }
        
        function changementZone(){
            this.scene.start("SceneThree"/*, {pdv: this.pdv}*/); 
         }
        
   
    }
    
    update(){
        
		
        
        
            if (gameOver){
                
				gameOver = false;
				possedeClef = false;
				ecranDefaite.setAlpha(1);
				this.physics.pause();
				player.setAlpha(0);
				if (keys.a.isDown){
					player.setAlpha(1);
					ecranDefaite.setAlpha(0);
				pdv = 3;
				clef = 0;
				piece = 0;
                this.scene.start("SceneTwo"/*, {pdv: this.pdv}*/);}
             	
            }
               
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
      
       if (pdv == 3){
            PDV3.setAlpha(1);
            PDV2.setAlpha(1);
            PDV1.setAlpha(1);
       }
                
        if (pdv == 2){
            PDV3.setAlpha(0);
            PDV2.setAlpha(1);
            PDV1.setAlpha(1);
        }
        if (pdv == 1){
            PDV3.setAlpha(0);
            PDV2.setAlpha(0);
            PDV1.setAlpha(1);
        }
        if (pdv == 0){
            PDV3.setAlpha(0);
            PDV2.setAlpha(0);
            PDV1.setAlpha(0);
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
            imageShotFalse.setAlpha(0);
            imageShotTrue.setAlpha(1);
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
                PDV2.setAlpha(1);
                PDV1.setAlpha(1);
       }
                
            if (pdv == 2){
                PDV3.setAlpha(0);
                PDV2.setAlpha(1);
                PDV1.setAlpha(1);
        }
            if (pdv == 1){
                PDV3.setAlpha(0);
                PDV2.setAlpha(0);
                PDV1.setAlpha(1);
        }
            if (pdv == 0){
                PDV3.setAlpha(0);
                PDV2.setAlpha(0);
                PDV1.setAlpha(0);
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
    function OuvrePorte(player, platformeOuverturePorte){
            if (possedeClef == true){
                murDestructible.destroy();
                coeurCollectible.setAlpha(1);
                passage.setAlpha(1);
                clef -=1;
               
            }
}