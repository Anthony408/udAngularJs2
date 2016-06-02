import {Component} from '@angular/core'

let template = `
<h2>Chapter 3 Exercise, toggle something ... (Click on the Image Below to Toggle) </h2>
<!--<input type="button" (click)="onClick()"> TOGGLE IMAGE </input>-->
<!--<image href="{{img}}"></image>-->
<hr>
<img src="{{img}}" height="200" width="200" (click)="onClick()">
<br><br><br><br><br>
<hr>

      <div class="jumbotron">
        <h1>Heart Icon Voting!</h1>
        <p class="lead">Courage, passion, and yellow fever. Ho-ho-ho! pestilence of riddle. Wow, stormy fortune! Adventure is an evil codfish. Proud, salty scallywags greedily mark a rough, stormy moon.</p>
        <i class="glyphicon {{state}}" (click)="onClick()" style="align-content: center; cursor: pointer"> {{ count }} </i>
      </div>

 
`

@Component({
    selector: 'chapter3_exercise', // <chapter3_exercise></chapter3_exercise>
    template: template,
})
export class Chapter3ExerciseComponent {
    isClicked: boolean = false; // toggles between true/false decides what to render in the template.
    img_thumbs_up: string = 'http://bucultureshock.com/wp-content/uploads/2013/02/thumbsupchimp.jpg';
    img_thumbs_down: string = 'https://s-media-cache-ak0.pinimg.com/736x/48/8d/80/488d8021aaa86dfda79abc5949ab90b8.jpg';
    img: string = 'https://hsto.org/getpro/geektimes/post_images/548/eff/e63/548effe63574bd272ef3117a46e4a0b0.jpg';
    count: number = 0;
    state: string = 'glyphicon-heart-empty';

    onClick(){
        this.isClicked = !this.isClicked; // flip
        console.log('onClick() triggered!  Current value: ' + this.isClicked)
        if(this.isClicked){
            this.img = this.img_thumbs_up;
            this.count = this.count + 1;
            this.state = 'glyphicon-heart';
        } else {
            this.img = this.img_thumbs_down;
            this.count = this.count - 1;
            this.state = 'glyphicon-heart-empty';
        }
        console.log('onClick() current img set to: ' + this.img)
    }
}