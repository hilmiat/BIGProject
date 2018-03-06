import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RumahSakitService } from '../../service/rumah-sakit.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id
  rumahsakit
  constructor(private route:ActivatedRoute,
     private rsService:RumahSakitService) { 
   
    // this.id = this.route.snapshot.params.id;
    // console.log('ID:',this.id);
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        // console.log(params['id']);
        this.id=params['id'];
        this.rsService.getDataRS(this.id).subscribe(
          result=>{
            console.log(result)
            this.rumahsakit = result.data[0];
          },error=>{
            console.log(error)
          }
        )
      }
    );
  }

}
