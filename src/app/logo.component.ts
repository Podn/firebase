import { Component, Input } from '@angular/core';

@Component({
  selector: 'logo',
  template: `
    <svg [attr.width]="width" [attr.height]="height" viewBox="0 0 378 223" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
   <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
       <g id="scratch" transform="translate(-460.000000, -639.000000)">
           <g id="Group-28" transform="translate(460.000000, 638.000000)">
               <g id="Group-17" transform="translate(78.500000, 112.000000) rotate(-90.000000) translate(-78.500000, -112.000000) translate(-33.000000, 34.000000)" fill="#6A67CE">
                   <g id="Group-18">
                       <g id="Group-2" transform="translate(67.393044, 43.728526)">
                           <polygon id="Triangle-2" points="105.229671 0 154.941951 111.308974 55.51739 111.308974"></polygon>
                           <polygon id="Triangle-3" points="50.7998769 6.9568109 101.582518 111.308974 0.0172360726 111.308974"></polygon>
                       </g>
                       <polygon id="Triangle-2" points="69.3924284 0 138.767621 155.0375 0.0172360726 155.0375"></polygon>
                   </g>
               </g>
               <text id="Peak" font-family="HelveticaNeue-Thin, Helvetica Neue" font-size="100" font-weight="300" fill="#000000">
                   <tspan x="173" y="138">Peak</tspan>
               </text>
           </g>
       </g>
   </g>
</svg>`,
})
export class LogoComponent {
    @Input() width: number;
    @Input() height: number;
};

