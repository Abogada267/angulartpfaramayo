/***************************************************************************************************
 * BROWSER POLYFILLS
 */

/** IE9, IE10, IE11, and older Chrome/Firefox/Safari/Edge **/
import 'core-js/es6';
import 'core-js/es7/reflect';

/** IE10 and IE11 requires the following for NgClass support on SVG elements */
import 'classlist.js'; // Run `npm install --save classlist.js`.

/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.
import 'core-js/es7/reflect';

/** ALL Firefox **/
// Required to support Web Animations `@angular/platform-browser/animations`.
import 'web-animations-js'; // Run `npm install --save web-animations-js`.

/** Path patch. Required for `angular/core` and Angular Material. **/
(window as any).global = window;

/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
import 'zone.js/dist/zone'; // Included with Angular CLI.

