document.addEventListener("DOMContentLoaded", function () {
    const newsContainer = document.getElementById("noticias");

    // Fuente de noticias ficticia (reemplazar con datos reales de National Geographic)
    const noticiasFicticias = [
        {
            title: "Los gatos poseen casi 300 expresiones faciales amigables y agresivas",
            description: "Los gatos domésticos son más expresivos de lo que se pensaba. Una pareja de investigadoras reveló que los felinos usan cientos de expresiones faciales, además de maullidos y ronroneos. ",
            url: "https://www.ngenespanol.com/animales/como-se-comunican-los-gatos/",
        },
        {
            title: "La lluvia es clave para que exista una gran diversidad animal, según nuevo estudio",
            description: "Hasta el momento, nuestro planeta es el único astro conocido que alberga vida. Este maravilloso fenómeno sigue siendo fuente de muchas de las preguntas más importantes que se hacen los científicos día a día.",
            url: "https://www.ngenespanol.com/animales/la-lluvia-es-clave-para-que-exista-una-gran-diversidad-animal-segun-nuevo-estudio/",
        },
        {
            title: "Perro salchicha: de cazador subterráneo a compañero valiente y audaz",
            description: "Aunque muchas personas conocen a esta raza como “perro salchicha”, la verdad es que se trata de los dachshund.",
            url: "https://www.ngenespanol.com/sin-categoria/perro-salchicha-de-cazador-subterraneo-a-companero-valiente-y-audaz/",
        },
        
        {
            title: "El misterio del ronroneo de los gatos tiene ahora una explicación",
            description: "Por ordinario y común que nos parezca, los gatos son la excepción a una regla que dicta que entre más grande es un animal más largas son sus cuerdas vocales, dando como resultado sonidos de baja frecuencia. ",
            url: "https://origin-www.ngenespanol.com/animales/el-misterio-del-ronroneo-de-los-gatos-tiene-ahora-una-explicacion/",
        },
        
        {
            title: "GALERÍA: Más allá de los perezosos, éstos son los animales fantásticos de Costa Rica y dónde encontrarlos",
            description: "Al visitar Costa Rica, muchos pueden tener un interés especial en encontrar perezosos. Los tiernos mamíferos se han vuelto símbolos del país y suelen encontrarse en el bosque tropical lluvioso.",
            url: "https://origin-www.ngenespanol.com/animales/galeria-mas-alla-de-los-perezosos-estos-son-los-animales-fantasticos-de-costa-rica-y-donde-encontrarlos/",
        },
    ];

    // Obtener una noticia aleatoria
    const randomIndex = Math.floor(Math.random() * noticiasFicticias.length);
    const randomArticle = noticiasFicticias[randomIndex];

    // Mostrar la noticia en el contenedor
    const newsItem = document.createElement("div");
    newsItem.innerHTML = `
        <h2>${randomArticle.title}</h2>
        <p>${randomArticle.description}</p>
        <a href="${randomArticle.url}" target="_blank">Leer más</a>
    `;
    newsContainer.appendChild(newsItem);
});