// TODO: enable this and remove line 5
// const API_URL =
// 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key={token}';

// const API_URL = 'topstories_science.json';
const API_URL = 'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=bSoOkIDZ5I4Hu65w2Ikvg9ugGBgBCpQp';


const TopNews = document.getElementById('SCIENCE');

const getTopNews = async () => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    return data;
  } catch (e) {
    alert('An error occured', e);
    return [];
  }
};

const updateContainer = (data) => {
  TopNews.innerHTML = '';
  let count = 0;

  (data.results || []).forEach((news) => {
    const newsContainer1 = document.createElement('div');
    const newsContainer2 = document.createElement('div');
    newsContainer1.setAttribute('class', 'article1');
    newsContainer2.setAttribute('class', 'article2');

    let multimediaHtml = '';
    if (news.multimedia && news.multimedia.length > 0) {
      const multimedia = news.multimedia.find(media => media.type === 'image');
      if (multimedia) {
        multimediaHtml = `
          <img class="images" src="${multimedia.url}" alt="${multimedia.caption || 'news Image'}">
        `;
      }
    }

    if (count % 2 === 0) { 
      newsContainer1.innerHTML = `
        <div class="news_cont1">
          <div class = "left">${multimediaHtml}</div>
          <div class = "info_cont1">
            <h2>${news?.title}</h2>
            <p><span>SECTION:</span> &nbsp ${news?.section}</p>
            <p><span>ABSTRACT:</span> &nbsp ${news?.abstract}</p>
            <p id="dates"><span>DATE CREATED:</span> &nbsp ${news?.created_date}</p>
            <p id="dates"><span>PUBLISHED:</span> &nbsp ${news?.published_date}</p>
          </div>
        </div>
      `;

      TopNews.appendChild(newsContainer1);
    } else {
      newsContainer2.innerHTML = `
        <div class="news_cont2">
          <div class = "right">${multimediaHtml}</div>
          <div class = "info_cont2">
          <h2>${news?.title}</h2>
            <p><span>SECTION:</span> &nbsp ${news?.section}</p>
            <p><span>ABSTRACT:</span> &nbsp ${news?.abstract}</p>
            <p id="dates"><span>DATE CREATED:</span> &nbsp ${news?.created_date}</p>
            <p id="dates"><span>PUBLISHED:</span> &nbsp ${news?.published_date}</p>
          </div>
        </div>
      `;

      TopNews.appendChild(newsContainer2);
    }

    count += 1; // Increment count outside the if-else block
  });
};


(async () => {
  const data = await getTopNews();
  updateContainer(data);
})();
