# Cifra de César

## Índice

* [1. Will's Message](#1-wills-message)
* [2. Criptografia](#2-criptografia)
* [3. Interface do usuário](#3-interface-do-usuario)


***

## 1.Will's Message

WebApp destinada ao público que assite a série Stranger Things. Permite ao usuário fazer interação visual com elementos e acontecimentos da série. Foi inspirado em uma cena em que o personagem Will, preso em um mundo paralelo, envia uma mensagem para sua mãe através de luzes e um alfabato pintado na parede. Na aplicação, o usuário faz a ponte entre o mundo paralelo e o mundo real, ajudando o personagem a se comunicar com seus amigos de forma segura, contra os inimigos. O usuário digita a mensagem, escolhe uma chave numérica de deslocamento e a mensagem encriptada aparece na tela.


## 2. Criptografia 

Cifrar significa codificar. A [cifra de
César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos primeiros
tipos de criptografias conhecidas na história. O imperador romano Júlio César
utilizava essa cifra para enviar ordens secretas aos seus generais no campo de
batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunicação, mas a cifra de César
muitas vezes pode fazer parte de um sistema mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 3. Interface do usuário

Desenhada para dar ênfase aos elementos que rementem à série como as cores, fontes dos textos e imagem de fundo.
O usuário interage com a aplicação através de inputs e botões tranparentes para maior satisfação visual.

![layout](https://github.com/sabrinaaraujo-ds/SAP006-cipher/blob/main/Desktop%20-%201prototipo.png)

* Eleger um _offset_ indicando quantas posições de deslocamento de caracteres
  quer que a cifra utilize.
* Inserir uma mensagem (texto) para ser cifrada.
* Ver o resultado da mensagem cifrada.


### Parte Opcional: "Hacker edition"

* [x] Cifrar/decifrar minúsculas.
* [ ] Cifrar/decifrar _outros_ caractéres (espaços, pontuação, `ç`, `á`, ...).
* [ ] Permitir usar `offset` negativo.
