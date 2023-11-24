OBS 1: O Backend esta rodando no Render, na rota "https://api-sosit-3rwc.onrender.com", por conta disso pode ser que ele demore um pouco para responder na primera vez.

OBS 2: Nas telas, no canto superior direito, possui um botão para trocar o idioma, ele tem um bug que você precisa clicar duas vezes para ele funcionar, e ele mostra a o idioma atual ao contrario (Tela de login, cadastro estão trocando o idioma).

OBS 3: Nem todas as paginas estão funcionando, nas telas de empresa, tirando a tela de historio esta funcionando, e na tela de cliente, as telas de historico e agendar compromisso não estão funcionando.

## Pré-requisitos (Caso estaja rodando o Backend localmente)
Antes de iniciar, certifique-se de que o backend do projeto esteja instalado e em execução em sua máquina. Caso ainda não o tenha feito, siga as instruções disponíveis em: Backend do Projeto SOSIT.

## Configuração do Projeto Mobile

### 1. Clone do Projeto
Execute o seguinte comando para clonar o projeto mobile do Git:
git clone https://github.com/OTIGAS/Front.TS-SOSIT_ReactNative.git

### 2. Instalação de Dependências
Navegue até o diretório do projeto e instale as dependências utilizando o comando:
cd ./my-app/ && npm install

### 3. Configuração do IP (Caso estaja rodando o Backend localmente)
Dentro do arquivo ./my-app/src/api.ts na linha 1, configure o IP da sua conexão à internet. Certifique-se de que esteja apontando para o backend corretamente.

### 4. Execução do Projeto
Após a conclusão da instalação das dependências e configuração do IP, inicie o aplicativo com o seguinte comando:
npm run dev
