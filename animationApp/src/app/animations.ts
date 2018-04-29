import { trigger, style, animate, transition, state } from '@angular/animations';

export const fade = [
    trigger('fade', [
        state('in', style({ 'opacity': '1' })),
        state('out', style({ 'opacity': '0' })),
        transition('* <=> *', [
            animate(500)
        ])
    ])
];

export const move = [
    trigger('move', [
        state('topRight', style({ left: 'calc(100% - 128px)', top: 0 })),
        state('bottomLeft', style({ left: 0, top: 'calc(100% - 128px)' })),
        transition('topRight <=> bottomLeft', animate(5000)),
    ])
];

export const rotate = [
    trigger('rotatedState', [
        state('default', style({ transform: 'rotate(0)' })),
        state('rotated', style({ transform: 'rotate(-180deg)' })),
        transition('rotated => default', animate('1500ms ease-out')),
        transition('default => rotated', animate('400ms ease-in'))
    ])
];

