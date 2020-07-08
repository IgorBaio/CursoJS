const ip = /((\.)?[0-9]{1,3}(\.)?)+/;
console.log(ip.exec("255.255.255.0"));
console.log(ip.exec("192.168.1.x"));
console.log(ip.exec("192.168.1.1"));
console.log(ip.exec("192.168.1.0"));