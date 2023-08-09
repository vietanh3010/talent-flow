

export default class Utils {

    static urlRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

    static pdfWorkerSrc = `${window.location.origin}/pdf-worker/pdf.worker.js`;
}