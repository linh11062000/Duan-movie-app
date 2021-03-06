import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
})
export class CarouselComponent implements OnInit {
  carouselArray: any = [
    {
      img: "https://s3img.vcdn.vn/123phim/2021/04/ban-tay-diet-quy-evil-expeller-16177781815781.png",
      trailer: "https://www.youtube.com/watch?v=XRm1P7oGpMQ",
    },
    {
      img: "https://s3img.vcdn.vn/123phim/2021/04/lat-mat-48h-16177782153424.png",
      trailer: "https://www.youtube.com/watch?v=HU70ECwum2s",
    },
    {
      img: "https://s3img.vcdn.vn/123phim/2020/09/ac-quy-doi-dau-deliver-us-from-evil-c16-15994546580686.jpg",
      trailer: "https://www.youtube.com/watch?v=KtLXv04nM9s",
    },
    {
      img: "https://s3img.vcdn.vn/123phim/2020/08/tenet-15984144207145.png",
      trailer: "https://www.youtube.com/watch?v=L3pk_TBkihU",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
