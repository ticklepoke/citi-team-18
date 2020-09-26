CREATE TABLE user_accounts (
    userid int primary key not null,
    username varchar(255),
    hashed_password varchar(255)
);

CREATE TABLE user_tokens (
    username varchar(255) primary key,
    token varchar(255)
)
