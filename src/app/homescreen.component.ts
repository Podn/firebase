import { Component, HostListener, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';

import { WaitlistFormDialogComponent } from './waitlist-form-dialog.component'

declare let ga: Function;

@Component({
  selector: 'homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./app.component.scss']
})
export class HomescreenComponent {
    navOpen = false;
    isMobile = false;
    pageCategory = 'business';
    pageType = 'home';

    constructor(
      private router: Router,
      private route: ActivatedRoute,
      public dialog: MatDialog) {
      this.setIsMobile();
      this.route.url.subscribe(segment => {
        scroll(0,0);
        const path = segment.map(seg => seg.path).join('/');
        if (path) {
           ga('set', 'page', '/' + path);
           ga('send', 'pageview');
        }
      });
      route.data.subscribe(data => {
        if ((data['type'] || '').toLowerCase() !== 'editor') {
          this.pageCategory = 'business';
        } else {
          this.pageCategory = 'editor';
        }
        this.pageType = (data['page'] || 'home').toLowerCase();
      });
    }

    setIsMobile() {
      this.isMobile = window.innerWidth < 720;
    }

     @HostListener('window:resize', ['$event'])
      onResize(event) {
          this.setIsMobile();
      }

      get isHomepage(): boolean {
        return this.pageType === 'home';
      }

      get isBusiness(): boolean {
          return this.pageCategory === 'business';
      }

      get heroText() {
          return this.isBusiness ?
          'The easiest way to create a podcast for your business' :
          'Focus on editing and join a community of audio editors'
      }

      get heroSecondary() {
          return this.isBusiness ?
          'Never worry about editing or distributing again' :
          'Focus on editing and join a community of audio professionals'
      }

      get valuePropTitle() {
          return this.isBusiness ? 'Podcast creation simplified' : 'Do what you love and get paid for it';
      }

      get valueProps() {
          return this.isBusiness ?
              [
                  {'title': 'Give us your audio files', 'description': 'Upload your raw audio and tell us what you need.', icon: 'upload'},
                  {'title': 'We make your podcast sound great', 'description': "We’ll take care of audio mastering, removal of all the 'ahs' and 'ums’,  audio quality enhancement, stitching intros and outros and more.", icon: 'headphones'},
                  {'title': 'We distribute the finished podcast', 'description': "Approve the final version, then we'll automatically host, publish and distribute your podcast.", icon: 'broadcast-tower'},
              ]
              :
              [
                  {'title': 'Apply to be an editor', 'description': 'We’ll review your portfolio. If you’re a match, you’ll get access to our jobs.', icon: 'cut'},
                  {'title': 'Browse client requests', 'description': "We aggregate editing jobs for you and make interfacing with clients simple.", icon: 'file-audio'},
                  {'title': 'Get paid fairly for your work', 'description': "We pay you what you're worth.", icon: 'headphones'},
               ]
       }

       get package() {
        if (!this.isBusiness || this.pageType !== 'waitlist') return '';
        return this.route.snapshot.queryParamMap.get('package') || '';
       }

      openWaitlistDialog(opt_pacakge: string|undefined) {
        if (this.isMobile) {
          this.router.navigate([`/${this.isBusiness ? 'business' : 'editor'}/${this.isBusiness ? 'waitlist' : 'apply'}`], { queryParams: {package: opt_pacakge || ''} });
        } else {
          const data = { isBusiness: this.isBusiness };
          if (opt_pacakge) {
            data['package'] = opt_pacakge;
          }
          this.dialog.open(WaitlistFormDialogComponent, {
            width: '80%',
            maxWidth: '500px',
            data,
          });
        }
      }

     cta(index) {
          return this.isBusiness     ?
          ['Join the Waitlist', 'Learn more', 'Join the Waitlist'][index] :
          ['Start Editing', 'Learn more', 'Join Now'][index]
      }

      pricing(value) {
        this.openWaitlistDialog(value);
      }
};
