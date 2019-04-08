export class Menu  {

    menu : Phaser.GameObjects.Text;

    constructor(scene , x : number, y : number, text : string, sceneToLoad : string) {
        
        this.menu = scene.add.text(x , y, text, { color: 'grey', opacity : 0.0 } );
        this.menu.setInteractive();

        

        this.eventLauncher(scene, sceneToLoad);
    }

    getMenuText() : Phaser.GameObjects.Text{
        return this.menu;
    }


    eventLauncher(scene, sceneToLoad) {
        let _this = this;

        this.menu.on("pointerover", () => {
            _this.menu.setStyle({color : "white"});
        });

        this.menu.on("pointerout", () => {
            _this.menu.setStyle({color : "grey"});
        });

        if(sceneToLoad) {
            
            this.menu.on('pointerdown', function(){
                scene.scene.start(sceneToLoad);
            });
        }

    }
}