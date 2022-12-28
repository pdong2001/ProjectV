import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { BlobDto } from 'src/app/Shared/models/BlobDto.model';
import { BlobService } from 'src/app/Shared/services/blob.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
})
export class ImagesComponent implements OnInit {
  public loading = false;
  public images: BlobDto[] = [];
  constructor(private blobService: BlobService) {}

  ngOnInit(): void {
    this.loadData();
  }

  public loadData() {
    this.loading = true;
    this.blobService
      .getAll()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.images = res.data;
          }
        },
      });
  }
}
