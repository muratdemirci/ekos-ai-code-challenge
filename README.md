## About The Project

Hi **BuyTheBook** is one of the cool online book stores. In here we sell the books with the best prices to the best matching customers. Matching is the key driver of our business so pls implement another cool matching API for our clients (Either mobile or web).

Requirements:
**User Service:**

-   [x] There must be a user registration service.
-   [x] A user can register to the system and of course log in afterwards.
-   [x] JWT based authentication there of course that could be very positive.

**Book Stock Service:**

-   [x] There must be a stock tracking service where you can add, remove, update and delete books.

**Recommendation Service:**

-   [x] This service recommends some books to the user
-   [x] Book has two main criteria is the kind and the other one is the NSPF.
-   [x] NSPF is a calculation like “(number of sell) \* (pricing factor)”.
-   [x] Book matches the interest of the user, then this book(s) can be recommended.

Order Service(Bonus):

-   [ ] A customer can buy one or more books over an order service.
-   [ ] This service is optional so if you can create one your chances can be increased.

### Built With

-   [Express](https://expressjs.com/)
-   [Mongoose](https://mongoosejs.com/)

### Installation

_So I've made a seeder so you can test the case study very quickly, also there will be postman output 👌._

1. Clone the repo
    ```sh
    git clone https://github.com/muratdemirci/book-api-code-challenge.git
    ```
2. Change mongodb config in (api/config/db.config.js)
    ```js
     HOST: 'localhost',
     PORT: 27017,
     DB: 'follow_the_deusmur',
    ```
3. Install NPM packages
    ```sh
    npm install
    ```
4. Run npm seed (Which is generates first user and books)
    ```sh
    npm run seed
    ```
5. Install NPM packages
    ```sh
    npm start
    ```

-   [Don't forget to import _book api.postman_collection.json_](./book_api.postman_collection)
