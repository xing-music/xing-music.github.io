import React from "react";
import H2 from '../components/h2';
import { getRandomText } from './index';

export default function Shows() {
  return <div>
    <section className="body" id="shows">
      <H2 title='Shows' />
      {/* <p>{randomText}</p> */}
      <table id='shows-table' className='shows-table'>
        <tbody>
          <tr><td className='show-date'>{Math.floor(Math.random() * 30) + 1} / {Math.floor(Math.random() * 12) + 1}</td><td>{getRandomText(2)}</td></tr>
          <tr><td className='show-date'>{Math.floor(Math.random() * 30) + 1} / {Math.floor(Math.random() * 12) + 1}</td><td>{getRandomText(2)}</td></tr>
          <tr><td className='show-date'>{Math.floor(Math.random() * 30) + 1} / {Math.floor(Math.random() * 12) + 1}</td><td>{getRandomText(2)}</td></tr>
          <tr><td className='show-date'>{Math.floor(Math.random() * 30) + 1} / {Math.floor(Math.random() * 12) + 1}</td><td>{getRandomText(2)}</td></tr>
          <tr><td className='show-date'>{Math.floor(Math.random() * 30) + 1} / {Math.floor(Math.random() * 12) + 1}</td><td>{getRandomText(2)}</td></tr>
          <tr><td className='show-date'>{Math.floor(Math.random() * 30) + 1} / {Math.floor(Math.random() * 12) + 1}</td><td>{getRandomText(2)}</td></tr>
        </tbody>
      </table>
    </section>
  </div>;
}
