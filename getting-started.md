---
outline: deep
---

# Getting Started

This guide will help you set up and run the Sistem Monev API locally for development, and understand how to interact with the API endpoints.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 22 or higher)
- **npm** (comes with Node.js)
- **PostgreSQL** (version 16 or higher, you can also use Supabase)
- **Git** (for cloning the repository)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Danne56/sistem-monev-api.git
cd sistem-monev-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the API root directory based on the provided example:

```bash
cp .env.example .env
```

Configure the following environment variables in your `.env` file:

```bash
# Database Configuration
DB_USER=your_database_user
DB_HOST=your_database_host
DB_NAME=your_database_name
DB_PASSWORD=your_database_password
DB_PORT=your_database_port

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=24h

# Email Configuration (for sending verification emails)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Server Configuration
PORT=5000
NODE_ENV=development

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173
```

### 4. Database Setup

1. Create a PostgreSQL database or you can use Supabase
2. Change database configuration in .env file

### 5. Google Cloud Storage Setup

To enable file uploads and storage, you need to configure Google Cloud Storage. This involves creating a service account and providing its credentials to the application.

1. **Go to Google Cloud Console**:
   Navigate to the [Google Cloud Console](https://console.cloud.google.com/).

2. **Select or Create a Project**:

   - If you have an existing project, select it from the project dropdown at the top of the page.
   - If not, click **Create Project**, give it a name, and follow the setup instructions.

3. **Enable the Cloud Storage API**:

   - In the navigation menu (`☰`), go to **APIs & Services > Library**.
   - Search for "Cloud Storage" and select it.
   - Click **Enable** to activate the API for your project.

4. **Create a Service Account**:

   - In the navigation menu, go to **IAM & Admin > Service Accounts**.
   - Click **+ CREATE SERVICE ACCOUNT**.
   - **Service account details**:
     - **Name**: Give your service account a descriptive name (e.g., `sistem-monev-storage`).
     - **Service account ID**: An ID will be automatically generated.
     - **Description**: Add a brief description of its purpose.
   - Click **CREATE AND CONTINUE**.

5. **Grant Permissions**:

   - In the **Grant this service account access to project** step, you need to add a role.
   - Click **Select a role** and search for **Storage Admin**.
   - Select the `Storage Admin` role. This grants the service account full control over objects in Google Cloud Storage.
   - Click **CONTINUE**.

6. **Create a JSON Key**:

   - In the final step, **Grant users access to this service account**, you can skip adding users.
   - Click **DONE**. You will be returned to the service accounts list.
   - Find the service account you just created and click on the three dots (`⋮`) under **Actions**, then select **Manage keys**.
   - Click **ADD KEY > Create new key**.
   - Choose **JSON** as the key type and click **CREATE**.
   - A JSON file will be automatically downloaded to your computer. This is your service account key.

7. **Place the Key File**:
   - Rename the downloaded JSON file to `service-account.json`.
   - Move this file to the root directory of the **API** (`/api`).

:::danger SECURITY WARNING
The `service-account.json` file contains sensitive credentials. **DO NOT** commit this file to version control (e.g., Git). Ensure that `service-account.json` is listed in your `.gitignore` file to prevent accidental exposure.
:::

## Running the Application

### Development Mode

Start the server in development mode with auto-reload:

```bash
npm run dev
```

The server will start at `http://localhost:5000`

### Production Mode

Start the server in production mode:

```bash
npm start
```

## Quick Start Examples

### 1. Register a New User

```bash
curl -X POST http://localhost:5000/authentication/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "johndoe",
    "fullName": "John Doe",
    "email": "john@example.com",
    "password": "securepassword123",
    "confirmPassword": "securepassword123",
    "role": "pengelola"
  }'
```

### 2. Login

```bash
curl -X POST http://localhost:5000/authentication/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "johndoe",
    "password": "securepassword123"
  }'
```

### 3. Access Protected Endpoint

```bash
curl -X GET http://localhost:5000/api/users/profile \
  -H "Authorization: Bearer your-jwt-token-here"
```

## Authentication Flow

1. **Register**: Create a new user account
2. **Admin Verification**: Admin must verify new accounts
3. **Login**: Get JWT token for authenticated requests
4. **Access**: Use token in Authorization header for protected endpoints

## API Response Format

All API responses follow a consistent format:

### Success Response

```json
{
  "status": "success",
  "message": "Operation completed successfully",
  "data": {
    // Response data here
  }
}
```

### Error Response

```json
{
  "status": "error",
  "message": "Error description",
  "errors": [
    // Detailed error information
  ]
}
```

## User Roles

The system supports three main user roles:

- **`admin`**: Full system access, user management
- **`dinas`**: Tourism department officials, monitoring access
- **`pengelola`**: Village managers, limited to their village data

## Next Steps

1. Explore the [API Endpoints](/endpoints/auth-register) documentation
2. Check out the [Database Schemas](/schemas/users) reference
3. Review the example requests and responses
4. Set up your client application to consume the API
