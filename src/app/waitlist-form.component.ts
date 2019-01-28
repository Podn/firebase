import { Component, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { environment } from '../environments/environment';

@Component({
  selector: 'waitlist-form',
  templateUrl: './waitlist-form.component.html',
  styleUrls: ['./app.component.scss']
})
export class WaitlistFormComponent {
    @Input() isBusiness: boolean = true;
    @Input() package: string = '';

    email: string = '';
    name: string = '';
    project: string = '';
    company: string = '';
    editingType: string = '';
    previousWorkLink: string = '';

    showSplash: boolean = false;

    constructor(private db:AngularFirestore) {}

    get title() {
        return this.isBusiness ? 'Get Started' :
                                 'Get consistent work that pays well';
    }

    get completion() {
        return this.isBusiness ? "You're all set! We'll reach out shortly to help you with your podcast!" :
                                 "You're all set! We'll reach out shortly about editing with Peak Podcasting!";
    }

    get postData() {
        const data = this.isBusiness ?
             {
                'email': this.email,
                'name:': this.name,
                'company': this.company,
                'user_type': 'business',
            } : {
                'email': this.email,
                'name:': this.name,
                'editingType': this.editingType,
                'project': this.project,
                'previousWorkLink': this.previousWorkLink,
                'user_type': 'editor',
            };
        if (this.package) data['package'] = this.package;
        return data;
    }

  submit(): void {
    this.db.collection('WaitList').add(this.postData);
    this.showSplash = true;
  }
};
