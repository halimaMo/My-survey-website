const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys =require('../config/keys');

class Mailer extends helper.Mail{
    constructor({ subject, recipients}, content) {
        super();
        
        //sendgrid setup
        this.from_email = new helper.Email('no-reply@emaily.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        this.recipients = this.formatAdresses(recipients);

        this.addContent(this.body);
        this.addClickTracking();
        this.addRecipients();

    }
formatAdresses(recipients) {
    //destructuring
    return recipients.map(({ email }) => {
        return new helper.Email(email);
    });
 }
}

addClickTracking(){
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.clickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addClickTrackingSettings(trackingSettings);
}

module.exports = Mailer;