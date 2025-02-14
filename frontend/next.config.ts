import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

const SentryWebpackPluginOptions = {
  silent: true,
};

export default withSentryConfig(nextConfig, SentryWebpackPluginOptions);
