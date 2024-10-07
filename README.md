# TrackMate - Real-Time Location Tracking

TrackMate is a real-time location tracking application that displays users' positions on an interactive map using Leaflet and Socket.IO. It allows users to share their location in real-time, enabling a seamless tracking experience among connected users.

## Getting Started

### Prerequisites

- Ensure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository to your local machine and navigate into the project directory.

2. Install the necessary dependencies:
    ```bash
    npm install
    ```

3. Run the application using nodemon:
    ```bash
    npx nodemon app.js
    ```

4. Open your browser and go to `http://localhost:3000` to see the application in action.

## Additional Features to Implement

- **Location History**: Store and display historical location data.
- **Geofencing**: Notify users when they enter or exit specific areas.
- **Location Sharing Toggle**: Enable users to start/stop sharing their location.
- **Real-Time Distance Calculation**: Show the distance between users on the map.
- **User Connection Status**: Display a list of connected users and their status.
