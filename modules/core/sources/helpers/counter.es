/*!
 * Copyright (c) 2014-present Cliqz GmbH. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import DefaultMap from './default-map';

export default class Counter extends DefaultMap {
  constructor(iterable = []) {
    super(() => 0);
    iterable.forEach(v => this.incr(v));
  }

  incr(key) {
    this.update(key, v => v + 1);
  }
}
