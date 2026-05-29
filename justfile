set dotenv-load

check:
    @bunx oxfmt
    @bunx oxlint
    @bunx tsc
up:
    @bun update --latest && bun add effect@beta drizzle-orm@beta drizzle-kit@beta
    @docker pull postgres:latest
    @docker pull rustfs/rustfs:latest
    @docker pull valkey/valkey:latest
    @docker compose down && docker compose up -d --wait
dev:
    @bun --bun vite dev
build:
    @bun --bun vite build
serve: build
    @bun .output/server/index.mjs
docker:
    @docker compose up -d --wait
    @docker run --rm --network mxl_default --entrypoint sh minio/mc:latest -c "\
        mc alias set local http://mxl-rustfs:9000 $RUSTFS_ACCESS_KEY $RUSTFS_SECRET_KEY && \
        mc mb --ignore-existing local/image && \
        mc mb --ignore-existing local/video && \
        mc anonymous set download local/image && \
        mc anonymous set download local/video && \
        mc ls local"
reset:
    @docker compose down -v
    @just docker
    @rm -rf drizzle
    @bun drizzle-kit generate
    @bun drizzle-kit push --force
studio:
    @bun drizzle-kit studio