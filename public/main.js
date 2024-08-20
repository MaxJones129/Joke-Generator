// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getRequest from '../api/promises';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>JOKE GENERATOR</h1>
    <small>Open your dev tools</small><br />
    <button class="btn btn-danger" id="click-me">Get A Joke!</button><br />
    <button style = "display: none" class="btn btn-danger" id="click-me-now">Get A Punchline!</button><br />
    <button style = "display: none" class="btn btn-danger" id="click-me-now-again">Get Another Joke!</button><br />
    <hr />
    <div id="jokeSetup"></div>
    <div id="jokePunch"></div>
    <i class="fas fa-user fa-4x"></i> <i class="fab fa-github-square fa-5x"></i>
  `;
  console.warn('YOU ARE UP AND RUNNING!');

  document.querySelector('#click-me').addEventListener('click', () => {
    getRequest().then((response) => {
      document.querySelector('#jokeSetup').innerHTML = response.setup;
      const buttonSetup = document.querySelector('#click-me');
      const buttonPunch = document.querySelector('#click-me-now');
      buttonSetup.style.display = 'none';
      buttonPunch.style.display = 'block';
      document.querySelector('#jokePunch').innerHTML = '';
      document.querySelector('#click-me-now').addEventListener('click', () => {
        document.querySelector('#jokePunch').innerHTML = response.delivery;
        buttonPunch.style.display = 'none';
        document.querySelector('#click-me').innerHTML = 'Get Another Joke';
        buttonSetup.style.display = 'block';
      });
    });

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
  });
};

init();
