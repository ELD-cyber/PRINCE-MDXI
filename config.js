const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "prince_md-eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1BabFp1b3R2blVrUXBzdERWUXd3SEFmZlRyaGRVTXNDVDluNGx3MlIwMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUkhkTy9SSFo4K0JPTy9hOHZGbzBrNEVJRi9iWnE4bFdNaitBOVYwY3ZFTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTDE1bWNJZXJhTXNwVjFJTnNoMkRrejU5R0J5L2hTR2ltQlJ3RlBqZ1dFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzWDN5VDBuaEUyT2l4VE96WG8vWDFlYi9YcUpma3hyWUdJUjNPdU5xZWk4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFLMU0rckFDVWx6R2FoU0xnMXZEaXBXQzlyUjhBRDRyZU5ZZWVFdVVKWE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1OOE5XclJmUXlvNkQ2d2l2d1hLK3F5Z1JrY2k0aFV1aHNjTzBtc1hxSEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0xSVGxFTWxCeWdyYmpPalYrTkJpKzFMU3NzVTA4OUdMa1pqZ1dkRzVFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRTR5ekQyMTBOeENFb2FoWGhNelE3M0RVYXg2UUx2d2pnSzdzL2VIRnNoUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZYdzBJTXM4VmxPem00UmhhVE5MYlMyVGNONTh1d1VTUFdVbGJzVER3cURHQVNEMDJKcGtwWTBXWVA0L3ZtajBkNVBCY0EzZUpFUEk3K2EwVTlaYWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEsImFkdlNlY3JldEtleSI6Ing5MVRJeEhTdG9ZbGdHUkZ6QTZ2QWpudnNjd2NSWFVmcTdrNGgwT2NFUVk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InBhR3YyMDZyVFphUjUtcUh3dWotLXciLCJwaG9uZUlkIjoiYWRjZThhZGItZmJmYS00MTkxLWIxZjctMmM2ODRhYzg5MzgyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlvQ0IvMTNwby9ldmxReEpRMHdFd09mT050az0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRM3JHQzdmRlFIaG44UDZDMTA3S3JVQUZ2MDg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOEIxUDFLRzgiLCJtZSI6eyJpZCI6IjI2MzcxNTM5Nzc0MToyMEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSkhoaFpNSEVNamF4TUFHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVE4vNm41WjNpWTZMUWNWTlhVV0g0dWF1NXhpNnVzSnh1OGFRaThGK0JtVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoibVVhOTVzM3cwT3Uwb1IxeGpzZjB0cmtqeXlnOUZtVWpSYUl4QTFJcngzcElNMkRSVmdtWVprV2FsVENKMk1UZ0d5SWdQZ29ybnErd3BaYk0xZS9vQnc9PSIsImRldmljZVNpZ25hdHVyZSI6IlQ3a3FMQ0EvalhJZDBxQkovaVZrS0ZKTXNQNnJmcS9ieWxrMXJJNU9sc3pHTGFhWGR2VlQ5d1lLQUExSmVXd09POHQyKzR1UzRROERpZi9GZGVWT2lRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzE1Mzk3NzQxOjIwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlV6ZitwK1dkNG1PaTBIRlRWMUZoK0xtcnVjWXVyckNjYnZHa0l2QmZnWmwifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDU5NTYxODIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTnhvIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY PRINCE-MDX *",
// set the auto reply massage on status reply  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "PRINCE MDX",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
OWNER_NUMBER: process.env.OWNER_NUMBER || "237677224245",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ᴘʀɪɴᴄᴇ ᴛᴇᴄʜ",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴛᴇᴄʜ  ",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/kzfne8.jpeg",
// add img for alive msg
MENU_IMG: process.env.MENU_IMG || "https://raw.githubusercontent.com/Mayelprince/url/main/url/1264.jpg",
// menu image 
MENU3_IMG: process.env.MENU_IMG || "https://files.catbox.moe/upmwpw.jpg",
// menu image 
RUNTIME_IMG: process.env.RUNTIME_IMG || "https://files.catbox.moe/ykdtkm.jpeg",
// runtime image 
WELCOME_ENABLED: process.env.WELCOME_ENABLED || "true",
    // welcome group members 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "237677224245",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
