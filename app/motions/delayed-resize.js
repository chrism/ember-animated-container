import { Resize } from 'ember-animated/motions/resize';
import { wait } from 'ember-animated';

class DelayedResize extends Resize {
  * animate() {
    yield wait(this.opts.duration / 3);
    this.opts.duration = this.opts.duration / 3;

    yield * super.animate();
  }
}

export default function delayedResize(sprite, opts) {
  return new DelayedResize(sprite, opts);
} 