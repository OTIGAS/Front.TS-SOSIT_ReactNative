## Pré-requisitos
Antes de iniciar, certifique-se de que o backend do projeto esteja instalado e em execução em sua máquina. Caso ainda não o tenha feito, siga as instruções disponíveis em: Backend do Projeto SOSIT.

## Configuração do Projeto Mobile

### 1. Clone do Projeto
Execute o seguinte comando para clonar o projeto mobile do Git:
git clone https://github.com/OTIGAS/Front.TS-SOSIT_ReactNative.git

### 2. Instalação de Dependências
Navegue até o diretório do projeto e instale as dependências utilizando o comando:
cd ./my-app/ && npm install

### 3. Configuração do IP
Dentro do arquivo ./my-app/src/api.ts na linha 1, configure o IP da sua conexão à internet. Certifique-se de que esteja apontando para o backend corretamente.

### 4. Execução do Projeto
Após a conclusão da instalação das dependências e configuração do IP, inicie o aplicativo com o seguinte comando:
npm run dev