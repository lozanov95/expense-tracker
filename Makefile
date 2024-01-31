prod-up:
	docker compose -f docker-compose.prod.yaml up -d --build

prod-down:
	docker compose -f docker-compose.prod.yaml down