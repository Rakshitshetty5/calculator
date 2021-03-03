var input = document.getElementById('inp')

function clearInput(){
    input.value = ""
}

function select(el){
    input.value+=el
    
}

function remove(){
    input.value = input.value.slice(0, -1)

}

function solve(){
    input.value = eval(input.value)
}