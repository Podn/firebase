import { Component } from '@angular/core';

@Component({
  selector: 'how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./app.component.scss']
})
export class HowItWorksComponent {
    private currentDisplayed: string = 'enterprise';

    show(name: string) {
        this.currentDisplayed = name;
    }

    get sectionList() {
        if (this.currentDisplayed === 'basic') {
            return [
                {
                    title: 'Making your raw audio an episode',
                    items: [
                        'Submit Raw Audio and any episode specific audio',
                        'We remove the Ahs and Ums and balance volumes',
                        'Recieve a polished podcast episide',
                    ],
                },
            ];
        }
        if (this.currentDisplayed === 'premium') {
            return [
                {
                    title: 'Making your raw audio an episode',
                    items: [
                        'Submit Raw Audio and any episode specific audio',
                        'We remove the Ahs and Ums and balance volumes',
                        'Recieve as transcript',
                        'Apply comments and edits to the transcript',
                        'Recieve a polished podcast episide',
                    ],
                },
            ];


        }
        if (this.currentDisplayed === 'enterprise') {
            return [
                {
                    title: 'Getting the podcast online',
                    items: [
                        'Set up podcast website',
                        'Find intro / outro music',
                        'Find podcast art',
                        'Submit podcast to all client services',
                    ],
                },
                {
                    title: 'Making your raw audio an episode',
                    items: [
                        'Submit Raw Audio and any episode specific audio',
                        'We remove the Ahs and Ums and balance volumes',
                        'Recieve as transcript',
                        'Apply comments and edits to the transcript',
                        'Recieve a polished podcast episide',
                    ],
                },
                {
                    title: 'Getting your episode online',
                    items: [
                        'Write up per-episode description',
                        'Signoff of on final episode, title and description',
                        'Post podcast on hosting',
                        'Recieve podcast statistics',
                    ],
                },
            ];
        }
        return [];
    }
};
