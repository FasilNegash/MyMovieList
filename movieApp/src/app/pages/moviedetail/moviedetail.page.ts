import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.page.html',
  styleUrls: ['./moviedetail.page.scss'],
})
export class MoviedetailPage implements OnInit {

  constructor(private router: ActivatedRoute, private moviesService: MovieService) { }

  public moviedetail = null;
  public imageUrl = environment.imagesUrl;

  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id');
    this.moviesService.getMoivieDetail(id).subscribe(data => {
      this.moviedetail = data;
    });
  }

}
