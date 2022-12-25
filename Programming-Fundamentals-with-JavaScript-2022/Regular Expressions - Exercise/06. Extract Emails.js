function extractMail(str) {
    const pattern = /(?<!\S)[A-Za-z0-9]+([\.\-\_]*[A-Za-z0-9]+)*@[A-Za-z]+([\.\-]*[A-Za-z]+)*(\.[A-Za-z]+)/gi;
    let match = str.match(pattern);
    console.log(match.join('\n'));
}
extractMail('Please contact us at: support@github.com.');
extractMail('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');
extractMail('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.');