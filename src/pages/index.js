import React from "react";
import Layout from '../components/layout';
import Presskit from './presskit';
import Videos from './videos'
import Contact from './contact';
import Bio from './bio';
import Releases from './releases';

function f() {
  if (typeof window !== 'undefined') {
    function scrollFunction() {
        const el = document.getElementById('navbar')
        if (el) {
            if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
              el.classList.add('smaller');
            } else {
              el.classList.remove('smaller');
            }
        }
    }
    window.addEventListener('scroll', scrollFunction);
  }
}

f();

function getRandomWord(len) {
  const res = [];
  const letters = 'aabcdeefghijklmnopqrssttuvxyz';
  for (let i = 0; i < len; i++) {
    const idx = Math.floor(Math.random() * letters.length);
    res.push(letters[idx]);
  }
  return res.join('');
}

export function getRandomText(nWords) {
  const res = [];
  const wordLens = [3, 4, 4, 5, 5, 5, 6, 7, 8]
  for (let i = 0; i < nWords; i++) {
    const len = wordLens[Math.floor(Math.random() * wordLens.length)];
    const word = getRandomWord(len);
    res.push(word);
  }
  return res.join(' ');
}


export default function Home() {
  return <div>
    <Layout>
      <div className="main" id="main">
        <Bio />
        <Videos />
        <Releases />
        <Presskit />
        <Contact />
      </div>
    </Layout>
  </div>;
}
