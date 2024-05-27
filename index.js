function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  const drivers = ['ibro', 'stopper', 'shola', 'Annette', 'Sahara', 'abdi'];
  console.log(findMatching(drivers, 'ibro')); 
  console.log(findMatching(drivers, 'Stopper')); 
  console.log(findMatching(drivers, 'sahara')); 

  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
  
  let drivers1 = ['sacdiyo', 'binto', 'Salah', 'Anisa', 'Sahara', 'moha'];
  console.log(fuzzyMatch(drivers, 'binto')); 
  console.log(fuzzyMatch(drivers, 'sacdiyo')); 
  
  
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  }
  
  const drivers2 = ['sacdiyo', 'binto', 'Sumeyo', 'Anisa', 'Sahara', 'moha'];   
  
  console.log(matchName(drivers, 'hassan')); 
  console.log(matchName(drivers, 'Sumeyo')); 
  