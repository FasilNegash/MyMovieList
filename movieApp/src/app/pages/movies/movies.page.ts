import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { error } from 'protractor';
import { ApiResult, MovieService } from '../../services/movie.service';
import { environment } from 'src/environments/environment'
@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  constructor(public moviesService: MovieService, public loadingService: LoadingController) { }

  public movies: ApiResult;
  public moviesList=[];
  public currentPage = 1;
  public imageUrl = environment.imagesUrl;

  ngOnInit() {
    this.loadMovies();
  }

  public async loadMovies(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingService.create({
      message: "loading..",
      spinner: "bubbles"
    });
    await loading.present();
    this.moviesService.getTopRatesMovies(this.currentPage).subscribe(data => {
      this.moviesList.push(...data.results);

      if (event) {
        event.target.disabled = data.total_pages === this.currentPage;
    }
   },
     error => {
       console.log("error", error)
      })
    loading.dismiss();
    event?.target.complete();

   
  }

  public loadMore(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.loadMovies(event);
  }

}
