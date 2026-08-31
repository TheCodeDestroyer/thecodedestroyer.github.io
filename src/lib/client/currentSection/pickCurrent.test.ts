import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { pickCurrent } from './pickCurrent.ts';

/*
 * The rule the navbar highlight rests on. It used to be unstated — six section
 * effects racing to write a store — so there was nothing here to call.
 */
describe('pickCurrent', () => {
  it('keeps the previous section when nothing covers the probe band', () => {
    assert.equal(pickCurrent([], 'career'), 'career');
  });

  it('reports null when nothing has ever covered it', () => {
    assert.equal(pickCurrent([], null), null);
  });

  it('takes the only section covering the band', () => {
    assert.equal(pickCurrent([{ id: 'about', top: -120 }], 'me'), 'about');
  });

  it('takes the topmost when a section is handing over to the next', () => {
    /* The outgoing section is scrolled partly above the viewport, so its top
       is the more negative of the two. */
    assert.equal(
      pickCurrent(
        [
          { id: 'technologies', top: -40 },
          { id: 'career', top: 760 },
        ],
        'technologies',
      ),
      'technologies',
    );
  });

  it('does not depend on the order sections were observed in', () => {
    const probed = [
      { id: 'career', top: 760 },
      { id: 'technologies', top: -40 },
    ] as const;

    assert.equal(
      pickCurrent(probed, null),
      pickCurrent([...probed].reverse(), null),
    );
  });

  it('ignores the previous section once something covers the band', () => {
    assert.equal(pickCurrent([{ id: 'contact', top: 0 }], 'me'), 'contact');
  });
});
