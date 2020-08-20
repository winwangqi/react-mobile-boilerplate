import './index.scss';
import './animation.scss';

const body = document.body;
const transitionTime = 1000;

class Pop {
  constructor (options) {
    const node = document.createElement('div');

    node.className = `animated ${ options.baseClassName }`;
    node.inClassName = options.inClassName;
    node.outClassName = options.outClassName;


    node.addEventListener('animationend', () => {
      if (node._out) {
        body.removeChild(node);
      }
    });

    node.in = () => {
      node.addClass(node.inClassName);
      node.innerText = options.text;
      body.appendChild(node);
      // 根据内容高度修正位置
      node.style.marginTop = `${ -node.offsetHeight / 2 }px`;

      return node;
    };

    node.out = () => {
      node._out = true;
      node.removeClass(node.inClassName).addClass(node.outClassName);

      return node;
    };

    node.addClass = className => {
      const clsNames = className.split(' ');
      const _classNames = node.className.split(' ');

      clsNames.forEach(cls => {
        if (!_classNames.includes(cls)) {
          _classNames.push(cls);
        }
      });

      node.className = _classNames.join(' ');

      return node;
    };

    node.removeClass = className => {
      const clsNames = className.split(' ');
      const originalClassNames = node.className.split(' ');
      const targetClassNames = [];

      originalClassNames.forEach(cls => {
        if (!clsNames.includes(cls)) {
          targetClassNames.push(cls);
        }
      });

      node.className = targetClassNames.join(' ');

      return node;
    };

    node.in();

    return node;
  }
}

export const toast = text => {
  const _toast = new Pop({
    text,
    baseClassName: 'toast',
    inClassName: 'fadeInDown',
    outClassName: 'fadeOutDown'
  });

  const stayTime = 300;

  setTimeout(() => { _toast.out() }, transitionTime + stayTime);
};
