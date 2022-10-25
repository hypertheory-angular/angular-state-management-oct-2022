import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appTimedRemove]',
})
export class TimedRemoveDirective implements OnInit {
  @Input() appTimedRemove = 5;
  @Input() appTimedRemoveMessage = 'Time To Go';
  constructor(
    private viewContainerRef: ViewContainerRef,
    private template: TemplateRef<any>,
  ) {}

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.template);
    setTimeout(() => {
      this.viewContainerRef.clear();
      console.log(this.appTimedRemoveMessage);
    }, this.appTimedRemove * 1000);
  }
}
