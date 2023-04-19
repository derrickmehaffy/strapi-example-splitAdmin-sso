module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
  url: env("BACKEND_URL", "http://localhost:1337"),
  proxy: env.bool("ENABLE_PROXY", false),
  autoOpen: env.bool("AUTO_OPEN", false),
});
