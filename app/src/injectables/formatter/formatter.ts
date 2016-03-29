import {register} from 'platypus';

export default class Formatter {

    formatDate(datestring: string): string {
        let d = new Date(datestring);
        let prettyDate = d.toDateString();
        let prettyTime = d.toTimeString();
        return prettyDate + ' ' + prettyTime;
    }
}

register.injectable('formatter', Formatter);
