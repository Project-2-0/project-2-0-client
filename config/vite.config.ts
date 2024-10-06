import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
    environment: 'jsdom',
		globals: true,
    setupFiles: './src/tests/setup.ts', 
		include: ['src/**/*.test.{js,ts,jsx,tsx}']
  }
});
