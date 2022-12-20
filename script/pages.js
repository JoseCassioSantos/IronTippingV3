pages = (p) => {
  const indice = p;
  const url = `pages/${indice}.html`;

  const xml = new XMLHttpRequest();

  xml.onreadystatechange = () => {
    if (xml.readyState == 4 && xml.status == 200) {
      document.querySelector("#content_page").innerHTML = xml.responseText;
    }
  };
  xml.open("GET", url, true);

  xml.send();
};

