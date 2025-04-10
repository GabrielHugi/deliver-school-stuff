# Calculadora IMC

Esse projeto é um projeto em React Native que calcula o IMC do usuário e da algumas informações importantes para ele

## Como instalar

```bash
git clone https://github.com/GabrielHugi/deliver-school-stuff.git
cd deliver-school-stuff
cd CalculadoraIMC
npm i
npm i -g expo-cli
npx expo start --tunnel
# tunnel flag is for being able to connect through different networks.
# Remove it if you don't plan on doing that
```

## Como eu fiz?

#### IdealWeight

Usei a formula provida para calcular os pesos ideais e usei o Math.round para aredondar o valor. 

#### DisplayIMCRecomendations

Usei as tags View (div) e Image (img) e um pouco de arte para fazer esse arquivo.

#### Classification

Usei if para mostrar a classificação do usuário baseado no IMC dele

#### Geral

Adicionei alguns componentes extras e usei css para deixar tudo bonito. Integrei os meus componentes adicionais a os componentes já existentes para fazer tudo funcionar junto.

#### Vídeo

No youtube: https://youtu.be/7ZAuBFIXMWE?si=9PnKdPRph_GPwD-Y
