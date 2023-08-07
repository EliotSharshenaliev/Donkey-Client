# Donkey.py: Bot Management System Frontend

Donkey.py is a frontend application designed to manage bots and their interactions with a central server. The system utilizes websockets to establish real-time communication between the frontend and the server, enabling efficient and responsive bot management.

## Key Features

- **Bot Management:** Donkey.py provides a user-friendly interface to manage and monitor bots connected to the system. Administrators can view bot details, statuses, and manage bot-specific tasks.

- **Real-time Updates:** The application leverages websockets to enable real-time updates between the frontend and the server. This ensures that bot status changes, data updates, and notifications are instantly reflected on the user interface.

- **User Authentication:** User authentication is integrated into the system, allowing secure access to the bot management functionalities. Administrators can log in and access the application with appropriate privileges.

## Technologies Used

- **React:** The frontend of Donkey.py is built using React, a popular JavaScript library for building user interfaces. React's component-based architecture enables modularity and reusability in the application's design.

- **Websockets:** The system employs websockets to establish a bidirectional communication channel between the frontend and the server. This ensures efficient and synchronized data exchange for real-time updates.

- **Ant Design:** Ant Design is used for UI components and styling, providing a cohesive and visually appealing user interface. It offers a set of ready-to-use components that enhance the user experience.

## Getting Started

To get started with Donkey.py, follow these steps:

```bash
git clone 
cd admin-panel-donkey

# Install all dependency of project
npm i

# Set Your server details has started on 
echo "REACT_APP_SOCKET_URL=ws://127.0.0.1:8000" > .env

# Replace to your server started : "proxy": "http://127.0.0.1:8000/" in package json
nano package.json 
```

## Contributing

Contributions to Donkey.py are welcome! If you'd like to contribute to the project, please follow the guidelines outlined in the "Contributing" section of the repository. Pull requests for bug fixes, new features, and improvements are encouraged.

## Project Status

Donkey.py is actively developed and maintained by a community of contributors. Regular updates and improvements ensure that the frontend remains efficient, reliable, and in sync with the server's capabilities.

## License

This project is licensed under the [MIT License](LICENSE).

