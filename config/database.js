module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "aws-0-eu-central-1.pooler.supabase.com"), // Your Supabase host
      port: env.int("DATABASE_PORT", 6543),
      database: env("DATABASE_NAME", "postgres"), // Your Supabase database name
      user: env("DATABASE_USERNAME", "postgres.qbodathfpyqdmlzmnftb"), // Your Supabase username
      password: env("DATABASE_PASSWORD", "ra.w8@w$6#ST@.S"), // Your Supabase password
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // Use SSL if required
      },
    },
    debug: false,
  },
});
