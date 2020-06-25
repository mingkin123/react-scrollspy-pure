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
