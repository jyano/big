
postMessage("I\'m working before postMessage(\'ali\').")

onmessage=function(e){postMessage("Hi " + e.data)}

self.addEventListener('message',
    function(e){
        self.postMessage(e.data)},
    false)
