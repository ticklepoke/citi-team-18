# Citi Ez-Transfer by Team TrizzaPizza

Team TrizzaPizza's submission for the Citi Virtual Hackathon 2020.

## Introduction

Ez-Transfer is a web centric solution for money transfer that focuses on security and seamless user experience.

## Security

Ez-transfer applies the following techniques to ensure secure transactions and user identity protection:

-   Json Web Tokens to handle user validation.

-   2FA sms services to handle authentication.

-   Database sanitisation to prevent injection attacks.

-   XSS protection.

## User Experience

Ez-transfer applies the following techniques on the User Experience side to provide the optimal experience for end users:

-   Optimistic confirmation to give users live feedback of their transfer progress.

-   Password free authentication to make it easier to log in.

## Work Breakdown

### Chin Zhi Wei

-   Developed the python server, models and postgres database.

### Nigel Lee

-   Setup Twilio account for 2FA authentication purposes.

-   Built the login page with 2FA capabilities.

### Lester Tay

-   Built the transaction page
