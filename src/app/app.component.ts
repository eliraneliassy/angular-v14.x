import { LoggerService } from './logger.service';
import { timer, take } from 'rxjs';
import { NameComponent } from './name/name.component';
import { DatePipe, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, ViewChild, ViewContainerRef, createComponent, ApplicationRef, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NgIf, DatePipe, NgOptimizedImage]
})
export class AppComponent {

  appRef: ApplicationRef = inject(ApplicationRef);

  @ViewChild('container', { read: ViewContainerRef }) container?: ViewContainerRef;

  loadCmp() {

    this.appRef.injector.runInContext(() => {
      const logger = inject(LoggerService);

      logger.log('my msg');
    })



    const cmpRef = createComponent(NameComponent, {
      environmentInjector: this.appRef.injector,
      hostElement: this.container?.element.nativeElement
    });

    timer(0, 1000)
      .pipe(take(1))
      .subscribe(() => {
        cmpRef.instance.name = 'Arthur';
        cmpRef.setInput('name', 'Eliran');
      })



    this.appRef.attachView(cmpRef.hostView);
  }


}
