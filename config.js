// Copyright 2022 Precision Electric Motor Sales

module.exports = {
    "deployment": {
        "Production": "false"
    },
    "liveLocation": {
        // Enable warehouse means if the warehouse is active or has been shutdown (true / false)
        "MI": "true",
        "IL": "false",
        "SC": "false",
        "MO": "false",
        "CA": "false",
        "TX": "false",
        "MN": "false",
        "CT": "false",
        "MD": "false",
        "FL": "false",
        "TN": "false",
        "CSH": "false",
        "EMW": "false"
    },
    "hotFolder": {
        "MI":  "Y:\\Print-Test\\01A",
        "IL":  "Y:\\Print-Test\\02A",
        "SC":  "Y:\\Print-Test\\03A",
        "MO":  "Y:\\Print-Test\\04A",
        "CA":  "Y:\\Print-Test\\05A",
        "TX":  "Y:\\Print-Test\\06A",
        "MN":  "Y:\\Print-Test\\07A",
        "CT":  "Y:\\Print-Test\\08A",
        "MD":  "Y:\\Print-Test\\09A",
        "FL":  "Y:\\Print-Test\\10A",
        "CSH": "E:\\CSH\\01A",
        "EMW": "E:\\EMW\\01A"
    },
    "coldFolder": {
        "MI":  "C:\\test",
        "IL":  "Y:\\Print-Finished\\02A",
        "SC":  "Y:\\Print-Finished\\03A",
        "MO":  "Y:\\Print-Finished\\04A",
        "CA":  "Y:\\Print-Finished\\05A",
        "TX":  "Y:\\Print-Finished\\06A",
        "MN":  "Y:\\Print-Finished\\07A",
        "CT":  "Y:\\Print-Finished\\08A",
        "MD":  "Y:\\Print-Finished\\09A",
        "FL":  "Y:\\Print-Finished\\10A",
        "CSH": "Z:\\CSH\\01A-Processed",
        "EMW": "Z:\\EMW\\01A-Processed"
    },
    "safeFolder": {
        "MI":  "C:\\test\\copy",
        "IL":  "Y:\\Print-Test\\02A",
        "SC":  "Y:\\Print-Test\\03A",
        "MO":  "Y:\\Print-Test\\04A",
        "CA":  "Y:\\Print-Test\\05A",
        "TX":  "Y:\\Print-Test\\06A",
        "MN":  "Y:\\Print-Test\\07A",
        "CT":  "Y:\\Print-Test\\08A",
        "MD":  "Y:\\Print-Test\\09A",
        "FL":  "Y:\\Print-Test\\10A",
        "CSH": "E:\\CSH\\01A",
        "EMW": "E:\\EMW\\01A"
    },
    "whsPrinters": {
        "MI":  `\\\\Owosso-DC-1\\MI-Sales-M3655`,
        "IL":  `\\\\Owosso-DC-1\\MI-Sales-M3655`,
        "SC":  `\\\\Owosso-DC-1\\MI-Sales-M3655`,
        "MO":  `\\\\Owosso-DC-1\\MI-Sales-M3655`,
        "CA":  `\\\\Owosso-DC-1\\MI-Sales-M3655`,
        "TX":  `\\\\Owosso-DC-1\\MI-Sales-M3655`,
        "MN":  `\\\\Owosso-DC-1\\MI-Sales-M3655`,
        "CT":  `\\\\Owosso-DC-1\\MI-Sales-M3655`,
        "MD":  `\\\\Owosso-DC-1\\MI-Sales-M3655`,
        "FL":  `\\\\Owosso-DC-1\\MI-Sales-M3655`,
        "TN":  `\\\\Owosso-DC-1\\MI-Sales-M3655`,
        "CSH": `\\\\Owosso-DC-1\\MI-Sales-M3655`,
        "EMW": `\\\\Owosso-DC-1\\MI-Sales-M3655`,
    },
    "emailsettings": {
        "service": 'xxx', //IE gmail
        "user": 'xxx', // Must be full email (example@gmail.com)
        "pass": 'xxx', // Password for account used above
        "from": 'xxx', // Must be the email used for user account above
        "to": 'xxx, xxx' // To add more emails just use ,
    },

    // All sections below are for development and will not effect anything with production

    "devliveLocation": {
        // Enable warehouse means if the warehouse is active or has been shutdown (true / false)
        "MI": "true",
        "IL": "false",
        "SC": "false",
        "MO": "false",
        "CA": "false",
        "TX": "false",
        "MN": "false",
        "CT": "false",
        "MD": "false",
        "FL": "false",
        "TN": "false",
        "CSH": "false",
        "EMW": "false"
    },
    "devhotFolder": {
        "MI":  "Y:\\Print-Test\\01A",
        "IL":  "Y:\\Print-Test\\02A",
        "SC":  "Y:\\Print-Test\\03A",
        "MO":  "Y:\\Print-Test\\04A",
        "CA":  "Y:\\Print-Test\\05A",
        "TX":  "Y:\\Print-Test\\06A",
        "MN":  "Y:\\Print-Test\\07A",
        "CT":  "Y:\\Print-Test\\08A",
        "MD":  "Y:\\Print-Test\\09A",
        "FL":  "Y:\\Print-Test\\10A",
        "CSH": "E:\\CSH\\01A",
        "EMW": "E:\\EMW\\01A"
    },
    "devcoldFolder": {
        "MI":  "C:\\test",
        "IL":  "Y:\\Print-Finished\\02A",
        "SC":  "Y:\\Print-Finished\\03A",
        "MO":  "Y:\\Print-Finished\\04A",
        "CA":  "Y:\\Print-Finished\\05A",
        "TX":  "Y:\\Print-Finished\\06A",
        "MN":  "Y:\\Print-Finished\\07A",
        "CT":  "Y:\\Print-Finished\\08A",
        "MD":  "Y:\\Print-Finished\\09A",
        "FL":  "Y:\\Print-Finished\\10A",
        "CSH": "Z:\\CSH\\01A-Processed",
        "EMW": "Z:\\EMW\\01A-Processed"
    },
    "devsafeFolder": {
        "MI":  "C:\\test\\copy",
        "IL":  "Y:\\Print-Test\\02A",
        "SC":  "Y:\\Print-Test\\03A",
        "MO":  "Y:\\Print-Test\\04A",
        "CA":  "Y:\\Print-Test\\05A",
        "TX":  "Y:\\Print-Test\\06A",
        "MN":  "Y:\\Print-Test\\07A",
        "CT":  "Y:\\Print-Test\\08A",
        "MD":  "Y:\\Print-Test\\09A",
        "FL":  "Y:\\Print-Test\\10A",
        "CSH": "E:\\CSH\\01A",
        "EMW": "E:\\EMW\\01A"
    },
    "devwhsPrinters": {
        "MI":  `\\\\Owosso-DC-1\\MI-Sales-M3655`,
        "IL":  `\\\\Owosso-DC-1\\MI-Sales-M3655`,
        "SC":  `\\\\Owosso-DC-1\\MI-Sales-M3655`,
        "MO":  `\\\\Owosso-DC-1\\MI-Sales-M3655`,
        "CA":  `\\\\Owosso-DC-1\\MI-Sales-M3655`,
        "TX":  `\\\\Owosso-DC-1\\MI-Sales-M3655`,
        "MN":  `\\\\Owosso-DC-1\\MI-Sales-M3655`,
        "CT":  `\\\\Owosso-DC-1\\MI-Sales-M3655`,
        "MD":  `\\\\Owosso-DC-1\\MI-Sales-M3655`,
        "FL":  `\\\\Owosso-DC-1\\MI-Sales-M3655`,
        "TN":  `\\\\Owosso-DC-1\\MI-Sales-M3655`,
        "CSH": `\\\\Owosso-DC-1\\MI-Sales-M3655`,
        "EMW": `\\\\Owosso-DC-1\\MI-Sales-M3655`,
    },
}