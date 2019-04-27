import { asElementData } from '@angular/core/src/view';

export class Carousel {

    textList : Array<Phaser.GameObjects.Text>;
    isDown : boolean = false;

    contentToSave : any;

    constructor(scene, carouselContent, x : number, y : number) {
        
        this.textList = new Array<Phaser.GameObjects.Text>();

        for(let content of carouselContent.resolutions) {

            let text = scene.add.text(x = x - 120 , y, content.width + " x " + content.height, { color: 'grey', opacity : 0.0 } );
            text.content = content;
            this.textList.push(text);
        }

        for(let text of this.textList) {
               // text.setOrigin(0.5,0.5);
                y=+100
                text.setInteractive();

                this.eventLauncher(scene, text);
        }
    }

    eventLauncher(scene, text) {
        let _this = this;
        let isDown = false;

        text.on("pointerover", () => {
            text.setStyle({color : "white"});
        });

        text.on("pointerout", () => {
            if(!isDown)
                text.setStyle({color : "grey"});
        });

        text.on('pointerdown', function(){
            for(let content of _this.textList) {
                if(content !== text) {
                    console.log("ccc")
                    content.setStyle({color : "grey"});
                }
            }

            _this.contentToSave = text.content;
            isDown = !isDown;

            // scene.scene.start(sceneToLoad);
        });

    }

    getContentToSave() {
        return this.contentToSave;
    }

}