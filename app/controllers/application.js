import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { fadeIn, fadeOut } from 'ember-animated/motions/opacity';
import { wait } from 'ember-animated';
import delayedResize from '../motions/delayed-resize';

export default class ApplicationController extends Controller {
  @tracked componentName = "first";

  @action
  toggleComponentName() {
    if (this.componentName == "first") {
      this.componentName = "second";
    } else {
      this.componentName = "first";
    }
  }

  *transition({ insertedSprites, removedSprites, duration }) {
    console.log(arguments[0]);

    for (let sprite of removedSprites) {
      yield fadeOut(sprite, { duration: duration/3 });
    }

    yield wait(duration/3)

    for (let sprite of insertedSprites) {
      fadeIn(sprite, { duration: duration/3 });
    }
  }

  motion = delayedResize
}
