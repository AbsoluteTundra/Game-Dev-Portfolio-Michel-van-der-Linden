import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { describe, expect, it, vi } from 'vitest';
import { Project } from '../../data/projects-data';
import { ProjectGalleryComponent } from './project-gallery.component';

describe('ProjectGalleryComponent', () => {
  it('cycles through screenshots while the card is hovered', async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectGalleryComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    vi.useFakeTimers();
    try {
      const fixture = TestBed.createComponent(ProjectGalleryComponent);
      const project: Project = {
        projectTitle: 'Test Project',
        projectDescription: 'Test description',
        projectDirectory: 'projects/TestProject/',
        projectTeamSize: 'Solo',
        projectEngine: 'Unity',
        projectYear: '2026',
        projectDevStory: 'Test story',
        screenshotCount: 2,
        projectTags: []
      };

      fixture.componentRef.setInput('projectInfo', project);
      fixture.detectChanges();

      const card = fixture.nativeElement.querySelector('article') as HTMLElement;
      const image = fixture.nativeElement.querySelector('img') as HTMLImageElement;
      card.dispatchEvent(new MouseEvent('mouseenter'));
      fixture.detectChanges();
      expect(image.getAttribute('src')).toBe('projects/TestProject/logo.jpg');

      vi.advanceTimersByTime(1000);
      fixture.detectChanges();
      expect(image.getAttribute('src')).toBe('projects/TestProject/screenshot1.jpg');

      vi.advanceTimersByTime(1000);
      fixture.detectChanges();
      expect(image.getAttribute('src')).toBe('projects/TestProject/screenshot2.jpg');

      vi.advanceTimersByTime(1000);
      fixture.detectChanges();
      expect(image.getAttribute('src')).toBe('projects/TestProject/screenshot1.jpg');

      card.dispatchEvent(new MouseEvent('mouseleave'));
      fixture.detectChanges();
      expect(image.getAttribute('src')).toBe('projects/TestProject/logo.jpg');
    } finally {
      vi.useRealTimers();
    }
  });
});
