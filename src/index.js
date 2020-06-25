import React from 'react';
import PropTypes from 'prop-types';

const isSupportIntersectionObserver = !!('IntersectionObserver' in window);
export default function ScrollSpy(props) {
  const wrapperRef = React.createRef();
  const {
    children,
    WrapperComponent = 'main',
    sectionElementName = 'section',
    activeClassName = 'active',
    activeClassTo = 'parent', // ['self', 'parent']
    navSelector = document,
    navItemSelector = 'nav li a',
    intersectionRatio = 0.5,
    options,
  } = props;

  const combinedOptions = Object.assign({ threshold: 0.5 }, options);

  const navItemSelectorHandler = (id) => {
    if (typeof navItemSelector === 'function') {
      return navItemSelector(id);
    }
    return `${navItemSelector}[href="#${id}"]`;
  };

  React.useEffect(() => {
    if (!isSupportIntersectionObserver) {
      console.error('IntersectionObserver is not supported in your browser.');
      return;
    }

    if (!navSelector) {
      console.error('navSelector is undefined.');
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        let navItem = navSelector.querySelector(navItemSelectorHandler(id));
        if (!navItem) {
          return;
        }
        if (activeClassTo === 'parent') {
          navItem = navItem.parentElement;
        }
        if (entry.intersectionRatio > intersectionRatio) {
          navItem.classList.add(activeClassName);
        } else {
          navItem.classList.remove(activeClassName);
        }
      });
    }, combinedOptions);

    wrapperRef.current.querySelectorAll(`${sectionElementName}[id]`).forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  });

  return (
    <WrapperComponent ref={wrapperRef}>
      {children}
    </WrapperComponent>
  );
}

ScrollSpy.propTypes = {
  children: PropTypes.node,
  WrapperComponent: PropTypes.node,
  sectionElementName: PropTypes.string,
  activeClassName: PropTypes.string,
  activeClassTo: PropTypes.oneOf(['self', 'parent']),
  navSelector: PropTypes.node,
  navItemSelector: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]),
  intersectionRatio: PropTypes.number,
  options: PropTypes.object,
};
