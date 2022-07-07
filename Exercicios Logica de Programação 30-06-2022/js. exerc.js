nome = "Vitorino"
limparQuarto=false
lavarLouca= true

respostadaMae = podeSair(lavarLouca, limparQuarto);
console.log(respostadaMae)

function podeSair(limppouLouca, limpouQuarto) {
  if(limpouLouca && limpouQuarto == true){
        return true
} else { return false }
}
