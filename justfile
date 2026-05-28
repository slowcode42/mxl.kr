check:
    @bunx oxfmt
    @bunx oxlint
    @bunx tsc
up:
    @bun update --latest && bun add effect@beta drizzle-orm@beta drizzle-kit@beta

dev:
    @bun --bun vite dev
build:
    @bun --bun vite build
serve: build
    @bun .output/server/index.mjs