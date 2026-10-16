import { Component, input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-screenshot-gallery',
  standalone: true,
  templateUrl: './project-screenshot-gallery.component.html',
  styleUrl: './project-screenshot-gallery.component.css'
})
export class ProjectScreenshotGalleryComponent implements OnInit, OnDestroy {
  readonly screenshotCount = input.required<number>();
  readonly screenshotsDirectory = input.required<string>();
  readonly intervalTime = input(5000);

  currentImageIndex = 1;
  private interval: ReturnType<typeof setInterval> | undefined;

  get currentImage(): string {
    return `${this.screenshotsDirectory()}screenshot${this.currentImageIndex}.jpg`;
  }

  ngOnInit(): void {
    this.startInterval();
  }

  ngOnDestroy(): void {
    this.clearInterval();
  }

  nextScreenshot(): void {
    this.currentImageIndex = this.currentImageIndex + 1 > this.screenshotCount()
      ? 1
      : this.currentImageIndex + 1;
    this.startInterval();
  }

  previousScreenshot(): void {
    this.currentImageIndex = this.currentImageIndex - 1 < 1
      ? this.screenshotCount()
      : this.currentImageIndex - 1;
    this.startInterval();
  }

  private startInterval(): void {
    this.clearInterval();
    this.interval = setInterval(() => this.nextScreenshot(), this.intervalTime());
  }

  private clearInterval(): void {
    if (this.interval !== undefined) {
      clearInterval(this.interval);
      this.interval = undefined;
    }
  }
}
