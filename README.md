# Nextjs Web Application

## Features

- User Registration and Authentication: Users can register for accounts and authenticate themselves to access the home page.
- users can add, view, edit, and delete products.

## Getting Started

### Prerequisites

- node 20.7.0
- npm 10.1.0
- MongoDB

### Installation

1. Clone the repository: `git clone https://github.com/AshishSatyal/assignment`
2. Navigate to the project directory: `cd assignment`
3. Install the node package(node modules) `npm i`
4. Configure database.
5. Run the server `npm run dev`

## Setting up Environment

You can use the package.json to install the dependencies.

dependencies used:
{
"dependencies": {
"axios": "^1.7.3",
"bcryptjs": "^2.4.3",
"js-cookie": "^3.0.5",
"jsonwebtoken": "^9.0.2",
"jwt-decode": "^4.0.0",
"mongoose": "^8.5.2"
}
}

## Usage

After setting up the project, you can access the website by navigating to `localhost:3000` in your web browser.

    It will automatically redirect to login if no token found.

- **User Registration**: Navigate to `/register` to register a new user.
- **User Login**: Navigate to `/login` to login.

- **Add Product**: Navigate to '/addproduct' to add new product(it will not reflect on website,It will simulate a POST request and will return the new created product with a new id ).

- **Update Product**: Navigate to '/editproduct/${id}' to edit product (Updating a product will not update it into the server.
  It will simulate a PUT/PATCH request and will return updated product with modified data).

- **Delete Product**: Deleting a product will not delete it into the server.
  It will simulate a DELETE request and will return deleted product with isDeleted & deletedOn keys

- **Logout**: Navigate to `/logout/` to terminate the session.
