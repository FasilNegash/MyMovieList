import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { error } from 'protractor';
import { ApiResult, MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  constructor(public moviesService: MovieService, public loadingService: LoadingController) { }

  public moviesList: ApiResult;
  public currentPage = 1;

  ngOnInit() {
    this.loadMovies();
  }

  public async loadMovies() {
    const loading = await this.loadingService.create({
      message: "loading..",
      spinner: "bubbles"
    });
    await loading.present();
    this.moviesService.getTopRatesMovies(this.currentPage).subscribe(data => {
     this.moviesList = data;
   },
     error => {
       console.log("error", error)
      })
    loading.dismiss();
  }

}
