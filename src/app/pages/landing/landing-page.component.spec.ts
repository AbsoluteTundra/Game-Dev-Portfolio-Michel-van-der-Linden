import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { describe, expect, it } from 'vitest';
import { routes } from '../../app.routes';
import { LandingPageComponent } from './landing-page.component';
import { ProjectPageComponent } from '../project/project-page.component';

describe('LandingPageComponent', () => {
  it('renders the portfolio introduction and projects', async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageComponent],
      providers: [provideRouter(routes)]
    }).compileComponents();

    const fixture = TestBed.createComponent(LandingPageComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain("Welcome to my portfolio I'm Michel van der Linden");
    expect(fixture.nativeElement.querySelectorAll('app-project-gallery').length).toBe(5);
  });

  it('loads a project page from its hash route', async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter(routes)]
    }).compileComponents();

    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/Muscle%20Magic', ProjectPageComponent);

    expect(harness.routeNativeElement?.textContent).toContain('Muscle Magic');
    expect(harness.routeNativeElement?.querySelector('iframe')).not.toBeNull();

    const projectPage = harness.routeDebugElement?.injector.get(ProjectPageComponent);
    const trailerUrl = projectPage?.trailerUrl();
    harness.detectChanges();
    expect(projectPage?.trailerUrl()).toBe(trailerUrl);
  });
});
