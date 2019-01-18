import { Component, HostListener, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';

import { WaitlistFormComponent } from './waitlist-form.component'

declare let ga: Function;

@Component({
  selector: 'homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./app.component.scss']
})
export class HomescreenComponent {
    navOpen: boolean = false;
    isMobile = false;

    constructor(public dialog: MatDialog, private route: ActivatedRoute) {
      let firstPageLogged = false;
      this.setIsMobile();
      route.url.subscribe(segment => {
        if (!firstPageLogged) {
          firstPageLogged = true;
          return;
        }
        if (segment.length === 1) {
           ga('set', 'page', '/' + segment[0].path);
           ga('send', 'pageview');
        }
      });
    }

    setIsMobile() {
      this.isMobile = window.innerWidth < 720;
    }

    get pageCategory() {
        const cat = (this.route.snapshot.paramMap.get('category') || '').toLowerCase();
        if (!cat || (cat != 'business' && cat != 'editor')) {
            return 'business'
        }
        return cat;
    }

     @HostListener('window:resize', ['$event'])
      onResize(event) {
          this.setIsMobile();
      }

      get isBusiness(): boolean {
          return this.pageCategory == 'business';
      }

      get heroText() {
          return this.isBusiness ?
          'The easiest way to create a podcast for your business' :
          'Focus on editing and join a community of audio editors'
      }

      get heroSecondary() {
          return this.isBusiness ?
          'Never worry about editing or distributing your podcast again' :
          'Focus on editing and join a community of audio editors'
      }

      get valuePropTitle() {
          return this.isBusiness ? 'Podcast creation, simplified' : 'Do what you love and get paid for it';
      }


      get valuePropIcon() {
          return this.isBusiness ? {type: 'mi', name: 'mic'} : {type: 'fa', name: 'podcast'};
      }

      get valuePropSideIcons() {
        return this.isBusiness  ? ['podcast', 'file-audio', 'cut'] : ['cut', 'file-audio', 'headphones'];
      }

      get valueProps() {
          return this.isBusiness ?
              [
                  {'title': 'Give us your audio files', 'description': 'Upload your raw audio and tell us what you need.'},
                  {'title': 'We make your podcast sound great', 'description': "We’ll take care of audio mastering, removal of all the 'ahs' and 'ums’,  audio quality enhancement, stitching intros and outros and more."},
                  {'title': 'We distribute the finished podcast', 'description': "Approve the final version, then we'll automatically host, publish and distribute your podcast."},
              ]
              :
              [
                  {'title': 'Apply to be an editor', 'description': 'We’ll review your portfolio. If you’re a match, you’ll get access to our jobs.'},
                  {'title': 'Browse client requests', 'description': "We aggregate editing jobs for you and make interfacing with clients simple."},
                  {'title': 'Get paid fairly for your work', 'description': "We pay you what you're worth."},
              ];
      }

      openWaitlistDialog() {
        const data = {};
        data['user_type'] = this.isBusiness ? 'business' : 'editor';
        data['title'] = this.isBusiness ? 'Be the voice of your industry' :
                                          'Get consistent work that pays well';
        data['completion'] = this.isBusiness ? "You're all set! We'll reach out shortly to help you with your podcast!" :
                                               "You're all set! We'll reach out shortly about editing with Peak Podcasting!"
        if (!this.isMobile) {
          this.dialog.open(WaitlistFormComponent, {
            width: '80%',
            maxWidth: '800px',
            data,
          });
        } else {
          this.dialog.open(WaitlistFormComponent, {
            width: '100%',
            height: '80%',
            maxWidth: '100%',
            data,
          });
        }
      }

     cta(index) {
          return this.isBusiness     ?
          ['Join the waitlist', 'Learn more', 'Get Started'][index] :
          ['Start Editing',  'Learn more','Join Now'][index]
      }
};
