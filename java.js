// Scroll to specific values
// scrollTo is the same
window.scroll({
    top: 2500, 
    bittom:2500,
    left: 0, 
    behavior: 'smooth'
  });
  
  // Scroll certain amounts from current position 
  window.scrollBy({ 
    top: 2500, // could be negative value
    bottom:2500,
    left: 0, 
    behavior: 'smooth' 
  });
  
  // Scroll to a certain element
  document.querySelector('.hello').scrollIntoView({ 
    behavior: 'smooth' 
  });