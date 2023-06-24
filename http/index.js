const http=require("http")
const fs=require("fs")
const server=http.createServer((request,response)=>{
  if(request.url==="/"){
    response.end("This is Home Page")
  }else if(request.url==="/data"){
    fs.readFile("./data.json",(err,data)=>{
      if(err){
        response.write(err)
        response.end()
      }else{
        response.end(data)
      }
    })
  }else if(request.url==="/reports"){
    response.end("Reports")
  }else if(request.url==="/products"){
    response.setHeader("Content-type","text/html")
    response.end("<h1>Products page</h1>")
  }else if(request.url==="/l"){
    response.end("l page")
  }
})
// console.log(server)
server.listen(4500,()=>{
    console.log("port 4500 is running")
})