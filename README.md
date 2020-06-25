
# react-scrollspy-pure

[![NPM](https://img.shields.io/npm/v/react-scrollspy-pure.svg)](https://www.npmjs.com/package/react-scrollspy-pure)

## About
A react component provides the scrollspy feature with [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

## Install

use yarn
```bash
yarn add react-scrollspy-pure
```

OR

use npm
```bash
npm install --save react-scrollspy-pure
```

## Props
| Name | Type | Default | options | Description |
|--|--|--|--|--|
| WrapperComponent | PropTypes.node | 'main' |
| sectionElementName | PropTypes.node | 'section' |
| activeClassName | string | 'active' |
| activeClassTo | enum | 'parent' | 'parnet', 'self' |
| navSelector | element | document |
| navItemSelector | string / function | 'nav li a' |
| intersectionRatio | number | 0.5 | between 0 to 1 |
| options |object | null |


## Usage

```jsx
import React from 'react';
import ScrollSpy from 'react-scrollspy-pure';

export default function App() {
  const navRef = React.useRef();
  return (
    <div>
      <nav ref={navRef}>
        <ol>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#articles">Articles</a>
            <ul>
              <li><a href="#article-a">Article A</a></li>
              <li><a href="#article-b">Article B</a></li>
              <li><a href="#article-c">Article C</a></li>
            </ul>
          </li>
          <li><a href="#links">Links</a></li>
          <li><a href="#contact">Contact</a></li>
        </ol>
      </nav>
      <ScrollSpy navSelector={navRef.current}>
        <section id="home">
          <h2>Home</h2>
        </section>
        <section id="about">
          <h2>About</h2>
        </section>
        <section id="articles">
          <h2>Articles</h2>
          <section id="article-a">
            <h2>Article A</h2>
          </section>
          <section id="article-b">
            <h2>Article B</h2>
          </section>
          <section id="article-c">
            <h2>Article C</h2>
          </section>
        </section>
        <section id="links">
          <h2>Links</h2>
        </section>
        <section id="contact">
          <h2>Contact</h2>
        </section>
      </ScrollSpy>
    </div>
  );
}
```

## Suggestion

Apply smooth scroll behavior
```css
html {
	scroll-behavior: smooth;
}
```

## License

MIT © [mingkin123](https://github.com/mingkin123)
