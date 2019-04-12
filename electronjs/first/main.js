// electron = chromium + node

const {
    app,
    BrowserWindow
} = require("electron");

const path = require("path");
const url = require("url");


let win;

let createWindow = ()=>{

    //win = new BrowserWindow();
    win = new BrowserWindow({width:800,height:800,
        maxHeight:1000,maxWidth:1000,backgroundColor:"#228b22",
        frame:true,title:"hello"})

    // child will always be on top of the parent
    // modal deactivates the parent
    child = new BrowserWindow({parent:win,title:"child",modal:true,show:false})

    // Load url formatted file onto the window
    win.loadURL(url.format({
        pathname:path.join(__dirname,"index.html"),
        protocol:"file",
        slashes:true
    }));

    child.loadURL("https://www.github.com/angadsharma1016");

    // show child window when its ready to show
    child.on("ready-to-show",()=>{
        child.show();
    });

    console.log("Hello world from electron backend");

    // open developer tools
    win.webContents.openDevTools();

    // on close put win to null
    win.on("closed",()=>{
        win=null;
    });
}



// on ready create a window
app.on("ready",createWindow);

// MAC handler functions
app.on("window-all-closed",()=>{
    if(process.platform!=="darwin")
        app.quit();
});

app.on("activate",()=>{
    if(win===null)
        createWindow();
});
