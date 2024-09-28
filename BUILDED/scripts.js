// TODO: enable this and remove line 5
// const API_URL =
// 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key={token}';

// const API_URL_scie = 'topstories_science.json';
// const API_URL_world = 'topstories_world.json';
const API_URL_scie = 'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=bSoOkIDZ5I4Hu65w2Ikvg9ugGBgBCpQp';
const API_URL_world = 'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=bSoOkIDZ5I4Hu65w2Ikvg9ugGBgBCpQp';

const TopNews_scie = document.getElementById('SCIENCE');
const TopNews_world = document.getElementById('WORLD');

const getTopNews_scie = async () => {
  try {
    const res = await fetch(API_URL_scie);
    const data = await res.json();
    return data;
  } catch (e) {
    alert('An error occured', e);
    return [];
  }
};

const updateContainer_scie = (data) => {
  TopNews_scie.innerHTML = '';
  let count = 0;

  (data.results || []).forEach((news) => {
    const newsContainer_scie1 = document.createElement('div');
    const newsContainer2 = document.createElement('div');
    newsContainer_scie1.setAttribute('class', 'article1');
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
      newsContainer_scie1.innerHTML = `
        <div class="news_cont1">
          <div class = "left">${multimediaHtml}</div>
          <div class = "info_cont1">
            <h3>${news?.title}</h3>
            <p><span>SECTION:</span> ${news?.section}</p>
            <p><span>ABSTRACT:</span> ${news?.abstract}</p>
            <p id="dates"><span>DATE CREATED:</span> ${news?.created_date}</p>
            <p id="dates"><span>PUBLISHED:</span> ${news?.published_date}</p>
          </div>
        </div>
      `;

      TopNews_scie.appendChild(newsContainer_scie1);
    } else {
      newsContainer2.innerHTML = `
        <div class="news_cont2">
          <div class = "right">${multimediaHtml}</div>
          <div class = "info_cont2">
          <h3>${news?.title}</h3>
            <p><span>SECTION:</span> ${news?.section}</p>
            <p><span>ABSTRACT:</span> ${news?.abstract}</p>
            <p id="dates"><span>DATE CREATED:</span> ${news?.created_date}</p>
            <p id="dates"><span>PUBLISHED:</span> ${news?.published_date}</p>
          </div>
        </div>
      `;

      TopNews_scie.appendChild(newsContainer2);
    }

    count += 1; // Increment count outside the if-else block
  });
};


(async () => {
  const data = await getTopNews_scie();
  updateContainer_scie(data);
})();

const getTopNews_world = async () => {
    try {
      const res = await fetch(API_URL_world);
      const data = await res.json();
      return data;
    } catch (e) {
      alert('An error occured', e);
      return [];
    }
  };

    const updateContainer_world = (data) => {
        TopNews_world.innerHTML = '';
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
                <h3>${news?.title}</h3>
                <p><span>SECTION:</span> ${news?.section}</p>
                <p><span>ABSTRACT:</span> ${news?.abstract}</p>
                <p id="dates"><span>DATE CREATED:</span> ${news?.created_date}</p>
                <p id="dates"><span>PUBLISHED:</span> ${news?.published_date}</p>
                </div>
            </div>
            `;
        
            TopNews_world.appendChild(newsContainer1);
            } else {
            newsContainer2.innerHTML = `
                <div class="news_cont2">
                <div class = "right">${multimediaHtml}</div>
                <div class = "info_cont2">
                <h3>${news?.title}</h3>
                    <p><span>SECTION:</span> ${news?.section}</p>
                    <p><span>ABSTRACT:</span> ${news?.abstract}</p>
                    <p id="dates"><span>DATE CREATED:</span> ${news?.created_date}</p>
                    <p id="dates"><span>PUBLISHED:</span> ${news?.published_date}</p>
                </div>
                </div>
            `;

            TopNews_world.appendChild(newsContainer2);
    }

    count += 1; // Increment count outside the if-else block
  });
};

(async () => {
    const data = await getTopNews_world();
    updateContainer_world(data);
  })();
  