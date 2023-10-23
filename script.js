//오픈 API를 이용하여 인기영화 데이터 가져오기
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTFkYzVlZGU3M2I0YzdkOTkzMjFkNDA0MTE2YjVlOSIsInN1YiI6IjY1MzA4OWY2OTQ1ZDM2MDEwYzM1YjQzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i5MmyxAS9JKVxACccWkvKjFLsa4ULu9ZrpNNyXhDgvE",
  },
};

function fet() {
  fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      const a = response.results;
      // forEach를 사용 -> 배열에서 가져오고 싶은 요소 가져오기
      a.forEach((i) => {
        let img = i["poster_path"];
        let id = i["id"];
        let title = i["title"];
        let vote_average = i["vote_average"];
        let overview = i["overview"];

        let c = `<section class="card-list" style="display: block;">
    <div class="card" ${id}>
    <img class="top1-image"
        src=https://image.tmdb.org/t/p/w500${img} alt="">
    <h3 class="movie-title">${title}</h3>
    <p class="⭐️">${vote_average}</p>
    <p>${overview}</p>
    </div>
    </section>`;
        let btn = document.querySelector(".search-button");
        let b = document.querySelector(".card-list");
        //   div 구역 만들기
        let temp_html = document.createElement("div");
        temp_html.innerHTML = c;
        // card-list에 temp_html(div)넣기
        b.append(temp_html);
        // 클릭했을 때 id 알려주는 alert 창 띄우게 하기
        temp_html.addEventListener("click", (e) => {
          alert("Movie Id => " + id);
        });
        let input = document.querySelector("input");
        input.addEventListener("change", function () {
          if (title.toLowerCase().includes(this.value)) {
            temp_html.style.display = "block";
          } else {
            temp_html.style.display = "none";
          }
        });
      });
    })
    .catch((err) => console.error(err));
}
fet();
