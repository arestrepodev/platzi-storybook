import './card.css';
export const createCard = ({
  size = 'small',
  title,
  description,
}) => { 
  const $wrapper = document.createElement('div');
  const $card = document.createElement('section');
  const $avatar = document.createElement('img');
  const $content = document.createElement('article');
  const $h3 = document.createElement('h3');
  const $p = document.createElement('p');

  $wrapper.appendChild($card);
  $card.appendChild($avatar);
  $card.appendChild($content);
  $content.appendChild($h3);
  $content.appendChild($p);

  $wrapper.className = 'wrapper';
  $avatar.className = 'card__avatar';
  $content.className = 'card__content';

  $h3.innerText = title;
  $p.innerText = description;

  $card.className = ['card', `card--${size}`].join(' ');

  return $wrapper;
};