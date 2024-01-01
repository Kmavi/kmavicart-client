# KmaviCart - Next.js E-commerce Frontend

## Overview

This repository contains the frontend codebase for KmaviCart, an e-commerce site
built with Next.js. The project aims to provide a seamless shopping experience
for users

## Features

- Responsive design for various devices
- Product catalog with filtering and sorting options
- Shopping cart functionality
- User authentication and account management
- Checkout and payment processing
- Order tracking and history

## Best Practices for Code

- Follow an established coding style guide []()
- Use meaningful variable and function names
- Write clear comments for complex logic or where necessary
- Modularise components for reusability

## Setup Instructions

### Development

1. Clone the repository

```bash
git clone https://github.com/kijuchihe/kmavicart-client.git
```

2. Install the dependencies

```bash
cd kmavicart-client
yarn
```

3. Setup environment variables

- Copy the `.env.example` file and rename it to `.env.local`
- Update necessary environment variables such as API endpoints, secrets etc.

4. Run the development server

```bash
yarn dev
```

### Production

#### Deployment to Vercel

For deploying to Vercel, connect the GitHub repository to Vercel and configure
the necessary settings. Vercel will automatically deploy changes pushed to the
main branch

#### Deployment to Other Platforms

Refer to the platform-specific documentation for deployment instructions.
Configure the profuction environment variables according

## Contributing

Contributions are very much welcome! Please follow the established contribution
guidelines and code of conduct when contributing to this project

## License

This project is licensed under the MIT License
