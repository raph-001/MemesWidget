

let url = "https://www.reddit.com/r/memes.json"

let fm = FileManager.iCloud()
let fileText = await fm.readString(fm.documentsDirectory()+ "/memes.txt")
var lines = fileText.split(/\r\n|\r|\n/)
let numLines = lines.count
console.log(numLines)
let imageUrl;
let memeTitle;



memeTitle = lines[0]
imageUrl = lines[1]
console.log(memeTitle)
lines.shift()
lines.shift()
console.log(lines.length)
  
if (lines.length === 0) {
  console.log("hi")
  let req = new Request(url)
  let json = await req.loadJSON()
  
  var children = json.data.children
  children.forEach(function(child) {
    
//     if (child.data.is_video === true) {
      
  lines.push(child.data.title)
  lines.push(child.data.url)
//     }
    
  }) 
    
    
  
  
}
console.log(lines)
let str = lines.join("\n")// 
fm.writeString(fm.documentsDirectory()+"/memes.txt", str)


let imagereq = new Request(imageUrl)
let image = await imagereq.loadImage()


time = new Date(1 )


widget = new ListWidget()
Script.setWidget(widget)


let gradient = new LinearGradient()
gradient.locations = [0, 1]
gradient.colors = 
[
new Color("#141414"),
new Color("#13233f")
]
widget.backgroundGradient = gradient


font = new Font("arial", 20)
Title = widget.addText(memeTitle)
Title.font = Font.boldSystemFont(15)
Title.centerAlignText()

widget.addSpacer(10)

imageRenderer = widget.addImage(image)
imageRenderer.centerAlignImage()
imageRenderer.cornerRadius = 10
// // 
widget.presentLarge()

/
App.close()

