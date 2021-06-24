export function toggleTab(event, resolution = 767) {
  const row = event.currentTarget;
  const buttons = row.querySelectorAll('button');
  const windowWidth = document.documentElement.clientWidth;

  if (windowWidth > resolution) {
    return;
  }

  for (let i = 0; i < buttons.length; i += 1) {
    const button = buttons[i];
    if (event.target === button) {
      return;
    }
  }

  if (row.style.height === '') {
    row.style.height = `${row.scrollHeight}px`;
    window.addEventListener('resize', closeThisRow);
  } else {
    row.style.height = '';
    window.removeEventListener('resize', closeThisRow);
  }

  function closeThisRow() {
    row.style.height = '';
  }
}
