
 console.log(problema01())

function problema01() {
    
    var result = []
    var string = ['h3ll0 w0rld', 'w3b d3v3l0p3r', "0tt3rw1s3", "j4v4scr1pt"]
    for (let i = 0; i < string.length; i++) {
        result = string[i].replace(/1/g, "i").replace(/3/g, "e").replace(/4/g, 'a').replace(/5/g, 's').replace(/0/g, 'o')
        
    }
   
    return result
    
}