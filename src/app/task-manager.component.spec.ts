import { TestBed, async } from '@angular/core/testing';
import { TaskManagerComponent } from './task-manager.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TaskManagerComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TaskManagerComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'task-manager'`, () => {
    const fixture = TestBed.createComponent(TaskManagerComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('task-manager');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(TaskManagerComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('task-manager app is running!');
  });
});
