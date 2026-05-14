let senha = "45645678"

if (senha.length < 8) {
    console.log("Senha invalida, no minimo 8 caracteres.")
}else if (senha.includes("123")) {
    console.log("Senha inválida, a senha não deve ter os caracteres '123'.")
}else {
    console.log("Senha válida, a senha atende aos requisitos.")
}
