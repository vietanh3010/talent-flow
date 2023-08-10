

export default class Utils {

    static urlRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

    static pdfWorkerSrc = `${window.location.origin}/pdf-worker/pdf.worker.js`;

    static parseObjectToParam(object: Record<string, string | number>): string {
        return Object.entries(object).reduce((p, c) =>
            p + `${c[1] ?
                `${p !== '?' ? '&' : ''}${Array.isArray(c[1]) ? c[1].map(v => `${c[0]}=${v}`).join('&') : `${c[0]}=${encodeURIComponent(c[1])}`}`
                : ''}`
            , '?');
    }
}