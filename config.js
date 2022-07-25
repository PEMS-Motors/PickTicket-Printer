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
        "MI":  "E:\\PickTickets\\01A",
        "IL":  "E:\\PickTickets\\02A",
        "SC":  "E:\\PickTickets\\03A",
        "MO":  "E:\\PickTickets\\04A",
        "CA":  "E:\\PickTickets\\05A",
        "TX":  "E:\\PickTickets\\06A",
        "MN":  "E:\\PickTickets\\07A",
        "CT":  "E:\\PickTickets\\08A",
        "MD":  "E:\\PickTickets\\09A",
        "FL":  "E:\\PickTickets\\10A",
        "CSH": "E:\\PickTickets\\CSH\\01A",
        "EMW": "E:\\PickTickets\\EMW\\01A"
    },
    "coldFolder": {
        "MI":  "Z:\\01A-Processed",
        "IL":  "Z:\\02A-Processed",
        "SC":  "Z:\\03A-Processed",
        "MO":  "Z:\\04A-Processed",
        "CA":  "Z:\\05A-Processed",
        "TX":  "Z:\\06A-Processed",
        "MN":  "Z:\\07A-Processed",
        "CT":  "Z:\\08A-Processed",
        "MD":  "Z:\\09A-Processed",
        "FL":  "Z:\\10A-Processed",
        "CSH": "Z:\\CSH\\01A-Processed",
        "EMW": "Z:\\EMW\\01A-Processed"
    },
    "safeFolder": {
        "MI":  "E:\\PickTicket-Copy\\01A",
        "IL":  "E:\\PickTicket-Copy\\02A",
        "SC":  "E:\\PickTicket-Copy\\03A",
        "MO":  "E:\\PickTicket-Copy\\04A",
        "CA":  "E:\\PickTicket-Copy\\05A",
        "TX":  "E:\\PickTicket-Copy\\06A",
        "MN":  "E:\\PickTicket-Copy\\07A",
        "CT":  "E:\\PickTicket-Copy\\08A",
        "MD":  "E:\\PickTicket-Copy\\09A",
        "FL":  "E:\\PickTicket-Copy\\10A",
        "CSH": "E:\\CSH\\01A",
        "EMW": "E:\\EMW\\01A"
    },
    "whsPrinters": {
        "MI":  `\\\\Owosso-DC-1\\WH-MI-3155-PickTicket`,
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
        "CSH": `CSH-Warehouse-Pickticket`,
        "EMW": `Winans-WH-M2535`,
    },
    "emailsettings": {
        "service": 'xxx', //IE gmail
        "user": 'xxx', // Must be full email (example@gmail.com)
        "pass": 'xxx', // Password for account used above
        "from": 'xxx', // Must be the email used for user account above
        "to": 'xxx, xxx' // To add more emails just use ,
    },
    "logs": {
        "normal":  "",
        "error": ""
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
        "CSH": "Y:\\Print-Test\\CSH\\01A",
        "EMW": "Y:\\Print-Test\\EMW\\01A"
    },
    "devcoldFolder": {
        "MI":  "Y:\\Print-Finished\\01A",
        "IL":  "Y:\\Print-Finished\\02A",
        "SC":  "Y:\\Print-Finished\\03A",
        "MO":  "Y:\\Print-Finished\\04A",
        "CA":  "Y:\\Print-Finished\\05A",
        "TX":  "Y:\\Print-Finished\\06A",
        "MN":  "Y:\\Print-Finished\\07A",
        "CT":  "Y:\\Print-Finished\\08A",
        "MD":  "Y:\\Print-Finished\\09A",
        "FL":  "Y:\\Print-Finished\\10A",
        "CSH": "Y:\\Print-Finished\\CSH\\01A",
        "EMW": "Y:\\Print-Finished\\EMW\\01A"
    },
    "devsafeFolder": {
        "MI":  "Y:\\Print-Test-Copy\\01A",
        "IL":  "Y:\\Print-Test-Copy\\02A",
        "SC":  "Y:\\Print-Test-Copy\\03A",
        "MO":  "Y:\\Print-Test-Copy\\04A",
        "CA":  "Y:\\Print-Test-Copy\\05A",
        "TX":  "Y:\\Print-Test-Copy\\06A",
        "MN":  "Y:\\Print-Test-Copy\\07A",
        "CT":  "Y:\\Print-Test-Copy\\08A",
        "MD":  "Y:\\Print-Test-Copy\\09A",
        "FL":  "Y:\\Print-Test-Copy\\10A",
        "CSH": "Y:\\Print-Test-Copy\\CSH\\01A",
        "EMW": "Y:\\Print-Test-Copy\\EMW\\01A"
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
    "devlogs": {
        "normal":  "Y:\\Print-Finished\\debug.log",
        "error": ""
    },
}