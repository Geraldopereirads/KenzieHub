# KenzieHub

## 💡 Sobre o projeto

O KenzieHub é uma aplicação para cadastro, login e gerenciamento de tecnologias de usuários. Após o login, o usuário pode adicionar, editar e remover tecnologias do seu perfil.

Foram utilizadas boas práticas de código, componentização, gerenciamento de estado com Context API e consumo da API da KenzieHub.

## 🚀 Funcionalidades

- Cadastro de usuário com validações de nome, e-mail, senha e confirmação de senha
- Login com validação de campos obrigatórios
- Persistência de sessão com autologin
- Dashboard protegida e acessível apenas para usuários autenticados
- Listagem das tecnologias cadastradas
- Cadastro de novas tecnologias
- Edição e remoção de tecnologias existentes
- Logout com limpeza de dados locais

## 🛠️ Tecnologias utilizadas

- React
- React Router Dom
- React Hook Form
- Yup
- Axios
- Context API
- Styled-components

## 🧪 Validações e segurança

- Todas as requisições protegidas enviam o token via header `Authorization`
- O autologin verifica a validade do token armazenado no `localStorage`
- As rotas são protegidas usando `Outlet` do React Router

## 📌 Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/kenziehub.git


![login](https://user-images.githubusercontent.com/110185110/225340325-e3abe226-7c02-4ebb-9fbf-8c554ff14353.PNG)
![Cadastro](https://user-images.githubusercontent.com/110185110/225340349-aea16829-40fb-483a-b197-347e3ecd4b24.PNG)
![Homepage](https://user-images.githubusercontent.com/110185110/225340410-c555a49b-66de-4427-a6ca-f52c2dc291d9.PNG)
![HomePage modal](https://user-images.githubusercontent.com/110185110/225340419-85b173cc-a4c3-418b-9d51-a4513dd34ced.PNG)
![Tecnologias](https://user-images.githubusercontent.com/110185110/225340432-79de722f-c351-415f-8fa0-69253e7be341.PNG)
