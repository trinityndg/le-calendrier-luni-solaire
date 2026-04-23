const data = {
  rat: {
    title: "Rat — Chuột",
    description: "Intelligent, adaptable et rapide.",
    years: "1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020"
  },
  ox: {
    title: "Boeuf — Trâu",
    description: "Travailleur, stable et persévérant.",
    years: "1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021"
  },
  tiger: {
    title: "Tigre — Hổ",
    description: "Courageux, passionné et imprévisible.",
    years: "1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022"
  },
  rabbit: {
    title: "Lapin — thỏ",
    description: "Calme, élégant et sensible.",
    years: "1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023"
  },
  dragon: {
    title: "Dragon — Rồng",
    description: "Puissant, charismatique et ambitieux.",
    years: "1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024"
  },
  snake: {
    title: "Serpent — Rắn",
    description: "Intuitif, mystérieux et réfléchi.",
    years: "1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025"
  },
  horse: {
    title: "Cheval — Ngựa",
    description: "Libre, énergique et indépendant.",
    years: "1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026"
  },
  goat: {
    title: "Chèvre — Dê",
    description: "Créative, douce et artistique.",
    years: "1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015"
  },
  monkey: {
    title: "Singe — Khỉ",
    description: "Malin, joueur et intelligent.",
    years: "1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016"
  },
  rooster: {
    title: "Coq — Gà",
    description: "Observateur, confiant et précis.",
    years: "1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017"
  },
  dog: {
    title: "Chien — Chó",
    description: "Loyal, honnête et protecteur.",
    years: "1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018"
  },
  pig: {
    title: "Cochon — Heo",
    description: "Généreux, sincère et chaleureux.",
    years: "1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019"
  }
};

const cards = document.querySelectorAll(".card");
const panel = document.getElementById("panel");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const sign = card.dataset.sign;

    document.getElementById("title").innerText = data[sign].title;
    document.getElementById("description").innerText = data[sign].description;
    document.getElementById("years").innerText = "Années : " + data[sign].years;

    panel.style.display = "flex";
  });
});

function closePanel() {
  panel.style.display = "none";
}