import { generateEl } from '../src/dom.js';
import { homePage } from '../src/home.js';
import { loadLoginForm } from './loginUser.js';
import { logoutFn } from './logoutUser.js';
import { loadRegisterForm } from './registerUser.js';

export function navBar() {

  const nav = generateEl('nav', { className: 'navbar navbar-expand-lg navbar-dark bg-dark' });
  // Add event on [Movies] btn
  const aMovies = generateEl('a', {
    className: 'navbar-brand text-light', href: 'javascript:void(0)', textContent: 'Movies',
    eventListeners: { click: homePage }
  }, nav);
  const ul = generateEl('ul', { className: 'navbar-nav ml-auto' }, nav);
  // Check if the user is logged in
  if (sessionStorage.userInfo !== undefined) {
    const li1 = generateEl('li', { className: 'nav-item user' }, ul);
    generateEl('a', { className: 'nav-link', id: 'welcome-msg', textContent: `Welcome, ${JSON.parse(sessionStorage.userInfo).email}` }, li1);
    const li2 = generateEl('li', { className: 'nav-item user' }, ul);
    // Add event on [Logout] btn
    generateEl('a', {
      className: 'nav-link', href: 'javascript:void(0)', textContent: 'Logout',
      eventListeners: { click: logoutFn }
    }, li2);
  } else {
    const li3 = generateEl('li', { className: 'nav-item guest' }, ul);
    // Add event on [Login] btn
    generateEl('a', {
      className: 'nav-link', href: 'javascript:void(0)', textContent: 'Login',
      eventListeners: { click: loadLoginForm }
    }, li3);
    const li4 = generateEl('li', { className: 'nav-item guest' }, ul);
    // Add event on [Register] btn
    generateEl('a', {
      className: 'nav-link', href: 'javascript:void(0)', textContent: 'Register',
      eventListeners: { click: loadRegisterForm }
    }, li4);
  }

  return nav;
}