const readline = require('readline');
const fs = require('fs');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
console.log("E.g : google.com")
rl.question("Any websites name with domain? : ", domainDanWebDia => {
	if(domainDanWebDia == "") { // tidak di isi (blank)
		console.log("Please enter the websites name for checking ip")
	} else {
		/*fs.writeFileSync(
			"logsweb.txt",
			`you just checked ${domainDanWebDia}`
		);*/
const dns = require('dns');
// dns.lookup() function searches
// for user IP address and family
// if there is no error
dns.lookup(domainDanWebDia, 
(err, addresses, family, hostname) => {
    // Print the address found of user
    console.log('addresses:', addresses);
    // Print the family found of user 
    console.log('family:', family);
//(`${addresses} + ${family}`)
    console.log(hostname)
})
            }
        })
