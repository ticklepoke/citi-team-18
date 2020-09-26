#!/bin/bash

docker-compose up -d --build
migrate -database "postgres://postgres:@localhost:5432/aat?sslmode=disable" -path pg_migrations/ up
uvicorn src.main:app --reload
