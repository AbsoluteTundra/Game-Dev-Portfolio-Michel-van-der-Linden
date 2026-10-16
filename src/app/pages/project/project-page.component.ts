import { Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ProjectsData, Project } from '../../data/projects-data';
import { ProjectScreenshotGalleryComponent } from '../../shared/project-screenshot-gallery/project-screenshot-gallery.component';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [ProjectScreenshotGalleryComponent],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.css'
})
export class ProjectPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);
  private readonly sanitizer = inject(DomSanitizer);
  readonly project = signal<Project | undefined>(undefined);
  readonly trailerUrl = computed(() => {
    const url = this.project()?.projectTrailerLink;
    return url ? this.trustTrailerUrl(url) : null;
  });

  constructor() {
    this.route.paramMap.pipe(
      map((params) => params.get('projectTitle')),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((projectTitle) => {
      this.project.set(ProjectsData.find((projectInfo) => projectInfo.projectTitle === projectTitle));
    });
  }

  trustTrailerUrl(url: string): SafeResourceUrl {
    const trailerUrl = new URL(url);
    if (trailerUrl.origin !== 'https://www.youtube.com' || !trailerUrl.pathname.startsWith('/embed/')) {
      throw new Error(`Unsupported project trailer URL: ${url}`);
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
