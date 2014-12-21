FakeMii

A Simple proxy for 3DS/N3DS (and probably other nintendo devices), working on Node.js. 
This proxy will fake the nintendo connection test so that you can use it on a WLAN without internet.
It is useful if you don't have a router or an internet AP, and wish to use the Wifi anyway. (FTP, netloader, ...)

At the moment any page will send a 404 error, but in the future it should also be able to act as a real proxy, but blocking the updates servers.


#HOWTO


##Run FakeMii
1. Install Node.js
2. run `node FakeMii.js` or simply execute run.bat if you work on Windows
3. It's running !


##Set up the Nintendo 3DS
1 Get your computer local IP adress. Select the one from the network your console is connecting to.
1.1 On Windows : Open a cmd.exe and type `ipconfig`
1.2 On linux : `ip addr show`
2 Configure your console proxy
2.1 Go to your console Proxy settings (Internet Settings->Connection Settings->Connection Settings->Connection X->Change Settings)
2.2 Set Proxy Settings to Yes
2.3 Go to Detailed Setup
2.4 Proxy server : The IP adress of your computer. Port:3000
3 Run the test !

##Running a WLAN on windows (can be used even while connected to another AP via WIFI)
1. Configure your hosted network if never done before
1.1 Open a cmd.exe as administrator (You need administrator privileges for netsh)
1.2 Use `netsh wlan set hostednetwork mode=allow ssid=MYWLANNAME key=MYWLANPASSWORD keyUsage=persistent`
2. Start the hosted network with `netsh wlan start hostednetwork`
3. Stop the hosted network with `netsh wlan stop hostednetwork`
