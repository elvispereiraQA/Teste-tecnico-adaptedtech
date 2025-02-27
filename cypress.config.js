const { defineConfig } = require("cypress");
const axios = require("axios");  // Para enviar dados via POST para o webhook do Discord

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 720,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports/mochawesome",
      overwrite: false,
      html: true,
      json: true,
      timestamp: "mmddyyyy_HHMMss",
      embeddedScreenshots: true, // Inclui screenshots no relatório
      inlineAssets: true, // Adiciona assets diretamente no HTML
    },
    video: true, // Gera vídeos dos testes
    screenshotOnRunFailure: true, // Tira screenshot em caso de erro
    setupNodeEvents(on, config) {
      // Enviar resultados para o Discord após a execução dos testes
      on('after:run', async (results) => {
        const discordWebhookUrl = "https://discord.com/api/webhooks/1344781209812729856/mfdsZGeq7MPdzrf5ewEqZSeEoPjuo2xYsEnl-UZBmsyUWdVbsNUuZ1uaso0qDfC4-Z_j";  // URL do Webhook do Discord

        if (!results.runs || results.runs.length === 0) {
          console.error('Nenhum resultado de teste encontrado.');
          return;
        }

        const totalDurationInSeconds = results.totalDuration / 1000;
        const totalTests = results.totalTests;
        const formatDuration = (duration) => duration >= 60 ? `${Math.floor(duration / 60)}m ${(duration % 60).toFixed(2)}s` : `${duration.toFixed(2)}s`;
        const formattedTotalDuration = formatDuration(totalDurationInSeconds);

        const testResults = results.runs.flatMap(run =>
          run.tests.map(test => ({
            testName: test.title,
            status: test.state,
            duration: formatDuration(test.duration / 1000)
          }))
        );

        const now = new Date();
        const formattedDate = `${now.toLocaleDateString()}, ${now.toLocaleTimeString()}`;

        const formatWithIconAndTime = (testName, status, duration) =>
          status === 'passed' ? `✅ ${testName} - ${duration}` : `❌ ${testName} - ${duration}`;

        const message = {
          content: `**Resultados - Teste de Regressão**\n**Data e Hora:** ${formattedDate}\n\n**Tempo total:** ${formattedTotalDuration} | **Total de casos:** ${totalTests}\n**Resultados Detalhados:**\n` +
          testResults.map(result => `${formatWithIconAndTime(result.testName, result.status, result.duration)}`).join("\n")
        };

        try {
          // Envia os resultados para o Discord via Webhook
          await axios.post(discordWebhookUrl, message);
          console.log('Resultados enviados com sucesso para o Discord.');
        } catch (error) {
          console.error('Erro ao enviar mensagem para o Discord:', error.response ? error.response.data : error.message);
        }
      });

      return config;
    },
  },
});
