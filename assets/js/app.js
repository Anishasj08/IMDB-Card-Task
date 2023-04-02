
const cl=console.log;

const moviecontainer = document.getElementById("moviecontainer");
  
let result="";

movieArray.forEach(movie =>{
      result+=`          
 <div class="col-md-3">
      <div class="card">
          <figure>
              <img src="https://image.tmdb.org/t/p/w1280/${movie.poster_path}" class="img-fluid">
              <div class="figcaption">
                   <div class="heading">
                      <div class="row">
                          <div class="col-md-10">
                              <h3>${movie.original_title}</h3>
                          </div>
                          <div class="col-md-2 d-flex align-items-center">
                          <span class="badge badge-warning">${movie.vote_average}</span>
                      </div>
                  </div>
              </div>
              <div class="overview">
                  <h4 >
                      <em>Overview</em>
                  </h4>
                  <p>${movie.overview}</p>
              </div>
          </div>
      </figure>
  </div>
  </div>`

})



moviecontainer.innerHTML=result;
