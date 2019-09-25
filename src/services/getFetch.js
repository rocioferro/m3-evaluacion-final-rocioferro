 const endpoint = 'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json'

const getFetch = () => {
  return(
    fetch(endpoint)
    .then(res => res.json())
  );
}

export {getFetch};
