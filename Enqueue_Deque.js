var InputStack = []
var OutputStack = []

function Enqeue(InputStack, item) {
    InputStack.push(item)
}


function deque(InputStack, OutputStack, item) {
    if (OutputStack.length <= 0) {
        while (InputStack.length > 0) {
            var ItemToOutput = InputStack.pop(item)
            OutputStack.push(ItemToOutput)
        }


    }
    return OutputStack.pop(item)
}