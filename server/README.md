## Developing

To start developing, go into the service directory and initialize the dependencies

```
pipenv shell
pipenv install
```

To test your API locally, you can run following command

```
docker-compose up -d
uvicorn src.main:app --reload
```

To run tests, you can run the following command:

```
pytest tests
```

To create the tables for the database, you can run the following command:
```
migrate -database "postgres://postgres:@localhost:5432/aat?sslmode=disable" -path pg_migrations/ up
