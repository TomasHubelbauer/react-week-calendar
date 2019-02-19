# React Week Calendar

This repository is a stub for an idea which I want to work on or abandon.

The idea is to build a React component for a week calendar, which avoids the use of wonky techniques such as accessing the DOM nodes
directly, doing calculations with their DOM coordinates, using dynamic styles or listening to scroll events. I dislike all this stuff and try to rip it out whenever I see it, so that's what I'll try to avoid here.

Another point is to avoid using a big number of DOM nodes. There are existing calendar components, none of which I really like,
and this is my attempt to do better or learn why it is not possible for me to do better than what's available.

- [ ] Show some code

## Features

- Zero dependencies
- [ ] Virtualized when overflowing

## Questions

- [ ] Start with a div per slot or collapse neighboring divs of the same time?
  - Div per slot is easy because we can style the individual cells for like borders
  - Collapsed divs need an alternative solution for borders, but would result in much smaller DOM
  - Probably prototype both and see how it turns out
