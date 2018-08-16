import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './components/widget';

export default class ReactWidget {
  static createWidget(opts = {}) {
    // Customisable options
    const { colour = 'red' } = opts;
    const component = <Widget colour={colour} />;

    function doRender() {
      if (ReactWidget.el) {
        throw new Error('ReactWidget is already mounted, destroy first');
      }
      // Customisable id of target element
      const el = document.getElementById('react-widget');
      if (!el) {
        throw new Error('Element with ID react-widget must be present');
      }
      ReactDOM.render(
        component,
        el,
      );
      ReactWidget.el = el;
    }
    if (document.readyState === 'complete') {
      doRender();
    } else {
      window.addEventListener('load', () => {
        doRender();
      });
    }
  }

  static destroyWidget() {
    if (!ReactWidget.el) {
      throw new Error('ReactWidget is not created, create first');
    }
    ReactDOM.unmountComponentAtNode(ReactWidget.el);
    ReactWidget.el = null;
  }
}
