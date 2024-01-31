prod-up:
	docker compose -f docker-compose.prod.yaml up -d --build

prod-down:
	docker compose -f docker-compose.prod.yaml down

dev-up:
	docker compose -f docker-compose.dev.yaml up --build

dev-down:
	docker compose -f docker-compose.dev.yaml down