import { Component, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'waitlist-form',
  templateUrl: './waitlist-form.component.html',
  styleUrls: ['./app.component.scss']
})
export class WaitlistFormComponent {
    email: string = '';
    name: string = '';
    project: string = '';
    podcastTitle: string = '';
    editingType: string = '';
    previousWorkLink: string = '';
    setup: boolean = false;
    editing: boolean = false;
    distribution: boolean = false;

    showSplash: boolean = false;

    constructor(
        public dialogRef: MatDialogRef<WaitlistFormComponent>,
        @Inject(MAT_DIALOG_DATA) public data,
        private db:AngularFirestore) {}

    get postData() {
        if (this.data.user_type === 'business') {
            const services = [this.setup ? 'setup' : '',
                              this.editing ? 'editing' : '',
                              this.distribution ? 'distribution' : ''].filter(x => !!x).join(',');
            return {
                'email': this.email,
                'name:': this.name,
                'project': this.project,
                'services': services,
                'podcastTitle': this.podcastTitle,
                'user_type': this.data.user_type,
            };
        }
        return {
                'email': this.email,
                'name:': this.name,
                'editingType': this.editingType,
                'project': this.project,
                'previousWorkLink': this.previousWorkLink,
                'user_type': this.data.user_type,
            };
    }

  submit(): void {
    this.db.collection('WaitList').add(this.postData);
    this.showSplash = true;
    setTimeout(() => {this.dialogRef.close()}, 3000);
  }
};
