/**
 * Copyright (c) IBM and its affiliates.
 *
 * This source code is licensed under the MIT license found in the LICENSE.txt
 * file in the root directory of this source tree.
 */

import { LitElement, html, customElement } from 'lit-element';

@customElement('page-not-found')
export class PageNotFound extends LitElement {
  protected render() {
    return html`
      <section>
        <h1>Page not found</h1>

        <p>
          <a href="/">Back to home</a>
        </p>
      </section>
    `;
  }
}
